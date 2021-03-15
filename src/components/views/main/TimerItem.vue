<template>
  <v-sheet class="pa-2 ma-2" elevation="1">
    {{ timer.id }} - {{ timer.date }}
  </v-sheet>
</template>

<script>
export default {
  name: 'TimerItem',

  props: {
    timer: {
      type: Object,
      require: true,
    },
  },
};
</script>
