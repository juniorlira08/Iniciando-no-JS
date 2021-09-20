function funcaoSuperCustosa() {
    return new Promise(function (resolve, reject) {
        // vai rodar de forma assíncrona
        const resultado = 5 + 10
        resolve(resultado)
    })
}

function esperar(segundos) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, segundos * 1000)
    })
}

async function principal () {
    await esperar(5)
    console.log('5 segundos')
}

principal()

//esperar(5).then(function() {
//    console.log('5 segundos')
//})

//funcaoSuperCustosa().then(function (resultado) {
//    console.log(resultado)
//})