import Vue from 'vue'

import pathify from 'vuex-pathify'

import dispatchActionForAllModules from '@/state/helpers/dispatchActionForAllModules'
import loadingProgressPlugin from '@/state/helpers/loadingProgressPlugin'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import Vuex from 'vuex'

import modules from './modules'

const cachedPaths = ['game.score']

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    pathify.plugin,
    loadingProgressPlugin,
    createPersistedState({
      storage: {
        getItem: key => Cookies.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) => Cookies.set(key, value),
        removeItem: key => Cookies.remove(key)
      },
      paths: cachedPaths
    })
  ],
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production'
})

export default store

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllModules('init')
