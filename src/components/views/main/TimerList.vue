<template>
  <v-card
    class="mx-auto pb-1"
    max-width="600"
  >
    <v-card-title>
      Timer list
    </v-card-title>

    <TimerItem
      v-for="item in list"
      :key="item.id"
      :timer="item"
    />
  </v-card>
</template>

<script>
import TimerItem from './TimerItem.vue';

export default {
  name: 'TimerList',

  components: {
    TimerItem,
  },

  props: {
    list: {
      type: Array,
      require: true,
    },
  },
};
</script>
