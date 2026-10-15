# Instrucciones para Codex — AI Academy

## Objetivo
Plataforma educativa modular en React + TypeScript + Vite. Mantener la interfaz dark y la arquitectura actual.

## Regla de aislamiento
Si la tarea corresponde al módulo N, modificar principalmente `src/modules/modulo-N/`. No editar otros módulos sin autorización explícita. No alterar contratos globales ni rutas sin explicar el impacto.

## Contrato de datos
Cada módulo exporta `moduloN: CourseModule` desde `src/modules/modulo-N/index.ts`. El tipo está en `src/types/course.ts`. Cada clase requiere un `id` único y estable (`mN-lK`). Las preguntas tienen `correctIndex` base cero y una explicación pedagógica.

## Calidad académica
Usar exclusivamente el contenido de los documentos originales aportados en la conversación para afirmar que algo pertenece al curso. Se puede crear material complementario, pero debe estar identificado como ampliación. No inventar citas, temas cubiertos ni resultados. No marcar un módulo como `ready` hasta verificar sus lecciones.

## Requisitos de desarrollo
- No incluir claves ni datos sensibles en el frontend.
- Conservar rutas, navegación y persistencia de progreso.
- Componentes compartidos en `src/components/learning/`.
- Evitar dependencias nuevas salvo necesidad justificada.
- Ejecutar `npm run build` antes de entregar cambios.
- Si se cambia el esquema de progreso, definir migración y no perder el progreso anterior.
- La marca de completado es manual: no afirmar que implica dominio o aprobación del examen.

## Forma de entrega por módulo
1. Actualizar `src/modules/modulo-N/index.ts` con clases completas.
2. Incluir objetivos, teoría en secciones, ejemplos, cuestionarios y flashcards.
3. Documentar fuentes usadas y temas pendientes en el README del módulo.
4. Mantener ids estables y comprobar compilación.
