import { defineStore } from 'pinia'
import { reactive, toRefs } from 'vue'

type AuthStoreType = {
  token: Types.Nullable<string>
}

export const useAuthStore = defineStore('authStore', () => {
  const state = reactive<AuthStoreType>({
    token: null
  })

  const setToken = (value: Types.Nullable<string>) => {
    state.token = value
  }

  return {
    ...toRefs(state),
    setToken
  }
})
