function mudar(){
	let minhaimagem = document.getElementById("imagem");
	let num = Math.trunc(Math.random()*10);
	minhaimagem.src = "img/" + num + ".jpg";
}