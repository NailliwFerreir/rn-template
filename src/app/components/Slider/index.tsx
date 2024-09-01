import { Animated, FlatList, NativeScrollEvent, NativeSyntheticEvent, ViewToken } from 'react-native'
import { SliderItem } from '@src/app/components/Slider/components/SliderItem'
import { SliderItemProps, SliderProps } from '@src/app/components/Slider/components/types'
import { fakeDataSlider } from '@src/app/components/Slider/components/data'
import { Center } from '@/components/ui/center'
import { Pagination } from '@src/app/components/Slider/components/Pagination'
import { useRef, useState } from 'react'

export function Slider({ data ,useFakeData = false }: SliderProps) {
  const renderSliderItem = ({ item }: { item: SliderItemProps }) => (
    <SliderItem {...item} />
  )
  const [index, setIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event)
  }

  const handleOnViewableItemsChanged = useRef(({ viewableItems } : { viewableItems: ViewToken<SliderItemProps>[]}) => {
    setIndex(viewableItems[0].index??0)
  }).current

  const viabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current

  return (
    <Center>
      <FlatList
        data={useFakeData ? fakeDataSlider : data??[]}
        renderItem={renderSliderItem}
        horizontal={true}
        snapToAlignment={'center'}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={'fast'}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viabilityConfig}
        initialNumToRender={2}
        bounces={false}
        scrollEventThrottle={16}
      />
      <Pagination
        data={useFakeData ? fakeDataSlider : data??[]}
        index={index}
      />
    </Center>
  )
}
