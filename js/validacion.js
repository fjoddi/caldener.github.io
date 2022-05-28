document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("survey-form").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var name = document.getElementById('name').value;
    if(name.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    
    var email = document.getElementById('email').value;
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email))){
        alert("La dirección de email es incorrecta.");
        return;
    }
    
    var tel = document.getElementById('tel').value;
    if (tel.length < 10) {
        alert('Telefono no valido');
        return;
    }

    this.submit();
  }

  