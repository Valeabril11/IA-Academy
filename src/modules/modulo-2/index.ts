import type { CourseModule } from '../../types/course';

/** Módulo 2 — contenido educativo original adaptado de materiales IPAP. */
export const modulo2: CourseModule = {
  "id": "modulo-2",
  "number": 2,
  "title": "Prompt Engineering y ML",
  "subtitle": "Prompts, patrones, prompting avanzado y fundamentos de ML",
  "color": "#22d3ee",
  "status": "ready",
  "lessons": [
    {
      "id": "m2-l1",
      "title": "Estructura y plantillas de prompts",
      "description": "Diseñá instrucciones precisas, reutilizables y comprobables para modelos generativos.",
      "durationMinutes": 45,
      "objectives": [
        "Distinguir IA generativa de automatización basada en reglas",
        "Construir prompts con rol, tarea, contexto, formato y ejemplos",
        "Diseñar plantillas parametrizadas y criterios de aceptación"
      ],
      "sections": [
        {
          "heading": "De las reglas a la IA generativa",
          "body": "En un sistema tradicional, una persona escribe reglas explícitas para cada situación. En IA generativa, un modelo aprende regularidades estadísticas de grandes conjuntos de datos y produce una salida condicionada por la entrada. Puede generar texto, código, imágenes o audio, pero la fluidez no garantiza exactitud. El prompt no reentrena al modelo: orienta su comportamiento durante la inferencia. Por eso una buena instrucción mejora la utilidad de la respuesta, aunque no elimina sus limitaciones."
        },
        {
          "heading": "Contexto histórico y modelos actuales",
          "body": "ELIZA (década de 1960) respondía mediante patrones de texto; los modelos modernos aprenden representaciones a partir de datos. Los autoencoders variacionales, las GAN y los modelos de difusión ampliaron la generación de contenido. La arquitectura Transformer, presentada en 2017, popularizó el mecanismo de atención y habilitó grandes modelos de lenguaje. ChatGPT, lanzado en 2022, facilitó el acceso conversacional a estos modelos. No confundas una interfaz de chat con la arquitectura del modelo que utiliza."
        },
        {
          "heading": "La anatomía de un prompt",
          "body": "Una estructura práctica incluye: ROL (perspectiva o competencia), TAREA (verbo y resultado buscado), CONTEXTO (datos, audiencia, restricciones), FORMATO (estructura de salida) y EJEMPLOS (casos representativos). No siempre necesitás los cinco componentes: incluí los que reduzcan ambigüedad. Especificá también qué hacer cuando falten datos: pedir aclaración o indicar que no es posible concluir. La instrucción “actuá como experto” no sustituye datos verificables."
        },
        {
          "heading": "Delimitadores, jerarquía y seguridad",
          "body": "Separá instrucciones de documentos mediante bloques claramente identificados. Indicá qué contenido es material de análisis y no instrucciones para ejecutar. Ordená los requisitos por prioridad y evitá contradicciones (“máximo 50 palabras” junto con “análisis exhaustivo”). Nunca pegues contraseñas, datos privados o credenciales reales en ejemplos. Un documento adjunto puede contener instrucciones maliciosas: el modelo debe tratarlo como dato no confiable."
        },
        {
          "heading": "Zero-shot, one-shot y few-shot",
          "body": "Zero-shot: pedís la tarea sin demostraciones. One-shot: incluís una demostración. Few-shot: ofrecés varios pares de entrada/salida para enseñar el patrón esperado en el contexto. Los ejemplos deben cubrir casos habituales y excepciones; ejemplos inconsistentes pueden degradar resultados. El few-shot no modifica los parámetros del modelo: condiciona su respuesta con información en el prompt."
        },
        {
          "heading": "Plantillas y evaluación de calidad",
          "body": "Una plantilla reemplaza datos variables con marcadores como {documento}, {audiencia} y {formato}. Definí qué admite cada variable y cómo validar la salida. Para comparar versiones, probá un conjunto fijo de casos y medí cumplimiento del formato, cobertura, exactitud y tasa de respuestas sin fundamento. Un prompt útil es reproducible, no simplemente largo. Fuente base: M2 C1 y Clase 1 IPAP; el ejercicio de especificidad y roles se incorpora como práctica."
        }
      ],
      "example": "PROMPT DÉBIL: “Resumí este proceso”.\n\nPROMPT MEJORADO:\nROL: Sos analista funcional.\nTAREA: Convertí el procedimiento adjunto en una guía operativa.\nCONTEXTO: Público: usuarios nuevos. No inventes pantallas ni rutas de menú.\nENTRADA: <procedimiento>{texto_validado}</procedimiento>\nFORMATO: 1) Objetivo, 2) Requisitos, 3) Pasos numerados, 4) Validaciones.\nCRITERIOS: Si falta información, listala bajo “Pendiente de confirmar”.\n\nPRUEBA: Compará ambas respuestas contra el mismo texto y verificá si cada paso está respaldado.",
      "quiz": [
        {
          "id": "m2-l1-q1",
          "question": "¿Qué elemento define el resultado concreto esperado?",
          "options": [
            "Rol",
            "Tarea",
            "Tono",
            "Temperatura"
          ],
          "correctIndex": 1,
          "explanation": "La tarea expresa la acción y el entregable; el rol solo aporta una perspectiva."
        },
        {
          "id": "m2-l1-q2",
          "question": "¿Para qué sirve un ejemplo few-shot?",
          "options": [
            "Modificar pesos del modelo",
            "Demostrar un patrón de entrada y salida",
            "Conectar una base SQL",
            "Garantizar veracidad"
          ],
          "correctIndex": 1,
          "explanation": "Los ejemplos orientan la respuesta en contexto sin entrenar nuevamente el modelo."
        },
        {
          "id": "m2-l1-q3",
          "question": "¿Cuál es la mejor reacción ante datos insuficientes?",
          "options": [
            "Inventar un valor probable",
            "Omitir la incertidumbre",
            "Indicar qué falta y pedir aclaración",
            "Cambiar el tema"
          ],
          "correctIndex": 2,
          "explanation": "La gestión explícita de incertidumbre reduce respuestas engañosas."
        },
        {
          "id": "m2-l1-q4",
          "question": "¿Qué prompt tiene criterios más verificables?",
          "options": [
            "Hacelo bien",
            "Sé brillante",
            "Entregá una tabla con columnas ID, riesgo y acción, sin agregar hechos no presentes",
            "Escribí mucho"
          ],
          "correctIndex": 2,
          "explanation": "Las columnas y la prohibición de inventar se pueden comprobar."
        },
        {
          "id": "m2-l1-q5",
          "question": "¿Qué función cumple un delimitador?",
          "options": [
            "Aumentar la memoria del modelo",
            "Separar instrucciones y contenido",
            "Cifrar el mensaje",
            "Entrenar el modelo"
          ],
          "correctIndex": 1,
          "explanation": "Los delimitadores reducen ambigüedad entre las partes del prompt."
        },
        {
          "id": "m2-l1-q6",
          "question": "¿Cuál afirmación sobre IA generativa es correcta?",
          "options": [
            "Siempre verifica hechos",
            "Solo sigue reglas escritas a mano",
            "Genera contenido a partir de patrones aprendidos",
            "Nunca comete errores"
          ],
          "correctIndex": 2,
          "explanation": "Aprende regularidades y genera salidas, pero puede equivocarse."
        }
      ],
      "flashcards": [
        {
          "front": "Prompt",
          "back": "Instrucción y contexto enviados a un modelo para orientar su respuesta."
        },
        {
          "front": "Rol",
          "back": "Perspectiva de trabajo; no prueba autoridad ni exactitud."
        },
        {
          "front": "Few-shot",
          "back": "Varios ejemplos de entrada y salida en el contexto."
        },
        {
          "front": "Delimitador",
          "back": "Marca que separa instrucciones, ejemplos y datos."
        },
        {
          "front": "Plantilla",
          "back": "Prompt reutilizable con variables documentadas."
        },
        {
          "front": "Criterio de aceptación",
          "back": "Condición observable para decidir si la respuesta sirve."
        }
      ]
    },
    {
      "id": "m2-l2",
      "title": "Patrones y errores comunes",
      "description": "Identificá alucinaciones, sesgos y problemas de instrucciones antes de llevar una salida a producción.",
      "durationMinutes": 45,
      "objectives": [
        "Diferenciar alucinación, error predictivo y sesgo",
        "Aplicar controles de fundamentación y revisión",
        "Reconocer falsos positivos y falsos negativos"
      ],
      "sections": [
        {
          "heading": "Qué significa alucinar",
          "body": "En IA generativa, una alucinación es contenido presentado como verdadero que no está respaldado por evidencia fiable: referencias inexistentes, citas inventadas o detalles ausentes de un documento. Puede ocurrir por falta de contexto, ambigüedad, limitaciones del modelo o incentivos a responder aunque no sepa. No toda predicción errónea de un clasificador es una “alucinación” en el mismo sentido: conviene separar generación de texto y errores de clasificación."
        },
        {
          "heading": "Causas y señales de alerta",
          "body": "Señales: precisión numérica sin fuente, enlaces inexistentes, afirmaciones incompatibles con el documento, respuestas categóricas a preguntas incompletas. También hay sesgos en datos de entrenamiento, cobertura insuficiente y preguntas que presuponen algo falso. Un texto convincente no es una validación. Para documentos internos, exigí correspondencia entre cada afirmación y la evidencia original."
        },
        {
          "heading": "Cómo reducir el riesgo",
          "body": "Aportá información relevante y actualizada, limitá el alcance de la tarea, solicitá señalar lo desconocido y contrastá resultados con fuentes independientes. La recuperación de documentos (RAG) puede fundamentar una respuesta, pero también puede recuperar material desactualizado o malicioso. Verificá fechas, permisos y calidad del origen. Una plantilla mejora consistencia de formato; no garantiza hechos correctos."
        },
        {
          "heading": "Sesgo de selección y sesgo algorítmico",
          "body": "El sesgo de selección aparece cuando los ejemplos no representan adecuadamente a la población real. El sesgo algorítmico describe resultados sistemáticamente desfavorables por decisiones de diseño, datos, etiquetas o umbrales. Por ejemplo, entrenar una herramienta de selección con historiales sesgados puede perpetuar desigualdades. Evaluá métricas por subgrupos pertinentes, documentá limitaciones y revisá decisiones de alto impacto con personas responsables."
        },
        {
          "heading": "Falsos positivos y falsos negativos",
          "body": "En clasificación binaria: falso positivo = el sistema marca positivo un caso realmente negativo; falso negativo = marca negativo un caso realmente positivo. El costo relativo depende del dominio. En una detección médica, perder casos positivos puede ser especialmente grave; en otras tareas, bloquear demasiados casos legítimos también tiene costos. No confundas estas métricas con “alucinaciones” textuales."
        },
        {
          "heading": "Errores frecuentes de prompting",
          "body": "Ambigüedad (“analizá esto”), ausencia de público objetivo, instrucciones contradictorias, exceso de contexto irrelevante, falta de formato, ejemplos sesgados y confianza ciega en la salida. Una estrategia práctica: escribir el prompt, ejecutar casos de prueba, registrar errores, ajustar una variable a la vez y repetir. Fuente base: M2 C2 y Clase 2 IPAP; se distinguen conceptos que el material original presenta juntos."
        }
      ],
      "example": "CASO: Un asistente resume un reporte y agrega “el proveedor confirmó la entrega el lunes”, aunque el reporte no lo dice.\n1. Clasificá el problema: afirmación no fundamentada.\n2. Agregá al prompt: “Usá únicamente hechos presentes en el reporte”.\n3. Exigí una referencia a la sección que respalda cada afirmación.\n4. Si no hay respaldo: “No consta en el documento”.\n5. Compará contra el reporte original antes de publicar.",
      "quiz": [
        {
          "id": "m2-l2-q1",
          "question": "Una respuesta inventa una cita bibliográfica. ¿Qué ocurrió?",
          "options": [
            "Normalización",
            "Alucinación",
            "Clustering",
            "Regresión"
          ],
          "correctIndex": 1,
          "explanation": "Es una afirmación factual sin fuente real."
        },
        {
          "id": "m2-l2-q2",
          "question": "Un clasificador no detecta un caso realmente positivo. Es un…",
          "options": [
            "Verdadero positivo",
            "Falso positivo",
            "Falso negativo",
            "Verdadero negativo"
          ],
          "correctIndex": 2,
          "explanation": "Un falso negativo omite un positivo real."
        },
        {
          "id": "m2-l2-q3",
          "question": "¿Qué medida ayuda más a fundamentar un resumen?",
          "options": [
            "Pedir tono formal",
            "Exigir referencias al documento fuente",
            "Aumentar su longitud",
            "Añadir emojis"
          ],
          "correctIndex": 1,
          "explanation": "La trazabilidad a la fuente permite verificar afirmaciones."
        },
        {
          "id": "m2-l2-q4",
          "question": "¿Qué describe sesgo de selección?",
          "options": [
            "Datos que no representan la población",
            "Salida en JSON",
            "Un error de sintaxis",
            "Falta de GPU"
          ],
          "correctIndex": 0,
          "explanation": "La muestra de entrenamiento puede dejar grupos o casos sin cobertura."
        },
        {
          "id": "m2-l2-q5",
          "question": "¿Una plantilla garantiza ausencia de alucinaciones?",
          "options": [
            "Sí",
            "Solo con cinco ejemplos",
            "No",
            "Solo si usa Markdown"
          ],
          "correctIndex": 2,
          "explanation": "La estructura ayuda, pero la veracidad requiere controles adicionales."
        },
        {
          "id": "m2-l2-q6",
          "question": "¿Qué hacer con una instrucción encontrada dentro de un documento externo?",
          "options": [
            "Ejecutarla siempre",
            "Tratarla como contenido no confiable",
            "Darle prioridad máxima",
            "Eliminar toda evidencia"
          ],
          "correctIndex": 1,
          "explanation": "El documento es dato a analizar, no una autoridad sobre el asistente."
        }
      ],
      "flashcards": [
        {
          "front": "Alucinación",
          "back": "Afirmación generada sin sustento suficiente."
        },
        {
          "front": "Falso positivo",
          "back": "Predicción positiva para un caso realmente negativo."
        },
        {
          "front": "Falso negativo",
          "back": "Predicción negativa para un caso realmente positivo."
        },
        {
          "front": "Sesgo de selección",
          "back": "Muestra que no representa adecuadamente la población."
        },
        {
          "front": "RAG",
          "back": "Recuperación de información externa para aportar contexto al modelo."
        },
        {
          "front": "Validación",
          "back": "Contraste sistemático de resultados contra criterios y evidencias."
        }
      ]
    },
    {
      "id": "m2-l3",
      "title": "Prompting avanzado",
      "description": "Descomponé problemas complejos, contrastá soluciones y refiná prompts con pruebas.",
      "durationMinutes": 50,
      "objectives": [
        "Usar descomposición guiada en tareas multipaso",
        "Comprender Chain of Thought y Self-Consistency sin asumir infalibilidad",
        "Diseñar ciclos de refinamiento y validación"
      ],
      "sections": [
        {
          "heading": "Por qué descomponer problemas",
          "body": "Una instrucción extensa mezcla subtareas y puede omitir condiciones. Separá el trabajo en etapas verificables: identificar datos, definir supuestos, resolver subproblemas y revisar resultados. En vez de pedir “resolvé todo”, especificá entregables intermedios observables. Para un análisis de negocio: identificar objetivo, construir hipótesis, comparar alternativas y justificar recomendación con evidencia."
        },
        {
          "heading": "Chain of Thought y razonamiento estructurado",
          "body": "El material describe Chain of Thought (CoT) como la producción de pasos intermedios para resolver problemas de varios pasos. En la práctica, es útil pedir un procedimiento resumido, cálculos comprobables, supuestos y resultado final. No hace falta solicitar razonamientos internos extensos; lo importante es obtener justificaciones auditables. El beneficio varía por modelo y tarea, por lo que no debe prometerse una mejora universal."
        },
        {
          "heading": "Zero-shot, few-shot y de menor a mayor",
          "body": "Zero-shot: indicación sin demostraciones. Few-shot: ejemplos resueltos que muestran el método esperado. De menor a mayor: resolver primero componentes sencillos y usar esos resultados para los más complejos. En un proyecto de software, podés pedir primero el esquema de datos, luego las validaciones y finalmente la implementación, con pruebas en cada fase."
        },
        {
          "heading": "Self-Consistency",
          "body": "La técnica consiste en generar varias soluciones independientes para el mismo problema y contrastar sus respuestas. En problemas con una respuesta verificable, el consenso puede ser una señal útil, pero no es una prueba: varios intentos pueden compartir el mismo error. Para decisiones de negocio, conviene comparar alternativas con criterios comunes y revisar evidencia externa, no votar ciegamente."
        },
        {
          "heading": "Refinamiento iterativo",
          "body": "Establecé una línea base y un conjunto fijo de pruebas. Cambiá un elemento por iteración: formato, contexto, ejemplos o restricciones. Registrá versión, entradas, salida y fallas. Evitá optimizar únicamente para un caso de demostración: probá casos nuevos y extremos. Un prompt que funciona con un modelo puede necesitar revisión al cambiar de versión."
        },
        {
          "heading": "Casos de uso y límites",
          "body": "Las técnicas avanzadas ayudan en análisis, clasificación de textos, extracción estructurada y planificación. Son menos útiles cuando el problema depende de hechos que no se aportaron. Ninguna cadena de pasos reemplaza datos fiables ni revisión humana en contextos críticos. Fuente base: M2 C3 y Clase 3 IPAP."
        }
      ],
      "example": "PROBLEMA: Se reciben 100 solicitudes y hay que clasificarlas en cuatro categorías.\nETAPA 1: Definí las cuatro categorías con criterios excluyentes.\nETAPA 2: Probá 10 ejemplos etiquetados por una persona.\nETAPA 3: Pedí JSON con {categoria, evidencia, requiere_revision}.\nETAPA 4: Revisá casos ambiguos y medí coincidencia con etiquetas humanas.\nETAPA 5: Ajustá instrucciones, no los datos de prueba, y repetí.\n\nPARA UN CÁLCULO: 23 unidades iniciales - 20 utilizadas + 6 compradas = 9 unidades. Verificá las operaciones en lugar de confiar en la fluidez de la explicación.",
      "quiz": [
        {
          "id": "m2-l3-q1",
          "question": "¿Qué busca Self-Consistency?",
          "options": [
            "Modificar el dataset",
            "Comparar respuestas de múltiples soluciones",
            "Reemplazar todas las fuentes",
            "Eliminar el costo computacional"
          ],
          "correctIndex": 1,
          "explanation": "Contrasta rutas o respuestas independientes para identificar consistencia."
        },
        {
          "id": "m2-l3-q2",
          "question": "¿El consenso entre varias respuestas garantiza verdad?",
          "options": [
            "Sí",
            "No",
            "Solo si son tres",
            "Solo con temperatura cero"
          ],
          "correctIndex": 1,
          "explanation": "Varias generaciones pueden compartir un error."
        },
        {
          "id": "m2-l3-q3",
          "question": "¿Cuál es un paso intermedio verificable?",
          "options": [
            "Pensá mucho",
            "Identificá los datos y supuestos antes del cálculo",
            "Sé inteligente",
            "Usá un tono creativo"
          ],
          "correctIndex": 1,
          "explanation": "Los datos y supuestos pueden auditarse."
        },
        {
          "id": "m2-l3-q4",
          "question": "¿Qué estrategia resuelve subtareas simples antes de complejas?",
          "options": [
            "Least-to-most",
            "Clustering",
            "Fine-tuning",
            "ETL"
          ],
          "correctIndex": 0,
          "explanation": "La descomposición de menor a mayor construye soluciones gradualmente."
        },
        {
          "id": "m2-l3-q5",
          "question": "¿Qué conviene mantener fijo al comparar prompts?",
          "options": [
            "El nombre del archivo",
            "Los casos de evaluación",
            "La cantidad de adjetivos",
            "El color de la interfaz"
          ],
          "correctIndex": 1,
          "explanation": "Un conjunto fijo permite comparar cambios de forma más justa."
        },
        {
          "id": "m2-l3-q6",
          "question": "¿Qué resultado conviene solicitar en tareas críticas?",
          "options": [
            "Solo una conclusión segura",
            "Supuestos, evidencia, resultado y limitaciones",
            "Una respuesta extensa sin fuentes",
            "Una respuesta aleatoria"
          ],
          "correctIndex": 1,
          "explanation": "La trazabilidad permite revisión humana."
        }
      ],
      "flashcards": [
        {
          "front": "Chain of Thought",
          "back": "Técnica de razonamiento por pasos; pedir pasos comprobables es útil."
        },
        {
          "front": "Self-Consistency",
          "back": "Comparación de soluciones independientes para buscar consistencia."
        },
        {
          "front": "Zero-shot",
          "back": "Instrucción sin ejemplos."
        },
        {
          "front": "Few-shot",
          "back": "Instrucción con varios ejemplos."
        },
        {
          "front": "Least-to-most",
          "back": "Resolver partes simples antes de las más complejas."
        },
        {
          "front": "Benchmark de prompts",
          "back": "Conjunto estable de casos y criterios para comparar versiones."
        }
      ]
    },
    {
      "id": "m2-l4",
      "title": "Repositorios y generación automática de prompts",
      "description": "Convertí instrucciones aisladas en activos versionados, probados y reutilizables.",
      "durationMinutes": 45,
      "objectives": [
        "Diseñar una taxonomía y metadatos de prompts",
        "Usar variables, versiones y flujos de aprobación",
        "Comprender generación automática y evaluación de plantillas"
      ],
      "sections": [
        {
          "heading": "Por qué una biblioteca de prompts",
          "body": "Cuando cada integrante improvisa instrucciones, aparecen duplicaciones, resultados inconsistentes y falta de trazabilidad. Una biblioteca es un catálogo curado de plantillas que pueden buscarse, reutilizarse y mejorarse. El valor no está en guardar miles de textos sino en disponer de prompts con propósito claro, propietario, pruebas y límites conocidos."
        },
        {
          "heading": "Taxonomía y metadatos",
          "body": "Clasificá por área, tarea y caso de uso: por ejemplo, Operaciones/Soporte/ResumenDeIncidentes. Una ficha mínima incluye id, nombre, versión, descripción, variables, modelos probados, entradas esperadas, formato de salida, criterios de calidad, responsable y fecha de revisión. Las etiquetas transversales evitan duplicar un prompt en distintas carpetas."
        },
        {
          "heading": "Markdown, YAML y JSON",
          "body": "Markdown con frontmatter YAML resulta legible para equipos humanos. JSON facilita que una aplicación consuma metadatos de forma estructurada. La plantilla debe documentar marcadores como {producto} o {consulta}; no los confundas con sintaxis ejecutable. Validá variables obligatorias, longitudes y tipos antes de enviarlas a un modelo. Si los valores vienen de terceros, tratálos como datos no confiables."
        },
        {
          "heading": "Versionado y gobernanza",
          "body": "Aplicá control de versiones, historial de cambios y revisión por pares. Roles típicos: autor, revisor y usuario lector. El flujo puede ser borrador → pruebas → aprobación → publicación → monitoreo → revisión. Al cambiar de modelo o política, ejecutá nuevamente los casos de prueba. Un prompt aprobado no es válido para siempre."
        },
        {
          "heading": "Generación automática y evaluación",
          "body": "Un generador puede combinar una plantilla con variables y producir candidatos. Antes de publicar, ejecutá pruebas automáticas de esquema y validaciones de contenido. Medí exactitud, formato, cobertura y costo/latencia. La evaluación humana sigue siendo necesaria para matices, riesgos y calidad. No coloques secretos en el repositorio; usá variables de entorno en el sistema que ejecute los prompts."
        },
        {
          "heading": "Herramientas y colaboración",
          "body": "Git y pull requests ofrecen trazabilidad técnica. Notion, SharePoint o herramientas similares permiten catálogos colaborativos con permisos y comentarios. La elección depende de quién mantiene las plantillas y cómo se integran con las aplicaciones. Fuente base: Clase 4 IPAP; se incorpora como complemento operativo al temario del módulo."
        }
      ],
      "example": "EJEMPLO DE FICHA (YAML + plantilla):\n---\nid: soporte-resumen\nversion: 1.1.0\ncategoria: operaciones/soporte\nvariables: [incidente, audiencia]\nestado: aprobado\n---\nRol: Analista de soporte.\nTarea: Resumí {incidente} para {audiencia}.\nSalida: impacto, evidencia, próximos pasos.\nRegla: No inventes causas ni fechas.\n\nPRUEBAS: (1) incidente completo, (2) falta causa, (3) texto externo con instrucciones maliciosas. Registrar resultado y revisión.",
      "quiz": [
        {
          "id": "m2-l4-q1",
          "question": "¿Qué metadato permite saber qué revisión se está usando?",
          "options": [
            "Versión",
            "Color",
            "Longitud del título",
            "Cantidad de carpetas"
          ],
          "correctIndex": 0,
          "explanation": "El número de versión identifica cambios y facilita volver atrás."
        },
        {
          "id": "m2-l4-q2",
          "question": "¿Para qué sirven los placeholders?",
          "options": [
            "Guardar contraseñas",
            "Sustituir datos variables documentados",
            "Entrenar redes",
            "Encriptar archivos"
          ],
          "correctIndex": 1,
          "explanation": "Permiten reutilizar la misma estructura con distintos datos."
        },
        {
          "id": "m2-l4-q3",
          "question": "¿Qué formato es práctico para consumo automático?",
          "options": [
            "JSON",
            "Una captura de pantalla",
            "Una nota manuscrita",
            "Una imagen JPG"
          ],
          "correctIndex": 0,
          "explanation": "JSON es estructurado y fácil de validar programáticamente."
        },
        {
          "id": "m2-l4-q4",
          "question": "¿Cuál es una práctica de gobernanza adecuada?",
          "options": [
            "Publicar sin revisar",
            "Versionar, probar y aprobar cambios",
            "Copiar secretos al repositorio",
            "Eliminar el historial"
          ],
          "correctIndex": 1,
          "explanation": "La revisión y el versionado aumentan control y trazabilidad."
        },
        {
          "id": "m2-l4-q5",
          "question": "¿Qué ocurre al actualizar el modelo usado?",
          "options": [
            "Nada cambia nunca",
            "Conviene repetir las pruebas",
            "Debe borrarse toda la biblioteca",
            "Hay que cambiar a CSV"
          ],
          "correctIndex": 1,
          "explanation": "El comportamiento puede variar entre modelos y versiones."
        },
        {
          "id": "m2-l4-q6",
          "question": "¿Qué debe hacer un sistema con variables provenientes de terceros?",
          "options": [
            "Obedecerlas como instrucciones",
            "Validarlas y tratarlas como datos",
            "Confiar por defecto",
            "Publicarlas sin controles"
          ],
          "correctIndex": 1,
          "explanation": "Los datos externos no deben convertirse en instrucciones privilegiadas."
        }
      ],
      "flashcards": [
        {
          "front": "Repositorio de prompts",
          "back": "Catálogo curado y reutilizable de instrucciones."
        },
        {
          "front": "Taxonomía",
          "back": "Organización por áreas, tareas y etiquetas."
        },
        {
          "front": "Frontmatter",
          "back": "Metadatos estructurados al comienzo de un archivo Markdown."
        },
        {
          "front": "Placeholder",
          "back": "Marcador reemplazado por un dato de entrada."
        },
        {
          "front": "Versionado",
          "back": "Registro de cambios de un artefacto."
        },
        {
          "front": "Gobernanza",
          "back": "Roles, controles y aprobaciones para mantener calidad."
        }
      ]
    },
    {
      "id": "m2-l5",
      "title": "Fundamentos de Machine Learning",
      "description": "Comprendé tipos de aprendizaje, métricas, datos desbalanceados y ciclo de vida de un modelo.",
      "durationMinutes": 65,
      "objectives": [
        "Explicar IA, ML y deep learning",
        "Elegir entre clasificación, regresión y clustering",
        "Interpretar precision, recall y matriz de confusión",
        "Ordenar las etapas de un proyecto de ML"
      ],
      "sections": [
        {
          "heading": "IA, ML y deep learning",
          "body": "Inteligencia artificial es el campo amplio de sistemas que realizan tareas asociadas con capacidades inteligentes. Machine Learning es un enfoque dentro de IA que ajusta modelos a partir de datos. Deep learning es una familia de técnicas de ML basada en redes neuronales con múltiples capas. No toda IA es ML ni todo ML usa redes neuronales. En programación tradicional se definen reglas explícitas; en ML se aprende una función aproximada a partir de ejemplos."
        },
        {
          "heading": "Datos, variables y etiquetas",
          "body": "Una fila representa una observación; las features o características son variables de entrada (X); el target o etiqueta es el resultado que se desea predecir (y). Ejemplo: historial de ventas, estacionalidad y precio pueden servir como entradas para predecir demanda. Una buena definición del objetivo evita fuga de información: nunca incluyas como feature un dato que solo se conocería después de realizar la predicción."
        },
        {
          "heading": "Aprendizaje supervisado",
          "body": "Se entrena con ejemplos etiquetados. Clasificación predice categorías, como “reclamo urgente / no urgente” o “benigno / maligno”. Regresión predice un valor continuo, como unidades de demanda o tiempo estimado. Algoritmos comunes incluyen regresión lineal, regresión logística, árboles y bosques aleatorios. “Regresión logística” se utiliza típicamente para clasificación pese a su nombre."
        },
        {
          "heading": "Aprendizaje no supervisado, semisupervisado y por refuerzo",
          "body": "No supervisado: busca patrones sin etiquetas; clustering agrupa registros parecidos, pero no descubre automáticamente categorías verdaderas. Semisupervisado: combina pocos datos etiquetados con muchos sin etiquetar para reducir costos de anotación. Por refuerzo: un agente aprende políticas mediante interacción con un entorno y señales de recompensa; es distinto de clasificar una tabla fija."
        },
        {
          "heading": "Redes neuronales y aplicaciones",
          "body": "Una neurona artificial combina entradas con pesos, sesgo y una función de activación. Al apilar capas, las redes pueden representar relaciones complejas. Deep learning se usa en visión artificial, lenguaje y audio, pero requiere evaluar costos, datos y necesidad real: modelos clásicos pueden funcionar mejor en datos tabulares pequeños. Las recomendaciones de contenido combinan señales de comportamiento y modelos predictivos; no implican necesariamente una red profunda."
        },
        {
          "heading": "Ciclo de vida de un modelo",
          "body": "1) Planificación: objetivo de negocio y métricas. 2) Preparación: recolectar, limpiar, etiquetar y dividir datos. 3) Ingeniería y evaluación: entrenar, ajustar hiperparámetros y medir con datos no vistos. 4) Implementación: publicar el modelo y conectar aplicaciones. 5) Monitoreo: vigilar deriva de datos, errores, latencia y necesidad de reentrenar. Separá entrenamiento, validación y prueba para evitar evaluar con datos usados al ajustar."
        },
        {
          "heading": "Matriz de confusión y métricas",
          "body": "TP: positivo real predicho positivo; FP: negativo real predicho positivo; FN: positivo real predicho negativo; TN: negativo real predicho negativo. Precision = TP/(TP+FP): qué proporción de alertas positivas fue correcta. Recall o sensibilidad = TP/(TP+FN): qué proporción de positivos reales se detectó. Accuracy = (TP+TN)/total: puede engañar con clases desbalanceadas. F1 es la media armónica de precision y recall. La métrica se elige por el costo de los errores."
        },
        {
          "heading": "Ejercicio de tumores desbalanceados",
          "body": "Supongamos 1.000 estudios: 20 positivos reales y 980 negativos. Un modelo que predice todo negativo obtiene 98 % de accuracy, pero recall positivo de 0 %. Si otro detecta 18 positivos, deja escapar 2 (FN) y genera 12 alertas falsas (FP): recall = 18/20 = 90 %, precision = 18/30 = 60 %. Si importa no perder positivos, priorizá sensibilidad/recall y examiná también precision, costos y umbral; la decisión clínica requiere validación profesional. El ejercicio original plantea precisamente una clasificación con pocos casos malignos."
        },
        {
          "heading": "Ejercicio de secuencia de proyecto",
          "body": "El ejercicio original ofrece: (D) objetivos de negocio, (B) CSV de ventas, (C) regresión entrenada con error de 500 USD y (A) servidor listo. El orden correcto es D → B → C → A: planificación, preparación, evaluación e implementación. En un proyecto real se añade monitoreo y mantenimiento. Fuente base: M2 C5, Clase 5 IPAP y actividad M2 C3.1."
        }
      ],
      "example": "EJEMPLO 1 — CLASIFICACIÓN DESBALANCEADA:\nCasos: 1000 | Positivos reales: 20 | Negativos reales: 980\nModelo A: predice todos negativos → accuracy 98 %, recall 0 %.\nModelo B: TP=18, FN=2, FP=12, TN=968.\nRecall = 18/(18+2) = 0,90.\nPrecision = 18/(18+12) = 0,60.\nAccuracy = (18+968)/1000 = 98,6 %.\n\nEJEMPLO 2 — CICLO DE VIDA:\nD (objetivos) → B (CSV) → C (modelo y error) → A (servidor) → monitoreo.\n\nDESAFÍO: Para detectar reclamos críticos poco frecuentes, explicá por qué mirar solo accuracy sería riesgoso.",
      "quiz": [
        {
          "id": "m2-l5-q1",
          "question": "¿Predecir benigno o maligno es clasificación o regresión?",
          "options": [
            "Regresión",
            "Clasificación",
            "Clustering",
            "Reducción dimensional"
          ],
          "correctIndex": 1,
          "explanation": "Se predice una etiqueta categórica."
        },
        {
          "id": "m2-l5-q2",
          "question": "¿Qué métrica mide cuántos positivos reales detectamos?",
          "options": [
            "Recall",
            "Precision",
            "MAE",
            "R²"
          ],
          "correctIndex": 0,
          "explanation": "Recall = TP/(TP+FN)."
        },
        {
          "id": "m2-l5-q3",
          "question": "¿Qué problema tiene accuracy con clases muy desbalanceadas?",
          "options": [
            "Siempre es cero",
            "Puede ser alta aunque no detecte positivos",
            "No se puede calcular",
            "Solo sirve en regresión"
          ],
          "correctIndex": 1,
          "explanation": "Predecir la clase mayoritaria puede producir accuracy alta y recall nulo."
        },
        {
          "id": "m2-l5-q4",
          "question": "¿Qué orden sigue el ejercicio D/B/C/A?",
          "options": [
            "A-B-C-D",
            "B-D-A-C",
            "D-B-C-A",
            "C-B-D-A"
          ],
          "correctIndex": 2,
          "explanation": "Objetivos → datos → evaluación → despliegue."
        },
        {
          "id": "m2-l5-q5",
          "question": "¿Qué tarea predice una cantidad continua?",
          "options": [
            "Clasificación",
            "Regresión",
            "Clustering",
            "Etiquetado manual"
          ],
          "correctIndex": 1,
          "explanation": "Regresión estima valores numéricos continuos."
        },
        {
          "id": "m2-l5-q6",
          "question": "¿Qué enfoque agrupa registros sin etiquetas?",
          "options": [
            "Supervisado",
            "No supervisado",
            "Aprendizaje por refuerzo",
            "Prompting"
          ],
          "correctIndex": 1,
          "explanation": "Clustering es un caso típico de aprendizaje no supervisado."
        },
        {
          "id": "m2-l5-q7",
          "question": "Con TP=18 y FN=2, ¿cuál es el recall?",
          "options": [
            "60 %",
            "90 %",
            "98 %",
            "20 %"
          ],
          "correctIndex": 1,
          "explanation": "18/(18+2)=0,90."
        },
        {
          "id": "m2-l5-q8",
          "question": "¿Qué es fuga de información (data leakage)?",
          "options": [
            "Pérdida de conexión",
            "Usar en entrenamiento información que no estaría disponible al predecir",
            "Un error de tipado",
            "Cifrar variables"
          ],
          "correctIndex": 1,
          "explanation": "Produce una evaluación artificialmente optimista."
        },
        {
          "id": "m2-l5-q9",
          "question": "¿Para qué sirve el conjunto de prueba?",
          "options": [
            "Entrenar todos los pesos",
            "Evaluar generalización con datos no usados para ajustar",
            "Definir el nombre del modelo",
            "Almacenar prompts"
          ],
          "correctIndex": 1,
          "explanation": "El test debe reservarse para una evaluación final imparcial."
        },
        {
          "id": "m2-l5-q10",
          "question": "¿Qué sigue después de desplegar un modelo?",
          "options": [
            "Nada",
            "Monitorear rendimiento y deriva",
            "Eliminar datos de prueba",
            "Dejar de validar"
          ],
          "correctIndex": 1,
          "explanation": "Los datos y el entorno cambian, por lo que hace falta seguimiento."
        }
      ],
      "flashcards": [
        {
          "front": "Feature",
          "back": "Variable de entrada utilizada para predecir."
        },
        {
          "front": "Target",
          "back": "Variable o etiqueta que se quiere predecir."
        },
        {
          "front": "Clasificación",
          "back": "Predicción de una categoría."
        },
        {
          "front": "Regresión",
          "back": "Predicción de un valor continuo."
        },
        {
          "front": "Clustering",
          "back": "Agrupación de observaciones similares sin etiquetas."
        },
        {
          "front": "Recall",
          "back": "TP/(TP+FN), sensibilidad sobre positivos reales."
        },
        {
          "front": "Precision",
          "back": "TP/(TP+FP), proporción correcta entre positivos predichos."
        },
        {
          "front": "Overfitting",
          "back": "Ajuste excesivo a entrenamiento que reduce generalización."
        },
        {
          "front": "Data leakage",
          "back": "Información indebida que contamina entrenamiento o evaluación."
        },
        {
          "front": "MLOps",
          "back": "Prácticas para desplegar, supervisar y mantener modelos."
        }
      ]
    }
  ]
};
