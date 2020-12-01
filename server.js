const express=require('express')
const app=express()

app.use('/',express.static(__dirname+"/public"))

function decryption(encryptdata) {
    let decryptData=""
  for (let i = 0; i < encryptdata.length; i++) {
      if(encryptdata.charAt(i)<='z'  && encryptdata.charAt(i)>='a'){
          decryptData+=encryptdata.charAt(i).toUpperCase()
      }
      else{
          decryptData+=encryptdata.charAt(i).toLowerCase()
      }
  }
  return  decryptData
}


function decrypt(req,res,next) {
    let decryptData=""
   if(req.query.code){
       let encryptdata=req.query.code
       decryptData=decryption(encryptdata)
       req.query.code=decryptData
   }
    next()
}

function decodebase64(req,res,next) {
    let decodedData=""
    if (req.query.code) {
        let encodedData=req.query.code  
         decodedData=Buffer.from(encodedData,'base64').toString('ascii')
         req.query.code=decodedData
    }   
    next() 
}

app.get('/eval',decrypt,decodebase64,(req,res)=>{
    let data =0
    if(req.query.code){
      data=eval(req.query.code)
    }
    res.send("result = "+data)
})

app.listen(3333,()=>{
    console.log("http://localhost:3333");
})

