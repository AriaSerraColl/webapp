let scriptURL = "https://script.google.com/macros/s/AKfycbwyzwldvEb4U-AIuEbB27BvArolEW_Tg5_JloJ3a4vGqe1pujeielQs1dbMSnb0wLe1Hw/exec"    // aquí s'ha d'escriure l'URL del script
let consulta = scriptURL + "?query=select&where=Tipus&is=Turisme";
    fetch(consulta)
        .then((resposta) => {    // primera "promesa"
            return resposta.json();    // retorna les dades JSON obtingudes com a llista
        })
        .then((resposta) => {    // segona "promesa". Resposta = [{"Tipus":"Turisme","Motor":"Elèctric","Any":"2022","Velocitat":"120"}]
// espai per a les instruccions que s'executen en rebre la llista
        });
 