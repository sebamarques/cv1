boton = document.getElementById("Boton")
mostrar = document.getElementById("mostrar")
algo = ``
boton.addEventListener("click",function(){
    algo += `
    <img src="images/messi.jpg">
    <p>ahora te toca a vos mostrarme una foto pelada</p>
    <p> Aca tambien esta el gato porro</p>
    <img src="images/fingato.jpg">`
    mostrar.innerHTML = algo
})


