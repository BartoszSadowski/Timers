<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-title>
      Timer list
    </v-card-title>

    <v-card-text
      v-for="item in list"
      :key="item.id"
    >
      {{ item.id }} : {{ item.date }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'TimerList',

  props: {
    list: {
      type: Array,
      require: true,
    },
  },
};
</script>
