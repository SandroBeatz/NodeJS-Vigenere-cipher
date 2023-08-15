<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <h3 class="mb-6">Generate cipher</h3>
        <div class="">
          <v-textarea label="Encode"></v-textarea>
        </div>

        <v-row>
          <v-col>
            <v-text-field label="Password" type="password"></v-text-field>
          </v-col>
          <v-col>
            <v-btn
              class="ma-2"
              color="indigo"
              icon="mdi-arrow-down"
            />
            <v-btn
              class="ma-2"
              color="indigo"
              icon="mdi-arrow-up"
            />
          </v-col>
        </v-row>

        <div class="">
          <v-textarea label="Decode"></v-textarea>
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const formCipher = ref<ICipherForm | null>(null)
</script>
