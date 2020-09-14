new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("ok")}, 3000) 
    }).then(res => {
        document.querySelector("div").innerHTML = "<h1>Seja bem-vindo!</h1>"
    }).catch(err => {
        document.querySelector("div").innerHTML = "<h1>Erro, recarregue a página!</h1>"
    })