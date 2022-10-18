var climaImg = document.querySelector(".clima")

function main() {
    navigator.geolocation.getCurrentPosition(pos =>{
        let latitude =  (pos.coords.latitude)
        let longitude = (pos.coords.longitude)
        var local = (latitude + ',' + longitude)
        setApi(local)
    })
}
      
function fazGet(url) {
    let request = new XMLHttpRequest 
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function setApi(local) {
    const urlBase = "https://api.weatherapi.com/v1/current.json?key="
    const key = "92ccb4f1276740459b6131215221810"
    var  weather = fazGet(urlBase + key + "&q=" + local)
    localData = JSON.parse(weather)
    mostraClima(localData)
}
main()

function mostraClima(localData) {
    localTela = localData.location.name + "-" + localData.location.region
    localTenp = localData.current.temp_c + "°"
    document.getElementById("temperatura").innerHTML = (localTenp)
    document.getElementById("localidade").innerHTML = (localTela)
    clima = localData.current.condition.icon.replace("//cdn.weatherapi.com", "")
    console.log(clima)
    climaImg.setAttribute("src", '../src/img/api'+ clima);
}
