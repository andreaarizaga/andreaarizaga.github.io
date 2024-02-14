var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {
  if (window.getComputedStyle(celda).backgroundImage == "none") {
    if (reinasColocadas < 8) {
      celda.style = "background-image: url(./img/reina.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
      var tablero = document.getElementById("tabla");
      
      // Bloquear fila y columna
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
        }
        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
        }
      }
      
      // Bloquear diagonales
      for (let i = 1; i < 8; i++) {
        if (renglon - i >= 0 && columna - i >= 0) {
          tablero.rows[renglon - i].cells[columna - i].removeAttribute("onclick");
        }
        if (renglon - i >= 0 && columna + i < 8) {
          tablero.rows[renglon - i].cells[columna + i].removeAttribute("onclick");
        }
        if (renglon + i < 8 && columna - i >= 0) {
          tablero.rows[renglon + i].cells[columna - i].removeAttribute("onclick");
        }
        if (renglon + i < 8 && columna + i < 8) {
          tablero.rows[renglon + i].cells[columna + i].removeAttribute("onclick");
        }
      }

      reinasPorColocar--;
      reinasColocadas++;
    }
  } else {
    // Restaurar eventos onclick
    celda.style = "background-image: none";
    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;
    var tablero = document.getElementById("tabla");
    for (let i = 0; i < 8; i++) {
      tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
    }

    // Restaurar diagonales
    for (let i = 1; i < 8; i++) {
      if (renglon - i >= 0 && columna - i >= 0) {
        tablero.rows[renglon - i].cells[columna - i].setAttribute("onclick", "colocarReina(this)");
      }
      if (renglon - i >= 0 && columna + i < 8) {
        tablero.rows[renglon - i].cells[columna + i].setAttribute("onclick", "colocarReina(this)");
      }
      if (renglon + i < 8 && columna - i >= 0) {
        tablero.rows[renglon + i].cells[columna - i].setAttribute("onclick", "colocarReina(this)");
      }
      if (renglon + i < 8 && columna + i < 8) {
        tablero.rows[renglon + i].cells[columna + i].setAttribute("onclick", "colocarReina(this)");
      }
    }

    reinasPorColocar++;
    reinasColocadas--;
  }
  
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;
}

function reiniciar() {
  var celdas = document.getElementById("tabla").getElementsByTagName("td");
  for (let i = 0; i < celdas.length; i++) {
    celdas[i].style.backgroundImage = "none"; // Establecer backgroundImage como una cadena vacía
    celdas[i].style.backgroundColor = ""; // Restablecer el color de fondo
    celdas[i].setAttribute("onclick", "colocarReina(this)"); // Habilitar la función de colocarReina nuevamente
  }
  reinasPorColocar = 8; // Restablecer el contador de reinas por colocar
  reinasColocadas = 0; // Restablecer el contador de reinas colocadas
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas; // Actualizar el contador de reinas colocadas
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar; // Actualizar el contador de reinas por colocar
}

function solucion1(valor) {

  var celdas = document.getElementById("tabla");

  switch (valor) {
    case "1":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "2":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "3":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "4":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "5":
      celdas.rows[0].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "6":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    default:
      alert("Esa solucion no te la ando manejando");
      break;
  }
}



/* var reinasPorColocar = 8;
var reinasColocadas = 0;

function colocarReina(celda) {
  alert("Le dieron click a la celda"+celda);

  if (window.getComputedStyle(celda).backgroundImage === "none") {
    if (reinasColocadas < 8) {
      celda.style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      var renglon = celda.parentElement.rowIndex;
      var columna = celda.cellIndex;
       Bloqueamos renglon 
      var tablero = document.getElementById("tabla");
      //alert(renglon + " " + columna);
      for (let i = 0; i < 8; i++) {
        if (columna != i) {
          tablero.rows[renglon].cells[i].removeAttribute("onclick");
          tablero.rows[renglon].cells[i].style.backgroundColor = "#ff0000";
        }
        if (renglon != i) {
          tablero.rows[i].cells[columna].removeAttribute("onclick");
          tablero.rows[i].cells[columna].style.backgroundColor = "#ff0000";
        }
      }
       Recorremos diagonales 

      var r = renglon;
      var c = columna;

      while (r >= 0 && c < 8) {

        tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
        r--;
        c++;
      }

      r = renglon;
      c = columna;

      while (c >= 0 && r < 8) {

        tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
        r++;
        c--;
      }

      r = renglon;
      c = columna;

      while (r >= 0 && c >= 0) {
        tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
        r--;
        c--;
      }

      r = renglon;
      c = columna;

      while (r < 8 && c < 8) {
        tablero.rows[r].cells[c].style.backgroundColor = "#ff0000";
        r++;
        c++;
      }

      reinasPorColocar--;
      reinasColocadas++;
    }

  } else {
    celda.style.backgroundImage = "none"; 
    celda.style.backgroundColor = "";
    var renglon = celda.parentElement.rowIndex;
    var columna = celda.cellIndex;
    var tablero = document.getElementById("tabla");

    // Restablecer el color de fondo de la celda y habilitar el onclick
    celda.setAttribute("onclick", "colocarReina(this)");

    // Restablecer el color de fondo de la fila y la columna
    for (let i = 0; i < 8; i++) {
      tablero.rows[renglon].cells[i].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[renglon].cells[i].style.backgroundColor = "";
      tablero.rows[i].cells[columna].setAttribute("onclick", "colocarReina(this)");
      tablero.rows[i].cells[columna].style.backgroundColor = "";
    }

    // Restablecer el color de fondo de las diagonales
    for (let i = 0; i < 8; i++) {
      if (renglon - i >= 0 && columna + i < 8) {
        tablero.rows[renglon - i].cells[columna + i].style.backgroundColor = "";
      }
      if (renglon + i < 8 && columna - i >= 0) {
        tablero.rows[renglon + i].cells[columna - i].style.backgroundColor = "";
      }
      if (renglon - i >= 0 && columna - i >= 0) {
        tablero.rows[renglon - i].cells[columna - i].style.backgroundColor = "";
      }
      if (renglon + i < 8 && columna + i < 8) {
        tablero.rows[renglon + i].cells[columna + i].style.backgroundColor = "";
      }
    }

    reinasPorColocar++;
    reinasColocadas--;
  }
  document.getElementById("reinasColoca").innerHTML = "Reinas por colocar: " + reinasPorColocar;
  document.getElementById("reinasColoca1").innerHTML = "Reinas Colocadas: " + reinasColocadas;

}

function reiniciar(cont){
  var celdas=document.getElementById("tabla").getElementsByTagName("td");
  for (let i = 0; i < celdas.length; i++) {
      celdas[i].style="backgroundImage:none";    
  }
  contador = cont;
  document.getElementById("div_contador").innerHTML="reinascolocadas:"+ contador;
}
function solucion1(valor) {

  var celdas = document.getElementById("tabla");

  switch (valor) {
    case "1":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "2":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "3":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "4":
      celdas.rows[0].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "5":
      celdas.rows[0].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    case "6":
      celdas.rows[0].cells[4].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[1].cells[2].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[2].cells[7].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[3].cells[3].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[4].cells[6].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[5].cells[0].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[6].cells[5].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      celdas.rows[7].cells[1].style = "background-image: url(./img/reinanegra.png); background-size:cover;";
      break;

    default:
      alert("Esa solucion no te la ando manejando");
      break;
  }
} */
