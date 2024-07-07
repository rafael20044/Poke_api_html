## PokeApi README

### Descripción

PokeApi es una aplicación web que permite a los usuarios buscar información sobre Pokémon utilizando su nombre o número de Pokédex. La aplicación muestra detalles como el nombre, el tipo y la generación del Pokémon, además de su sprite.

### Estructura del Proyecto

```
PokeApi/
├── assets/
│   ├── css/
│   │   └── index.css
│   └── img/
│       └── pokeapi_256.png
├── index.html
└── index.js
```

### Archivos

- `index.html`: El archivo HTML principal que estructura la aplicación web.
- `index.css`: Archivo de estilo CSS que proporciona el diseño y la apariencia de la aplicación.
- `index.js`: Archivo JavaScript que contiene la lógica para buscar y mostrar la información del Pokémon.
- `pokeapi_256.png`: Imagen del logo de PokeApi utilizada en la página.

### Cómo Utilizar

1. **Abrir la Aplicación**: Abre `index.html` en tu navegador preferido.
2. **Buscar un Pokémon**: En el campo de entrada, escribe el nombre o el número de Pokédex del Pokémon que deseas buscar.
3. **Hacer clic en "Buscar"**: Presiona el botón "Buscar" para obtener la información del Pokémon.

### Estructura HTML

- **main**: Elemento principal que contiene el contenido y los resultados.
  - **main__contenido**: Sección que incluye el formulario de búsqueda y el logo de PokeApi.
    - `input`: Campo de texto donde el usuario ingresa el nombre o número del Pokémon.
    - `button`: Botón que, al hacer clic, activa la búsqueda del Pokémon.
  - **main__resultado**: Sección que muestra los resultados de la búsqueda.
    - `nombrePokemon`: Párrafo que muestra el nombre del Pokémon.
    - `tipoPokemon`: Párrafo que muestra el tipo del Pokémon.
    - `generacionPokemon`: Párrafo que muestra la generación del Pokémon.
    - `sprite`: Imagen que muestra el sprite del Pokémon.

### Lógica JavaScript

El archivo `index.js` contiene la lógica para realizar la búsqueda de Pokémon utilizando la PokeAPI. Al hacer clic en el botón "Buscar", se realiza una solicitud a la API y se actualizan los elementos del DOM con la información del Pokémon.

### Estilos CSS

El archivo `index.css` contiene los estilos para la aplicación, asegurando que la interfaz sea visualmente atractiva y fácil de usar.

### Recursos

- [PokeAPI](https://pokeapi.co/): API utilizada para obtener la información de los Pokémon.

### Créditos

Aplicación desarrollada para aprender y practicar el uso de APIs y el desarrollo web en HTML, CSS y JavaScript.