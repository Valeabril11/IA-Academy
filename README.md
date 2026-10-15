# AI Academy v1.0

Base funcional modular del Curso Experto en Arquitectura y Desarrollo de IA.

## Inicio rápido
Requiere Node.js 20.19+ o 22.12+ y npm.

```bash
npm install
npm run dev
```

Abrí la URL indicada por Vite (normalmente http://localhost:5173).

## Verificación
```bash
npm run build
```

## Cómo agregar contenido de un módulo
1. Abrí la conversación correspondiente a ese módulo y proporcioná a Codex los materiales originales accesibles.
2. Pedile que edite únicamente `src/modules/modulo-N/index.ts` y su README.
3. Cada lección sigue el contrato `Lesson` de `src/types/course.ts`.
4. La aplicación registra los módulos automáticamente desde `src/data/course.ts`.
5. Probá navegación, evaluación y compilación antes de fusionar los cambios.

## Alcance real de esta entrega
Interfaz, rutas, módulos, temarios iniciales, visualizador de lecciones, evaluación, flashcards y progreso local funcionales. Los contenidos de las clases son **marcadores pendientes**, no clases desarrolladas. Los cuestionarios y tarjetas aparecen cuando se cargan los datos correspondientes. No hay autenticación, backend, tutor IA ni ejecución de Python en esta versión.

## Persistencia
`localStorage` por navegador y dispositivo, sin sincronización. Borrar datos del navegador puede borrar el progreso.

## Despliegue
Vite genera `dist/` con `npm run build`. Para publicar bajo subruta (por ejemplo GitHub Pages), configurar `base` en `vite.config.ts` y utilizar rutas compatibles con el hosting o un fallback SPA.
