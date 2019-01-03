import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { localRead } from '@/libs/util'
import customZhCn from './lang/zh-CN'
import customZhTw from './lang/zh-TW'
import customEnUs from './lang/en-US'
import zhCnLocale from 'iview/src/locale/lang/zh-CN'
import enUsLocale from 'iview/src/locale/lang/en-US'
import zhTwLocale from 'iview/src/locale/lang/zh-TW'

Vue.use(VueI18n)

// Automatically set the language based on the browser system language
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = localLang || localRead('local') || 'zh-CN'

Vue.config.lang = lang

// vue-i18n 6.x+Writing
Vue.locale = () => {}
const messages = {
  'zh-CN': Object.assign(zhCnLocale, customZhCn),
  'zh-TW': Object.assign(zhTwLocale, customZhTw),
  'en-US': Object.assign(enUsLocale, customEnUs)
}
const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n

// vue-i18n 5.x writing
// Vue.locale('zh-CN', Object.assign(zhCnLocale, customZhCn))
// Vue.locale('en-US', Object.assign(zhTwLocale, customZhTw))
// Vue.locale('zh-TW', Object.assign(enUsLocale, customEnUs))
