
var edad, msg;
edad = parseInt(prompt("Ingrese la edad"));
if (edad >= 18) {
  msg = "Es mayor de edad";
} else {
  msg = "Es menor de edad";
}
document.write("Edad del alumno: " + edad + "<br>");
document.write("===========" + "<br>");
document.write(msg + "<br>");
document.write("==========="+"<br>")
