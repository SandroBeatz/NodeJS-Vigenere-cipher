import {axiosAPI} from "@/plugins/axios";
import {ICipherRequest} from "@/types/ciphers";

const CIPHERS_RESOURCE: string = 'ciphers'

const generateCipher = ({type, password, message}: ICipherRequest) => {
  return new Promise((resolve, reject) => {
    axiosAPI
      .post(CIPHERS_RESOURCE + `/${type}`, {password, message})
      .then((response) => resolve(response.data))
      .catch((e) => reject(e))
  })
}

export {
  generateCipher
}
