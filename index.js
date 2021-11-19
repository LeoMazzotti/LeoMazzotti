function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')  
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
          
    
    if (hora > 00 && hora < 12 ){
        msg.innerHTML =  `Bom dia! Agora são ${hora}:${min} horas.`
        img.src = 'dia.jpg'
        document.body.style.background = '#5386E4'
    }else if (hora <= 17 && min > 59){
        msg.innerHTML =  `Boa tarde! Agora são ${hora}:${min} horas.`
        img.src = 'tarde.jpg'
        document.body.style.background = '#FF8C42'
    } else {
        msg.innerHTML =  `Boa noite! Agora são ${hora}:${min} horas.`
        img.src = 'noite.jpg'
        document.body.style.background = '#2F394D'
    }
}