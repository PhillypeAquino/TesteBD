const control = document.querySelectorAll ("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecass = {
      "bracos": {
          "forca": 29,
          "poder": 35,
          "energia": -21,
          "velocidade": -5
      },
  
      "blindagem": {
          "forca": 41,
          "poder": 20,
          "energia": 0,
          "velocidade": -20
      },
      "nucleos":{
          "forca": 0,
          "poder": 7,
          "energia": 48,
          "velocidade": -24
      },
      "pernas":{
          "forca": 27,
          "poder": 21,
          "energia": -32,
          "velocidade": 42
      },
      "foguetes":{
          "forca": 0,
          "poder": 28,
          "energia": 0,
          "velocidade": -2
      }
};

control.forEach(   (element) => {
      element.addEventListener('click', (evento) => { 
          manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
          atualizaEstatistica(evento.target.dataset.peca)
            })
      });

function manipulaDados(operacao, robo) {
      const peca = robo.querySelector("[data-contador]")
      
            if ( operacao === '-') {
                  peca.value = parseInt(peca.value) - 1 
            } else if (operacao === '+') {
                  peca.value = parseInt(peca.value) + 1 
            }};

function atualizaEstatistica(peca) {
      estatisticas.forEach ( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) + 
            pecass[peca][elemento.dataset.estatistica] 
            console.log(pecass[peca][elemento.dataset.estatistica])
            })
      }

