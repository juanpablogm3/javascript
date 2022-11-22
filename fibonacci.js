alert("Juguemos un juego! El juego consiste en aprender la secuencia de números llamada Fibonacci, solo te pediremos que calcules 10 números")
alert("Solo sigue las instrucciones, la secuencia Fibonacci consiste en que cada número es la suma de los 2 anteriores de la secuencia... y te damos una ayudita el primero es 0 y el segundo es 1")
let secuenciaFibonacci
let secuenciaParcialStr
let secuenciaParcialNum
let lastValue
let lastPreviousValue

do{
    secuenciaParcialStr = (prompt("Ingrese el primer número: "))
    if (secuenciaParcialStr!=0){
        alert("recuerda que el primero es 0!")
    } else {
        alert("Correcto, el primero es 0, recuerdas cuál te dijimos que era el segundo?")
        secuenciaParcialNum = Number(secuenciaParcialStr)
        lastPreviousValue=lastValue
        lastValue= secuenciaParcialNum
        secuenciaFibonacci = secuenciaParcialStr

        console.log("Secuencia Fibonacci: " +secuenciaFibonacci)
        console.log("secuenciaParcialStr: " +secuenciaParcialStr)
        console.log("lastPreviousValue: " +lastPreviousValue)
        console.log("lastValue: " +lastValue)
        console.log("SecuenciaParcialNum: " +secuenciaParcialNum)
    }
    
}while (secuenciaParcialStr!=0)

do{
    secuenciaParcialStr = prompt("Ingresa el segundo número de la secuencia: ")
    if (secuenciaParcialStr!=1){
        alert("recuerda que el segundo es 1!")
    } else {
        alert("Correcto, el segundo es 1, puedes calcular los siguientes?")
        secuenciaParcialNum = Number(secuenciaParcialStr)
        lastPreviousValue=lastValue
        lastValue=secuenciaParcialNum
        secuenciaFibonacci += ", " +secuenciaParcialStr

        console.log("Secuencia Fibonacci: " +secuenciaFibonacci)
        console.log("secuenciaParcialStr: " +secuenciaParcialStr)
        console.log("lastPreviousValue: " +lastPreviousValue)
        console.log("lastValue: " +lastValue)
        console.log("SecuenciaParcialNum: " +secuenciaParcialNum)
    }
}while (Number(secuenciaParcialStr)!=1)
    
do{
    secuenciaParcialStr=prompt("Ingresa el siguiente número de la secuencia: ")
    if (Number(secuenciaParcialStr)==lastPreviousValue + lastValue){
        alert("Correcto, puedes calcular los siguientes?")
        secuenciaParcialNum = Number(secuenciaParcialStr)
        lastPreviousValue=lastValue
        lastValue=secuenciaParcialNum
        secuenciaFibonacci += ", " +secuenciaParcialStr

        console.log("Secuencia Fibonacci: " +secuenciaFibonacci)
        console.log("secuenciaParcialStr: " +secuenciaParcialStr)
        console.log("lastPreviousValue: " +lastPreviousValue)
        console.log("lastValue: " +lastValue)
        console.log("SecuenciaParcialNum: " +secuenciaParcialNum)
    } else{
        alert("recuerda que es la suma de los 2 anteriores!")
    }      
}while (Number(secuenciaParcialStr)!= 55)

alert("Has completado la secuencia exitosamente, Felicitaciones!")
alert("La secuencia Fibonacci es: " +secuenciaFibonacci)


