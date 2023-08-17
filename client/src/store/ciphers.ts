// Utilities
import { defineStore } from 'pinia'
import {ICipherForm, ICipherRequest, ICipherStore} from "@/types/ciphers";
import {generateCipher} from "@/api/ciphers.api";

export const useCipherStore = defineStore('cipher', {
  state: (): ICipherStore => ({
    form: {
      encode: '',
      decode: '',
      password: '',
    }
  }),
  actions: {
    setCiphers(payload: ICipherForm) {
      this.form = {
        ...this.form,
        ...payload
      }
    },
    async fetchCiphers(payload: ICipherRequest) {
      try {
        const data = await generateCipher(payload)

        if(payload.type === 'encode') {
          this.setCiphers({
            decode: data.result
          })
        } else if(payload.type === 'decode') {
          this.setCiphers({
            encode: data.result
          })
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
})
