// @flow

import { make } from 'vuex-pathify'

export const state = {
  score: 0,
  userChoice: undefined
}

export const getters = {
  ...make.getters(state)
}

export const mutations = {
  ...make.mutations(state)
}

export const actions = {
  ...make.actions(state)
}
