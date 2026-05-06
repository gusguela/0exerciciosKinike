function calcmedia(){
    var a = document.getElementById("nota1").valueAsNumber
    var b = document.getElementById("nota2").valueAsNumber
    var c = document.getElementById("nota3").valueAsNumber
    var ans = document.getElementById("resposta")
    var media = (a + b + c)/3

    if (media >= 7){
        ans.textContent = `${media.toFixed(2)} - PASSOU DE ANO ✅`;
    } else {
        ans.textContent = `${media.toFixed(2)} - REPROVOU DE ANO ❌`;
    }
}