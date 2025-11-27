// Leer los productos almacenados o crear un arreglo vacío
        let clientes = JSON.parse(localStorage.getItem("clientes")) || [];
        // Función para mostrar los clientes guardados
        function mostrarClientes() {
        const lista = document.getElementById("listaClientes");
        lista.innerHTML = "";
        if (clientes.length === 0) {
            lista.innerHTML = "<p>No hay clientes guardados.</p>";
            return;
        }
        clientes.forEach((p, index) => {
            lista.innerHTML += `
                <div class="cliente">
                <strong>${index + 1}. ${p.nombre}</strong> — ${p.numero}
                </div>
                `;
            });
        }
        document.getElementById("formCliente").addEventListener("submit", function(e) {
            e.preventDefault(); // Evita recargar la página
            let nombre = document.getElementById("nombre").value.trim();
            let numero = document.getElementById("numero").value.trim();
            if (nombre === "" || numero === "") {
                alert("Por favor, completa todos los campos.");
                return;
            }
            clientes.push({ nombre, numero });
            localStorage.setItem("clientes", JSON.stringify(clientes));
            mostrarClientes();
            this.reset(); // Limpia el formulario
        });
// Borrar todos los clientes
        document.getElementById("btnBorrarTodo").addEventListener("click", function() {
            if (confirm("¿Seguro que deseas borrar todos los clientes?")) {
            localStorage.clear();
            clientes = [];
            mostrarProductos();
            }
        });
// Mostrar los clientes al cargar la página
        mostrarClientes();