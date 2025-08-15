
// Função para exibir o texto ao clicar no botão collapse
let coll= document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight){
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        } 
    });
    }

    document.getElementById('toggle-mode').onclick = function() {
        document.body.classList.toggle('darkmode');
        document.body.classList.toggle('lightmode');
        // Troca o texto do botão
        let icon = document.getElementById('mode-icon');
        let header = document.getElementById('header');
        let rodape = document.getElementById('rodape');
        let table = document.getElementById('table');
        let isLight = document.body.classList.contains('lightmode');
        
        icon.src = isLight ? 'Assets/moon.png' : 'Assets/solB.png';
        icon.alt = isLight ? 'Modo escuro' : 'Modo claro';

        header.classList.toggle('Cabecalhodarkmode', !isLight)
        header.classList.toggle('Cabecalholightmode', isLight)
        rodape.classList.toggle('Cabecalhodarkmode', !isLight)
        rodape.classList.toggle('Cabecalholightmode', isLight)
        table.classList.toggle('tabela-dark', !isLight)
    table.classList.toggle('tabela-light', isLight)
    };

// Funções para exibir e esconder o texto
    function exibirTexto() {
    document.getElementById("meuTexto").style.display = "block";
  }

  function esconderTexto() {
    document.getElementById("meuTexto").style.display = "none";
  }