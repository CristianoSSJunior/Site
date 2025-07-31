
// Função para exibir o texto ao clicar no botão collapse
var coll= document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
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
        var modeIcon = document.getElementById('mode-icon');
        if (document.body.classList.contains('lightmode')) {
            modeIcon.src = 'Assets/moonB.png'; // Ícone para modo claro
            modeIcon.alt = 'Modo Claro';

        } else {
            modeIcon.src = 'Assets/solB.png'; // Ícone para modo escuro
            modeIcon.alt = 'Modo Escuro';
        }
    };

// Funções para exibir e esconder o texto
    function exibirTexto() {
    document.getElementById("meuTexto").style.display = "block";
  }

  function esconderTexto() {
    document.getElementById("meuTexto").style.display = "none";
  }