var editando = false;

function CambiarEmojis(){
	$(".emoji").each(function(index) {
    console.log(index + ": " + $(this).text());
      	if ($(this).text() == 'bien') {
      		console.log('yei');
      		$(this).replaceWith("<td class='emoji'>&#128526</td>");
      	}else{
      		$(this).replaceWith("<td class='emoji'>&#128543</td>");
      	}
  	});	
}

function transformar(nodo){
	if (editando == false) {
		var nodoTd = nodo.parentNode; 
		var nodoTr = nodoTd.parentNode; 
		var nodoContenedorForm = document.getElementById('contenedorForm');
		var nodosEnTr = nodoTr.getElementsByTagName('td');
		var alimento = nodosEnTr[0].textContent; var calorias = nodosEnTr[1].textContent;
		var grasas = nodosEnTr[2].textContent; var proteina = nodosEnTr[3].textContent;
		var carbohidratos = nodosEnTr[4].textContent; var opciones = nodosEnTr[5].textContent;
		var ok = nodosEnTr[6].textContent;
		var nuevoCodigoHtml = '<td><input type="text" name="alimento" id="alimento" value="'+alimento+'" size="10"></td>'+
'<td><input type="text" name="calorias" id="calorias" value="'+calorias+'" size="5"</td>'+
'<td><input type="text" name="grasas" id="grasas" value="'+grasas+'" size="5"</td>'+
'<td><input type="text" name="proteina" id="proteina" value="'+proteina+'" size="5"</td>'+
'<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="5"</td>' + 
'<td><select> <option value="bien"> bien </option> <option value="mal"> mal </option> </select> </td> <td>En edición</td>';

		nodoTr.innerHTML = nuevoCodigoHtml;

		nodoContenedorForm.innerHTML = '<p style="margin: auto; color: black; font-family: Arial, Helvetica, sans-serif; font-size: 13px">Pulse Aceptar para guardar los cambios o Cancelar para anularlos</p>'+
'<form name = "formulario" action="recibido.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
'<input class="boton" style="color: #1DA2B0;background: #FFFFFF;border: 1px solid;border-radius: 3px;box-sizing: border-box;font: 700 13px Arial, Helvetica, sans-serif;line-height: 28px;padding: 0 10px;cursor: pointer" type="submit" value="Aceptar"><input class="boton" style=" color: #565656;background: #FFFFFF;border: 1px solid;border-radius: 3px;box-sizing: border-box;font: 700 13px Arial, Helvetica, sans-serif;line-height: 28px;padding: 0 10px;cursor: pointer" type="reset"; value="Cancelar">';
		editando = "true";
	}

	else {
		alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
	}

}

function capturarEnvio(){
	var nodoContenedorForm = document.getElementById('contenedorForm');
	nodoContenedorForm.innerHTML = '<form name = "formulario" action="recibido.html" method="get" onsubmit="capturarEnvio()" onreset="anular()">'+
	'<input type="hidden" name="alimento" value="'+document.querySelector('#alimento').value+'">'+
	'<input type="hidden" name="calorias" value="'+document.querySelector('#calorias').value+'">'+
	'<input type="hidden" name="grasas" value="'+document.querySelector('#grasas').value+'">'+
	'<input type="hidden" name="proteina" value="'+document.querySelector('#proteina').value+'">'+
	'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'">'+
	'<input type="hidden" name="emoji" value="'+document.querySelector('#emoji').value+'">'+
	'<input class="boton" style="color: #1DA2B0;background: #FFFFFF;border: 1px solid;border-radius: 3px;box-sizing: border-box;font: 700 13px Arial, Helvetica, sans-serif;line-height: 28px;padding: 0 10px;cursor: pointer" type="submit" value="Aceptar"><input class="boton" style=" color: #565656;background: #FFFFFF;border: 1px solid;border-radius: 3px;box-sizing: border-box;font: 700 13px Arial, Helvetica, sans-serif;line-height: 28px;padding: 0 10px;cursor: pointer" type="reset"; value="Cancelar">';
	document.formulario.submit();
}

function anular(){
	window.location.reload();
}

function llenarTabla(x1, x2, x3, x4, x5, x6){
	var tabla= document.getElementById('Table');
	if(x6=='bien'){
		x6="&#128526"
	}else{
		x6="&#128543"
	}
	tabla.innerHTML = '<thead><tr><th colspan="2">'+x1+x6+'</th></tr></thead><tbody><tr><td>Calorias</td><td>'+x2+'</td></tr><tr><td>Grasas</td><td>'+x3+'</td></tr><tr><td>Proteina</td><td>'+x4+'</td></tr><tr><td>Carbohidratos</td><td>'+x5+'</td></tr></tbody>';
}

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}