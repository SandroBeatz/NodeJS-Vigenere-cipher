interface ICipher {
  password: string
  message: string
}

interface ICipherRequest extends ICipher {
  type: string
}
