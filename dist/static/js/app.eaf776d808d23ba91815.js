webpackJsonp([1],{"0C6d":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab"}},[n("router-link",{staticClass:"tab_list",attrs:{tag:"div",to:"/recommend"}},[n("span",{staticClass:"tab_link"},[t._v("推荐")])]),t._v(" "),n("router-link",{staticClass:"tab_list",attrs:{tag:"div",to:"/rank"}},[n("span",{staticClass:"tab_link"},[t._v("排行")])]),t._v(" "),n("router-link",{staticClass:"tab_list",attrs:{tag:"div",to:"/search"}},[n("span",{staticClass:"tab_link"},[t._v("搜索")])])],1)},staticRenderFns:[]};e.a=i},"6rJO":function(t,e){},"9BaC":function(t,e){},A1IV:function(t,e){},BrIN:function(t,e,n){"use strict";var i=n("porf"),s=n.n(i),r=n("0C6d");var a=function(t){n("mBCK")},o=n("VU/8")(s.a,r.a,!1,a,"data-v-5240fe7a",null);e.default=o.exports},CwSt:function(t,e){},Hzh2:function(t,e,n){"use strict";var i={render:function(){var t=this;t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"header"}},[n("span",{staticClass:"h-bar icon-bar"}),t._v(" "),n("h2",{staticClass:"h-title"},[t._v("音乐馆")]),t._v(" "),n("span",{staticClass:"h-search icon-search"})])}]};e.a=i},"N+zL":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},s=n("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},i,!1,null,null,null);e.default=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};n.d(i,"recommend",function(){return xt}),n.d(i,"playState",function(){return Tt}),n.d(i,"fullScreen",function(){return Et}),n.d(i,"playList",function(){return It}),n.d(i,"sequenceList",function(){return $t}),n.d(i,"mode",function(){return Nt}),n.d(i,"currentIndex",function(){return Rt}),n.d(i,"currentSong",function(){return Pt}),n.d(i,"rank",function(){return Dt});var s={};n.d(s,"selectPlay",function(){return qt}),n.d(s,"allPlay",function(){return At});var r=n("/5sW"),a=n("hxP8"),o=n("BrIN"),c=n("Dd8w"),l=n.n(c),u=n("NYxO"),d=0,p=1,f=2;var h=n("OKJt"),m=n.n(h),v=n("GQaK"),_={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},data:{type:Array,default:null}},mounted:function(){var t=this;setTimeout(function(){t._initScroll()},20)},methods:{_initScroll:function(){this.$refs.wrapper&&(this.scroll=new v.a(this.$refs.wrapper,{probeType:this.probeType,click:this.click}))},enable:function(){this.scroll&&this.scroll.enable()},disable:function(){this.scroll&&this.scroll.disable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var t=this;setTimeout(function(){t.refresh()},20)}}},g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"wrapper"},[this._t("default")],2)},staticRenderFns:[]};var y=n("VU/8")(_,g,!1,function(t){n("TZSG")},"data-v-cefb463c",null).exports,C={data:function(){return{songReady:!1,value:0,currentTime:0,currentLyric:null,lyrics:[],currentLineNum:0}},computed:l()({rotate:function(){return this.playState?"play":"play pause"},playIcon:function(){return this.playState?"icon-pause":"icon-play"},mini_playIcon:function(){return this.playState?"icon-pause":"icon-play"},iconMode:function(){return this.mode===d?"icon-arrow-repeat":this.mode===p?"icon-repeat":"icon-random"}},Object(u.c)(["playList","fullScreen","playState","currentIndex","mode","sequenceList","currentSong"])),methods:l()({back:function(){this.setFullScreen(!1)},open:function(){this.setFullScreen(!0)},togglePlay:function(){this.songReady&&(this.currentLyric&&this.currentLyric.togglePlay(),this.setPlayState(!this.playState))},end:function(){this.mode===p?this.loop():this.nextSong()},loop:function(){this.$refs.audio.currentTime=0,this.$refs.audio.play(),this.setPlayState(!0),this.currentLyric&&this.currentLyric.seek(0)},prevSong:function(){if(this.songReady)if(1!==this.playList.length){var t=this.currentIndex-1;-1===t&&(t=this.playList.length-1),this.setCurrentIndex(t),this.playState||this.togglePlay(),this.songReady=!1}else this.loop()},nextSong:function(){if(this.songReady)if(1!==this.playList.length){var t=this.currentIndex+1;t===this.playList.length&&(t=0),this.setCurrentIndex(t),this.playState||this.togglePlay(),this.songReady=!1}else this.loop()},ready:function(){this.songReady=!0},paused:function(){this.setPlayState(!1)},error:function(){this.songReady=!0},updateTime:function(t){this.currentTime=t.target.currentTime,this.value=this.currentTime/this.currentSong.duration*100},updateCurrentTime:function(){this.currentTime=this.value*this.currentSong.duration/100,this.$refs.audio.currentTime=this.currentTime,this.playState||this.togglePlay(),this.currentLyric&&this.currentLyric.seek(1e3*this.currentTime)},changeMode:function(){var t=(this.mode+1)%3;this.setMode(t);var e=null;e=t===f?function(t){for(var e,n,i=t.slice(),s=0;s<i.length;s++){var r=(e=0,n=s,Math.floor(Math.random()*(n-e+1)+e)),a=i[s];i[s]=i[r],i[r]=a}return i}(this.sequenceList):this.sequenceList,this.resetCurrentIndex(e),this.setPlayList(e)},resetCurrentIndex:function(t){var e=this,n=t.findIndex(function(t){return t.id===e.currentSong.id});this.setCurrentIndex(n)},getLyric:function(){var t=this;this.currentSong.getLyric().then(function(e){t.currentLyric=new m.a(e,t.handleLyric),t.lyrics=t.currentLyric.lines,t.playState&&t.currentLyric.play()}).catch(function(){t.currentLyric=null,t.currentLineNum=0})},handleLyric:function(t){var e=t.lineNum;t.txt;if(this.currentLineNum=e,e>4){var n=this.$refs.lyricLine[e-4];this.$refs.lyricList.scrollToElement(n,1e3)}else this.$refs.lyricList.scrollTo(0,0,1e3)},format:function(t){return t=Math.floor(t),Math.floor(t/60)+":"+this._pad(t%60)},_pad:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=t.toString().length;n<e;)t="0"+t,n++;return t}},Object(u.d)({setFullScreen:"SET_FULLSCREEN",setPlayState:"SET_PLAYSTATE",setCurrentIndex:"SET_CURRENT_INDEX",setMode:"SET_PLAY_MODE",setPlayList:"SET_PLAYLIST"})),watch:{currentSong:function(t,e){var n=this;t.id&&t.url&&t.id!==e.id&&(this.currentLyric&&this.currentLyric.stop(),clearTimeout(this.timer1),this.timer1=setTimeout(function(){n.songReady=!0},5e3),clearTimeout(this.timer2),this.timer2=setTimeout(function(){n.$refs.audio.play(),n.getLyric()},1e3))},playState:function(t){var e=this.$refs.audio;this.$nextTick(function(){t?e.play():e.pause()})}},components:{Scroll:y}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.playList.length>0,expression:"playList.length>0"}],attrs:{id:"player"}},[n("transition",{attrs:{name:"slideDown"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.fullScreen,expression:"fullScreen"}],staticClass:"fullScreen"},[n("div",{staticClass:"top"},[n("div",{staticClass:"back",on:{click:t.back}},[n("i",{staticClass:"icon-arrow_down"})]),t._v(" "),n("div",{staticClass:"title"},[n("div",{staticClass:"songName"},[t._v(t._s(t.currentSong.name))]),t._v(" "),n("div",{staticClass:"author"},[t._v(t._s(t.currentSong.singer))])])]),t._v(" "),n("div",{staticClass:"middle"},[n("div",{staticClass:"img_wrapper",class:t.rotate},[n("img",{attrs:{src:t.currentSong.image,alt:""}})]),t._v(" "),n("scroll",{ref:"lyricList",staticClass:"lyric_wrapper",attrs:{data:t.currentLyric&&t.currentLyric.lines}},[n("div",t._l(t.lyrics,function(e,i){return n("p",{key:e.id,ref:"lyricLine",refInFor:!0,staticClass:"txt",class:{current:t.currentLineNum===i}},[t._v(t._s(e.txt))])}))]),t._v(" "),n("div",{staticClass:"process_wrapper"},[n("mt-range",{attrs:{min:0,max:100,step:1,"bar-height":2},on:{change:t.updateCurrentTime},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},[n("div",{attrs:{slot:"start"},slot:"start"},[t._v(t._s(t.format(t.currentTime)))]),t._v(" "),n("div",{attrs:{slot:"end"},slot:"end"},[t._v(t._s(t.format(t.currentSong.duration)))])])],1)],1),t._v(" "),n("div",{staticClass:"bottom"},[n("div",{staticClass:"icon_mode"},[n("i",{class:t.iconMode,on:{click:t.changeMode}})]),t._v(" "),n("div",{staticClass:"icon_prev"},[n("i",{staticClass:"icon-backward",on:{click:t.prevSong}})]),t._v(" "),n("div",{staticClass:"icon_play"},[n("i",{class:t.playIcon,on:{click:t.togglePlay}})]),t._v(" "),n("div",{staticClass:"icon_next"},[n("i",{staticClass:"icon-forward",on:{click:t.nextSong}})]),t._v(" "),n("div",{staticClass:"icon_like"},[n("i",{staticClass:"icon-heart"})])])])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.fullScreen,expression:"!fullScreen"}],staticClass:"miniPlay",on:{click:t.open}},[n("div",{staticClass:"mini_imgWrapper",class:t.rotate},[n("img",{attrs:{src:t.currentSong.image,alt:""}})]),t._v(" "),n("div",{staticClass:"songDetail"},[n("div",{staticClass:"mini_songName"},[t._v(t._s(t.currentSong.name))]),t._v(" "),n("div",{staticClass:"mini_singer"},[t._v(t._s(t.currentSong.singer))])]),t._v(" "),n("div",{staticClass:"control"},[n("span",{staticClass:"mini_play",class:t.mini_playIcon,on:{click:function(e){e.stopPropagation(),t.togglePlay(e)}}}),t._v(" "),n("span",{staticClass:"mini_next icon-forward",on:{click:function(e){e.stopPropagation(),t.nextSong(e)}}}),t._v(" "),n("span",{staticClass:"mini_bar icon-bar"})])]),t._v(" "),n("audio",{ref:"audio",attrs:{src:t.currentSong.url},on:{playing:t.ready,error:t.error,pause:t.paused,timeupdate:t.updateTime,ended:t.end}})],1)},staticRenderFns:[]};var S=n("VU/8")(C,w,!1,function(t){n("9BaC")},null,null).exports,k={components:{"v-header":a.default,"v-tab":o.default,"v-player":S}},L={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("v-header"),t._v(" "),n("v-tab"),t._v(" "),n("router-view"),t._v(" "),n("v-player")],1)},staticRenderFns:[]};var b=n("VU/8")(k,L,!1,function(t){n("QorW")},null,null).exports,x=n("/ocq"),T=n("//Fk"),E=n.n(T),I=n("woOf"),$=n.n(I),N=n("hU7x"),R=n.n(N);function P(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+function(t){var e="";for(var n in t){var i=void 0!==t[n]?t[n]:"";e+="&"+n+" = "+encodeURIComponent(i)}return e?e.substring(1):""}(e),new E.a(function(e,i){R()(t,n,function(t,n){t?i(t):e(n)})})}var D={g_tk:795170887,inCharset:"utf-8",outCharset:"utf-8",notice:0,format:"jsonp"},U=0,O=n("mtWM"),M=n.n(O);var F=n("F3EI");n("v2ns");var j={data:function(){return{notNextTick:!0,swiperOption:{autoplay:2e3,loop:!0,initialSlide:1,autoplayDisableOnInteraction:!1,grabCursor:!0,setWrapperSize:!0,autoHeight:!0,pagination:".swiper-pagination",paginationClickable:!0,mousewheelControl:!0,observeParents:!0,debugger:!0}}},props:["slides"],computed:{swiper:function(){return this.$refs.mySwiper.swiper}},components:{swiper:F.swiper,swiperSlide:F.swiperSlide}},q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"slide"}},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption,"not-next-tick":t.notNextTick}},[t._l(t.slides,function(t){return n("swiper-slide",{key:t.id},[n("a",{attrs:{href:"javascript:;"}},[n("img",{staticClass:"slide_img",attrs:{src:t.picUrl,alt:""}})])])}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)},staticRenderFns:[]};var A=n("VU/8")(j,q,!1,function(t){n("w7DE")},"data-v-da3a79f0",null).exports,V={data:function(){return{slides:[],recommends:[]}},created:function(){this._getRecommend(),this._getDiss()},methods:l()({selectItem:function(t){this.$router.push({path:"/recommend/"+t.dissid}),this.setRecommend(t)},_getRecommend:function(){var t=this;P("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",$()({},D,{platform:"h5",needNewCode:1,_:1516025447737}),{param:"jsonpCallback",name:"callback"}).then(function(e){t.slides=e.data.slider})},_getDiss:function(){var t,e=this;(t=$()({},D,{picmid:1,rnd:Math.random(),jsonpCallback:"getPlaylist",loginUin:747829772,hostUin:0,notice:0,platform:"yqq",needNewCode:0,categoryId:1e7,sortId:5,sin:0,ein:29,format:"json"}),M.a.get("api/getDiss",{params:t}).then(function(t){return E.a.resolve(t.data)})).then(function(t){e.recommends=t.data.list})}},Object(u.d)({setRecommend:"SET_RECOMMEND"})),components:{"v-slide":A,scroll:y}},Y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"recommend"}},[n("scroll",{staticClass:"recommend_content",attrs:{data:t.recommends}},[n("div",[n("v-slide",{attrs:{slides:t.slides}}),t._v(" "),n("div",{staticClass:"content"},[n("h2",{staticClass:"title"},[t._v("热门推荐")]),t._v(" "),n("ul",{staticClass:"clear"},t._l(t.recommends,function(e){return n("li",{key:e.id,on:{click:function(n){t.selectItem(e)}}},[n("div",{staticClass:"img-wrapper"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{alt:""}}),t._v(" "),n("span",{staticClass:"listen_count"},[n("i",{staticClass:"icon-earphone"}),t._v(t._s((e.listennum/1e4).toFixed(1))+"万")]),t._v(" "),n("span",{staticClass:"icon_play"})]),t._v(" "),n("div",{staticClass:"des"},[n("p",{staticClass:"des_title"},[t._v(t._s(e.dissname))]),t._v(" "),n("p",{staticClass:"author"},[t._v(t._s(e.creator.name))])])])}))])],1)]),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var z=n("VU/8")(V,Y,!1,function(t){n("pn5V")},"data-v-34628322",null).exports;var B={data:function(){return{ranks:[]}},created:function(){this._getRank()},methods:l()({_getRank:function(){var t,e=this;(t=$()({},D,{needNewCode:1,platform:"h5",format:"json"}),M.a.get("/api/getRank",{params:t}).then(function(t){return E.a.resolve(t.data)})).then(function(t){e.ranks=t.data.topList})},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.set_rank(t)}},Object(u.d)({set_rank:"SET_RANK"})),components:{Scroll:y}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"rank"}},[n("scroll",{staticClass:"rank_wrapper",attrs:{data:t.ranks}},[n("ul",{staticClass:"rank_content"},t._l(t.ranks,function(e){return n("li",{key:e.id,staticClass:"rank_list",on:{click:function(n){t.selectItem(e)}}},[n("div",{staticClass:"img_wrapper"},[n("img",{attrs:{src:e.picUrl,alt:""}}),t._v(" "),n("span",{staticClass:"count"},[n("i",{staticClass:"icon-earphone"}),t._v("\n          "+t._s((e.listenCount/1e4).toFixed(1))+"万\n        ")])]),t._v(" "),n("div",{staticClass:"rank_list_content"},[n("h2",{staticClass:"rank_list_title"},[t._v(t._s(e.topTitle))]),t._v(" "),t._l(e.songList,function(e,i){return n("p",{key:e.id,staticClass:"rank_list_song"},[t._v("\n            "+t._s(i)+" "+t._s(e.songname)+"-"+t._s(e.singername)+"\n          ")])}),t._v(" "),n("span",{staticClass:"arrow"},[t._v(">")])],2)])}))]),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var H=n("VU/8")(B,K,!1,function(t){n("6rJO")},"data-v-9d44065a",null).exports,W=n("YOyO"),Q={props:{songs:{type:Array,default:function(){return[]}}},methods:{getName:function(t){return t.name+"(Live)"},getDes:function(t){return t.singer+"·"+t.album},selectItem:function(t,e){this.$emit("selectItem",t,e)}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"song-list"}},[n("ul",{staticClass:"songList"},t._l(t.songs,function(e,i){return n("li",{key:e.id,on:{click:function(n){t.selectItem(e,i)}}},[n("h3",{staticClass:"song_name"},[t._v(t._s(t.getName(e)))]),t._v(" "),n("p",{staticClass:"song_des"},[t._v(t._s(t.getDes(e)))])])}))])},staticRenderFns:[]};var J=n("VU/8")(Q,G,!1,function(t){n("CwSt")},"data-v-7cdeef04",null).exports,Z={props:{image:{type:String,default:""},title:{type:String,default:""},songs:{type:Array,default:function(){return[]}},des:{type:String,default:""},author:{type:String,default:""}},methods:l()({selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},playAll:function(){this.allPlay({list:this.songs})},back:function(){this.$router.back()}},Object(u.b)(["selectPlay","allPlay"])),mounted:function(){this.$refs.scroll.$el.style.top=this.$refs.img_wrapper.clientHeight+"px"},components:{Scroll:y,SongList:J}},X={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"music-list"}},[n("div",{staticClass:"back",on:{click:t.back}},[n("span",{staticClass:"icon-arrow_left"})]),t._v(" "),n("div",{ref:"img_wrapper",staticClass:"img_wrapper"},[n("img",{attrs:{src:t.image,alt:""}}),t._v(" "),n("div",{staticClass:"list_info"},[n("div",{staticClass:"des_title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("div",{staticClass:"count_author"},[n("span",{staticClass:"listen_count"},[t._v(t._s(t.des))]),t._v(" "),n("span",{staticClass:"author"},[t._v(t._s(t.author))])])]),t._v(" "),n("span",{staticClass:"icon_play icon-play",on:{click:t.playAll}}),t._v(" "),n("div",{staticClass:"gradient"}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"})]),t._v(" "),n("scroll",{ref:"scroll",staticClass:"list",attrs:{data:t.songs}},[n("div",{attrs:{id:"song-list-wrapper"}},[n("song-list",{attrs:{songs:t.songs},on:{selectItem:t.selectItem}})],1)])],1)},staticRenderFns:[]};var tt=n("VU/8")(Z,X,!1,function(t){n("RO71")},"data-v-e7613800",null).exports,et=n("Zrlr"),nt=n.n(et),it=n("wxAW"),st=n.n(it),rt="";var at=!1;function ot(t){var e=at?"/api/getPurlUrl":"http://ustbhuangyi.com/music/api/getPurlUrl",n=[],i=[];t.forEach(function(t){n.push(t.mid),i.push(0)});var s,r,a=(s=n,r=i,{module:"vkey.GetVkeyServer",method:"CgiGetVkey",param:{guid:function(){if(rt)return rt;if(!rt){var t=(new Date).getUTCMilliseconds();rt=""+Math.round(2147483647*Math.random())*t%1e10}return rt}(),songmid:s,songtype:r,uin:"0",loginflag:0,platform:"23"}}),o=$()({},D,{g_tk:5381,format:"json",platform:"h5",needNewCode:1,uin:0});return new E.a(function(t,n){var i=3;function s(){return M.a.post(e,{comm:o,url_mid:a}).then(function(e){var n=e.data;if(n.code===U){var i=n.url_mid;if(i&&i.code===U){var s=i.data.midurlinfo[0];s&&s.purl?t(n):r()}else r()}else r()})}function r(){--i>=0?s():n(new Error("Can not get the songs url"))}s()})}var ct=n("xrTZ"),lt=function(){function t(e){var n=e.id,i=e.mid,s=e.singer,r=e.name,a=e.album,o=e.duration,c=e.image,l=e.url;nt()(this,t),this.id=n,this.mid=i,this.singer=s,this.name=r,this.album=a,this.duration=o,this.image=c,this.filename="C400"+this.mid+".m4a",this.url=l}return st()(t,[{key:"getLyric",value:function(){var t=this;return this.lyric?E.a.resolve(this.lyric):new E.a(function(e,n){var i,s,r;(i=t.mid,s=at?"/api/lyric":"http://ustbhuangyi.com/music/api/lyric",r=$()({},D,{songmid:i,platform:"yqq",hostUin:0,needNewCode:0,categoryId:1e7,pcachetime:+new Date,format:"json"}),M.a.get(s,{params:r}).then(function(t){return E.a.resolve(t.data)})).then(function(i){i.retcode===U?(t.lyric=ct.Base64.decode(i.lyric),e(t.lyric)):n("no lyric")})})}}]),t}();function ut(t){return new lt({id:t.songid,mid:t.songmid,singer:function(t){var e=[];if(!t)return"";return t.forEach(function(t){e.push(t.name)}),e.join("/")}(t.singer),name:t.songname,album:t.albumname,duration:t.interval,image:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+t.albummid+".jpg?max_age=2592000",url:t.url})}function dt(t){return t.songid&&t.albummid&&(!t.pay||0===t.pay.payalbumprice)}function pt(t){return t.length?ot(t).then(function(e){e.code===U&&e.url_mid.data.midurlinfo.forEach(function(e,n){t[n].url="http://dl.stream.qqmusic.qq.com/"+e.purl});return t}):E.a.resolve(t)}var ft={data:function(){return{recommendDetails:{},songLists:[]}},computed:l()({image:function(){return this.recommendDetails.logo},title:function(){return this.recommendDetails.dissname},songs:function(){return this.songLists},des:function(){return(this.recommendDetails.visitnum/1e4).toFixed(1)+"万人播放"},author:function(){return"来自:"+this.recommendDetails.nickname}},Object(u.c)(["recommend"])),created:function(){this._getDetail()},methods:{_getDetail:function(){var t,e,n=this;this.recommend.dissid?(t=this.recommend.dissid,e=$()({},D,{type:1,json:1,utf8:1,onlysong:0,disstid:t,g_tk:1101865453,loginUin:747839772,hostUin:0,platform:"yqq",needNewCode:0,uin:""}),M.a.get("api/getCdInfo",{params:e}).then(function(t){return E.a.resolve(t.data)})).then(function(t){n.recommendDetails=t.cdlist[0],console.log(t),t.code===U&&pt(n._normalizeSongs(t.cdlist[0].songlist)).then(function(t){n.songLists=t})}):this.$router.push({path:"/recommend"})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){dt(t)&&e.push(ut(t))}),e}},components:{MusicList:tt}},ht={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slideLeft"}},[n("music-list",{attrs:{image:t.image,title:t.title,songs:t.songs,des:t.des,author:t.author}})],1)},staticRenderFns:[]};var mt=n("VU/8")(ft,ht,!1,function(t){n("iwTL")},"data-v-2b045e57",null).exports,vt={data:function(){return{rankData:{},rankDetail:{},songLists:[],imageUrl:""}},created:function(){this._getRankList()},methods:{_getRankList:function(){var t,e,n=this;this.rank.id?(t=this.rank.id,e={g_tk:5381,uin:0,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1,tpl:3,page:"detail",type:"top",topid:t,_:1521983529050},M.a.get("/api/getRankList",{params:e}).then(function(t){return E.a.resolve(t.data)})).then(function(t){n.rankData=t,n.imageUrl=n.rankData.songlist[0].data.albummid,n.rankDetail=t.topinfo,t.code===U&&pt(n._normalizeSongs(t.songlist)).then(function(t){n.songLists=t})}):this.$router.push({path:"/rank"})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){var n=t.data;dt(n)&&e.push(ut(n))}),e}},computed:l()({image:function(){return this.songLists.length?this.songLists[0].image:""},title:function(){return this.rankDetail.ListName},songs:function(){return this.songLists},des:function(){return this.rankData.update_time},author:function(){return""}},Object(u.c)(["rank"])),components:{MusicList:tt}},_t={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"rank-list"}},[n("music-list",{attrs:{image:t.image,title:t.title,songs:t.songs,des:t.des,author:t.author}}),t._v("\n  adg\n")],1)},staticRenderFns:[]};var gt=n("VU/8")(vt,_t,!1,function(t){n("gk4K")},"data-v-2dad20e4",null).exports;r.default.use(x.a);var yt,Ct=new x.a({routes:[{path:"/recommend",component:z,children:[{path:":id",component:mt}]},{path:"/rank",component:H,children:[{path:":id",component:gt}]},{path:"/search",component:W.default},{path:"/",redirect:"/recommend"}]}),wt=n("Au9i"),St=n.n(wt),kt=n("v5o6"),Lt=n.n(kt),bt={recommend:{},playState:!1,fullScreen:!1,playList:[],sequenceList:[],mode:d,currentIndex:-1,rank:{},singer:{}},xt=function(t){return t.recommend},Tt=function(t){return t.playState},Et=function(t){return t.fullScreen},It=function(t){return t.playList},$t=function(t){return t.sequenceList},Nt=function(t){return t.mode},Rt=function(t){return t.currentIndex},Pt=function(t){return t.playList[t.currentIndex]||{}},Dt=function(t){return t.rank},Ut="SET_PLAYLIST",Ot="SET_SEQUENCELIST",Mt="SET_PLAYSTATE",Ft="SET_FULLSCREEN",jt="SET_CURRENT_INDEX",qt=function(t,e){var n=t.commit,i=(t.state,e.list),s=e.index;n(Ut,i),n(Ot,i),n(jt,s),n(Ft,!0),n(Mt,!0)},At=function(t,e){var n=t.commit,i=(t.state,e.list);n(Ut,i),n(Ot,i),n(jt,0),n(Ft,!0),n(Mt,!0)},Vt=n("bOdI"),Yt=n.n(Vt),zt=(yt={},Yt()(yt,"SET_RECOMMEND",function(t,e){t.recommend=e}),Yt()(yt,Ut,function(t,e){t.playList=e}),Yt()(yt,Ot,function(t,e){t.sequenceList=e}),Yt()(yt,jt,function(t,e){t.currentIndex=e}),Yt()(yt,Ft,function(t,e){t.fullScreen=e}),Yt()(yt,Mt,function(t,e){t.playState=e}),Yt()(yt,"SET_PLAY_MODE",function(t,e){t.mode=e}),Yt()(yt,"SET_RANK",function(t,e){t.rank=e}),yt);r.default.use(u.a);var Bt=new u.a.Store({state:bt,actions:s,getters:i,mutations:zt});n("n4oI"),n("d8/S");r.default.use(St.a),r.default.config.productionTip=!1,Lt.a.attach(document.body),new r.default({el:"#app",router:Ct,store:Bt,render:function(t){return t(b)}})},QorW:function(t,e){},RO71:function(t,e){},TZSG:function(t,e){},YOyO:function(t,e,n){"use strict";var i=n("A1IV"),s=n.n(i),r=n("hak3");var a=function(t){n("rAYQ")},o=n("VU/8")(s.a,r.a,!1,a,"data-v-24b78880",null);e.default=o.exports},"d8/S":function(t,e){},gk4K:function(t,e){},"h/N8":function(t,e){},hak3:function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"search"}},[this._v("search")])},staticRenderFns:[]};e.a=i},hxP8:function(t,e,n){"use strict";var i=n("h/N8"),s=n.n(i),r=n("Hzh2");var a=function(t){n("xt4S")},o=n("VU/8")(s.a,r.a,!1,a,"data-v-7ec6eb52",null);e.default=o.exports},iwTL:function(t,e){},mBCK:function(t,e){},n4oI:function(t,e){},pYmz:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="undefined"!=typeof window;i&&(window.Swiper=n("gsqX"));var s={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&i&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&i){delete t.options.notNextTick;var e=!1;for(var n in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(n)&&t.options[n]&&(e=!0,t.defaultSwiperClasses[n]=t.options[n]);var s=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(s):s()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),n("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},a=n("VU/8")(s,r,!1,null,null,null);e.default=a.exports},pn5V:function(t,e){},porf:function(t,e){},rAYQ:function(t,e){},v2ns:function(t,e){},w7DE:function(t,e){},xt4S:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.eaf776d808d23ba91815.js.map