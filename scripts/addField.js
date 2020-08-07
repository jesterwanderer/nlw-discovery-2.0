// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma acao
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //Para cada campo, limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}