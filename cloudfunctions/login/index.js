// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init({
  env: 'studytest1-0726c8'
})



// exports.main = (event, context) => {
//   console.log(event)
//   console.log(context)
  const db = cloud.database({
    env: 'studytest1-0726c8'
  })
  const _ = db.command
//   const ne = db.collection('userinfo').where({
//     stat: _.eq({
//       _id: 'XLaaEYnnuWjci1QA'
//     })
//   }).get().then(res=>{
    
//   })
//   // 可执行其他自定义逻辑
//   // console.log 的内容可以在云开发云函数调用日志查看

//   // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
//   const wxContext = cloud.getWXContext()

//   return {
//     ne,
//     event

//   }
// }

// exports.main = async (event, context) => await db.collection('userinfo').where({ 
//       name: '罗才俊'
//   }).get()


exports.main = async (event, context) =>{
  const data = await db.collection('userinfo').where({
    name: '罗才俊'
  }).get()

  return{
    data
  }
} 
