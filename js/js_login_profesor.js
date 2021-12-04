function validarDatos(){

    var formulario = document.getElementById("formularioProfesor");
    var informacionCorrecta = true;

    if(formulario.nombre.value=="")
    {
        formulario.nombre.setAttribute("class", "form-control is-invalid");
        var validarParrafo = document.getElementById("parrafoValidarNombre");
        alert("Por favor, ingresa tu nombre.");
        validarParrafo.setAttribute("class", "text-danger");
        formulario.nombre.focus();
        informacionCorrecta = false;
    }
    else{
        formulario.nombre.setAttribute("class", "form-control is-valid");
    }

    if(formulario.apellido.value=="")
    {
        formulario.apellido.setAttribute("class", "form-control is-invalid");
        var validarParrafo = document.getElementById("parrafoValidarApellidos");
        alert("Por favor, ingresa tu Apellido.");
        formulario.apellido.focus();
        informacionCorrecta = false;
    }
    else{
        formulario.apellido.setAttribute("class", "form-control is-valid");
    }

    if(formulario.email.value=="")
    {
        formulario.email.setAttribute("class", "form-control is-invalid");
        var validarParrafo = document.getElementById("parrafoValidarEmail");
        alert("Por favor, ingresa tu Email.");
        formulario.email.focus();
        informacionCorrecta = false;
    }
    else{
        formulario.email.setAttribute("class", "form-control is-valid");
    }

    if(formulario.contraseña.value=="")
    {
        formulario.contraseña.setAttribute("class", "form-control is-invalid");
        var validarParrafo = document.getElementById("parrafoValidarContraseña");
        alert("Por favor, ingresa tu Contraseña.");
        formulario.email.focus();
        informacionCorrecta = false;
    }
    else{
        formulario.contraseña.setAttribute("class", "form-control is-valid");
    }


}

