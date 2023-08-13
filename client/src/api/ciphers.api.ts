import {axiosAPI} from "@/plugins/axios";

const CIPHERS_RESOURCE: string = 'ciphers'

export default {
  generateCipher({type, password, message}: ICipherRequest) {
    return new Promise((resolve, reject) => {
      axiosAPI
        .post(CIPHERS_RESOURCE + `/${type}`, {password, message})
        .then((response) => resolve(response.data))
        .catch((e) => reject(e))
    })
  }
}
