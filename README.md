## Lunaris
Lunaris es un negocio ficticio de soluciones digitales. Para este proyecto se presenta su servicio de chatbots para centros comerciales, bodegas y ferreterías.
La página está hecha con HTML, CSS, Bootstrap 5 y JavaScript. Se adapta a celulares, tablets y computadoras.

Efectos de las tarjetas

Al pasar el mouse por las tarjetas se aplican estos efectos:

Centros comerciales: la tarjeta gira con `rotate()`.
Bodegas: aumenta un poco de tamaño con `scale()`.
Ferreterías: se mueve hacia arriba con `translateY()`.

Se usó transition para que los cambios sean suaves.

Efecto 3D

La tarjeta con la conversación de ejemplo cambia de inclinación. Para darle profundidad se usaron `perspective`, `transform-style: preserve-3d`, `rotateX()` y `rotateY()`.

Animaciones

Con `@keyframes` se animaron la entrada del texto principal, el elemento decorativo, los puntos de escritura del chat y el círculo de carga del botón Enviar.

Cómo abrir la página

Abrir el archivo `index.html` en el navegador.

El chat es un ejemplo visual. El formulario valida los campos y muestra una confirmación, pero no envía mensajes.
