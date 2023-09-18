const calculo_Imc = () => {
    let v1,v2,resp,situacao
    v1 = document.getElementById("altura").value
    v2 = document.getElementById("peso").value

const calculo = {
    alt : 0,
    pes : 0,
    conta : (v1,v2) => {
        this.alt = v1
        this.pes = v2
        return (parseFloat(this.pes) / (parseFloat(this.alt) * parseFloat(this.alt)))
    }
}
resp = calculo.conta(v1,v2)

if(resp<18.5){
    situacao = "abaixo do peso"

}else if((resp>18.6) && (resp<24.9)){
    situacao = "Peso ideal"

}else if((resp>25.0) && (resp<29.9)){
    situacao = "Levemente acima do peso"

}else if((resp>30.0) && (resp<34.9)){
    situacao = "Obesidade grau 1"

}else if((resp>35.0) && (resp<39.9)){
    situacao = "Obesidade grau 2"

}else if(resp>40.0){
    situacao = "Obesidade grau 3"
}
document.getElementById("resp").innerHTML = resp
// document.getElementById("alt").innerHTML = v1
// document.getElementById("pes").innerHTML = v2
document.getElementById("sit").innerHTML = situacao
}

function resetar(){
    document.getElementById("resp").innerHTML = ""
    document.getElementById("sit").innerHTML = ""
}