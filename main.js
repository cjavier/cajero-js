
    var cuentas = [
        { nombre: "Mali", saldo: 200, contraseña: "123" },
        { nombre: "Gera", saldo: 290, contraseña: "123" },
        { nombre: "Maui", saldo: 67, contraseña: "123" }
    ];
    var cuentaActual;

    // Poblar el menú desplegable con los nombres de las cuentas
    const usuarioDropdown = document.getElementById('usuarioDropdown');
    cuentas.forEach(cuenta => {
        let opcion = document.createElement('option');
        opcion.textContent = cuenta.nombre;
        opcion.value = cuenta.nombre;
        usuarioDropdown.appendChild(opcion);
    });

    // Manejar el evento click del botón
    document.getElementById('entrarBtn').addEventListener('click', function () {
        const usuarioSeleccionado = usuarioDropdown.value;
        const contraseñaIngresada = document.getElementById('passwordInput').value;
        const cuenta = cuentas.find(cuenta => cuenta.nombre === usuarioSeleccionado);
        if (cuenta && cuenta.contraseña === contraseñaIngresada) {
            console.log('Acceso concedido');
            cuentaActual = cuenta;
            document.getElementById('nombreUsuario').textContent = 'Bienvenido/a, ' + cuentaActual.nombre + ''; 
            cuentaActual = cuenta;
            mostrarMainMenu();
            ocultarLogin();
        } else {
            alert('Acceso denegado');
        }
    });
    document.getElementById('consultarSaldoBtn').addEventListener('click', function () {
        document.getElementById('saldoActual').textContent = cuentaActual.saldo;
        mostrarSeccion('consultaSaldo');
    });

    document.getElementById('ingresarMontoBtn').addEventListener('click', function () {
        mostrarSeccion('ingresarMonto');
    });

    document.getElementById('confirmarIngresoBtn').addEventListener('click', function () {
        var monto = parseInt(document.getElementById('montoAIngresar').value);
        cuentaActual.saldo += monto;
        alert('Monto ingresado. Saldo actual: ' + cuentaActual.saldo);
    });

    document.getElementById('retirarMontoBtn').addEventListener('click', function () {
        mostrarSeccion('retirarMonto');
    });

    document.getElementById('confirmarRetiroBtn').addEventListener('click', function () {
        var monto = parseInt(document.getElementById('montoARetirar').value);
        if (monto <= cuentaActual.saldo) {
            cuentaActual.saldo -= monto;
            alert('Monto retirado. Saldo actual: ' + cuentaActual.saldo);
        } else {
            alert('Saldo insuficiente.');
        }
    });

    function mostrarMainMenu() {
        ocultarSecciones();
        document.getElementById('mainMenu').style.display = 'block';
    }

    function ocultarLogin() {
        document.getElementById('loginSection').style.display = 'none';
    }

    function mostrarSeccion(id) {
        document.getElementById('mainMenu').style.display = 'none';
        ocultarSecciones();
        document.getElementById(id).style.display = 'block';
    }

    function ocultarSecciones() {
        document.getElementById('consultaSaldo').style.display = 'none';
        document.getElementById('ingresarMonto').style.display = 'none';
        document.getElementById('retirarMonto').style.display = 'none';
    }

