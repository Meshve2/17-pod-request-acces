let btn=document.querySelector(".btn")
console.log(btn)

let redtext=document.querySelector(".redtext")
let mailinput=document.querySelector(".mail-input")


btn.addEventListener("click", function(){
    let inputvalue=mailinput.value
    console.log(inputvalue)
    let regex=/^[^\s@]+@[^\s@]+.[^\s@]+$/;
    let valid=regex.test(inputvalue)
    console.log(valid)
    if(valid==false){
        redtext.style.display="block"
    }else{
        redtext.style.display="none"
    }
})

