import * as types from './types'
// import {playMode} from '../assets/js/config'

export const selectPlay = function ({commit, state}, {list, index}) {
  // if (state.mode === playMode.random) {
  //
  // }
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_SEQUENCELIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULLSCREEN, true)
  commit(types.SET_PLAYSTATE, true)
}

export const allPlay = function ({commit, state}, {list}) {
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_SEQUENCELIST, list)
  commit(types.SET_CURRENT_INDEX, 0)
  commit(types.SET_FULLSCREEN, true)
  commit(types.SET_PLAYSTATE, true)
}
