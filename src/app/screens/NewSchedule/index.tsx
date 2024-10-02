import { Button, ButtonText } from '@/components/ui/button'
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
  Icon
} from '@/components/ui/icon'
import { Input, InputField } from '@/components/ui/input'
import { Pressable } from '@/components/ui/pressable'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from '@src/app/components/customs/SafeAreaView'
import { AlertTriangle } from 'lucide-react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { z } from 'zod'

const newScheduleSchema = z.object({
  date: z.string().min(1, 'Informe a data e horário do agendamento'),
  description: z.string().min(1, 'Descrição é obrigatória, por favor preencha'),
  city: z.string().min(1, 'Cidade é obrigatória'),
  caregiverId: z.string().min(1, 'Selecione um cuidador'),
  tags: z.array(z.string())
})

type newScheduleSchemaType = z.infer<typeof newScheduleSchema>;

export function NewSchedule() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<newScheduleSchemaType>({
    resolver: zodResolver(newScheduleSchema),
  })

  //  const toast = useToast()

  const onSubmit = (data: newScheduleSchemaType) => {
    console.log(data)
  }

  const handleKeyPress = () => {
    Keyboard.dismiss()
    handleSubmit(onSubmit)()
  }

  const { goBack, navigate } = useNavigation()
  const [tags, setTags] = React.useState<string[]>([])

  const [showTags, setShowTags] = React.useState(false)

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
              Novo agendamento
              </Heading>
              <Text>
              Preencha os campos abaixo para agendar uma atividade.
              </Text>
            </VStack>
          </VStack>
          <VStack className="w-full">
            <VStack space="xl" className="w-full">
              <FormControl isInvalid={!!errors.date} className='flex-1'>
                <FormControlLabel>
                  <FormControlLabelText>Data e horário</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="date"
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        className="text-sm"
                        placeholder="Insira a data e horário"
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
                    {errors?.date?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
              <FormControl isInvalid={!!errors.description} className='flex-1'>
                <FormControlLabel>
                  <FormControlLabelText>Descrição</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="description"
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        className="text-sm"
                        placeholder="Insira uma descrição do seu agendamento"
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
                    {errors?.description?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
              <FormControl isInvalid={!!errors.city} className='flex-1'>
                <FormControlLabel>
                  <FormControlLabelText>Cidade</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="city"
                  defaultValue=""
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input>
                      <InputField
                        className="text-sm"
                        placeholder="Insira a cidade do agendamento"
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
                    {errors?.city?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
              <FormControl>
                <FormControlLabel>
                  <FormControlLabelText>Tags</FormControlLabelText>
                </FormControlLabel>
                {!showTags && (
                  <Button onPress={()=> setShowTags(true)} variant='outline'
                    className='h-11 border border-typography-300 text-left justify-start px-2.5  items-center'
                  >
                    <ButtonText className='text-typography-500 font-normal text-sm text-left'>
                   Selecionar tags
                    </ButtonText>
                  </Button>
                )}
                {showTags &&(
                  <HStack className="flex flex-row flex-wrap gap-1"
                  >
                    {tagsList.map((tag, index) => {
                      const isActive = tags.includes(tag.id)
                      return(
                        <Button
                          key={index}
                          variant='outline'
                          className={`border border-typography-${isActive?'950':'300'} text-left justify-start px-2.5  items-center rounded-full`}
                          onPress={() => {
                            if (tags.includes(tag.id)) {
                              setTags(tags.filter((t) => t !== tag.id))
                            } else {
                              setTags([...tags, tag.id])
                            }
                          }}
                        >
                          <ButtonText className={`text-typography-${isActive?'950':'500'} font-normal text-sm text-center`}>
                            {tag.name}
                          </ButtonText>
                        </Button>
                      )})}
                  </HStack>
                )}
              </FormControl>

              <FormControl isInvalid={!!errors.caregiverId}>
                <FormControlLabel>
                  <FormControlLabelText>Selecione um cuidador</FormControlLabelText>
                </FormControlLabel>
                <Controller
                  name="caregiverId"
                  defaultValue=""
                  control={control}
                  render={({ field: { onBlur, value } }) => (
                    <Button onPress={()=> {
                      navigate('CaregiverSelector')
                    }} onBlur={onBlur} variant='outline'
                    className='h-11 border border-typography-300 text-left justify-start px-2.5  items-center'
                    >
                      <ButtonText className='text-typography-500 font-normal text-sm text-left'>
                      Selecione um cuidador {value}
                      </ButtonText>
                    </Button>
                  )}
                />
                <FormControlError>
                  <FormControlErrorIcon size="md" as={AlertTriangle} />
                  <FormControlErrorText>
                    {errors?.caregiverId?.message}
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </VStack>

            <VStack className="my-7" space="lg">
              <Button className="w-full bg-background-950 rounded-lg h-12" onPress={handleSubmit(onSubmit)}>
                <ButtonText className="font-medium">Salvar agendamento</ButtonText>
              </Button>
            </VStack>
          </VStack>

        </VStack>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}


const tagsList = [{
  id: '1',
  name: 'Comunicativo',
}
, {
  id: '2',
  name: 'Atencioso',
}
, {
  id: '3',
  name: 'Motivador',
}
, {
  id: '4',
  name: 'Ama Pets',
}
, {
  id: '5',
  name: 'Artista',
},
{
  id: '6',
  name: 'Paciente',
},
{
  id: '7',
  name: 'Cuidadoso',
},
{
  id: '8',
  name: 'Alegre',
},
{
  id: '9',
  name: 'Responsável',
},
{
  id: '10',
  name: 'Educado',
},
{
  id: '11',
  name: 'Paciente',
},
{
  id: '12',
  name: 'Cuidadoso',
},
{
  id: '13',
  name: 'Alegre',
},
{
  id: '14',
  name: 'Responsável',
},
{
  id: '15',
  name: 'Educado',
},
{
  id: '16',
  name: 'Paciente',
},
{
  id: '17',
  name: 'Cuidadoso',
},
{
  id: '18',
  name: 'Alegre',
},
{
  id: '19',
  name: 'Responsável',
},
{
  id: '20',
  name: 'Educado',
},
{
  id: '21',
  name: 'Paciente',
},
{
  id: '22',
  name: 'Cuidadoso',
},
{
  id: '23',
  name: 'Alegre',
},
{
  id: '24',
  name: 'Responsável',
},
{
  id: '25',
  name: 'Educado',
},
{
  id: '26',
  name: 'Paciente',
},
{
  id: '27',
  name: 'Cuidadoso',
},
{
  id: '28',
  name: 'Alegre',
},
{
  id: '29',
  name: 'Responsável',
},
{
  id: '30',
  name: 'Educado',
},
{
  id: '31',
  name: 'Paciente',
},
{
  id: '32',
  name: 'Cuidadoso',
},
{
  id: '33',
  name: 'Alegre',
}
]
