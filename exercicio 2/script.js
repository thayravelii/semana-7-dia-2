let time = 10;

function clear(pagina) {
    clearInterval(pagina)
    document.getElementById("btnSalvar").remove()
    alert("Infelizmente seu tempo acabou!")
}

const pagina = setInterval(() => {
    document.querySelector("p").innerHTML = time
    time--

    if(time == -1) clear(pagina)
}, 1000)

document.getElementById("btnSalvar").addEventListener("click", () => {
    const group = document.form.radio
    let i = 0

    for (i = 0; i < group.length; i++) {
        if(group[i].checked) {
            if(group[i].value == "1") alert("Resposta correta!")
            else alert ("Infelizmente sua resposta esta incorreta!")

            clearInterval(pagina)
            document.getElementById("btnSalvar").remove()
        }
    }
})