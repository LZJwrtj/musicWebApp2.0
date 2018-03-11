import * as types from './types'

const mutations = {
  [types.SET_RECOMMEND] (state, recommend) {
    state.recommend = recommend
  },
  [types.SET_PLAYLIST] (state, list) {
    state.playList = list
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_FULLSCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYSTATE] (state, flag) {
    state.playState = flag
  }
}
export default mutations
