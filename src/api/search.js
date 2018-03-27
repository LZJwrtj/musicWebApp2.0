import jsonp from 'assets/js/jsonp'
import {commonParams} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    needNewCode: 1,
    format: 'json',
    jsonpCallback: ''
  })
  const option = {
    param: 'jsonpCallback',
    prefix: 'jp'
  }
  return jsonp(url, data, option)
}

export function search(value, page, zhida, perpage) {
  // const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  // const data = Object.assign({}, commonParams, {
  //   g_tk: 5381,
  //   platform: 'h5',
  //   needNewCode: 1,
  //   w: value,
  //   zhidaqu: 1,
  //   p: page,
  //   catZhida: zhida ? 1 : 0,
  //   t: 0,
  //   flag: 1,
  //   ie: 'utf-8',
  //   sem: 1,
  //   perpage: perpage,
  //   n: perpage,
  //   aggr: 0,
  //   remoteplace: 'txt.mqq.all'
  // })
  // const option = {
  //   param: 'jsonpCallback',
  //   prefix: 'jp'
  // }
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  const data = {
    g_tk: 5381,
    uin: 0,
    notice: 0,
    platform: 'h5',
    needNewCode: 1,
    w: value,
    zhidaqu: 1,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage,
    n: perpage,
    p: page,
    remoteplace: 'txt.mqq.all',
    _: 1522144765713
  }
  const option = {
    param: 'jsonpCallback',
    prefix: 'jp'
  }
  return jsonp(url, data, option)
}
