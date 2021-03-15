<template>
  <v-footer absolute app>
    <v-col class="text-right">
      <v-btn
        plain
        text
        href="https://github.com/BartoszSadowski"
      >
        {{ new Date().getFullYear() }} - Bartosz Sadowski
      </v-btn>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
};
</script>
