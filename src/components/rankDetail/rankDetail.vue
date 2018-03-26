<template>
  <div id="rank-list">
    <music-list :image="image" :title="title" :songs="songs" :des="des" :author="author"></music-list>
    adg
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getRankList} from 'api/rank'
  import {createSong, isValidMusic, processSongsUrl} from 'assets/js/song'
  import MusicList from 'components/music-list/music-list'
  import {ERR_OK} from 'api/config'
  export default {
    data () {
      return {
        rankData: {},
        rankDetail: {},
        songLists: [],
        imageUrl: ''
      }
    },
    created() {
      this._getRankList()
    },
    methods: {
      _getRankList() {
        if (!this.rank.id) {
          this.$router.push({
            path: '/rank'
          })
          return
        }
        getRankList(this.rank.id).then((res) => {
          this.rankData = res
          this.imageUrl = this.rankData.songlist[0].data.albummid
          this.rankDetail = res.topinfo
          if (res.code === ERR_OK) {
            processSongsUrl(this._normalizeSongs(res.songlist)).then((songs) => {
              this.songLists = songs
            })
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((item) => {
          const musicData = item.data
          if (isValidMusic(musicData)) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    computed: {
      image() {
        if (this.songLists.length) {
          return this.songLists[0].image
        }
        return ''
      },
      title() {
        return this.rankDetail.ListName
      },
      songs() {
        return this.songLists
      },
      des() {
        return this.rankData.update_time
      },
      author() {
        return ''
      },
      ...mapGetters(['rank'])
    },
    components: {
      MusicList
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #rank-list {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: #000;
    color: #ffffff;
    width: 100%;
  }
</style>
