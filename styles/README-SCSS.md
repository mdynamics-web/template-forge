# Guía de uso de SCSS en el proyecto

Este proyecto ahora usa **SCSS** (Sass) en lugar de CSS simple, lo que te permite usar características avanzadas como variables, mixins, anidamiento, y más.

## 📁 Estructura de archivos SCSS

```
styles/
├── globals.scss          # Estilos globales con Tailwind
├── _variables.scss       # Variables del proyecto
├── _mixins.scss         # Mixins reutilizables
└── README-SCSS.md       # Esta guía

app/
└── globals.scss         # Estilos globales importados en layout
```

## 🎨 Características de SCSS disponibles

### 1. Variables

Usa variables para mantener consistencia en colores, tamaños, etc:

```scss
// En _variables.scss
$primary-color: #0070f3;
$border-radius: 8px;

// En tu componente
.button {
  background-color: $primary-color;
  border-radius: $border-radius;
}
```

### 2. Anidamiento

Anida selectores para mejor organización:

```scss
.card {
  padding: 1rem;
  
  .title {
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
```

### 3. Mixins

Reutiliza bloques de estilos con mixins:

```scss
// Definir mixin
@mixin flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

// Usar mixin
.container {
  @include flex-center;
  height: 100vh;
}
```

### 4. Funciones

```scss
@function calculate-rem($pixels) {
  @return #{$pixels / 16}rem;
}

.element {
  padding: calculate-rem(32); // 2rem
}
```

## 📝 Cómo usar SCSS en componentes

### Opción 1: CSS Modules (Recomendado)

Crea un archivo `.module.scss` junto a tu componente:

**MyComponent.module.scss**:
```scss
@import '../styles/variables';
@import '../styles/mixins';

.container {
  @include flex-center;
  padding: calculate-rem(32);
  
  @include respond-to('tablet') {
    padding: calculate-rem(64);
  }
}

.title {
  color: $primary-color;
  
  &:hover {
    color: darken($primary-color, 10%);
  }
}
```

**MyComponent.tsx**:
```tsx
import styles from './MyComponent.module.scss';

export default function MyComponent() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mi Componente</h1>
    </div>
  );
}
```

### Opción 2: Estilos globales

Para estilos globales, edita `app/globals.scss` o `styles/globals.scss`:

```scss
// app/globals.scss
@import "../styles/variables";

body {
  font-family: Arial, sans-serif;
  color: var(--foreground);
}

.global-button {
  @include button-styles($primary-color, white);
}
```

## 🎯 Ejemplos prácticos

### Ejemplo 1: Componente con responsive design

```scss
.hero {
  padding: 2rem;
  
  @include respond-to('tablet') {
    padding: 4rem;
  }
  
  @include respond-to('desktop') {
    padding: 6rem;
  }
}
```

### Ejemplo 2: Botón con estados

```scss
.button {
  @include button-styles($primary-color, white);
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.secondary {
    background-color: $secondary-color;
  }
}
```

### Ejemplo 3: Card con sombra

```scss
.card {
  background: white;
  border-radius: $border-radius;
  padding: calculate-rem(24);
  @include box-shadow(2);
  
  &:hover {
    @include box-shadow(3);
    transform: translateY(-2px);
    transition: all 0.3s ease;
  }
}
```

## 🔧 Mixins disponibles

En `styles/_mixins.scss` encontrarás:

- `@include flex-center` - Centra contenido con flexbox
- `@include flex-between` - Distribuye contenido con space-between
- `@include truncate` - Trunca texto con puntos suspensivos
- `@include box-shadow($level)` - Sombras predefinidas (1, 2, 3)
- `@include respond-to($breakpoint)` - Media queries responsive

## 📱 Breakpoints

```scss
// mobile: 640px
// tablet: 768px
// desktop: 1024px
// wide: 1280px

.element {
  font-size: 1rem;
  
  @include respond-to('tablet') {
    font-size: 1.25rem;
  }
  
  @include respond-to('desktop') {
    font-size: 1.5rem;
  }
}
```

## 💡 Tips

1. **Prefija con `_` los archivos parciales**: `_variables.scss`, `_mixins.scss`
2. **Usa CSS Modules para componentes**: `Component.module.scss`
3. **Importa variables al inicio**: `@import '../styles/variables';`
4. **Combina con Tailwind**: SCSS y Tailwind funcionan perfectamente juntos
5. **Usa funciones para cálculos**: `calculate-rem()`, `darken()`, `lighten()`

## 🚀 Siguiente paso

Crea tu primer componente con SCSS:

```bash
# Ejemplo: components/Card/Card.module.scss
```

```scss
@import '../../styles/variables';
@import '../../styles/mixins';

.card {
  @include box-shadow(2);
  background: white;
  border-radius: $border-radius;
  padding: calculate-rem(24);
  
  .title {
    color: $primary-color;
    margin-bottom: calculate-rem(16);
  }
}
```

¡Disfruta usando SCSS! 🎨

