import Vue from "vue";

const lang = 'en';
const dictionaryDir = 'ja';

const translationsEn = require('./I18n/' + dictionaryDir +'/en.json');
const pushNotificationEn = require('./I18n/' + dictionaryDir +'/push_notification.json');
const translationSubscription = require('./I18n/' + dictionaryDir +'/subscribtion.json');
const translationsCommonEn = require('./I18n/' + dictionaryDir +'/common.json');
const translationsRequestPlan = require('./I18n/' + dictionaryDir +'/request_plan.json');
const translationsTag = require('./I18n/' + dictionaryDir +'/tag.json');
const translationCoupon = require('./I18n/' + dictionaryDir +'/coupon.json');
const translationUserLeave = require('./I18n/' + dictionaryDir +'/user_leave.json');
const translationsVersion = require('./I18n/' + dictionaryDir +'/version.json');
const translationsUser = require('./I18n/' + dictionaryDir + '/user.json');
const translationsReportUser = require('./I18n/' + dictionaryDir + '/report_user.json');
const translationsAgeVerification = require('./I18n/' + dictionaryDir +'/age_verfication.json');

// const langFile = require('./I18n/' + dictionaryDir +'/age_verfication.json');

Vue.i18n.add(lang, translationsEn);
Vue.i18n.add(lang, pushNotificationEn);
Vue.i18n.add(lang, translationsEn);
Vue.i18n.add(lang, translationsCommonEn);
Vue.i18n.add(lang, translationSubscription);
Vue.i18n.add(lang, translationsRequestPlan);
Vue.i18n.add(lang, translationsTag);
Vue.i18n.add(lang, translationsVersion);
Vue.i18n.add(lang, translationCoupon);
Vue.i18n.add(lang, translationUserLeave);
Vue.i18n.add(lang, translationsUser);
Vue.i18n.add(lang, translationsAgeVerification);
Vue.i18n.add(lang, translationsReportUser);

Vue.i18n.set(lang);
