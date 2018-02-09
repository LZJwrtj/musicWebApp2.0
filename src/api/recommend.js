import jsonp from 'assets/js/jsonp'
import {commonParams} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    _: 1516025447737
  })
  let options = {
    param: 'jsonpCallback',
    name: 'callback'
  }
  return jsonp(url, data, options)
}

// export function getDetail(recommendId) {
//   const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
//   const data = Object.assign({}, commonParams, {
//     platform: 'h5',
//     needNewCode: 1,
//     new_format: 1,
//     pic: 500,
//     disstid: recommendId,
//     type: 1,
//     json: 1,
//     utf8: 1,
//     onlysong: 0,
//     nosign: 1
//   })
//   return jsonp(url, data, options)
// }

// ?picmid=1&rnd=0.13608446194498391&g_tk=1135554968&jsonpCallback=getPlaylist&loginUin=337825561&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&categoryId=10000000&sortId=5&sin=0&ein=29

export function getDiss() {
  const url = 'api/getDiss'
  const data = Object.assign({}, commonParams, {
    picmid: 1,
    rnd: Math.random(),
    // g_tk: 1135554968,
    jsonpCallback: 'getPlaylist',
    loginUin: 747829772,
    hostUin: 0,
    notice: 0,
    platform: 'yqq',
    needNewCode: 0,
    categoryId: 10000000,
    sortId: 5,
    sin: 0,
    ein: 29,
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
