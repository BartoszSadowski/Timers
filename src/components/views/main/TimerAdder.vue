<template>
  <v-card
    class="mx-auto"
    max-width="600"
  >
    <v-card-title>
      Add new timer
    </v-card-title>

    <form>
      <v-row class="pl-4">
        <v-col md="10">
          Date placeholder
        </v-col>
        <v-col>
          <v-btn
                icon
                elevation="2"
                @click="removeItem(timer)"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
        </v-col>
      </v-row>
    </form>
  </v-card>
</template>

<script>
export default {
  name: 'TimerAdder',
};
</script>
