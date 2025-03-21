const ValidacionFormulario = (event) => {
    const nombre = document.getElementById("Nombre").value;
    const email = document.getElementById("Email").value;
    const contraseña = document.getElementById("Contraseña").value;
    const contraseña2 = document.getElementById("Contraseña2").value;
    const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;

    let valid = true;


    const errorNom = document.getElementById("ErrorNom");
    if (nombre.length < 3) {
        errorNom.innerText = "El nombre debe tener más de 3 caracteres.";
        errorNom.style.color = "red";
        valid = false;
    } else {
        errorNom.textContent = "";
    }

    const errorContra=document.getElementById("ErrorContra");
    if(regexp_password.test (contraseña)){
        errorContra.textContent = "";
    }
    else {
        errorContra.innerText = "la contraseña tiene que tener mas de 8 caracteres, algun signo y al menos una mayuscula";
        errorContra.style.color = "red";
        valid = false;
    }

    const errorContra2=document.getElementById("ErrorContra2");
    console.log (contraseña)
    if(contraseña2==contraseña){
        errorContra2.textContent = "";
        console.log(contraseña2)
       
    }
    else{
        errorContra2.innerText = "la contraseña debe ser identica a la principal";
        errorContra2.style.color = "red";
        valid = false;
    }

    


}
