export const recommend = state => state.recommend
export const playState = state => state.playState
export const fullScreen = state => state.fullScreen
export const playList = state => state.playList
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
export const currentSong = (state) => {
  return state.playList[state.currentIndex] || {}
}
export const rank = state => state.rank
