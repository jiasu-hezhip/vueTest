import {request} from "../../../tabbar/src/network/request";

export function getHomeData() {
  return request({
    url: '/home/multidata'
  })
}
