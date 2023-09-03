function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
    let img = document.querySelector('#imagem')
    
    
        if(fano.value.length === 0 || fano.value.length > ano){
            alert('verifique os dados e tente novamente')
        }else {
            let fsex = document.getElementsByName('radsex')
            let idade = ano - Number(fano.value)
            let genero = ''
            if (fsex[0].checked){
                genero = 'Homem'
                if(idade >= 0 && idade < 10){
                    img.src = './image/foto-bebe-h.png'
                    document.body.style.backgroundColor = 'purple'
                       
                }else if (idade < 21){
                    img.src = './image/foto-joven-h.png'
                    document.body.style.backgroundColor = 'green'

                }else if (idade < 50){
                    img. src = './image/foto-aduto-h.png'
                    document.body.style.backgroundColor = '#ccc'

                }else {
                    img.src = './image/foto-idoso-h.png'
                    document.body.style.backgroundColor = 'red'
                    

                }
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if(idade >= 0 && idade < 10){
                    
                }else if (idade < 21){
                    img.src = './image/foto-joven-m.png'

                }else if (idade < 50){
                    img.src = './image/foto-aduta-m.png'

                }else {
                    
                }
            }
            res.style.textAlign = 'center'
            res.innerHTML = `Detectamos ${genero} Com ${idade} Anos`
            
            
            
        
            
        }
    
}



