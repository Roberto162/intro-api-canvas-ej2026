/*****************************************************************************************
 * Nombre del programa: Dibujo de un rectángulo proporcional a la pantalla
 * Autor: [Jesus]
 * Fecha: [18 de febrero de 2026]
 * Descripción:
 * Este programa dibuja un rectángulo verde que ocupa el 50% del ancho
 * y el 50% del alto de la ventana del navegador, es decir,
 * una cuarta parte del área visible de la pantalla.
 *****************************************************************************************/


// Obtiene el elemento <canvas>
var canvas = document.getElementById("lienzo");

// Ajusta el canvas al tamaño completo de la pantalla
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Obtiene el contexto 2D
var ctx = canvas.getContext("2d");

// Define el color de relleno
ctx.fillStyle = "green";

// Calcula el ancho y alto del rectángulo (50% de la pantalla)
var rectWidth = canvas.width * 0.5;
var rectHeight = canvas.height * 0.5;

// Dibuja el rectángulo desde la esquina superior izquierda
ctx.fillRect(0, 0, rectWidth, rectHeight);
