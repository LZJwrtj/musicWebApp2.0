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

export function getDiss() {
  const url = 'api/getDiss'
  const data = Object.assign({}, commonParams, {
    picmid: 1,
    rnd: Math.random(),
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

export function getDetail(id) {
  const url = 'api/getCdInfo'
  const data = Object.assign({}, commonParams, {
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    disstid: id,
    g_tk: 1101865453,
    // jsonpCallback: 'playlistinfoCallback',
    loginUin: 747839772,
    hostUin: 0,
    platform: 'yqq',
    needNewCode: 0,
    uin: ''
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
