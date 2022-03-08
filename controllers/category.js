const fs = require("fs")
const path = require("path")
module.exports = class Category {
  static async get(req,res){
    let categories = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','category.json')))
    res.json({
      data : categories
    })
  }
  static async post(req,res){
    let categories = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','category.json')))
    req.body.id = categories.length ? categories.length : 1
    categories.push(req.body)
    fs.writeFileSync(path.join(process.cwd(),"data","category.json"),JSON.stringify(categories,null,4))
    res.json({
      message : "qo'shildi",
      data : req.body
    });
  }
  static async delete(req,res){
    let categories = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','category.json')))
    let u = null
    categories = categories.map( el => {
      if( el.id==req.body.id ){
          u = el
      }else{
        return el
      }
    })
    fs.writeFileSync(path.join(process.cwd(),"data","category.json"),JSON.stringify(categories,null,4))
    res.json({
      message : "O'chirildi",
      data : u
    })
  }
  static async update(req,res){
    let categories = JSON.parse(fs.readFileSync(path.join(process.cwd(),'data','category.json')))
    let u = null
    categories = categories.map(el => {
      if( el.id == req.body.id ){
        el.name = req.body.name || el.name
        u = el
      }
      return el
    })
    fs.writeFileSync(path.join(process.cwd(),"data","category.json"),JSON.stringify(categories,null,4))
    
    res.json({
      message : "O'zgartirildi",
      data : u
    })
  }
}
