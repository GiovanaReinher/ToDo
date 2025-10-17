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
//força o navegador a pre-carregar o audio para evitar atrasos na reproduçao
audioConcluir.preload = "auto";

//variavel global que controla a exibiçao da modal "excluir tarefa"
const modalExcluir = new bootstrap.Modal(document.getElementById('exampleModal'));

//variavel global que armazena a tarefa que sera excluida
let id_tarefa_excluir;

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
                <button class="btn btn-success btn-sm me-2 btn-concluir" onclick="concluirTarefa(this)">Concluir</button>
                <button class="btn btn-danger btn-sm btn-excluir" onclick="obterIDTarefaExcluir(this);modalExcluir.show();">Excluir</button>   
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

function concluirTarefa(btn_concluir) {
    
    audioConcluir.play();
    confetti();
    
    //atualiza o id da tarefa a ser excluida e
    //passa como parametro o botao de "concluir" clickado.
    obterIDTarefaExcluir(btn_concluir);

    //chama a funçao js "excluirtarefa()"
    excluirTarefa();
}
function excluirTarefa() {
    //remove o item da lista de tarefas
    lista_tarefas.removeChild(lista_tarefas.children[id_tarefa_excluir]);
    //fecha a modal de "excluir tarefa"
    modalExcluir.hide();
}

function obterIDTarefaExcluir(btn) {
    //encontra o elemnento html "li" (item) pais mais proximo
    //botao de concluir ou excluir clickado
    //perceba que na funçao js "obterIDTarefaExcluir()", o botao clickado é
    //recebido como parametro da funçao (btn).
    const item = btn.closest("li");
    const tarefas = Array.from(lista_tarefas.children);
    //por exemplo, se temos 3 tarefas e excluimos a ultima tarefa,
    //id_tarefa_excluir sera definida para 3 que é o ID da tarefa excluida
    id_tarefa_excluir = tarefas.indexOf(item);
}


//---------------------------------------------------------------------
//  3. escutadores de eventos e inicio
//----------------------------------------------------------------------

iniciaToDo();