const fs = require("fs")
const path = require("path")
module.exports = class Users {
  static async get(req,res){
    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))
    res.json({
      data : users
    })
  }
  static async post(req,res){
    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))
    users.push(req.body)
    fs.writeFileSync(path.join(process.cwd(),"data","users.json"),JSON.stringify(users,null,4))

    res.json({
      message : "qo'shildi",
      data : req.body
    });
  }
  static async delete(req,res){
    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))
    let u = null
    if(!req.body.clean){
      users = users.filter(el => {
      if(el.id==req.body.id){
        u = el
      }else{
        return el
      }
    })
    }else{
      users = []
    }
    fs.writeFileSync(path.join(process.cwd(),"data","users.json"),JSON.stringify(users,null,4))
    res.json({
      data : u,
      message : "o'chirildi"
    })
  }
  static async update(req,res){
    let users = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","users.json")))
    let u = null
    users = users.map(el => {
      if(el.id==req.body.id){
        el.name = req.body.name || el.name
        el.password = req.body.password || el.password
        u = el
      
      }
      return el
    })
    fs.writeFileSync(path.join(process.cwd(),"data","users.json"),JSON.stringify(users,null,4))

    res.json({
      data : u,
      message : "o'zgartirildi!"
    })
  }
}
