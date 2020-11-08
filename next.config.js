module.exports = {
  i18n: {
    locales: ['ru', 'en', 'ua'],
    defaultLocale: 'ru',
  },
  env: {
    apiKey: process.env.apiKey,
    projectId: process.env.projectId,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
  },
}