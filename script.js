document.getElementById("TamanhoSenha").value
let caracteres = ""
if (document.getElementById("usarSimbolos").checked) {
    caracteres += "!@#$%^&*()_+{}[]|:;<>,.?/"
}
if (document.getElementById("usarNumeros").checked) {
    caracteres += "0123456789"
}
if (document.getElementById("usarLetrasMaiusculas").checked) {
    caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}
if (document.getElementById("usarLetrasMinusculas").checked) {
    caracteres += "abcdefghijklmnopqrstuvwxyz"
}

function GerarSenha() {
    let caracteres = ""
    let senha = ""
    let tamanho = parseInt(document.getElementById("TamanhoSenha").value)   
    
      if (document.getElementById("usarSimbolos").checked) {
        caracteres += "!@#$%^&*()_+{}[]|:;<>,.?/"
    }   
    if (document.getElementById("usarNumeros").checked) {
        caracteres += "0123456789"
    }   
    if (document.getElementById("usarLetrasMaiusculas").checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }   
    if (document.getElementById("usarLetrasMinusculas").checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz"
    }   
    if (caracteres.length === 0) {
        alert("Selecione pelo menos um tipo de caractere para gerar a senha.")
        return
    }   
    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * caracteres.length)
        senha += caracteres.charAt(indice)
    }

    document.getElementById("senhaGerada").innerText = senha
}

document.getElementById("toggleTheme").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode")
})


document.getElementById("copiarSenha").addEventListener("click", () => {
    let senha = document.getElementById("senhaGerada").innerText;
    
    if (senha) {
        navigator.clipboard.writeText(senha).then(() => {
            alert("Senha copiada para a área de transferência!");
        }).catch(err => {
            alert("Erro ao copiar a senha: " + err);
        });
    } else {
        alert("Nenhuma senha gerada para copiar.");
    }

});
