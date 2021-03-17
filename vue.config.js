module.exports = {
  lintOnSave: false,

  transpileDependencies: [
    'vuetify',
  ],

  pluginOptions: {
    i18n: {
      locale: 'pl',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/Timers'
    : '/',
};
