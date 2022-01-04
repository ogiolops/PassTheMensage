function addConselho(){
    const conselho = document.getElementById('textInsert').value
    const ultimoConselho = document.getElementById('lastMassage')
    ultimoConselho.innerHTML = ' " ' + conselho + ' " '

    // Limpar input 

    document.getElementById('textInsert').value = "";
    
}