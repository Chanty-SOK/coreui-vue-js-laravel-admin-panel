import Vue from "vue";

const lang = 'en';
const dictionaryDir = 'en';

const translationsEn = require('./I18n/' + dictionaryDir + '/en.json');

Vue.i18n.add(lang, translationsEn);
Vue.i18n.set(lang);
