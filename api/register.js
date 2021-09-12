import request from '@/utils/request'

export default {
    //根据手机号发验证码
  sendCode(phone) {
    return request({
      url: `/edumsm/sendSms/${phone}`,
      method: 'get'
    })
  },

  //注册的方法
  registerMember(registVo) {
    return request({
      url: `/educenter/regist`,
      method: 'post',
      data: registVo
    })
  }

}
