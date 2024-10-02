import { Badge, BadgeText } from '@/components/ui/badge'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { ArrowLeftIcon, Icon } from '@/components/ui/icon'
import { Image } from '@/components/ui/image'
import { LinearGradient } from '@/components/ui/linear-gradient'
import { Pressable } from '@/components/ui/pressable'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { SafeAreaView } from '@/src/app/components/customs/SafeAreaView'
import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

export function CaregiverSelector() {

  const CaregiverImagesCarrousel = () => {

    const imgs = [
      'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/06/sabrina-novo-album.png',
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/Sabrina_Carpenter_Vogue_2020_%2808%29.png',
      'https://static.wikia.nocookie.net/netflix/images/b/b7/Sabrina-Carpenter.jpg/revision/latest/thumbnail/width/360/height/450?cb=20210124094224'
    ]
    const badges = [
      'Comunicativa',
      'Atenciosa',
      'Motivadora',
      'Ama Pets',
      'Cantora',
    ]
    const [currentUriIndex, setCurrentUriIndex] = useState(0)
    const opacity = useSharedValue(1)

    const setNextIndex = () => {
      setCurrentUriIndex((prevIndex) => (prevIndex + 1) % imgs.length)
    }

    const nextUri = () => {
      opacity.value = withTiming(0, { duration: 500, easing: Easing.linear }, () => {
        runOnJS(setNextIndex)()
        opacity.value = withTiming(1, { duration: 500, easing: Easing.linear })
      })
    }

    useEffect(() => {
      const interval = setInterval(nextUri, 4000)
      return () => clearInterval(interval)
    }, [])

    const animatedStyle = useAnimatedStyle(() => {
      return {
        opacity: opacity.value,
      }
    })



    return (
      <Box className='flex-1 rounded-3xl'>

        <Animated.View style={[
          {
            position: 'absolute',
            zIndex: 1,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
          },
          animatedStyle
        ]}>
          <Image
            source={{
              uri: imgs[currentUriIndex]
            }}
            progressiveRenderingEnabled
            className='flex-1 w-full h-full rounded-3xl absolute -z-10'
            alt='Caregiver'
          />
        </Animated.View>
        <LinearGradient
          className="flex-1 rounded-3xl absolute z-10 top-0 bottom-0 right-0 left-0"
          style={{
            position: 'absolute',
            zIndex: 2,
          }}
          colors={['#1A1A1ACC', '#1A1A1A33','#FFFFFF00']}
          start={[0, 1]}
          end={[0, 0]}
        >
          <Box className='absolute z-10 bottom-4 right-0 left-0 w-max mx-3'>
            <Text
              className='text-left text-2xl font-roboto font-bold  text-white'
            >
              Sabrina Carpenter
            </Text>
            <HStack className='mt-4 flex flex-wrap gap-2'>
              {badges.map((txt, index) => (
                <Badge key={index} size='sm' variant='outline' className='rounded-full bg-[#FFFFFF33] border border-white'>
                  <BadgeText className='text-white'>{txt}</BadgeText>
                </Badge>
              ))}
            </HStack>
            <HStack className='mt-2 mx-2 justify-between items-center'>
              <Text className='text-white'>Campinas-SP</Text>
              <HStack className='items-center'>
                {imgs.map((uri, index) => (
                  <Box
                    key={index}
                    className={'w-6 h-2 rounded-full bg-white mx-1'}
                    style={{
                      opacity: currentUriIndex === index ? 1 : 0.5
                    }}
                  />
                ))
                }
              </HStack>
            </HStack>
          </Box>
        </LinearGradient>
      </Box>

    )
  }
  const { goBack } = useNavigation()

  return (
    <SafeAreaView>
      <VStack
        className="pt-4 pb-0 md:px-10 md:pt-6 md:pb-0 h-full w-full max-w-[1500px] self-center  mb-20 md:mb-2 max-h-screen"
        space="xl"
      >
        <Text className='w-full text-center'>
          AMPARO
        </Text>
        <Pressable
          onPress={goBack}
        >
          <Icon
            as={ArrowLeftIcon}
            className="md:hidden stroke-background-800"
            size="xl"
          />
        </Pressable>
        <Heading size="2xl" className="font-roboto">
          Selecione um cuidador
        </Heading>
        <Text>
          Abaixo você poderá escolher um dos nossos cuidadores ou cuidadoras que você deseje para lhe ajudar.
        </Text>
        <CaregiverImagesCarrousel/>
        <HStack
          className="w-full justify-around mb-10"
        >
          <Button
            variant='outline'
            size='lg'
          >
            <ButtonText>
            Próximo
            </ButtonText>
          </Button>
          <Button
            size='lg'
            variant='solid'
            className='bg-primary-900'
          >
            <ButtonText>
            Solicitar
            </ButtonText>
          </Button>
        </HStack>
      </VStack>
    </SafeAreaView>
  )
}
