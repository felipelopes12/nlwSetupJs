const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')//(function) o usuario adicionara os eventos

button.addEventListener('click', add)// adicionando o click e uma function
form.addEventListener("change", save)// salvar pagina quando for recarregada

function add() {
const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // no click puxa o dia de hoje
const dayExists = nlwSetup.dayExists(today)

if(dayExists) { // alerta para o usuario de dia incluso(boolean)
  alert("Dia já incluso 🔴")
  return
} 

alert('Adicionado com sucesso ✅')
 nlwSetup.addDay(today)
}

function save() { //transformando o objeto em texto
  localStorage.setItem('NLWSetup@habitsDays', JSON.stringify(nlwSetup.data)) 
  
}

  //transformando o texto em objeto
const data = JSON.parse(localStorage.getItem('NLWSetup@habitsDays')) || {}
 nlwSetup.setData(data)
 nlwSetup.load()