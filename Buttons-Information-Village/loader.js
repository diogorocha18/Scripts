if (window.location.href.includes('&mode=units')) {
  console.log("Não é possível executar o script nesta página.");
} else {
	$.ajax({
		type: "GET",
		url: 'https://raw.githack.com/diogorocha18/Scripts/main/Buttons-Information-Village/general.js',
		dataType: "script",
		cache: false
	});
}
