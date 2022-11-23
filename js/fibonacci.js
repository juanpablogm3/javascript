let secuenciaFibonacci
let secuenciaParcialStr
let secuenciaParcialNum
let lastValue
let lastPreviousValue

function actualizarVariables() {
    secuenciaParcialNum = Number(secuenciaParcialStr)
    lastPreviousValue=lastValue
    lastValue= secuenciaParcialNum
    secuenciaFibonacci += ", " +secuenciaParcialStr
}

function mostrarVariablesEnConsola(){
    console.log("Secuencia Fibonacci: " +secuenciaFibonacci)
    console.log("secuenciaParcialStr: " +secuenciaParcialStr)
    console.log("lastPreviousValue: " +lastPreviousValue)
    console.log("lastValue: " +lastValue)
    console.log("SecuenciaParcialNum: " +secuenciaParcialNum)
}

alert("Juguemos un juego! El juego consiste en aprender la secuencia de números llamada Fibonacci")
let validation
do{
    validation = prompt("Conoces la secuencia Fibonacci? (si / no)")
    switch (validation) {
        case "si":
            alert("Perfecto! Empecemos entonces")
            break;
        case "no":
            alert("La secuencia Fibonacci es una secuencia de números que consiste en que cada número es el resultante de la suma de los dos anteriores")
            break;
        default:
            alert("Debes responder si conoces la secuencia Fibonacci con si o no")
            break;
    }
}while (validation != "si" && validation != "no")

alert("Sigue las instrucciones, solo te pediremos que calcules 10 números de la secuencia Fibonacci y te damos una ayudita el primero es 0 y el segundo es 1")

do{
    secuenciaParcialStr = (prompt("Ingrese el primer número: "))
    if (secuenciaParcialStr!="0"){
        alert("recuerda que el primero es 0!")
    } else {
        alert("Correcto, el primero es 0, recuerdas cuál te dijimos que era el segundo?")
        actualizarVariables()
        secuenciaFibonacci = secuenciaParcialStr

        mostrarVariablesEnConsola()
    }
}while (secuenciaParcialStr!="0")

do{
    secuenciaParcialStr = prompt("Ingresa el segundo número de la secuencia: ")
    if (secuenciaParcialStr!="1"){
        alert("recuerda que el segundo es 1!")
    } else {
        alert("Correcto, el segundo es 1, puedes calcular los siguientes?")
        actualizarVariables()
        
        mostrarVariablesEnConsola()
    }
}while (Number(secuenciaParcialStr)!="1")
    
do{
    secuenciaParcialStr=prompt("Ingresa el siguiente número de la secuencia: ")
    if (Number(secuenciaParcialStr)==lastPreviousValue + lastValue){
        alert("Correcto, puedes calcular el siguiente?")
        actualizarVariables()
        
        mostrarVariablesEnConsola()
    } else{
        alert("recuerda que es la suma de los 2 anteriores!")
    }      
}while (secuenciaParcialNum!= 21)

secuenciaParcialStr=prompt("Ingresa el siguiente número de la secuencia: ")

if (Number(secuenciaParcialStr)==lastPreviousValue + lastValue){
    alert("Correcto!!")
    actualizarVariables()
    
    mostrarVariablesEnConsola()
} else{
    alert("recuerda que es la suma de los 2 anteriores!")
}      

alert("Has completado la secuencia exitosamente, Felicitaciones!")
alert("La secuencia Fibonacci es: " +secuenciaFibonacci)
