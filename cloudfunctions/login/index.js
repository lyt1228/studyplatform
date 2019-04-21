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

exports.main = async (event, context) =>{
  const logindata = await db.collection('userinfo').where({
    account: event.account,
    psw:event.psw
  }).get()
  
  return{
    data : logindata.data[0]
  }
} 
