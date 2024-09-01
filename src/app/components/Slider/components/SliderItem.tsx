import { SliderItemProps } from '@src/app/components/Slider/components/types'
import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Image } from '@/components/ui/image'
import { Heading } from '@/components/ui/heading'
import { Center } from '@/components/ui/center'
import { useWindowDimensions } from 'react-native'

export function SliderItem({ title, description, image }:SliderItemProps){
  const { width, height } = useWindowDimensions()
  return (
    <Box
      style={{
        width: width - 32,
        height: height * 0.6
      }}
    >
      <Box className={'w-full h-96'}>
        <Image
          className={'w-full h-full'}
          resizeMode={'contain'}
          source={image}
          alt={title}
        />
      </Box>
      <Center className={'mt-2'}>
        <Heading>{title}</Heading>
        <Text className={'text-center'}>{description}</Text>
      </Center>
    </Box>
  )
}
