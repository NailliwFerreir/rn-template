import { Box } from '@/components/ui/box'
import { HStack } from '@/components/ui/hstack'
import { SearchIcon } from '@/components/ui/icon'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { ScrollView } from '@/components/ui/scroll-view'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Image } from '@/components/ui/image'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'

interface BlogData {
    bannerUri: string;
    title: string;
    description: string;
    publishedDate: string;
}

const WORLD_DATA: BlogData[] = Array.from({ length: 2 },() => ({
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  bannerUri: require('./assets/image.png'),
  title: 'The Power of Positive Thinking',
  description:
      'Discover how the power of positive thinking can transform your life, boost your confidence, and help you overcome challenges. Explore practical tips and techniques to cultivate a positive mindset for greater happiness and success.',
  publishedDate: 'May 15, 2023'
}))

const MainContent = () => {
  return (
    <VStack
      className="p-4 pb-0 md:px-10 md:pt-6 md:pb-0 h-full w-full max-w-[1500px] self-center  mb-20 md:mb-2"
      space="2xl"
    >
      <Input className="text-center md:hidden">
        <InputField placeholder="Search" />
        <InputSlot className="pr-3">
          <InputIcon as={SearchIcon} />
        </InputSlot>
      </Input>
      <Heading size="2xl" className="font-roboto">
        {'What\'s new?'}
      </Heading>
      <HStack space="2xl" className="h-full w-full flex-1">
        <ScrollView
          className="max-w-[900px] flex-1 md:mb-2"
          contentContainerStyle={{
            paddingBottom: 140,
          }}
          showsVerticalScrollIndicator={false}
        >
          <VStack className="w-full" space="2xl">
            {WORLD_DATA.map((item, index) => {
              return (
                <VStack
                  className="rounded-xl border border-background-400 p-5"
                  key={index}
                >
                  <Box className="w-full h-64 rounded">
                    <Image
                      className='w-full h-full object-cover'
                      source={item.bannerUri}
                      alt={item.title}
                    />
                  </Box>
                  <VStack className="mt-4" space="md">
                    <Text className="text-sm">{item.publishedDate}</Text>
                    <Heading size="md">{item.title}</Heading>
                    <Text className="line-clamp-2">{item.description}</Text>
                  </VStack>
                </VStack>
              )
            })}
          </VStack>
        </ScrollView>
      </HStack>
    </VStack>
  )
}

export const Feed = () => {
  return (
    <SafeAreaView >
      <MainContent />
    </SafeAreaView>
  )
}
