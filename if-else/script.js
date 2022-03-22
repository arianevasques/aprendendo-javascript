function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    //BOM DIA
    img.src = "fotoDia.jpg";
    document.body.style.background = "#b8d6ae";
  } else if (hora >= 12 && hora < 18) {
    // BOA TARDE!
    img.src = "fotoTarde.jpg";
    document.body.style.background = "#f19443";
  } else {
    // BOA NOITE!
    img.src = "fotoNoite.jpg";
    document.body.style.background = "#302d57";
  }
}
