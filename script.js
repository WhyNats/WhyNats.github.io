let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        
        document.getElementById("formCliente").addEventListener("submit", function(e) {
            e.preventDefault(); // Evita recargar la página
            let nombre = document.getElementById("nombre").value.trim();
            let numero = document.getElementById("numero").value.trim();
            let correo = document.getElementById("correo").value.trim();
            if (nombre === "" || numero === "" || correo === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }
            clientes.push({ nombre, numero, clientes});
            localStorage.setItem("clientes", JSON.stringify(clientes));
            mostrarClientes();
            this.reset(); // Limpia el formulario
        });