const prompt = require('prompt-sync')();


console.log("Meio de transporte que você deseja usar!")
console.log("É Terrestre?")
let resposta = prompt("Sim ou Não? ")
if (resposta == "Sim") {
    console.log("Cabe apenas umas pessoa? ")
    let resposta = prompt("Sim ou Não? ")
    if (resposta == "Sim") {
        console.log("É Pesado? ")
        let resposta = prompt("Sim ou Não? ")
        if (resposta == "Sim") {
            console.log("Então, o transporte escolhido foi a Trator.")
        } else  {
            console.log("Tem Pedal? ")
            let resposta = prompt("Sim ou Não? ")
            if (resposta == "Sim") {
                console.log("Então, o transporte escolhido foi a Bicicleta.")
            }
        }
    } else {
        console.log("Usa Capacete? ")
        let resposta = prompt("Sim ou Não? ")
        if (resposta == "Sim") {
            console.log("Então, o transporte escolhido foi a Moto.")
        }
    }
}
