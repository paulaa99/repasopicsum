document.addEventListener("DOMContentLoaded", function () {
    const inputtarea = document.getElementById("input");
    const addTaskButton = document.getElementById("añadirtema");
    const listatareas = document.getElementById("lista");

    addTaskButton.addEventListener("click", function () {
        const texto = inputtarea.value.trim();
        if (texto !== "") {

            fetch("https://picsum.photos/200/200")
                .then((response) => response.url)
                .then((imageUrl) => {

                    const itemlista = document.createElement("li");

                    const taskImage = document.createElement("img");
                    taskImage.src = imageUrl;

                    const textoElement = document.createElement("p");
                    textoElement.textContent = texto;

                    const completeButton = document.createElement("button");
                    completeButton.textContent = "Completar";
                    completeButton.addEventListener("click", function () {
                        itemlista.classList.toggle("completed");
                    });

                    const boton = document.createElement("button");
                    boton.textContent = "Eliminar";
                    boton.addEventListener("click", function () {
                        itemlista.remove();
                    });

                    itemlista.appendChild(taskImage);
                    itemlista.appendChild(textoElement);
                    itemlista.appendChild(completeButton);
                    itemlista.appendChild(boton);

                    listatareas.appendChild(itemlista);
                
                    inputtarea.value = "";
                });
        }
    });
});
