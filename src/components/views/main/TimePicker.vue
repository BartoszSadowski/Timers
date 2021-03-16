<template>
  <v-dialog
    v-model="open"
    persistent
  >
    <v-card>
      <v-card-title>
        Pick date and time
      </v-card-title>

      <v-card-actions>
        <v-btn
          @click="close"
        >
          Close
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>
</template>

<script>
export default {
  name: 'TimePicker',

  props: {
    open: {
      type: Boolean,
      require: true,
    },
  },

  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>
