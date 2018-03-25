import {commonParams} from './config'
// import jsonp from 'assets/js/jsonp'
import axios from 'axios'
export function getRank() {
  const url = '/api/getRank'
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
  const url = '/api/getRankList'
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
