# Setup

Una de las barreras más grandes que encuentra un dev cuando inicia es configurar el setup de trabajo, esto puede llevar configurar (babel, webpack, estaticos, etc), durante este workshop vamos utilizar [Next.js](https://github.com/zeit/next.js/) un framework minimalista, que nos da muchos beneficios, entre ellos.

* Configuración minima
* Server Render
* Code splitting automatico
* Server de desarrollo con [HMR](https://webpack.js.org/concepts/hot-module-replacement/)
* Se puede personalizar la configuración

Para iniciar un proyecto solo debes

1. Iniciar el proyecto

```
npm init -y
```

2. Instalar dependencias

```
npm install --save next react react-dom
```

3. Añadir los scripts a `package.json`

```
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

4. Dentro de una carpeta `pages` puedes crear tu primera página, exportando el componente que quieres ver.


Mira el archivo [index.js](./index.js)
