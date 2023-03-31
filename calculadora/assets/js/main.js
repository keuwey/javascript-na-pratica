const Calculadora = (function () {
  const display = document.querySelector(".display")

  function inicia() {
    cliqueBotoes()
    pressionaBackSpace()
    pressionaEnter()
  }

  function pressionaBackSpace() {
    display.addEventListener("keydown", e => {
      if (e.keyCode === 8) {
        e.preventDefault()
        clearDisplay()
      }
    })
  }

  function pressionaEnter() {
    display.addEventListener("keyup", e => {
      if (e.keyCode === 13) {
        realizaConta()
      }
    })
  }

  function realizaConta() {
    let conta = display.value

    // Verifica se a string contém apenas dígitos,
    // operadores matemáticos e espaços em branco

    const regex = /^[0-9+\-*/().\s]+$/

    if (!regex.test(conta)) {
      alert("Conta inválida")
      return
    }

    try {
      conta = eval(conta)

      if (!conta) {
        alert("Conta inválida")
        return
      }

      display.value = String(conta)
    } catch (e) {
      alert("Conta inválida")
      return
    }
  }

  function clearDisplay() {
    display.value = ""
  }

  function apagaUm() {
    display.value = display.value.slice(0, -1)
  }

  function cliqueBotoes() {
    document.addEventListener("click", e => {
      const el = e.target

      if (el.classList.contains("btn-num")) {
        btnParaDisplay(el.innerText)
      }

      if (el.classList.contains("btn-clear")) {
        clearDisplay()
      }

      if (el.classList.contains("btn-del")) {
        apagaUm()
      }

      if (el.classList.contains("btn-eq")) {
        realizaConta()
      }

      display.focus()
    })
  }

  function btnParaDisplay(valor) {
    display.value += valor
  }

  return {
    inicia: inicia,
  }
})()

Calculadora.inicia()
