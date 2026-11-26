const ciudadesPorPais = {
            colombia: [
                "Bogotá",
                "Medellín",
                "Cali",
                "Barranquilla",
                "Cartagena",
                "Santa Marta"
            ],

            mexico: [
                "Ciudad de México",
                "Guadalajara",
                "Monterrey",
                "Puebla",
                "Cancún"
            ],

            argentina: [
                "Buenos Aires",
                "Córdoba",
                "Rosario",
                "Mendoza"
            ],

            espana: [
                "Madrid",
                "Barcelona",
                "Valencia",
                "Sevilla"
            ],

            peru: [
                "Lima",
                "Arequipa",
                "Cusco",
                "Trujillo"
            ]
        };

        const pais = document.getElementById("pais");
        const ciudad = document.getElementById("ciudad");

        pais.addEventListener("change", function () {

            const paisSeleccionado = this.value;

            // Limpiar las ciudades anteriores
            ciudad.innerHTML = "";

            if (paisSeleccionado === "") {
                ciudad.disabled = true;

                ciudad.add(new Option(
                    "Seleccione primero un país",
                    ""
                ));

                return;
            }

            // Obtener las ciudades del país seleccionado
            const ciudades = ciudadesPorPais[paisSeleccionado];

            ciudad.disabled = false;

            ciudad.add(new Option(
                "Seleccione una ciudad",
                ""
            ));

            ciudades.forEach(function(nombreCiudad) {
                ciudad.add(new Option(
                    nombreCiudad,
                    nombreCiudad
                ));
            });
        });