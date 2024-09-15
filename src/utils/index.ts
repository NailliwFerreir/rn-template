import { Dimensions } from 'react-native'

export const getKeyboardVerticalOffset = (): number => {
  const { height } = Dimensions.get('window')
  return height < 700 ? 80 : 120
}
