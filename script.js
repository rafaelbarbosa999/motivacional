const botao = document.getElementById("button");
const frase = document.getElementById("frase");
const containerFrase = document.querySelector(".container-frase");

botao.addEventListener("click", function() {
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(data => {
      const randomIndex = Math.floor(Math.random() * data.length);
      frase.innerText = data[randomIndex].text;
      containerFrase.classList.remove("hide");
    })
    .catch(error => {
      console.log("Ocorreu um erro ao acessar a API:", error);
    });
});


const tooltip = document.getElementById("tooltip");

tooltip.addEventListener("click", function() {
  // Seleciona o texto da frase gerada
  const range = document.createRange();
  range.selectNodeContents(frase);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  // Copia o texto selecionado para a área de transferência
  document.execCommand("copy");
  
  // Limpa a seleção
  selection.removeAllRanges();

  // Exibe uma mensagem de sucesso
  alert("Frase copiada para a área de transferência!");
});

