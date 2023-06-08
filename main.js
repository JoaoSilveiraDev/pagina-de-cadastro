
const email = "jezinho@alura.com.br"
const senha = "1236372"
const botaoEntrar = document.getElementById("entrar")
const botaoLogin = document.getElementById("login")
const botaoSenha = document.getElementById("senha")
alert(`O email para teste da aplicação é ${email} e a senha é ${senha}`)

botaoLogin.addEventListener("click", () => {
    const loginDigitado = prompt("Digite seu email: ")
    if(loginDigitado != email){
        return alert("Email errado!")
    } else{
        botaoSenha.addEventListener("click", () =>{
        const senhaDigitada = prompt("Digite sua senha: ")
    
        if(senhaDigitada != senha){
            return alert("Senha errada!")
        }else{
            botaoEntrar.addEventListener("click", ()=>{
                alert(`Bem vindo ${email}!`)
            })
        }
    })
}
})
