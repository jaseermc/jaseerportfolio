

function validateName(){
    let name=document.getElementById("name").value 
    let regex=/^[a-zA-Z ]+$/
    if(regex.test(name)){
        document.getElementById("message1").innerHTML="verified"
        document.getElementById("message1").style.color="green"
        return true
    }else{
        document.getElementById("message1").innerHTML="Nope.Try again"
        document.getElementById("message1").style.color="red"
        return false
        
    }
}

const validateNumber=()=>{
let mnum=document.getElementById("mnum").value
let reg=/^[0-9]{10}$/
if(reg.test(mnum)){
    document.getElementById("message2").innerHTML="verified"
    document.getElementById("message2").style.color="green"
    return true
}else{
    document.getElementById("message2").innerHTML="Opps,somthing has gone wrong"
    document.getElementById("message2").style.color="red"
    return false
}
}


function validateEmail() {
    let mnum = document.getElementById("email").value
    let reg =/^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-_]{2,20})\.([a-z]{2,6})$/
    if (reg.test(mnum)) {
        document.getElementById("message3").innerHTML = "verified"
        document.getElementById("message3").style.color = "green"
        return true
    } else {
        document.getElementById("message3").innerHTML = "Please enter a valid email address"
        document.getElementById("message3").style.color = "red"
        return false
    }

}
let validateAllFields=()=>{
    validateEmail();
    validateNumber();
    validateName();

    if (validateEmail() && validateNumber() && validateName()) {
    return true
    } else{
    return false

}
}

