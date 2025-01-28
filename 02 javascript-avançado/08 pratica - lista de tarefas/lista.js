
let lista = document.getElementById('lista')
let inputTarefa = document.getElementById('tarefa')

let tarefas = []

function adicionar() {
    
    if (inputTarefa.value === ''){
        alert('Digite alguma tarefa')
        return false
    }

    let tarefa  = inputTarefa.value
    tarefas.push(tarefa)
    inputTarefa.value = ''
    
    console.log(tarefas);
    
    tarefas.map((elemento)=>{
        let item = document.createElement('li')
        let apagar = document.createElement('a')
        apagar.setAttribute('href','#')
        apagar.innerText = 'Excluir'
        item.innerHTML = elemento
        item.appendChild(apagar)
        lista.appendChild(item)
    })


    
    // let item = document.createElement('li')
    // let apagar = document.createElement('a')
    // let br = document.createElement('br')

    // apagar.setAttribute('href','#')

    // item.innerHTML = registar
    // apagar.innerText = 'Excluir'

    // item.appendChild(apagar)

    // lista.appendChild(item)
}