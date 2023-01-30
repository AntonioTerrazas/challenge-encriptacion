function ocultar() {
  var div1 = document.getElementById("muneco-div");
  var div2 = document.getElementById("div-oculto");
  var textarea1 = document.getElementById("texto1");
  if (textarea1.value != "") {
    div1.style.display = "none";
    div2.style.display = "flex";
  } else {
    div1.style.display = "flex";
    div2.style.display = "none";
  }
}

function encriptar() {
  ocultar();
  var textarea1 = document.getElementById("texto1");
  var textarea2 = document.getElementById("texto2");
  var separar = textarea1.value.split("");
  var a = "ai";
  var e = "enter";
  var i = "imes";
  var o = "ober";
  var u = "ufat";

  for (var l = 0; l < separar.length; l++) {
    if (separar[l] == "a") {
      separar[l] = a;
    } else if (separar[l] == "e") {
      separar[l] = e;
    } else if (separar[l] == "i") {
      separar[l] = i;
    } else if (separar[l] == "o") {
      separar[l] = o;
    } else if (separar[l] == "u") {
      separar[l] = u;
    }
  }
  textarea2.value = separar.join("");
}

function desencriptar() {
  ocultar();
  var textarea1 = document.getElementById("texto1");
  var textarea2 = document.getElementById("texto2");
  var separar = textarea1.value.split("");
  var l = 0;

  while (l < separar.length) {
    if (separar[l] == "a") {
      var ai = separar.splice(l, 1);
      separar[l] = ai;
      separar[l] = "a";
    } else if (separar[l] == "e") {
      var enter = separar.splice(l, 4);
      separar[l] = enter;
      separar[l] = "e";
    } else if (separar[l] == "i") {
      var imes = separar.splice(l, 3);
      separar[l] = imes;
      separar[l] = "i";
    } else if (separar[l] == "o") {
      var ober = separar.splice(l, 3);
      separar[l] = ober;
      separar[l] = "o";
    } else if (separar[l] == "u") {
      var ufat = separar.splice(l, 3);
      separar[l] = ufat;
      separar[l] = "u";
    }
    l++;
  }
  textarea2.value = separar.join("");
}

function copiar() {
  var textarea2 = document.getElementById("texto2");
  navigator.clipboard.writeText(textarea2.value).then(
    () => {
      console.log("exitoso");
    },
    () => {
      console.log("error");
    }
  );
}
