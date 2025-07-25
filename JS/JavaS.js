

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

// Funções para exibir e esconder o texto
    function exibirTexto() {
    document.getElementById("meuTexto").style.display = "block";
  }

  function esconderTexto() {
    document.getElementById("meuTexto").style.display = "none";
  }