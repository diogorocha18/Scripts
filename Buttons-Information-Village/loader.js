var xhr = new XMLHttpRequest();
xhr.open("GET", "https://raw.githubusercontent.com/diogorocha18/ScriptsPublicos/main/Buttons-Information-Village/general.js");
xhr.onload = function() {
	if (xhr.status === 200) {
		eval(xhr.responseText);
	} else {
		console.error(xhr.statusText);
	}
};
xhr.onerror = function() {
	console.error("Erro ao obter o script.");
};
xhr.send();
