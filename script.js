function ValidacionFormulario() {
    const nombre = document.getElementById("Nombre").value;
    const email = document.getElementById("Email").value;
    const contraseña = document.getElementById("Contraseña").value;
    const contraseña2 = document.getElementById("Contraseña2").value;
    const botonEnviar = document.getElementById("Enviar");
    const mensajeExito = document.getElementById("MensajeExito");

    let valid = true;

   
    const errorNom = document.getElementById("ErrorNom");
    if (nombre.length < 3) {
        errorNom.innerText = "El nombre debe tener más de 3 caracteres.";
        errorNom.style.color = "red";
        valid = false;
    } else {
        errorNom.textContent = "";
    }

    
    const errorEma = document.getElementById("ErrorEma");
    const regexp_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexp_email.test(email)) {
        errorEma.innerText = "Ingrese un email válido.";
        errorEma.style.color = "red";
        valid = false;
    } else {
        errorEma.textContent = "";
    }

    
    const errorContra = document.getElementById("ErrorContra");
    const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/;
    if (!regexp_password.test(contraseña)) {
        errorContra.innerText = "Debe tener 8-15 caracteres, un signo, una mayúscula y un número.";
        errorContra.style.color = "red";;
        valid = false;
    } else {
        errorContra.textContent = "";
    }

  
    const errorContra2 = document.getElementById("ErrorContra2");
    if (contraseña !== contraseña2) {
        errorContra2.innerText = "Las contraseñas no coinciden.";
        errorContra2.style.color = "red";
        valid = false;
    } else {
        errorContra2.textContent = "";
    }

   
    botonEnviar.disabled = !valid;

    
    mensajeExito.innerText = valid ? "Formulario válido. Listo para enviar." : "";

    return valid; 
}
