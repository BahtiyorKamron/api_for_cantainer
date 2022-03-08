const fs = require("fs")
const path = require("path")

module.exports = class Cantainer {
  static async get(req,res){
    let cantainer = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","cantainer.json")))
    res.json({
      data : cantainer
    })
  }
  static async post(req,res){
    let cantainer = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","cantainer.json")))
    req.body.id = cantainer.length ? cantainer.length : 1
    cantainer.push(req.body)
    fs.writeFileSync(path.join(process.cwd(),"data","cantainer.json"),JSON.stringify(cantainer,null,4))
    res.json({
      data : req.body,
      message : "Qo'shildi"
    })
  }
  static async delete(req,res){
    let cantainer = JSON.parse(fs.readFileSync(path.join(process.cwd(),"data","cantainer.json")))
    let c = null
    cantainer = cantainer.map(el => {
      if(el.id==req.body.id){
        c = el
      }else{
        return el
      }
    })
    if(req.body.clean){ cantainer=[]}
    fs.writeFileSync(path.join(process.cwd(),"data","cantainer.json"),JSON.stringify(cantainer,null,4))
    
    res.json({
      message : "O'chirildi",
      data : c
    })
  }

}
