const tarefas = document.getElementById('tarefas')
let contador = 0
const numTarefas = document.querySelector('.num-tarefas')

function adicionarTarefa() {
  const input = document.getElementById('tarefa-digitada')

  if (input.value !== '') {
    input.removeAttribute('required', 'required')
    contador++
    console.log(contador)

    input.classList.remove('vazio')
    const idTarefa = input.value.charAt(0) + Math.floor(Math.random() * 1000)

    const li = document.createElement('li')
    li.setAttribute('id', idTarefa)

    li.setAttribute('class', 'tarefa')

    const titulo = document.createElement('h3')
    titulo.innerText = input.value

    const btns = document.createElement('div')
    btns.setAttribute('class', 'botoes')

    const [btnRemover, btnEditar, btnConcluir] = botoes(idTarefa)

    btns.append(btnRemover, btnEditar, btnConcluir)

    li.appendChild(titulo)

    li.appendChild(btns)

    tarefas.appendChild(li)

    input.value = ''
  } else {
    input.classList.add('vazio')
    input.setAttribute('required', 'required')
  }

  numTarefas.innerHTML = contador
}

function botoes(idTarefa) {
  const btnRemover = document.createElement('button')
  btnRemover.setAttribute('class', 'remover')
  btnRemover.innerHTML = '<i class="fas fa-trash-alt"></i>'
  btnRemover.setAttribute('onclick', `remover(${idTarefa})`)

  const btnEditar = document.createElement('button')
  btnEditar.setAttribute('class', 'editar')
  btnEditar.innerHTML = ' <i class="far fa-edit"></i>'
  btnEditar.setAttribute('onclick', `editar(${idTarefa})`)

  const btnConcluir = document.createElement('button')
  btnConcluir.setAttribute('class', 'concluir')
  btnConcluir.innerHTML = '<i class="far fa-check-circle"></i>'
  btnConcluir.setAttribute('onclick', `concluir(${idTarefa})`)

  return [btnRemover, btnEditar, btnConcluir]
}

let contadorConcluidas = 0
let tarefasConcluidas = document.querySelector('.tarefas-concluidas')

function remover(idTarefa) {
  tarefas.removeChild(idTarefa)
  contador--
  numTarefas.innerHTML = contador

  if (idTarefa.classList.contains("tarefa-concluida")){
    contadorConcluidas--
    tarefasConcluidas.innerHTML = contadorConcluidas
    return
  } 

}

function editar(idTarefa) {
  if (idTarefa.classList.contains('tarefa-concluida')) {
    return
  }

  const tarefaEditada = prompt('Edite sua tarefa')
  if (tarefaEditada != null) {
    idTarefa.firstChild.innerHTML = tarefaEditada
  }
}

function concluir(idTarefa) {
  if (idTarefa.classList.contains('tarefa-concluida')) {
    idTarefa.classList.remove('tarefa-concluida')
    contadorConcluidas--
  } else {
    idTarefa.classList.add('tarefa-concluida')
    contadorConcluidas++
  }
  tarefasConcluidas.innerHTML = contadorConcluidas
}

const form = document.querySelector('form')
form.addEventListener('submit', e => {
  e.preventDefault()
})

const btn = document.querySelector('.adicionar-tarefa')
btn.addEventListener('click', e => {
  adicionarTarefa()
})
