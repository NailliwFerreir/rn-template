import { Center } from '@/components/ui/center'
import { VStack } from '@/components/ui/vstack'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'
import { ToggleButtonTheme } from '@src/app/theme/ToggleButtonTheme'
import { Button, ButtonText } from '@/components/ui/button'
import ListYourPlaceModal from '@src/app/screens/Examples/Test/components/ListYourPlaceModal'
import { useState } from 'react'

export function Test() {
  const [modalIsVisible, setModalIsVisible] = useState(false)

  return (
    <SafeAreaView>
      <Center>
        <VStack space={'md'} className='items-center'>
          <ToggleButtonTheme />
        </VStack>
      </Center>
      <Button
        className={'mt-8'}
        onPress={()=> {
          setModalIsVisible(true)
        }}>
        <ButtonText>
            Abrir modal de exemplo
        </ButtonText>
      </Button>
      {modalIsVisible && <ListYourPlaceModal modalVisible={modalIsVisible} setModalVisible={setModalIsVisible}/>}
    </SafeAreaView>
  )
}
