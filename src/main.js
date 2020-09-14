import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

import store from '@/state'

import * as Sentry from '@sentry/browser'
import { Vue as VueIntegration } from '@sentry/integrations'
import { Integrations } from '@sentry/tracing'

import '@/scss/app.scss'

Sentry.init({
  dsn:
    'https://dc25995533b44e679191e7beeca10bb7@o442332.ingest.sentry.io/5427579',
  integrations: [
    new VueIntegration({
      Vue,
      tracing: true,
      attachProps: true,
      logErrors: true,
      tracingOptions: {
        trackComponents: true
      }
    }),
    new Integrations.BrowserTracing()
  ],
  tracesSampleRate: 0.1
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
