let area = document.getElementById("area");
let botao = document.getElementById("botao");

function entrar() {
    let nome = prompt("Digite seu nome");
    let nomeCadastro = "Anderson";

    if (nomeCadastro === '' || nomeCadastro === null) {
        alert("Ops!! Algo deu errado!!!");
        area.innerHTML = "Clique no botão  para acessar...";
    }

    else if (nome == nomeCadastro) {
        
        botao.setAttribute("hidden", true);
        area.innerHTML = "Olá seja bem vindo, " + nome + "<br><br>";
        let botaosair = document.createElement("button");
        botaosair.innerHTML = "Sair da conta ";
        botaosair.onclick = sair;
        area.appendChild(botaosair);
    }
    else {
        alert("Ops !! Você não possuí um cadastro, por gentileza realizar o cadastro para acessar !!");
        area.innerHTML = "Clique no botão para se cadastrar!!";
    }
}

function sair() {
    alert("Até Mais !!");    
    area.innerHTML = "Você saiu";
    botao.removeAttribute("hidden");
}