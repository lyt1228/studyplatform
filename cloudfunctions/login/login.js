// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: 'studytest1-0726c8'
})

const db = cloud.database({
  env: 'studytest1-0726c8'
})
const _ = db.command

const data = ''
const err = 'login'
exports.main = async (event, context) =>{
  const logindata = await db.collection('userinfo').where({
    account: event.account
  }).get()

  err:if(logindata.data[0] == null){
    return "账号不存在"
  } else if(logindata.data[0].psw !== event.psw){
    return "密码不正确"
  }

  return{
    data:logindata.data[0],
    err
  }
} 
