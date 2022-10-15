
var timer = 601

function mostraContador() {
    setInterval(function(){
        if (timer > 0) {
            timer = timer -1
            document.getElementById("f-contador-timer").innerHTML = (timer)
        }
    }, 1000)
}

mostraContador()
    
function navegarNoticias() {
    window.location.assign("https://noticias.uol.com.br/");
}

function logout() {
    window.location.assign("../../pages/login.html");
}

function tempo() {
    alert("Tempo acabou deseja ficar nessa pagina ?")
}