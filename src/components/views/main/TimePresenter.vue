<template>
  <div class="ma-2 pa-2">
    <v-row class="justify-center">
      {{ title }}
    </v-row>
    <v-row class="justify-center">
      <div class="number-container">
        {{ `${number}`.padStart(2, '0') }}
      </div>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TimePresenter',

  props: {
    number: {
      type: Number,
      require: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.number-container {
  padding: 5px;
  border: 1px solid #E3E3E3;
  box-shadow: 1px 2px 3px #808080;
  border-radius: 3px;
}
</style>
