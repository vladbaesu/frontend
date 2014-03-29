//application init
if(typeof(localStorage.filme)=="undefined") {
	localStorage.filme = new Array();
}
//end application init

$("#topMenu li a").click(function(){
	$(".active").removeClass("active");
	$(this).parent().addClass("active");
});

$("#listaFilme").click(function(){
	$("#content").load("pages/listaFilme.html");
}).click();

$("#adauga").click(function(){
	$("#content").load("pages/filmNou.html");
});

//Model film

var Film = function(nume, descriere, linkYoutube) {
	this.nume = nume;
	this.descriere = descriere;
	this.linkYoutube = linkYoutube;
}