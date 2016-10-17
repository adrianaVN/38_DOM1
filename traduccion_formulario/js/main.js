function cambiarIdioma(idioma){
var sing=document.getElementById('singIn');
var mail= document.getElementById('inputEmail');
var password= document.getElementById('inputPassword');
var recuerda= document.getElementById('checkBox');
if (idioma =='es') {
	mail.setAttribute('placeholder','ingresar correo');
	password.setAttribute('placeholder','ingresar contraseña');
}else if (idioma == 'en') {
	mail.setAttribute('placeholder','Please enter your email');
	password.setAttribute('placeholder','password');
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