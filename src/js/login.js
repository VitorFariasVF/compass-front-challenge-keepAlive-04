const credenciais = {usuario: 'admin', senha: 'admin'};
let pessoaAcesso = new Object();
var chaveAcesso = ""
var credencialValida = "";
const acessoErroUsuario = document.getElementById("acesso-usuario")
const acessoErroSenha = document.getElementById("acesso-senha")

function login() {
    pessoaAcesso.usuario = document.getElementById("usuario").value;
    pessoaAcesso.senha = document.getElementById("senha").value;
    console.log(credenciais);
    console.log(pessoaAcesso);
    validaLogin();
}

function validaLogin() {
    if ( credenciais.usuario == pessoaAcesso.usuario & credenciais.senha == pessoaAcesso.senha ) {
        chaveAcesso = "%#%"
    }
    if ( chaveAcesso == "%#%" ) {
        window.location.assign("../../pages/home.html");
    }
    else {
        credencialValida = false;
        textoErroLogin()
        console.log("não passei!");
        
    }
    
}

function textoErroLogin() { 
    var textoMgsErro = "Ops, usuário ou senha inválidos.<br> Tente novamente!"
    document.getElementById("msg-erro").innerHTML = (textoMgsErro);
    /*acessoErroUsuario.classList.add("acesso-usuario-erro"); Erro BUG
    acessoErroSenha.classList.add("acesso-senha-erro");                   */
}
