//---------------------------------------------------------------------
//  1. variaveis
//-----------------------------------------------------------------------

//procura pelo elemento com id "txt-nova-tarefa" no docuemnto html
const txt_nova_tarefa = document.querySelector("#txt-nova-tarefa");
//procura pelo elemento com id "btn-nova-tarefa" no docuemnto html
const btn_nova_tarefa = document.querySelector("#btn-nova-tarefa");
//procura pelo elemento com id "lista-tarefas" no docuemnto html
const lista_tarefas = document.querySelector("#lista-tarefas");

//carrega audio no botao de concluir
const audioConcluir = new Audio('sound/gmae.wav');

//---------------------------------------------------------------------
//  2. funçoes de logica
//----------------------------------------------------------------------

function iniciaToDo() {
    //alert("ola mundo");
    
    //associa funçao ao evento de clicar no botao de adicionar nova tarefa
    btn_nova_tarefa.addEventListener("click", adicionarTarefa);
    //associa funçao "adicionarTerefaEnter()" ao evento de pressionar a tecla "enter" no campo de "adicionar tarefa"
    txt_nova_tarefa.addEventListener("keypress", adicionarTarefaEnter);
}

function adicionarTarefa() {
    //
    //.trim() remove espaços em branco do começo e fim do valor do campo
    if (txt_nova_tarefa.value.trim() !== "") {
        const btn_item = `
            <div>
                <button class="btn btn-success btn-sm me-2" onclick="concluirTarefa(this)">Concluir</button>
                <button class="btn btn-danger btn-sm">Excluir</button>   
            </div>
`;
        
        //cria um novo item de lista
        const item = document.createElement("li");
        item.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        //adiciona o texto digitado na caixa de texto e os botao para concluir e excluir a tarefa
        //span permite aplicar formataçoes na linha
        //"w-75" limita o nome da tarefa para 75% do tamanho da linha deixando 25% do tamanho restante reservado para botoes
        //"text-truncate" corta e adiciona reticencias (tres pontos....) em nomes de tarefas que excedem 75% do tamanho da linha 
        item.innerHTML = "<span class='w-75 text-truncate'>" + txt_nova_tarefa.value + "</span>" + btn_item;
        
        //adiciona o item a lista de tarefas
        lista_tarefas.append(item);
        
    }
    //limpa o campo de texto de "adicionar nova tarefa" apos adicionar a tarefa a lista
    txt_nova_tarefa.value = "";
    //seleciona o campo "adicionar nova tarefa" apos adicionar a tarefa a lista
    txt_nova_tarefa.focus();
}
function adicionarTarefaEnter(evento) {
    //se a tecla pressionada for igual a Enter
    if (evento.key == "Enter") {
        //chama a funçao java "adicionarTarefa()"
        adicionarTarefa();
        
    }
}

function concluirTarefa(elemento) {
    
    audioConcluir.play();
    confetti();
}
//---------------------------------------------------------------------
//  3. escutadores de eventos e inicio
//----------------------------------------------------------------------

iniciaToDo();