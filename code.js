function somar(){
    var box1 = window.document.getElementById('n1')
    var box2 = window.document.getElementById('n2')
    var resp = window.document.getElementById('resp')
    var n1 = Number(box1.value)
    var n2 = Number(box2.value)
    var sum = n1 + n2
    resp.innerHTML = `A soma entre ${n1} e ${n2} é: ${sum}!`
}

function subtrator(){
    var box1 = window.document.getElementById('s1')
    var box2 = window.document.getElementById('s2')
    var resp = window.document.getElementById('resp2')
    var num1 = Number(box1.value)
    var num2 = Number(box2.value)
    var sub = num1 - num2
    resp.innerHTML = `A subtração entre ${num1} e ${num2} é: ${sub}!`
}

function multiplicar(){
    var box1 = window.document.getElementById('x1')
    var box2 = window.document.getElementById('x2')
    var resp2 = window.document.getElementById('resp3')
    var n1 = Number(box1.value)
    var n2 = Number(box2.value)
    var mult = n1 * n2
    resp2.innerHTML = `A multiplicação entre ${n1} e ${n2} é: ${mult}!`
}

function dividir(){
    var box1 = window.document.getElementById('d1')
    var box2 = window.document.getElementById('d2')
    var resp = window.document.getElementById('resp4')
    var num1 = Number(box1.value)
    var num2 = Number(box2.value)
    var div = num1 / num2
    resp.innerHTML = `A divisão entre ${num1} e ${num2} é: ${div}!`
}