<template>
  <transition name="slideLeft">
    <music-list :image="image" :title="title" :songs="songs" :des="des" :author="author"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getDetail} from 'api/recommend'
  import MusicList from 'components/music-list/music-list'
  import {createSong, isValidMusic, processSongsUrl} from 'assets/js/song'
  import {ERR_OK} from 'api/config'

  export default {
    data() {
      return {
        recommendDetails: {},
        songLists: []
      }
    },
    computed: {
      image() {
        return this.recommendDetails.logo
      },
      title() {
        return this.recommendDetails.dissname
      },
      songs () {
        return this.songLists
      },
      des() {
        return `${(this.recommendDetails.visitnum / 10000).toFixed(1)}万人播放`
      },
      author() {
        return `来自:${this.recommendDetails.nickname}`
      },
      ...mapGetters(['recommend'])
    },
    created() {
      this._getDetail()
    },
    methods: {
      _getDetail() {
        if (!this.recommend.dissid) {
          this.$router.push({
            path: '/recommend'
          })
          return
        }
        getDetail(this.recommend.dissid).then((res) => {
          this.recommendDetails = res.cdlist[0]
          console.log(res)
          if (res.code === ERR_OK) {
            processSongsUrl(this._normalizeSongs(res.cdlist[0].songlist)).then((songs) => {
              this.songLists = songs
            })
          }
        })
      },
      _normalizeSongs (list) {
        let ret = []
        list.forEach((musicData) => {
          if (isValidMusic(musicData)) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }

</script>

<style lang="less" rel="stylesheet/less" scoped>
  .slideLeft-enter-active, .slideLeft-leave-active {
    transition: all 0.2s linear;
  }

  .slideLeft-enter, .slideLeft-leave-to {
    transform: translate3d(100%, 0, 0);
  }

</style>
