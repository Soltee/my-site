import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: '105545094708554', //  change 'null' to your Facebook Page ID,
  theme_color: '#4C51BF', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})