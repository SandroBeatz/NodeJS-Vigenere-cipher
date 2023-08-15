// Utilities
import { defineStore } from 'pinia'
import {ICipherStore} from "@/types/ciphers";

export const useAppStore = defineStore('app', {
  state: (): ICipherStore => ({
    form: {
      encode: '',
      decode: '',
      password: '',
    }
  }),
})
