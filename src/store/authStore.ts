import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'

type AuthStore = {
  isFirstTime: boolean | null
  isAuthenticated: boolean
  loading: boolean
  checkFirstTime: () => Promise<void>
  checkAuth: () => Promise<void>
  login: (token: string) => Promise<void>
  logout: () => Promise<void>
}

const authStore = create<AuthStore>((set) => ({
  isFirstTime: null,
  isAuthenticated: false,
  loading: true,

  // Função para verificar se é a primeira vez que o app é aberto
  checkFirstTime: async () => {
    set({ loading: true })
    try {
      const value = await AsyncStorage.getItem('isFirstTime')
      if (value === null) {
        await AsyncStorage.setItem('isFirstTime', 'false')
        set({ isFirstTime: true })
      } else {
        set({ isFirstTime: false })
      }
    } catch (e) {
      console.error(e)
    } finally {
      set({ loading: false })
    }
  },

  // Função para gerenciar o estado de autenticação
  checkAuth: async () => {
    set({ loading: true })
    try {
      const token = await AsyncStorage.getItem('authToken')
      if (token) {
        set({ isAuthenticated: true })
      } else {
        set({ isAuthenticated: false })
      }
    } catch (e) {
      console.error(e)
    } finally {
      set({ loading: false })
    }
  },

  // Função para fazer login (exemplo)
  login: async (token) => {
    set({ loading: true })
    try {
      await AsyncStorage.setItem('authToken', token)
      set({ isAuthenticated: true })
    } catch (e) {
      console.error(e)
    } finally {
      set({ loading: false })
    }
  },

  // Função para logout
  logout: async () => {
    set({ loading: true })
    try {
      await AsyncStorage.removeItem('authToken')
      set({ isAuthenticated: false })
    } catch (e) {
      console.error(e)
    } finally {
      set({ loading: false })
    }
  }
}))

export default authStore
