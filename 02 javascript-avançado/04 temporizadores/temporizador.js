
// setInterval
function acao() {
    document.write('executando... <br/>')
}

var timer = setInterval(()=>{
    document.write(new Date().toLocaleTimeString())
    document.write('<br/>')
}, 1000)

clearInterval(timer) // para a execução do setInterval



// setTimeout

setTimeout(()=>{
    document.write('executou timeout...')
}, 3000)