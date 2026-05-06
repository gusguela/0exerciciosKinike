function somar(){
    var n1 = document.getElementById("sum_A").valueAsNumber
    var n2 = document.getElementById("sum_B").valueAsNumber
    var ans = document.getElementById("ans_sum")

    
    ans.textContent = `A Soma dos números é: ${n1 + n2}`
}

function subt(){
    var n1 = document.getElementById("sub_A").valueAsNumber
    var n2 = document.getElementById("sub_B").valueAsNumber
    var ans = document.getElementById("ans_sub")
    
    ans.textContent = `A Subtração dos números é: ${n1 - n2}`
}

function mult(){
    var n1 = document.getElementById("mult_A").valueAsNumber
    var n2 = document.getElementById("mult_B").valueAsNumber
    var ans = document.getElementById("ans_mult")
    
    ans.textContent = `A Multiplicação dos números é: ${n1 * n2}`
}

function divs(){
    var n1 = parseFloat(document.getElementById("divs_A").value)
    var n2 = parseFloat(document.getElementById("divs_B").value)
    var ans = document.getElementById("ans_divs")
    
    if (n2 === 0){
        ans.textContent = "Não é possível dividir por 0"
    }else{
        ans.textContent = `A Divisão dos números é: ${n1 / n2}`
    }
}