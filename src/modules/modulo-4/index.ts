import type { CourseModule } from '../../types/course';

export const modulo4: CourseModule = {
  "id": "modulo-4",
  "number": 4,
  "title": "Redes neuronales y agentes",
  "subtitle": "Deep Learning, agentes autónomos y gobernanza",
  "color": "#fb923c",
  "status": "ready",
  "lessons": [
    {
      "id": "m4-l1",
      "title": "Redes neuronales",
      "description": "Del perceptrón a CNN, RNN y entrenamiento profundo",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los conceptos y sus límites técnicos",
        "Aplicar el contenido a un caso de negocio verificable",
        "Identificar riesgos, controles y decisiones de arquitectura"
      ],
      "sections": [
        {
          "heading": "Perceptrón y capas",
          "body": "Una neurona artificial calcula una suma ponderada z = Σ(wᵢxᵢ)+b y aplica una activación. Los pesos indican la influencia de cada variable; el sesgo desplaza el umbral. Un perceptrón simple solo separa clases linealmente. Al combinar neuronas en capas ocultas, una red multicapa puede representar relaciones no lineales. Ejemplo: predecir si una máquina necesita mantenimiento a partir de vibración, temperatura y horas de uso."
        },
        {
          "heading": "Forward pass, pérdida y retropropagación",
          "body": "En el paso hacia adelante (forward pass), los datos recorren la red y generan una predicción. Una función de pérdida compara predicción y valor real; la retropropagación calcula gradientes mediante la regla de la cadena y el optimizador actualiza los pesos. La tasa de aprendizaje regula cuánto se modifica cada parámetro. Una tasa muy alta puede impedir converger; una muy baja puede hacer lento el aprendizaje."
        },
        {
          "heading": "Activaciones y generalización",
          "body": "ReLU devuelve max(0,x) y suele emplearse en capas ocultas; sigmoid transforma valores en el intervalo 0–1 y es frecuente en salidas binarias. Softmax normaliza puntajes para varias clases excluyentes. Sobreajuste significa memorizar entrenamiento sin generalizar. Dropout, regularización, aumento de datos y detención temprana pueden reducirlo. Separá entrenamiento, validación y prueba antes de ajustar decisiones."
        },
        {
          "heading": "CNN para imágenes",
          "body": "Una red convolucional aplica filtros locales que comparten parámetros para detectar patrones espaciales. En capas tempranas reconoce bordes y texturas; en capas profundas, combinaciones más complejas. Pooling reduce resolución y costo, aunque puede perder detalles. Una CNN puede clasificar defectos en etiquetas o envases a partir de imágenes, siempre que las imágenes estén etiquetadas y sean representativas."
        },
        {
          "heading": "RNN y LSTM para secuencias",
          "body": "Las redes recurrentes mantienen un estado que incorpora información de pasos anteriores: sirven para texto o series temporales. En secuencias largas, el gradiente puede desaparecer o explotar. LSTM utiliza compuertas para controlar qué información recordar u olvidar. Hoy los Transformers suelen ser preferidos para numerosas tareas de lenguaje, pero RNN/LSTM siguen siendo útiles para comprender el procesamiento secuencial."
        }
      ],
      "example": "Una fábrica reúne 10.000 fotografías de productos. Divide por lote en entrenamiento, validación y prueba para evitar fuga de información. Entrena una CNN para clasificar defecto/no defecto, observa recall de defectos y revisa falsos negativos antes de desplegar.",
      "quiz": [
        {
          "id": "m4-l1-q1",
          "question": "¿Qué hace la retropropagación?",
          "options": [
            "Calcula gradientes para ajustar pesos",
            "Crea etiquetas nuevas",
            "Elimina capas"
          ],
          "correctIndex": 0,
          "explanation": "Usa la regla de la cadena para estimar cómo cambia la pérdida respecto de los parámetros."
        },
        {
          "id": "m4-l1-q2",
          "question": "¿Qué arquitectura aprovecha filtros espaciales compartidos?",
          "options": [
            "LSTM",
            "CNN",
            "Regresión lineal"
          ],
          "correctIndex": 1,
          "explanation": "Las convoluciones detectan patrones locales en imágenes."
        },
        {
          "id": "m4-l1-q3",
          "question": "¿Qué indica overfitting?",
          "options": [
            "Buen resultado solo en entrenamiento",
            "Baja pérdida en prueba",
            "Falta de datos de entrada"
          ],
          "correctIndex": 0,
          "explanation": "Memorizar entrenamiento no equivale a generalizar."
        },
        {
          "id": "m4-l1-q4",
          "question": "¿Para qué sirven las compuertas de LSTM?",
          "options": [
            "Controlar memoria de secuencias",
            "Detectar bordes",
            "Encriptar imágenes"
          ],
          "correctIndex": 0,
          "explanation": "Regulan el flujo de información a lo largo del tiempo."
        }
      ],
      "flashcards": [
        {
          "front": "Perceptrón",
          "back": "Suma ponderada y activación que produce una salida."
        },
        {
          "front": "ReLU",
          "back": "Activación max(0,x)."
        },
        {
          "front": "Backpropagation",
          "back": "Cálculo de gradientes para actualizar pesos."
        },
        {
          "front": "CNN",
          "back": "Red con filtros convolucionales para patrones espaciales."
        },
        {
          "front": "LSTM",
          "back": "RNN con compuertas para gestionar memoria temporal."
        },
        {
          "front": "Overfitting",
          "back": "Buen ajuste en entrenamiento, mala generalización."
        }
      ]
    },
    {
      "id": "m4-l2",
      "title": "Aplicaciones especializadas y entrenamiento",
      "description": "NLP, visión, multimodalidad y paradigmas de aprendizaje",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los conceptos y sus límites técnicos",
        "Aplicar el contenido a un caso de negocio verificable",
        "Identificar riesgos, controles y decisiones de arquitectura"
      ],
      "sections": [
        {
          "heading": "NLP y Transformers",
          "body": "El procesamiento de lenguaje natural aborda clasificación de texto, extracción de entidades, traducción y generación. Un Transformer emplea mecanismos de atención para relacionar tokens según el contexto, incluso cuando están distantes. Tokenización convierte texto en unidades; embeddings representan información en vectores. Atención no implica comprensión humana ni garantiza veracidad."
        },
        {
          "heading": "Visión y multimodalidad",
          "body": "Visión por computadora comprende clasificación de imágenes, detección de objetos y segmentación. Una CNN aprende patrones visuales; arquitecturas basadas en Transformers también pueden trabajar con imágenes. Un modelo multimodal combina modalidades como imagen y texto. CLIP aprende representaciones alineadas de imágenes y descripciones, útiles para recuperación semántica; no sustituye controles de calidad."
        },
        {
          "heading": "Aprendizaje supervisado y no supervisado",
          "body": "Supervisado utiliza pares entrada-etiqueta: clasificación predice categorías, regresión valores continuos. No supervisado busca estructura sin etiquetas, como clustering de clientes. Semisupervisado combina pocos datos etiquetados con muchos sin etiquetar. Elegí el enfoque según objetivo, disponibilidad y calidad de etiquetas, no por moda."
        },
        {
          "heading": "Aprendizaje por refuerzo",
          "body": "Un agente de RL observa un estado, elige una acción, recibe recompensa y cambia su política para maximizar recompensa acumulada. Deben definirse ambiente, acciones, recompensa y límites. Una recompensa mal diseñada puede incentivar conductas no deseadas. RL no es requisito para todo agente basado en LLM: muchos agentes operan mediante prompts, herramientas y flujos definidos sin entrenamiento por refuerzo."
        },
        {
          "heading": "Frameworks y ciclo de entrenamiento",
          "body": "PyTorch y TensorFlow permiten definir tensores, modelos, pérdidas y optimizadores. Flujo: definir problema → obtener y depurar datos → particionar → entrenar → validar y ajustar → evaluar en prueba → desplegar y monitorear. Registrá versión de datos, hiperparámetros, métricas y restricciones. Accuracy sola puede ocultar fallas en clases minoritarias."
        }
      ],
      "example": "Caso: clasificar reclamos recibidos por correo es NLP supervisado; agrupar clientes sin categorías previas es clustering; identificar una botella en una foto es visión; asociar foto con descripción es multimodalidad.",
      "quiz": [
        {
          "id": "m4-l2-q1",
          "question": "¿Qué distingue clasificación de regresión?",
          "options": [
            "Categorías frente a valores continuos",
            "Texto frente a imágenes",
            "GPU frente a CPU"
          ],
          "correctIndex": 0,
          "explanation": "Clasificación predice clases; regresión predice valores."
        },
        {
          "id": "m4-l2-q2",
          "question": "¿Qué mecanismo caracteriza a Transformers?",
          "options": [
            "Atención",
            "Pooling obligatorio",
            "Árboles de decisión"
          ],
          "correctIndex": 0,
          "explanation": "La atención relaciona elementos del contexto."
        },
        {
          "id": "m4-l2-q3",
          "question": "¿Qué tarea corresponde a clustering?",
          "options": [
            "Agrupar observaciones sin etiquetas",
            "Predecir precio con etiquetas",
            "Traducir frases"
          ],
          "correctIndex": 0,
          "explanation": "Busca estructura sin clases conocidas."
        },
        {
          "id": "m4-l2-q4",
          "question": "¿Cuál es un riesgo de RL?",
          "options": [
            "Recompensa mal especificada",
            "Uso obligatorio de SQL",
            "No poder representar estados"
          ],
          "correctIndex": 0,
          "explanation": "El agente puede optimizar una recompensa sin cumplir la intención real."
        }
      ],
      "flashcards": [
        {
          "front": "NLP",
          "back": "Procesamiento computacional de lenguaje humano."
        },
        {
          "front": "Transformer",
          "back": "Arquitectura basada en atención."
        },
        {
          "front": "CLIP",
          "back": "Modelo que alinea representaciones de imagen y texto."
        },
        {
          "front": "Clasificación",
          "back": "Predicción de categorías."
        },
        {
          "front": "Clustering",
          "back": "Agrupación sin etiquetas predefinidas."
        },
        {
          "front": "RL",
          "back": "Aprendizaje por interacción y recompensas."
        }
      ]
    },
    {
      "id": "m4-l3",
      "title": "Arquitectura e integración de agentes",
      "description": "LLM, herramientas, memoria, RAG, ReAct y LangGraph",
      "durationMinutes": 45,
      "objectives": [
        "Explicar los conceptos y sus límites técnicos",
        "Aplicar el contenido a un caso de negocio verificable",
        "Identificar riesgos, controles y decisiones de arquitectura"
      ],
      "sections": [
        {
          "heading": "De chatbot a agente",
          "body": "Un chatbot responde mensajes. Un agente integra un modelo con estado, herramientas, planificación y condiciones de ejecución para completar tareas. Arquitectura conceptual: percibir solicitud → interpretar objetivo → consultar información → planificar → ejecutar acción autorizada → observar resultado → responder. La autonomía debe limitarse por permisos y riesgo."
        },
        {
          "heading": "Reasoning engine y planificación",
          "body": "El LLM puede interpretar instrucciones y proponer pasos, pero no debe ser fuente de verdad sobre estados externos. Separá el plan del resultado verificado de cada herramienta. Usá salidas estructuradas y validaciones de esquema. Para tareas sensibles, una regla determinista o revisión humana debe decidir si una acción puede ejecutarse."
        },
        {
          "heading": "Herramientas, APIs y MCP",
          "body": "Las herramientas conectan el agente con sistemas reales: consultar una factura, abrir un ticket o consultar inventario. Las APIs definen contratos de entrada y salida, autenticación y errores. MCP es un protocolo para exponer herramientas y recursos a clientes compatibles; no reemplaza autorización ni controles de acceso. Aplicá principio de mínimo privilegio, timeouts, idempotencia y registros de auditoría."
        },
        {
          "heading": "Memoria y RAG",
          "body": "La memoria de corto plazo corresponde al estado e historial relevante de la interacción actual, sujeto a límites de contexto. La memoria persistente almacena datos entre sesiones bajo políticas explícitas. RAG recupera fragmentos de documentos mediante búsqueda tradicional o vectorial y los aporta como contexto al LLM. RAG mejora fundamentación, pero no garantiza exactitud: citá documentos, verificá vigencia y tratá el contenido recuperado como datos no confiables."
        },
        {
          "heading": "ReAct y orquestación con LangGraph",
          "body": "ReAct alterna decisión de acción, llamada de herramienta y observación para actualizar el estado. LangGraph permite modelar nodos, transiciones, estado persistente, bifurcaciones y puntos de interrupción para aprobación. Un ciclo robusto tiene número máximo de iteraciones, control de errores, rutas de salida y reglas para escalar a humanos. Docker puede aislar pruebas, pero por sí solo no constituye una frontera de seguridad absoluta."
        },
        {
          "heading": "Human-in-the-loop y guardrails",
          "body": "Human-in-the-loop es un punto de control donde una persona autoriza una acción crítica antes de ejecutarla. Guardrails incluyen validación de parámetros, permisos, filtros de datos, límites monetarios, monitoreo y listas de herramientas permitidas. Nunca confíes en una instrucción encontrada en un PDF o una página web para cambiar permisos del agente."
        }
      ],
      "example": "Flujo de reclamo: recibir solicitud → buscar factura por API de solo lectura → validar titularidad y estado → calcular importe con función determinista → simular resultado → solicitar aprobación humana → ejecutar reembolso autorizado mediante API → verificar confirmación → registrar evento y responder.",
      "quiz": [
        {
          "id": "m4-l3-q1",
          "question": "¿Qué es la memoria de corto plazo de un agente?",
          "options": [
            "Historial y estado de la interacción",
            "Documentos vectorizados permanentes",
            "Memoria de GPU únicamente"
          ],
          "correctIndex": 0,
          "explanation": "El contexto actual y el estado operativo sostienen el intercambio."
        },
        {
          "id": "m4-l3-q2",
          "question": "¿Para qué sirve RAG?",
          "options": [
            "Recuperar evidencia externa para contextualizar",
            "Reentrenar pesos en cada consulta",
            "Autorizar pagos"
          ],
          "correctIndex": 0,
          "explanation": "RAG aporta fragmentos recuperados, sujetos a verificación."
        },
        {
          "id": "m4-l3-q3",
          "question": "¿Qué representa human-in-the-loop?",
          "options": [
            "Aprobación humana antes de una acción crítica",
            "Bucle infinito",
            "Caché del navegador"
          ],
          "correctIndex": 0,
          "explanation": "La intervención humana es una compuerta de control."
        },
        {
          "id": "m4-l3-q4",
          "question": "¿Qué aporta LangGraph?",
          "options": [
            "Estados y transiciones de un flujo",
            "Entrenamiento automático de CNN",
            "Sustitución de todas las APIs"
          ],
          "correctIndex": 0,
          "explanation": "Orquesta nodos, decisiones y pausas del agente."
        }
      ],
      "flashcards": [
        {
          "front": "Reasoning engine",
          "back": "Modelo que interpreta objetivos y propone acciones."
        },
        {
          "front": "RAG",
          "back": "Recuperación de documentos como contexto para generación."
        },
        {
          "front": "Context window",
          "back": "Límite de información procesable en una interacción."
        },
        {
          "front": "ReAct",
          "back": "Ciclo decisión–acción–observación."
        },
        {
          "front": "LangGraph",
          "back": "Orquestación de flujos con estado y transiciones."
        },
        {
          "front": "Human-in-the-loop",
          "back": "Punto de aprobación humana de acciones críticas."
        }
      ]
    },
    {
      "id": "m4-l4",
      "title": "Evaluación responsable y gobernanza",
      "description": "ISO/IEC 42001, impacto, sesgos y controles",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los conceptos y sus límites técnicos",
        "Aplicar el contenido a un caso de negocio verificable",
        "Identificar riesgos, controles y decisiones de arquitectura"
      ],
      "sections": [
        {
          "heading": "Qué gobierna ISO/IEC 42001",
          "body": "ISO/IEC 42001 establece requisitos para un sistema de gestión de IA (SGIA o AIMS) de una organización. No certifica automáticamente que un modelo sea exacto, seguro o justo. Busca definir responsabilidades, políticas, procesos, evaluación de riesgos, documentación y mejora continua a lo largo del ciclo de vida."
        },
        {
          "heading": "Riesgos e impacto",
          "body": "Identificá activos, partes interesadas, usos previstos, usos indebidos razonablemente previsibles y consecuencias. Evaluá probabilidad, severidad y controles para privacidad, discriminación, alucinaciones, ciberseguridad y acciones indebidas. La evaluación de impacto considera a usuarios, clientes y terceros, no solo rendimiento técnico."
        },
        {
          "heading": "Anexo A y evidencias",
          "body": "El Anexo A presenta controles de referencia para gestionar IA; la selección y aplicabilidad deben justificarse según riesgos. Conservá evidencia verificable: versión de modelo y prompts, fuentes, resultados de pruebas, aprobaciones, incidentes, cambios y decisiones. Evitá registrar secretos o razonamientos internos extensos; para auditoría bastan decisiones, reglas aplicadas, herramientas y resultados."
        },
        {
          "heading": "Evaluación de calidad y sesgos",
          "body": "Construí conjuntos de pruebas representativos y separados del entrenamiento. Para clasificación revisá precisión, recall, F1 y matriz de confusión; por subgrupos evaluá diferencias relevantes. Para agentes evaluá exactitud de herramientas, tasa de finalización, errores, costo, latencia, robustez ante prompt injection y cumplimiento de políticas. Red teaming prueba fallos deliberadamente en entornos autorizados."
        },
        {
          "heading": "PDCA y monitoreo",
          "body": "Planificar: riesgos, objetivos y controles. Hacer: implementar y capacitar. Verificar: medir resultados, auditar y registrar no conformidades. Actuar: corregir y mejorar. En producción monitoreá deriva de datos, degradación de métricas, cambios de uso e incidentes. Un control que no se mide puede dejar de ser efectivo."
        }
      ],
      "example": "Auditoría de un agente de soporte: verificar que no accede a datos de otros clientes, que los reembolsos requieren autorización, que registra identificadores no sensibles y que permite reconstruir qué herramienta se usó y qué decisión se aprobó.",
      "quiz": [
        {
          "id": "m4-l4-q1",
          "question": "¿Cuál es el objetivo de ISO/IEC 42001?",
          "options": [
            "Gestionar la IA mediante un sistema organizacional",
            "Garantizar precisión del 100 %",
            "Instalar PyTorch"
          ],
          "correctIndex": 0,
          "explanation": "Es un estándar de sistema de gestión, no una garantía automática de calidad."
        },
        {
          "id": "m4-l4-q2",
          "question": "¿Para qué sirve el Anexo A?",
          "options": [
            "Controles de referencia para riesgos de IA",
            "Salarios del equipo",
            "Elegir GPUs"
          ],
          "correctIndex": 0,
          "explanation": "Incluye controles cuya aplicabilidad se determina por riesgo."
        },
        {
          "id": "m4-l4-q3",
          "question": "¿Qué es deriva de datos?",
          "options": [
            "Cambio en distribuciones respecto de referencia",
            "Cambio de contraseña",
            "Aumento de épocas"
          ],
          "correctIndex": 0,
          "explanation": "Los datos de producción pueden diferir de los usados para entrenar o validar."
        },
        {
          "id": "m4-l4-q4",
          "question": "¿Qué corresponde a Verificar en PDCA?",
          "options": [
            "Medir y auditar controles",
            "Definir objetivos iniciales",
            "Aplicar correcciones sin evaluar"
          ],
          "correctIndex": 0,
          "explanation": "Check compara desempeño y controles contra lo planificado."
        }
      ],
      "flashcards": [
        {
          "front": "ISO/IEC 42001",
          "back": "Norma de sistema de gestión de IA."
        },
        {
          "front": "Anexo A",
          "back": "Controles de referencia para gestión de riesgos."
        },
        {
          "front": "PDCA",
          "back": "Planificar, Hacer, Verificar, Actuar."
        },
        {
          "front": "Drift",
          "back": "Cambio de datos o comportamiento respecto de referencia."
        },
        {
          "front": "Red teaming",
          "back": "Pruebas adversariales autorizadas."
        },
        {
          "front": "Auditabilidad",
          "back": "Capacidad de reconstruir decisiones con evidencia."
        }
      ]
    },
    {
      "id": "m4-l5",
      "title": "Integración: del perceptrón al agente ético",
      "description": "Proyecto final: agente de soporte técnico autónomo y seguro",
      "durationMinutes": 45,
      "objectives": [
        "Explicar los conceptos y sus límites técnicos",
        "Aplicar el contenido a un caso de negocio verificable",
        "Identificar riesgos, controles y decisiones de arquitectura"
      ],
      "sections": [
        {
          "heading": "Caso integrador y alcance",
          "body": "El caso original propone un cliente que solicita reembolso de una factura por error en pagos. La solución no necesita entrenar una red neuronal desde cero: utiliza un LLM para interpretar la solicitud, herramientas de consulta y reglas deterministas para validar importes. El vínculo con redes neuronales es conceptual: el LLM es un modelo neuronal dentro de un sistema mayor."
        },
        {
          "heading": "Diseño por capas",
          "body": "Percepción: extraer identificador y motivo del reclamo. Datos: consultar factura y pagos con API de solo lectura. Conocimiento: RAG sobre política de devoluciones vigente. Decisión: comprobar identidad, duplicados y elegibilidad mediante reglas. Acción: preparar solicitud de devolución; no ejecutar hasta recibir aprobación. Observación: verificar estado devuelto por la pasarela."
        },
        {
          "heading": "Grafo de estados",
          "body": "Nodos sugeridos: START → validar_solicitud → consultar_factura → recuperar_politica → evaluar_elegibilidad → calcular_reembolso → simular → solicitar_aprobacion → ejecutar → verificar → registrar → END. Rutas alternativas: falta de datos → pedir información; no elegible → explicar motivo; error de API → reintento limitado y escalamiento; aprobación rechazada → cerrar sin ejecutar."
        },
        {
          "heading": "Pruebas y seguridad",
          "body": "Prepará casos de factura inexistente, doble cobro, usuario sin autorización, monto inválido, API caída, reembolso duplicado y prompt injection dentro de un documento recuperado. Usá mocks y sandbox sin credenciales productivas. La idempotencia evita dobles ejecuciones al reintentar. Validá cada transición con reglas verificables."
        },
        {
          "heading": "Auditoría y criterio de aprobación",
          "body": "Un log útil incluye requestId, timestamp, modeloVersion, policyVersion, toolName, toolStatus, decisionCode, approvalId y outcome; no incluye contraseñas ni cadena privada de razonamiento. Criterio de aceptación: ningún reembolso se ejecuta sin autorización, cada respuesta usa datos verificables y todos los errores tienen ruta segura."
        }
      ],
      "example": "{\"requestId\":\"demo-001\",\"event\":\"refund_approved\",\"tool\":\"payments.refund\",\"approvalId\":\"approval-123\",\"policyVersion\":\"v1\",\"outcome\":\"success\"}\n// Registro ilustrativo sin datos personales ni secretos.",
      "quiz": [
        {
          "id": "m4-l5-q1",
          "question": "¿Cuándo puede ejecutarse el reembolso?",
          "options": [
            "Después de autorización y validaciones",
            "Apenas lo solicita el LLM",
            "Cuando RAG encuentra un documento"
          ],
          "correctIndex": 0,
          "explanation": "La acción económica necesita aprobación y reglas verificadas."
        },
        {
          "id": "m4-l5-q2",
          "question": "¿Qué evita una clave de idempotencia?",
          "options": [
            "Duplicar una operación por reintento",
            "La pérdida de contexto",
            "La clasificación errónea"
          ],
          "correctIndex": 0,
          "explanation": "Permite identificar una operación ya procesada."
        },
        {
          "id": "m4-l5-q3",
          "question": "¿Qué debe contener el log?",
          "options": [
            "Decisiones y resultados verificables",
            "Contraseñas",
            "Razonamiento interno privado completo"
          ],
          "correctIndex": 0,
          "explanation": "Se registra evidencia mínima útil sin secretos."
        },
        {
          "id": "m4-l5-q4",
          "question": "¿Qué ocurre si falla la API?",
          "options": [
            "Ruta de error y escalamiento",
            "Reembolso supuesto exitoso",
            "Repetir indefinidamente"
          ],
          "correctIndex": 0,
          "explanation": "Se requieren reintentos limitados y estado de error explícito."
        }
      ],
      "flashcards": [
        {
          "front": "Sandbox",
          "back": "Entorno aislado para pruebas controladas."
        },
        {
          "front": "Idempotencia",
          "back": "Repetir una solicitud sin duplicar el efecto."
        },
        {
          "front": "Mock",
          "back": "Simulación de una dependencia externa."
        },
        {
          "front": "Approval ID",
          "back": "Referencia a una aprobación registrada."
        },
        {
          "front": "Ruta de error",
          "back": "Transición segura ante una falla."
        },
        {
          "front": "Criterio de aceptación",
          "back": "Condición comprobable para dar por válido el sistema."
        }
      ]
    }
  ]
};
