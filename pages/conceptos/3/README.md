# Componentes con estado

Algo que hace increíble a React es que puedes autocontener un componente con su
logica y poder reutilizar en cualquier lado del proyecto u otros proyectos, para
manejar la logica interna u estado de un componente debemos declarar el
componente como una clase.

### Montaje

* constructor()
* componentWillMount()
* render()
* componentDidMount()

### Actualización

* componentWillReceiveProps()
* shouldComponentUpdate()
* componentWillUpdate()
* render()
* componentDidUpdate()

### Desmontaje

* componentWillUnmount()

### Manejo de errores

* componentDidCatch()

## Lecturas

* https://reactjs.org/docs/react-component.html
* https://github.com/reactjs/redux

# Tip

* Intenta que la mayoría de tus componentes sean puros
* No uses soluciones como redux a menos que sea necesario en el proyecto

## Reto

Durante el concepto, creamos un componente para seleccionar peliculas, este
componente no permite remover la selección, el reto es modificar el código para
poder remover la selección de una pelicula
