<template>
  <v-card
    class="mx-auto pb-1"
    max-width="600"
  >
    <v-card-title>
      {{ $t('TIMER_LIST.TITLE') }}
    </v-card-title>

    <TimerItem
      v-for="item in list"
      :key="item.id"
      :now="now"
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

  data() {
    return {
      now: new Date(),
    };
  },

  created() {
    setInterval(() => {
      this.now = new Date();
    }, 1000);
  },
};
</script>
