// Clicar no botão personagem na lista, e marca-lo como selecionado
const botoes = document.querySelectorAll('.botao')

// CLicar no botão personagem e mostrar as informações do personagem.
const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao()
        desselecionarPersonagem()

        botao.classList.add("selecionado") // adiciona classe "selecionado" ao button
        personagens[indice].classList.add("selecionado") //adiciona classe "selecionado" ao personagem
    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado")
    personagemSelecionado.classList.remove("selecionado")
    // remove classe "selecionado" do personagem
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado")
    botaoSelecionado.classList.remove("selecionado")
    // remove classe "selecionado" do button
}

