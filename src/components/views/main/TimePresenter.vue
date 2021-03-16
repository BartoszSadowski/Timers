<template>
  <div class="ma-2 pa-2">
    <v-row>
      {{ title }}
    </v-row>
    <v-row>
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
