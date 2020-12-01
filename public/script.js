let inpCode=document.querySelector('#inpCode')
let code=document.querySelector('#code')
let encodebtn=document.querySelector('#encodebtn')
let evalbtn=document.querySelector('#evalbtn')
let myform=document.querySelector('#myform')

encodebtn.addEventListener('click',()=>{
    let data= inpCode.value
    let codedData=btoa(data)
    let encryptData = encrypt(codedData)
    code.value=encryptData
})

function encrypt(data) {
      let encryptData=""
    for (let i = 0; i < data.length; i++) {
        if(data.charAt(i)<='z'  && data.charAt(i)>='a'){
            encryptData+=data.charAt(i).toUpperCase()
        }
        else{
            encryptData+=data.charAt(i).toLowerCase()
        }
    }
    return  encryptData
}