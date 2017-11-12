# Componentes:

La pieza principa de toda interfaz creada con React son los componentes, estos son pequeñas partes de la interfaz que se pueden componer para construir interfaces complejas.

Podemos dividir los componentes en dos tipos,

1. Componentes puros, son declarados como funciones y no tienen estado.
2. Componentes con estado, tienen un estado interno y utilizan ciclo de vida del componente.

# Lectura:

* https://reactjs.org/docs/thinking-in-react.html

# Tips:

* Intenta que la mayoria de tus componentes sean puros
* Sí el estado de aplicación de vuelve muy complejo piensa en soluciones como Redux, solo si es necesario.
* Manten los componentes pequeños, intenta que sean menos de 150 lineas de código.

# Reto

Crea un componente que sea una card de la pélicula, este componente debe aceptar:

* name (string)
* year (int)
* generes (array of string)
* imagen (string)
* trailer (string)
* rate (int)
