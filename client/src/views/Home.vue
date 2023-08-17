<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <h3 class="mb-6">Generate cipher</h3>
        <div class="">
          <v-textarea name="encode" v-model="form.encode" label="Encode"></v-textarea>
        </div>

        <v-row>
          <v-col>
            <v-text-field name="password" v-model="form.password" label="Password" type="password"></v-text-field>
          </v-col>
          <v-col>
            <v-btn
              class="ma-2"
              color="indigo"
              icon="mdi-arrow-down"
              @click="generate('encode')"
            />
            <v-btn
              class="ma-2"
              color="indigo"
              icon="mdi-arrow-up"
              @click="generate('decode')"
            />
          </v-col>
        </v-row>

        <div class="">
          <v-textarea name="decode" v-model="form.decode" label="Decode"></v-textarea>
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {useCipherStore} from "@/store/ciphers";
import {computed} from "vue";

interface IFormMutation {
  [key: string]: string
}

const store = useCipherStore()

const form = computed<IFormMutation>(() => store.form)

const setField = (e: any) => {
  const el = e.target
  form.value[el.name] = el.value
}

const generate = async (type: string) => {
  const message: {[key: string]: string} = {
    encode: form.value.encode,
    decode: form.value.decode
  }

  if(message[type]) {
    await store.fetchCiphers({
      type,
      password: form.value.password,
      message: message[type]
    })
  }

}
</script>
