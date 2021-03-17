<template>
  <div>
    <v-app-bar dense app>
      <v-switch
        v-model="$vuetify.theme.dark"
        :label="darkModeMessage"
        class="mt-5"
      />

      <v-spacer />

      <v-menu
        bottom
        left
        offset-y
      >
        <template v-slot:activator="{ on, attrs}">
          <v-btn
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
            {{ $t('LANGUAGE') }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="locale in locales"
            :key="locale"
            class="pa-0"
          >
            <v-btn
              text
              block
              @click="changeLocale(locale)"
            >
              {{ locale }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',

  data() {
    return {
      locales: process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(','),
    };
  },

  computed: {
    darkModeMessage() {
      return this.$vuetify.theme.dark ? this.$t('THEME.SWITCH_LIGHT') : this.$t('THEME.SWITCH_DARK');
    },
  },

  methods: {
    changeLocale(locale) {
      if (this.$i18n.locale !== locale) {
        this.$i18n.locale = locale;
      }
    },
  },
};
</script>
