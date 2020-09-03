import asiox from 'axios'

export function request(config) {
  //1.创建
    const instance = asiox.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout:5000
    })
  //2.拦截

    instance.interceptors.request.use(config=>{
      // console.log(config)
      return config
    },err => {
      console.log(err)
    })


    instance.interceptors.response.use(res=>{

      return res.data
    },err => {
      console.log(err)
    })

  //3.使用
    return instance(config)


}
