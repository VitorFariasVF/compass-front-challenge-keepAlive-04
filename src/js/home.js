function mostraDia() {
    var valorDia = new Date();
    var numeroDia = valorDia.getDay();
    var diaLista = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var dia = diaLista[numeroDia]
    document.getElementById("dia-cabecalho").innerHTML = (dia)
    console.log(numeroDia, dia); // 1
}

function mostraHora() {
    setInterval(function() {
    const horafull = new Date()
    var hora = horafull.getHours()
    var min = horafull.getMinutes()
    var seg = horafull.getSeconds()
    document.getElementById("hora-cabecalho").innerHTML = (hora + ":" + min +":" + seg)
    }, 1000)
    
}

function mostraData() { 
    var dia = new Date().getDate()
    var ano = new Date().getFullYear()
    var mesAno = new Date().getMonth()
    var mesLista = ["Janeiro", "Fevereiro", "Março", "Abril",   "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var mes = mesLista[mesAno]
    document.getElementById("data-cabecalho").innerHTML = (dia + " " + mes + " " + ano)
}

mostraDia()
mostraHora()
mostraData()

var timer = 601

function mostraContador() {
    setInterval(function(){
        if (timer > 0) {
            timer = timer -1
            document.getElementById("f-contador-timer").innerHTML = (timer)
        } else {
            abrirModal()
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

const modal = document.querySelector('.modal-container')

function abrirModal() {
    modal.classList.add('ativo')    
}


function carregaPagina() {
    window.location.assign("../../pages/home.html");
}