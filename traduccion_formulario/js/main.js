function cambiarIdioma(idioma){
var sing=document.getElementById('singIn');
var mail= document.getElementById('inputEmail');
var password= document.getElementById('inputPassword');
if (idioma =='es') {
	document.getElementById("form-signin-heading").innerHTML = "Entra por favor";
	mail.setAttribute('placeholder','ingresar correo');
	password.setAttribute('placeholder','ingresar contraseña');
	document.getElementById("check").innerHTML ="Recordar datos";
	document.getElementById("boton").innerHTML ="Entrar";
}else if (idioma == 'en') {
	document.getElementById("form-signin-heading").innerHTML = "Please sign in";
	mail.setAttribute('placeholder','Please enter your email');
	password.setAttribute('placeholder','password');
	document.getElementById("check").innerHTML ="Remember me";
	document.getElementById("boton").innerHTML ="Sign in";
}
}

var btnEs = document.getElementById('btnEs');
	btnEs.onclick = function(){
		cambiarIdioma('es');
	}
var btnEn = document.getElementById('btnEn');
	btnEn.onclick = function(){
		cambiarIdioma('en');
	}