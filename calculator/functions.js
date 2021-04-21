disable();
let result = document.getElementById('result')
function del(){
    let s = "";
    for (let i = 0; i < result.value.length - 1; i++){
        s += result.value[i]
    }
    result.value = s
}
function empty(){
    result.value = ""
    disable()
}
function fact(){
    if (result.value !== ""){
        var l = 1
        for (var i = 1 ; i <= eval(result.value); i++){
            l *= i
        }
        result.value = l
    }
}
function log(){
    if (result.value !== ""){
        result.value = Math.log10(result.value)
    }
}
function pow(){
    if (result.value !== "") {
        result.value *= result.value
    }
}
function sqrt(){
    if (result.value !== ""){
        result.value = Math.sqrt(result.value)
    }
}
function inv(){
    if (result.value !== ""){
        result.value = 1/eval(result.value)
    }
}
function not(){
    if (result.value !== ""){
        result.value = Math.pow(10,eval(result.value))
    }
}
function mod(){
    result.value += "%"
}
function plus(){
    result.value += "+"
}
function minus(){
    result.value += "-"
}
function times(){
    result.value += "*"
}
function div(){
    result.value += "/"
}
function slash(){
    result.value += "."
}
function calc(){
    if (result.value !== ""){
        result.value = eval(result.value)
    }
}
function num1(){
    result.value += "1"
}
function num2(){
    result.value += "2"
}
function num3(){
    result.value += "3"
}
function num4(){
    result.value += "4"
}
function num5(){
    result.value += "5"
}
function num6(){
    result.value += "6"
}
function num7(){
    result.value += "7"
}
function num8(){
    result.value += "8"
}
function num9(){
    result.value += "9"
}
function num0(){
    result.value += "0"
}
function enable(){
    for (var i = 1; i<=7;i++){
        document.querySelector("#disable"+i).disabled = false;
    }
}
function disable(){
    for (var i = 1; i<=7;i++){
        document.querySelector("#disable"+i).disabled = true;
    }
}