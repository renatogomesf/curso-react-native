
let lista = document.getElementById('lista')
let inputTarefa = document.getElementById('tarefa')

let tarefas = []


function renderTarefa() {
    lista.innerHTML = ''
    
    tarefas.map((element,index)=>{
        let item = document.createElement('li')
        let apagar = document.createElement('a')

        apagar.setAttribute('href','#')
        apagar.setAttribute('onclick', `excluirTarefa(${index})`)
        apagar.innerText = 'Excluir'

        item.innerHTML = element
        item.appendChild(apagar)
        lista.appendChild(item)
    })
}

function adicionar() {
    
    if (inputTarefa.value === ''){
        alert('Digite alguma tarefa')
        return false
    }

    let tarefa  = inputTarefa.value
    tarefas.push(tarefa)
    inputTarefa.value = ''

    renderTarefa()
}

function excluirTarefa(index) {
    tarefas.splice(index,1)

    renderTarefa()
}