import { Box } from '@/components/ui/box'
import { SliderItemProps } from '@src/app/components/Slider/components/types'
import { HStack } from '@/components/ui/hstack'
import { View } from '@/components/ui/view'

export function Pagination({ data, index: idx }: { data: SliderItemProps[], index: number }) {
  return (
    <Box className={'w-full justify-center items-center absolute bottom-1/4'}>
      <HStack space={'sm'}>
        {data.map((_, index)=> {
          return(<View key={index} className={`w-${idx===index?'6':'3'} h-3 bg-primary-900${idx===index?'':'/65'} rounded-full`}/>)
        })}
      </HStack>
    </Box>
  )
}
