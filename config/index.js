const en = require('../lang/en-US.js')
const ca = require('../lang/ca-ES.js')
const es = require('../lang/es-ES.js')

const I18N = {
  detectBrowserLanguage: {
    useCookie: false
  },
  locales: [
    {
      code: 'ca',
      iso: 'ca-ES',
      name: 'CA',
      langFile: ''      
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'ES',
      langFile: ''
    },
    {
      code: 'en',
      iso: 'en-US',
      name: 'EN',
      langFile: ''      
    }
  ],
  parsePages: false,
  pages: {
    'estado-animo/index': {
      ca: '/estat-anim',
      es: '/estado-animo',
      en: '/current-mood'
    },
    gracias: {
      ca: '/gracies',
      es: '/gracias',
      en: '/thank-you'
    },
    votado: {
      ca: '/ja-has-votat',
      es: '/ya-has-votado',
      en: '/you-have-already-voted'
    }
  },
  vueI18n: {
    fallbackLocale: 'ca',
    messages: { ca, es, en }
  }
}

module.exports = {
  I18N
}
