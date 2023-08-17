export interface ICipher {
  password: string
  message: string
}

export interface ICipherRequest extends ICipher {
  type: string
}

export interface ICipherForm {
  encode?: string;
  decode?: string;
  password?: string;
}

export interface ICipherStore {
  form: ICipherForm
}
