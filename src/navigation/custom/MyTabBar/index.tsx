import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import { View } from '@/components/ui/view'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function MyTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { left, right, bottom } = useSafeAreaInsets()
  return (
    <View style={{ flexDirection: 'row',
      left: left,
      right: right,
      paddingBottom: bottom + 4,
    }} className="bg-background-0 border-t border-background-200 items-center justify-center pt-2">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
                    options.tabBarLabel !== undefined
                      ? options.tabBarLabel as string
                      : options.title !== undefined
                        ? options.title
                        : route.name as string

        const isFocused = state.index === index

        const icon = options.tabBarIcon

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <Button
            variant="link"
            size='md'
            key={route.key}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            className='flex-col items-center justify-center'
          >
            <ButtonIcon as={icon} size={'md'} className={`${isFocused ? 'text-background-900' : 'text-background-400'}`} />
            <ButtonText className={`${isFocused ? 'text-background-900' : 'text-background-400'} text-center`}
            >
              {label}
            </ButtonText>
          </Button>
        )
      })}
    </View>
  )
}
