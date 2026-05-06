function mostrar(){
    var texto = document.getElementById('i1').value
    var cor = document.getElementById('i2').value
    var data = document.getElementById('i3').value
    var check = document.getElementById('i4').value
    var printTexto = document.getElementById('printTexto')
    var printCor = document.getElementById('printCor')
    var printData = document.getElementById('printData')
    var printCheck = document.getElementById('printCheck')
    var printDiv = document.getElementById('print')
    
    printTexto.textContent = texto
    printCor.innerHTML = "A cor selecionada é: " + cor
    printData.innerText = data
    printData.textContent = check
    printDiv.style.display = 'block'

    printDiv.style.backgroundColor = cor
}