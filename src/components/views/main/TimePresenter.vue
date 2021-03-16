<template>
  <div class="ma-2 pa-2">
    <v-row class="justify-center">
      {{ title }}
    </v-row>
    <v-row class="justify-center">
      {{ number }}
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TimePresenter',

  props: {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
