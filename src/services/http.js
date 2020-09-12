import loadingProgressInterceptor from '@/services/helpers/loadingProgressInterceptor'

import axios from 'axios'

import cacheAdapter from './helpers/cacheAdapter'

const api = axios.create({})

loadingProgressInterceptor(api)

export { api }
