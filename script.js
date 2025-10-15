//---------------------------------------------------------------------
//  1. variaveis
//-----------------------------------------------------------------------

//procura pelo elemento com id "txt-nova-tarefa" no docuemnto html
const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");
//procura pelo elemento com id "btn-nova-tarefa" no docuemnto html
const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");
//procura pelo elemento com id "lista-tarefas" no docuemnto html
const lista_tarefas = document.querySelector("#lista-tarefas");

//---------------------------------------------------------------------
//  2. funçoes de logica
//----------------------------------------------------------------------

function iniciaToDo() {
    //alert("ola mundo");

    //associa funçao ao evento de clicar no botao de adicionar nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
}

function adicionarTarefa() {
    alert("ola tarefa")
}

//---------------------------------------------------------------------
//  3. escutadores de eventos e inicio
//----------------------------------------------------------------------

iniciaToDo();