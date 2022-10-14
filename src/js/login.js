const credenciais = {usuario: 'admin', senha: 'admin'};
let pessoaAcesso = new Object();
var chaveAcesso = ""
//var credencialAtiva = false;
var credencialValida = "";

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
    if (credencialValida == false) {
        var textoMgsErro = "Ops, usuário ou senha inválidos.<br> Tente novamente!"
        document.getElementById("msg-erro").innerHTML = (textoMgsErro);
        //document.getElementById("msg-erro").classList.add("acesso-negado-desativado");
    }
    
}
