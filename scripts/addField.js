// Procurar obotão
document.querySelector("#add-time")
// quando clicar no botão
.addEventListener("click", cloneField)
//Executar uma ação
function cloneField() {
// Duplicar os campos. Que campos?
   const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

// pegar os campos. que campos? 
    const fields = newFieldContainer.querySelectorAll("input")

// para cada campo, limpar
fields.forEach(function(field){
//Pega o field do momento e limpa ele
    field.value = ""
})

// Colocar na página: onde na página?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}