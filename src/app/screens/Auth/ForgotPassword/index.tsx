import { Toast, ToastTitle, useToast } from '@/components/ui/toast'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control'
import { Input, InputField } from '@/components/ui/input'
import { ArrowLeftIcon, Icon } from '@/components/ui/icon'
import { Button, ButtonText } from '@/components/ui/button'
import { Keyboard } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle } from 'lucide-react-native'
import { Pressable } from '@/components/ui/pressable'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'
import { useNavigation } from '@react-navigation/native'

const forgotPasswordSchema = z.object({
  email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
})

type forgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordScreen = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<forgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
  })
  const toast = useToast()

  const onSubmit = (_data: forgotPasswordSchemaType) => {
    console.log(_data)
    toast.show({
      placement: 'bottom right',
      render: ({ id }) => {
        return (
          <Toast nativeID={id} variant="solid" action="success">
            <ToastTitle>Link Sent Successfully</ToastTitle>
          </Toast>
        )
      },
    })
    reset()
  }

  const handleKeyPress = () => {
    Keyboard.dismiss()
    handleSubmit(onSubmit)()
  }

  const { goBack } = useNavigation()
  return (
    <VStack className="w-full" space="md">
      <VStack className="md:items-center" space="md">
        <Pressable
          onPress={goBack}
        >
          <Icon
            as={ArrowLeftIcon}
            className="md:hidden stroke-background-800"
            size="xl"
          />
        </Pressable>
        <VStack>
          <Heading className="md:text-center" size="3xl">
            Esqueceu a senha?
          </Heading>
          <Text className="text-sm">
              Insira o email associado à sua conta.
          </Text>
        </VStack>
      </VStack>

      <VStack space="xl" className="w-full ">
        <FormControl isInvalid={!!errors?.email} className="w-full">
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Controller
            defaultValue=""
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input>
                <InputField
                  placeholder="Digite seu email"
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  onSubmitEditing={handleKeyPress}
                  returnKeyType="done"
                />
              </Input>
            )}
          />
          <FormControlError>
            <FormControlErrorIcon as={AlertTriangle} />
            <FormControlErrorText>
              {errors?.email?.message}
            </FormControlErrorText>
          </FormControlError>
        </FormControl>
        <Button className="w-full" onPress={handleSubmit(onSubmit)}>
          <ButtonText className="font-medium">Recuperar conta</ButtonText>
        </Button>
      </VStack>
    </VStack>
  )
}

export const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <ForgotPasswordScreen />
    </SafeAreaView>
  )
}
