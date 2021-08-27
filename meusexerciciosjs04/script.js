const button = document.getElementById('button')

button.addEventListener('click', calcularmedia)

function calcularmedia(){
    const n1 = Number(document.getElementById('n1').value)
    if (n1 == "") {
        alert("Adicione Uma nota ao campo Nota!")
        return
    }
    
    const n2 = Number(document.getElementById('n2').value)
    if (n2 == "") {
        alert("Adicione Uma nota ao campo Nota!")
        return
    }
    
    
    result = (n1 + n2)/2


    var resposta 
    if (result >= 7) {
        resposta = "Parabéns"
    }else {
        resposta = "Estude mais"
    }
    
    
    document.getElementById('mensagem').innerText += ` ${resposta} \n Suas notas foram: ${n1} e ${n2} \n E sua média foi: ${result}\n`
    
    if (result >= 7) {
        document.getElementById('boxe').style.backgroundColor = 'blue'
        document.querySelector('body').style.backgroundColor = '#CCC'
    }
    else {
        document.getElementById('boxe').style.backgroundColor = 'red'
        document.querySelector('body').style.backgroundColor = '#EEE'
    }
    console.log(result, resposta)
}