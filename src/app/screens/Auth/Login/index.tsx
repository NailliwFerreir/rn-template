import React, { useState } from 'react'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Link, LinkText } from '@/components/ui/link'
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from '@/components/ui/form-control'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox'
import {
  ArrowLeftIcon,
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  Icon,
} from '@/components/ui/icon'
import { Button, ButtonText } from '@/components/ui/button'
import { Keyboard } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle } from 'lucide-react-native'
import { Pressable } from '@/components/ui/pressable'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'

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
      <SafeAreaView>
        <VStack className="w-full" space="md">
          <VStack className="md:items-center" space="md">
            <Pressable
              onPress={goBack}
            >
              <Icon
                as={ArrowLeftIcon}
                className="md:hidden text-background-800"
                size="xl"
              />
            </Pressable>
            <VStack>
              <Heading className="md:text-center" size="3xl">
                Seja bem-vindo!
              </Heading>
              <Text>Entre com a sua conta para começar a usar o nosso app!</Text>
            </VStack>
          </VStack>
          <VStack className="w-full">
            <VStack space="xl" className="w-full">
              <FormControl
                isInvalid={!!errors?.email || !validated.emailValid}
                className="w-full"
              >
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
                        placeholder="Insira seu email"
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
                    {errors?.email?.message ||
                                    (!validated.emailValid && 'Email não encontrado')}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
              {/* Label Message */}
              <FormControl
                isInvalid={!!errors.password || !validated.passwordValid}
                className="w-full"
              >
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
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Insira sua senha"
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        onSubmitEditing={handleKeyPress}
                        returnKeyType="done"
                      />
                      <InputSlot onPress={handleState} className="pr-3">
                        <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
                      </InputSlot>
                    </Input>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.password?.message ||
                                    (!validated.passwordValid && 'Senha incorreta')}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
              <HStack className="w-full justify-between ">
                <Controller
                  name="rememberme"
                  defaultValue={false}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <Checkbox
                      size="sm"
                      value="Remember me"
                      isChecked={value}
                      onChange={onChange}
                      aria-label="Remember me"
                    >
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Lembre de mim</CheckboxLabel>
                    </Checkbox>
                  )}
                />
                <Link>
                  <LinkText className="font-medium text-sm text-primary-700 group-hover/link:text-primary-600">
                    Esqueceu a senha?
                  </LinkText>
                </Link>
              </HStack>
            </VStack>
            <Button className="w-full mt-4 mb-8" onPress={handleSubmit(onSubmit)}>
              <ButtonText className="font-medium">Entrar</ButtonText>
            </Button>
            <HStack className="self-center ">
              <Text size="md">{'Não tem uma conta?'}</Text>
              <Link>
                <LinkText
                  className="font-medium text-primary-700 ml-1 group-hover/link:text-primary-600  group-hover/pressed:text-primary-700"
                  size="md"
                >
                  Criar conta
                </LinkText>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </SafeAreaView>
    )
}
