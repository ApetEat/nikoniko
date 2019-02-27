// i18n,js thanks @lvaroqui for this
import en from 'vee-validate/dist/locale/en'
import es from 'vee-validate/dist/locale/es'
import ca from 'vee-validate/dist/locale/ca'
import { Validator } from 'vee-validate'
export default function({ app }) {
  // Loading languages for Vee

  Validator.localize('en', en)
  Validator.localize('es', es)
  Validator.localize('ca', ca)

  // Localizing the app when user refresh or access a localized link
  //Validator.localize('ca')

  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    Validator.localize(newLocale)
  }
}