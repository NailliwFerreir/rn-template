import { Button, ButtonText } from '@/components/ui/button'
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from '@/components/ui/checkbox'
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
  CheckIcon,
  EyeIcon,
  EyeOffIcon,
  Icon,
} from '@/components/ui/icon'
import { Input, InputField, InputIcon, InputSlot } from '@/components/ui/input'
import { Link, LinkText } from '@/components/ui/link'
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
import { z } from 'zod'

const signUpSchema = z.object({
  email: z.string().min(1, 'Email is required').email(),
  password: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
  confirmpassword: z
    .string()
    .min(6, 'Must be at least 8 characters in length')
    .regex(new RegExp('.*[A-Z].*'), 'One uppercase character')
    .regex(new RegExp('.*[a-z].*'), 'One lowercase character')
    .regex(new RegExp('.*\\d.*'), 'One number')
    .regex(
      new RegExp('.*[`~<>?,./!@#$%^&*()\\-_+="\'|{}\\[\\];:\\\\].*'),
      'One special character'
    ),
  rememberme: z.boolean().optional(),
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
    <SafeAreaView>
      <VStack className="w-full max-w-sm mx-auto" space="md">
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
                      placeholder="Crie sua senha"
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
                  <CheckboxLabel>
                    Eu aceito os termos de uso e políticas de privacidade
                  </CheckboxLabel>
                </Checkbox>
              )}
            />
          </VStack>

          <VStack className="w-full my-7" space="lg">
            <Button className="w-full" onPress={handleSubmit(onSubmit)}>
              <ButtonText className="font-medium">Cadastrar</ButtonText>
            </Button>
          </VStack>
          <HStack className="self-center">
            <Text size="md">Já possui uma conta?</Text>
            <Link>
              <LinkText
                className="font-medium text-primary-700 ml-1 group-hover/link:text-primary-600 group-hover/pressed:text-primary-700"
                size="md"
              >
                Entrar
              </LinkText>
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </SafeAreaView>
  )
}
