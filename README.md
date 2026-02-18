# 🎨 Proyecto: Dibujo con Canvas en JavaScript

## 📌 Descripción

Este proyecto demuestra el uso de la API Canvas de HTML5 para dibujar
un rectángulo proporcional al tamaño de la pantalla del navegador.

El programa:

- Ajusta el tamaño del lienzo al tamaño completo de la ventana.
- Dibuja un rectángulo verde que ocupa el 50% del ancho y 50% del alto
  de la pantalla (equivalente a una cuarta parte del área total).
- Aplica estilos visuales mediante un archivo CSS externo.
- Personaliza el lienzo con bordes redondeados, sombra y colores azules.

---

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- API Canvas

---

## 📂 Estructura del proyecto

/proyecto-canvas
│
├── index.html
├── script.js
├── styles.css
└── README.md


---

## 🚀 Funcionamiento

1. Se obtiene el elemento `<canvas>` mediante su id (`lienzo`).
2. Se ajusta dinámicamente su tamaño al ancho y alto de la ventana.
3. Se obtiene el contexto de renderizado 2D.
4. Se define el color de relleno.
5. Se dibuja un rectángulo proporcional al tamaño de la pantalla.

---

## 🎨 Estilos aplicados

El archivo `styles.css` aplica:

- Fondo azul claro
- Borde azul oscuro
- Esquinas redondeadas
- Sombra suave
- Centrado automático

---

## ▶️ Cómo ejecutar el proyecto

1. Clona el repositorio o descarga los archivos.
2. Abre `index.html` en tu navegador.
3. Visualiza el rectángulo renderizado en el lienzo.

No requiere instalación adicional.

---

## 📖 Objetivo académico

Este proyecto tiene como finalidad comprender:

- El uso del elemento `<canvas>`
- El contexto 2D
- La manipulación dinámica del tamaño
- La separación de estilos en CSS
- Conceptos básicos de renderizado

---

## 👤 Autor

Jesus  
18 de febrero de 2026

---

## 📌 Notas

El tamaño del rectángulo se calcula usando:

```javascript
canvas.width * 0.5
canvas.height * 0.5
