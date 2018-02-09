import * as types from './types'

const mutations = {
  [types.SET_RECOMMEND] (state, recommend) {
    state.recommend = recommend
  }
}
export default mutations
