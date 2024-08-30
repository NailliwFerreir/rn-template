export type SliderItemProps = {
  id: string;
  title: string,
  description: string,
  image: string
}

export type SliderProps = {
  data?: SliderItemProps[]
  useFakeData: boolean | undefined
}
