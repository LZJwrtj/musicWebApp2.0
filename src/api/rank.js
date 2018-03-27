import {commonParams} from './config'
import axios from 'axios'

const debug = process.env.NODE_ENV !== 'production'

export function getRank() {
  const url = debug ? '/api/getRank' : 'http://47.95.225.38/music/api/getRank'
  const data = Object.assign({}, commonParams, {
    needNewCode: 1,
    platform: 'h5',
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getRankList(id) {
  const url = debug ? '/api/getRankList' : 'http://47.95.225.38/music/api/getRankList'
  const data = {
    g_tk: 5381,
    uin: 0,
    format: 'json',
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: id,
    _: 1521983529050
  }
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
