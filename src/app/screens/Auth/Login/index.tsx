import { Button, ButtonText } from '@/components/ui/button'
import { Divider } from '@/components/ui/divider'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeOffIcon,
  Icon
} from '@/components/ui/icon'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Pressable } from '@/components/ui/pressable'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'
import { AlertTriangle } from 'lucide-react-native'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { z } from 'zod'

export function Login(){
  const loginSchema = z.object({
    email: z.string().min(1, 'Email é obrigatório').email('Email inválido'),
    password: z.string().min(1, 'Senha é obrigatória'),
    rememberme: z.boolean().optional(),
  })
    type LoginSchemaType = z.infer<typeof loginSchema>;
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginSchemaType>({
      resolver: zodResolver(loginSchema),
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [validated, _setValidated] = useState({
      emailValid: true,
      passwordValid: true,
    })

    const onSubmit = (data: LoginSchemaType) => {
      console.log(data)
    }
    const [showPassword, setShowPassword] = useState(false)

    const handleState = () => {
      setShowPassword((showState) => {
        return !showState
      })
    }
    const handleKeyPress = () => {
      Keyboard.dismiss()
      handleSubmit(onSubmit)()
    }

    const { goBack } = useNavigation()

    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, width: '100%' }}
        showsVerticalScrollIndicator={false}

      >
        <SafeAreaView>
          <VStack className="w-full max-w-sm mx-auto" space="md">
            <Text className='w-full text-center'>
          AMPARO
            </Text>
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
              Acesse sua conta
                </Heading>
                <Text>Insira sua conta para usar nosso app!</Text>
              </VStack>
            </VStack>
            <VStack className="w-full">
              <VStack space="xl" className="w-full">
                <FormControl isInvalid={!!errors.email}>
                  <FormControlLabel>
                    <FormControlLabelText>Email</FormControlLabelText>
                  </FormControlLabel>
                  <Controller
                    name="email"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input>
                        <InputField
                          className="text-sm"
                          placeholder="Digite seu email"
                          type="text"
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
                    <FormControlErrorIcon size="md" as={AlertTriangle} />
                    <FormControlErrorText>
                      {errors?.email?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.password}>
                  <FormControlLabel>
                    <FormControlLabelText>Senha</FormControlLabelText>
                  </FormControlLabel>
                  <Controller
                    defaultValue=""
                    name="password"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input>
                        <InputField
                          className="text-sm"
                          placeholder="Digite sua senha"
                          value={value}
                          onChangeText={onChange}
                          onBlur={onBlur}
                          onSubmitEditing={handleKeyPress}
                          returnKeyType="done"
                          type={showPassword ? 'text' : 'password'}
                        />
                        <InputSlot onPress={handleState} className="pr-3">
                          <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                        </InputSlot>
                      </Input>
                    )}
                  />
                  <FormControlError>
                    <FormControlErrorIcon size="sm" as={AlertTriangle} />
                    <FormControlErrorText>
                      {errors?.password?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>



              </VStack>

              <HStack className='justify-end my-4'>
                <Button variant='link'>
                  <ButtonText>Esqueci minha senha</ButtonText>
                </Button>
              </HStack>

              <VStack className="my-2" space="lg">
                <Button className="w-full bg-background-950 rounded-lg h-12" onPress={handleSubmit(onSubmit)}>
                  <ButtonText className="font-medium">Entrar</ButtonText>
                </Button>

                <HStack className="self-center items-center" space={'sm'}>
                  <Divider className="w-1/5" />
                  <Text size="sm" className='uppercase'>Não possui uma conta?</Text>
                  <Divider className="w-1/5" />
                </HStack>

                <Button className="w-full rounded-lg h-12" action={'default'}>
                  <ButtonText className="font-medium">Cadastre-se</ButtonText>
                </Button>
              </VStack>
            </VStack>

          </VStack>
        </SafeAreaView>
      </KeyboardAwareScrollView>
    )
}
