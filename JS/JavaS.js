
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
        let modeIcon = document.getElementById('mode-icon');
        if (document.body.classList.contains('lightmode')) {
            modeIcon.src = 'Assets/moon.png'; // Ícone para modo claro
            modeIcon.alt = 'Modo Claro';
            document.getElementById('header').classList.add('Cabecalholightmode');
            document.getElementById('header').classList.remove('Cabecalho');

        } else {
            modeIcon.src = 'Assets/solB.png'; // Ícone para modo escuro
            modeIcon.alt = 'Modo Escuro';
            document.getElementById('header').classList.add('Cabecalho');
            document.getElementById('header').classList.remove('Cabecalholightmode');
            
        }
    };

// Funções para exibir e esconder o texto
    function exibirTexto() {
    document.getElementById("meuTexto").style.display = "block";
  }

  function esconderTexto() {
    document.getElementById("meuTexto").style.display = "none";
  }