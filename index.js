
const passwordkeys = {

    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

const getpasswordkeys = [
    function upperCase(){
    return passwordkeys.upperCase[Math.floor(Math.random() * passwordkeys.upperCase.length)]
    },
    function lowerCase(){
        return passwordkeys.lowerCase[Math.floor(Math.random() * passwordkeys.lowerCase.length)]
        },
        function symbol(){
            return passwordkeys.symbol[Math.floor(Math.random() * passwordkeys.symbol.length)]
            },
            function number(){
                return passwordkeys.number[Math.floor(Math.random() * passwordkeys.number.length)]
                }
]



function GeneratePassword() {
     
    let upperCase = document.getElementById("upperCase").checked
    let lowerCase = document.getElementById("lowerCase").checked
    let symbol = document.getElementById("symbol").checked
    let number = document.getElementById("number").checked
   let passwordlength = document.getElementById("passwordlength")
   let passwsordvalue = document.getElementById("passwordvalue")
   if(passwordlength.value == ""){
    alert("Please Specify The Password Length.")
    return
   }
    if(upperCase + lowerCase + symbol + number == 0){
        alert("Please fill at least one box.")
        return
    }
    if(upperCase + lowerCase + symbol + number > passwordlength.value ){
        alert("Password Length Too Small To Fufil Condition.")
        return
    }
     if(passwordlength.value > 99){
        alert("Maximum Value Of Password Is 99.")
        return
     }
   let password = ''
   
    while(passwordlength.value > password.length){
   
   if(upperCase){
    password += getupperCase()
   }
    if(lowerCase) {
        password += getlowerCase()  
    }
    if(symbol){
        password += getSymbol()
    }
    if(number){
        password += getNumber()
    }
    }
   console.log(password)
  passwsordvalue.value = password.slice(0,passwordlength.value)
}

 function getupperCase(){
    let getpassword = getpasswordkeys[0]
    return getpassword()
 }
 function getlowerCase(){
    let getpassword = getpasswordkeys[1]
    return getpassword()
 }
 function getSymbol(){
    let getpassword = getpasswordkeys[2]
    return getpassword()
 }
 function getNumber(){
    let getpassword = getpasswordkeys[3]
    return getpassword()
 }


 function copyPassword(){
    let passwsordinput = document.getElementById("passwordvalue")
    if(passwsordinput.value == ""){
        alert("Please Generate A Password.")
        return
    }
    passwsordinput.select()
    document.execCommand("copy")
    alert("Password Copied To Clipboard.")
 }
