let contaToda = '';

function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.cliqueBotoes();
      p.value = prompt('Digite o valor de p.\n0 - false;\n1 - true;')
      q.value = prompt('Digite o valor de p.\n0 - false;\n1 - true;')
    },

    realizaConta() {
            
      try {
        contaToda = Boolean(eval(contaToda));
        console.log(Boolean(eval(contaToda)));
        this.display.value = String(contaToda);
        
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    },

    clearDisplay() {
      this.display.value = '';
      contaToda = ''
    },

    cliqueBotoes() {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-two')) {
          this.btnParaDisplay(el.innerText);
          contaToda += el.value;
          
        }

        if(el.classList.contains('btn-num')) {
          this.btnParaDisplay(el.innerText);
          contaToda = `${contaToda}${el.value}`
          
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
