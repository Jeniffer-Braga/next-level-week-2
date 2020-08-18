//Procurar o botão
document.querySelector("#add-time")

//Quando clicar no botão - Adicionar um evento
.addEventListener('click', cloneField)

//Executar uma ação - função
function cloneField() {

    //Duplicar os campos(função cloneNode): quais campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)  

    //Limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    fields.forEach(function(field) {
        field.value = ""
    })
    
    //Colocar na página(appendChild - add filho): onde?
    document.querySelector("#schedule-itens").appendChild(newFieldContainer)
}
 