//console.log(gatos); // Comentar esta linha se não for necessária para depuração

function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
  
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum resultado foi encontrado. Digite algo relacionado com a raça que quer descobrir mais.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada gato no array de gatos
    for (let dado of gatos) {
        nome = dado.nome.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                // Constrói o HTML para cada resultado da pesquisa
            resultados += `
            <div class="item-resultado">
                <h2>
                <a href="#" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais Informações</a>
            </div>
            `;
        }
    }

    if (!resultados){ //result doesnt exist
        resultados = "<p>Nenhum resultado foi encontrado</p>"
    }
  
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
  }