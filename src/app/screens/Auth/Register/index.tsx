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

const signUpSchema = z.object({
  email: z.string().min(1, 'Email é obrigatório').email(),
  firstName: z.string().min(1, 'Nome é obrigatório'),
  lastName: z.string().min(1, 'Sobrenome é obrigatório'),
  document: z.string().min(1, 'Documento é obrigatório'),
  birthDate: z.string().min(1, 'Data de nascimento é obrigatória'),
  password: z
    .string()
    .min(6, 'Deve ter pelo menos 8 caracteres')
    .regex(new RegExp('.*[A-Z].*'), 'Uma letra maiúscula')
    .regex(new RegExp('.*[a-z].*'), 'Uma letra minúscula')
    .regex(new RegExp('.*\\d.*'), 'Um número')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'Um caractere especial'
    ),
  confirmpassword: z
    .string()
    .min(6, 'Deve ter pelo menos 8 caracteres')
    .regex(new RegExp('.*[A-Z].*'), 'Uma letra maiúscula')
    .regex(new RegExp('.*[a-z].*'), 'Uma letra minúscula')
    .regex(new RegExp('.*\\d.*'), 'Um número')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'Um caractere especial'
    ),
})

type SignUpSchemaType = z.infer<typeof signUpSchema>;

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(signUpSchema),
  })

  //  const toast = useToast()

  const onSubmit = (data: SignUpSchemaType) => {
    console.log(data)
  }
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleState = () => {
    setShowPassword((showState) => {
      return !showState
    })
  }
  const handleConfirmPwState = () => {
    setShowConfirmPassword((showState) => {
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
              Cadastra-se
              </Heading>
              <Text>Crie sua conta para usar nosso app!</Text>
            </VStack>
          </VStack>
          <VStack className="w-full">
            <VStack space="xl" className="w-full">
              <HStack className='w-full' space='sm'>
                <FormControl isInvalid={!!errors.firstName} className='flex-1'>
                  <FormControlLabel>
                    <FormControlLabelText>Nome</FormControlLabelText>
                  </FormControlLabel>
                  <Controller
                    name="firstName"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input>
                        <InputField
                          className="text-sm"
                          placeholder="Insira seu nome"
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
                    <FormControlErrorIcon size="sm" as={AlertTriangle} />
                    <FormControlErrorText>
                      {errors?.firstName?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.lastName} className='flex-1'>
                  <FormControlLabel>
                    <FormControlLabelText>Sobrenome</FormControlLabelText>
                  </FormControlLabel>
                  <Controller
                    name="lastName"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input>
                        <InputField
                          className="text-sm"
                          placeholder="Insira seu sobrenome"
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
                    <FormControlErrorIcon size="sm" as={AlertTriangle} />
                    <FormControlErrorText>
                      {errors?.lastName?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              </HStack>
              <HStack className='w-full' space='sm'>
                <FormControl isInvalid={!!errors.document} className='flex-1'>
                  <FormControlLabel>
                    <FormControlLabelText>CPF</FormControlLabelText>
                  </FormControlLabel>
                  <Controller
                    name="document"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input>
                        <InputField
                          className="text-sm"
                          placeholder="Insira seu CPF"
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
                    <FormControlErrorIcon size="sm" as={AlertTriangle} />
                    <FormControlErrorText>
                      {errors?.document?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
                <FormControl isInvalid={!!errors.birthDate} className='flex-1'>
                  <FormControlLabel>
                    <FormControlLabelText>Data de nascimento</FormControlLabelText>
                  </FormControlLabel>
                  <Controller
                    name="birthDate"
                    defaultValue=""
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input>
                        <InputField
                          className="text-sm"
                          placeholder="Insira sua data de nascimento"
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
                    <FormControlErrorIcon size="sm" as={AlertTriangle} />
                    <FormControlErrorText>
                      {errors?.birthDate?.message}
                    </FormControlErrorText>
                  </FormControlError>
                </FormControl>
              </HStack>
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
                        placeholder="Insira seu email"
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
                  <FormControlLabelText>Crie uma senha</FormControlLabelText>
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
              <FormControl isInvalid={!!errors.confirmpassword}>
                <FormControlLabel>
                  <FormControlLabelText>Confirme a senha</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  defaultValue=""
                  name="confirmpassword"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        placeholder="Confirme sua senha"
                        className="text-sm"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                        type={showConfirmPassword ? 'text' : 'password'}
                      />

                      <InputSlot onPress={handleConfirmPwState} className="pr-3">
                        <InputIcon
                          as={showConfirmPassword ? EyeIcon : EyeOffIcon}
                        />
                      </InputSlot>
                    </Input>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon size="sm" as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.confirmpassword?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>


            </VStack>

            <VStack className="my-7" space="lg">
              <Button className="w-full bg-background-950 rounded-lg h-12" onPress={handleSubmit(onSubmit)}>
                <ButtonText className="font-medium">Cadastrar</ButtonText>
              </Button>

              <HStack className="self-center items-center" space={'sm'}>
                <Divider className="w-1/5" />
                <Text size="sm" className='uppercase'>Já possui uma conta?</Text>
                <Divider className="w-1/5" />
              </HStack>

              <Button className="w-full rounded-lg h-12" action={'default'}>
                <ButtonText className="font-medium">Entrar</ButtonText>
              </Button>
            </VStack>
          </VStack>

        </VStack>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}
