import type { CourseModule } from '../../types/course';

/** Contenido de Módulo 1 basado en materiales originales; ampliaciones marcadas. */
export const modulo1: CourseModule = {
  "id": "modulo-1",
  "number": 1,
  "title": "Fundamentos de Inteligencia Artificial",
  "subtitle": "Historia, ML, ética, Python, evaluación y pipelines",
  "color": "#8b5cf6",
  "status": "ready",
  "lessons": [
    {
      "id": "m1-l1",
      "title": "Introducción a la Inteligencia Artificial",
      "description": "Capacidades actuales, herramientas, límites y evolución histórica.",
      "durationMinutes": 35,
      "objectives": [
        "Definir IA y diferenciar capacidades de promesas.",
        "Ubicar hitos históricos y el Test de Turing.",
        "Seleccionar herramientas según la tarea."
      ],
      "sections": [
        {
          "heading": "Qué es la IA",
          "body": "La inteligencia artificial es un campo de la informática que diseña sistemas capaces de realizar tareas asociadas con capacidades inteligentes: reconocer patrones, procesar lenguaje, clasificar información, recomendar o planificar. No es una única aplicación ni equivale a ChatGPT. Un sistema puede emplear reglas explícitas o modelos aprendidos de datos. El alcance y la calidad dependen del problema, los datos, la evaluación y el contexto de uso."
        },
        {
          "heading": "Historia: de neuronas matemáticas a Transformers",
          "body": "En 1943 McCulloch y Pitts propusieron una neurona matemática; Hebb (1949) formuló una idea de fortalecimiento de conexiones por actividad conjunta. Turing (1950) planteó una prueba conversacional para examinar si una máquina puede parecer humana al interlocutor: no prueba conciencia ni comprensión. Arthur Samuel (1952) investigó aprendizaje mediante un programa de damas; Rosenblatt presentó el perceptrón (1958). Redes multicapa, LSTM y el éxito de AlexNet (2012) prepararon el camino para la arquitectura Transformer (2017), los modelos de lenguaje y la difusión de ChatGPT en 2022."
        },
        {
          "heading": "Herramientas y usos concretos",
          "body": "Las presentaciones introducen ChatGPT, Claude, Gemini y NotebookLM. Los tres primeros se exploran como asistentes conversacionales; NotebookLM se utiliza para estudiar fuentes aportadas, generar preguntas y formatos de repaso como audio. Una buena elección parte de la necesidad: resumir documentos con trazabilidad, redactar, programar o analizar alternativas. Verificar resultados y no introducir datos confidenciales sin autorización es parte de la práctica profesional."
        },
        {
          "heading": "Capacidad observada, límites y adopción",
          "body": "Las clases distinguen capacidad técnica, adopción efectiva y exposición de tareas laborales. Que una demostración funcione no implica que sea segura, precisa o económicamente viable en producción. Las predicciones sobre reemplazo de ocupaciones y superinteligencia son escenarios, no certezas. La actividad «¿qué nunca podrá hacer la IA?» sirve para cuestionar afirmaciones absolutas y diferenciar apariencia de conducta de capacidades comprobadas."
        }
      ],
      "example": "CASO GUIADO (ampliación didáctica): Un equipo recibe 60 manuales internos. Objetivo A: encontrar en qué documento figura un procedimiento; conviene una herramienta que trabaje con fuentes y permita contrastarlas. Objetivo B: redactar un borrador de instructivo; conviene un asistente generativo con revisión humana. No confundas respuesta convincente con respuesta verificada.",
      "quiz": [
        {
          "id": "m1-l1-q1",
          "question": "¿Qué evalúa principalmente el Test de Turing?",
          "options": [
            "Si la máquina tiene conciencia",
            "Si puede parecer humana en una conversación",
            "Cuántos cálculos realiza por segundo",
            "Si aprendió por refuerzo"
          ],
          "correctIndex": 1,
          "explanation": "La prueba se centra en la indistinguibilidad conversacional, no en demostrar conciencia."
        },
        {
          "id": "m1-l1-q2",
          "question": "¿Qué hito se asocia con 2017?",
          "options": [
            "Perceptrón",
            "Transformer",
            "Prueba de Turing",
            "Programa de damas de Samuel"
          ],
          "correctIndex": 1,
          "explanation": "La arquitectura Transformer fue presentada en 2017."
        },
        {
          "id": "m1-l1-q3",
          "question": "¿Qué herramienta se presentó para estudiar documentos y generar materiales de repaso?",
          "options": [
            "NotebookLM",
            "Un gestor de bases SQL",
            "Docker",
            "K-means"
          ],
          "correctIndex": 0,
          "explanation": "NotebookLM aparece en la clase como herramienta de estudio basada en fuentes."
        },
        {
          "id": "m1-l1-q4",
          "question": "¿Qué afirmación es la más responsable?",
          "options": [
            "Una demo garantiza precisión en producción",
            "Todo sistema de IA aprende por sí mismo",
            "Los resultados requieren evaluación en su contexto",
            "El Test de Turing mide la verdad de las respuestas"
          ],
          "correctIndex": 2,
          "explanation": "La validación depende de datos, riesgos y caso de uso."
        }
      ],
      "flashcards": [
        {
          "front": "IA",
          "back": "Campo de la informática que desarrolla sistemas para tareas asociadas con inteligencia."
        },
        {
          "front": "Test de Turing",
          "back": "Prueba conversacional de apariencia humana; no prueba conciencia."
        },
        {
          "front": "Arthur Samuel",
          "back": "Investigó programas de damas con aprendizaje, hito temprano del ML."
        },
        {
          "front": "Transformer",
          "back": "Arquitectura de 2017 basada en mecanismos de atención."
        },
        {
          "front": "NotebookLM",
          "back": "Herramienta para estudiar fuentes, producir preguntas y material de repaso."
        }
      ]
    },
    {
      "id": "m1-l2",
      "title": "IA, Machine Learning y Deep Learning",
      "description": "Jerarquía conceptual, modelos de lenguaje y tipos de inteligencia artificial.",
      "durationMinutes": 40,
      "objectives": [
        "Distinguir IA, ML, DL y LLM.",
        "Contrastar reglas explícitas con modelos aprendidos.",
        "Diferenciar IA estrecha y AGI."
      ],
      "sections": [
        {
          "heading": "La jerarquía conceptual",
          "body": "IA es el campo general. Machine Learning (ML) es una familia de métodos que ajusta modelos usando datos para generalizar a casos nuevos. Deep Learning (DL) es una rama de ML basada en redes neuronales de múltiples capas. Los grandes modelos de lenguaje (LLM) son modelos entrenados para trabajar con secuencias de tokens; muchos emplean Transformers y deep learning. No todo sistema de IA es ML, no todo ML es DL y no toda IA generativa es un LLM."
        },
        {
          "heading": "Reglas frente a aprendizaje",
          "body": "En programación basada en reglas, un desarrollador especifica condiciones y acciones: si stock < mínimo, mostrar alerta. En ML se define una tarea, se recopilan ejemplos, se entrena un modelo y se evalúa cómo predice casos no vistos. El modelo no «descubre la verdad» automáticamente: aprende patrones de datos que pueden ser incompletos, cambiantes o sesgados."
        },
        {
          "heading": "IA estrecha, AGI y superinteligencia",
          "body": "La IA estrecha resuelve tareas o conjuntos delimitados de tareas: recomendaciones, reconocimiento de imágenes, traducción. La inteligencia artificial general (AGI) se discute como capacidad general comparable a la humana en numerosos ámbitos; no existe una prueba universal aceptada para declararla alcanzada. La superinteligencia es un concepto hipotético de capacidades superiores a las humanas. No mezclar categorías conceptuales con productos disponibles."
        },
        {
          "heading": "Tokens, predicción y confiabilidad",
          "body": "Los LLM procesan unidades de texto llamadas tokens y generan secuencias condicionadas por el contexto. Una respuesta fluida puede ser errónea o inventar referencias; la revisión contra fuentes y la evaluación son indispensables. Los modelos no equivalen a una base de datos fiable de hechos. La explicación «autocompletado sofisticado» ayuda a comenzar, pero no describe por sí sola todas las capacidades emergentes ni el diseño de sistemas con herramientas."
        }
      ],
      "example": "COMPARACIÓN (ampliación): Regla fija: «si quedan menos de 20 cajas, emitir alerta». ML supervisado: «con historial de ventas, temporada y plazos de entrega, estimar unidades vendidas la semana próxima». LLM: «explicar al responsable los factores que contribuyeron al pronóstico», verificando la información.",
      "quiz": [
        {
          "id": "m1-l2-q1",
          "question": "¿Cuál relación es correcta?",
          "options": [
            "ML contiene a IA",
            "DL es parte de ML, y ML es parte de IA",
            "Todos los LLM son reglas fijas",
            "IA y DL son sinónimos"
          ],
          "correctIndex": 1,
          "explanation": "Deep Learning pertenece a ML, que a su vez pertenece al campo más amplio de IA."
        },
        {
          "id": "m1-l2-q2",
          "question": "¿Cuál es un ejemplo de regla explícita?",
          "options": [
            "Predecir demanda con datos históricos",
            "Agrupar clientes por similitud",
            "Si stock < 20, enviar alerta",
            "Entrenar una red neuronal"
          ],
          "correctIndex": 2,
          "explanation": "La condición fue definida directamente por el programador."
        },
        {
          "id": "m1-l2-q3",
          "question": "¿Qué es un LLM?",
          "options": [
            "Una base de datos de verdades",
            "Un gran modelo de lenguaje",
            "Un protocolo de red",
            "Un sistema de almacenamiento"
          ],
          "correctIndex": 1,
          "explanation": "Un LLM modela secuencias de lenguaje mediante tokens."
        },
        {
          "id": "m1-l2-q4",
          "question": "¿Qué describe mejor AGI?",
          "options": [
            "Un clasificador de spam",
            "Una inteligencia general hipotética",
            "Cualquier chatbot",
            "Un algoritmo K-means"
          ],
          "correctIndex": 1,
          "explanation": "AGI es un concepto de capacidad general, distinto de IA estrecha."
        }
      ],
      "flashcards": [
        {
          "front": "IA vs ML",
          "back": "IA es el campo; ML aprende patrones de datos."
        },
        {
          "front": "ML vs DL",
          "back": "DL usa redes neuronales profundas; ML también incluye métodos clásicos."
        },
        {
          "front": "LLM",
          "back": "Modelo de lenguaje a gran escala que trabaja con tokens."
        },
        {
          "front": "IA estrecha",
          "back": "Sistema diseñado para tareas delimitadas."
        },
        {
          "front": "AGI",
          "back": "Concepto de inteligencia artificial de capacidades generales."
        }
      ]
    },
    {
      "id": "m1-l3",
      "title": "Tipos de aprendizaje y aplicaciones",
      "description": "Supervisado, no supervisado, por refuerzo y distinción entre clasificación y regresión.",
      "durationMinutes": 45,
      "objectives": [
        "Reconocer tipos de aprendizaje.",
        "Identificar clasificación, regresión y clustering.",
        "Elegir enfoque según disponibilidad de etiquetas."
      ],
      "sections": [
        {
          "heading": "Aprendizaje supervisado",
          "body": "Se dispone de ejemplos con entradas X y respuestas objetivo y. El modelo aprende a asociarlas para predecir casos nuevos. Clasificación predice etiquetas discretas: fraude/no fraude, abandono/sigue. Regresión predice valores numéricos: precio, ventas o días de resolución. No alcanza con que un número aparezca en la salida: la pregunta y la variable objetivo definen la tarea."
        },
        {
          "heading": "Aprendizaje no supervisado",
          "body": "Trabaja sin una etiqueta objetivo conocida. Busca patrones, estructuras o agrupamientos. Clustering reúne observaciones similares según variables elegidas, por ejemplo clientes con comportamientos de compra parecidos. Los grupos no tienen un significado comercial automático: un analista debe interpretarlos y validar su utilidad."
        },
        {
          "heading": "Aprendizaje por refuerzo y otras variantes",
          "body": "En aprendizaje por refuerzo, un agente aprende una política de acciones mediante señales de recompensa y la interacción con un entorno. Es distinto de entrenar con etiquetas ya dadas. El aprendizaje semisupervisado combina ejemplos etiquetados y no etiquetados; el autosupervisado construye objetivos de entrenamiento a partir de los propios datos. Estas categorías responden a cómo se obtiene la señal de aprendizaje."
        },
        {
          "heading": "De la pregunta de negocio al tipo de modelo",
          "body": "Antes de elegir algoritmo, definí: qué decisión se quiere mejorar, qué datos existen, qué salida es útil, cómo se medirá el error y qué riesgo genera equivocarse. «¿Abandonará el alumno?» es clasificación; «¿qué nota obtendrá?» es regresión. «¿Qué grupos de alumnos presentan patrones semejantes?» es clustering. La clase muestra estas distinciones con educación, IT, sector público y gestión."
        }
      ],
      "example": "EJERCICIO (ampliación): 1) ¿Pedido demorado: sí/no? → clasificación. 2) ¿Cuántos días tardará? → regresión. 3) ¿Qué perfiles de compradores aparecen sin categorías previas? → clustering. 4) Un robot prueba acciones y recibe recompensas → refuerzo.",
      "quiz": [
        {
          "id": "m1-l3-q1",
          "question": "Predecir el importe de una factura es…",
          "options": [
            "Clasificación",
            "Regresión",
            "Clustering",
            "Refuerzo"
          ],
          "correctIndex": 1,
          "explanation": "El objetivo es una cantidad numérica."
        },
        {
          "id": "m1-l3-q2",
          "question": "Detectar si un correo es spam es…",
          "options": [
            "Regresión",
            "Clasificación",
            "Clustering",
            "ETL"
          ],
          "correctIndex": 1,
          "explanation": "Se predice una categoría."
        },
        {
          "id": "m1-l3-q3",
          "question": "Agrupar clientes sin etiquetas previas es…",
          "options": [
            "Clustering no supervisado",
            "Clasificación supervisada",
            "Regresión",
            "Validación cruzada"
          ],
          "correctIndex": 0,
          "explanation": "Se buscan agrupaciones sin una respuesta objetivo etiquetada."
        },
        {
          "id": "m1-l3-q4",
          "question": "Un agente que aprende por recompensas utiliza…",
          "options": [
            "Aprendizaje por refuerzo",
            "Solo regresión",
            "Una regla SQL",
            "Un dashboard"
          ],
          "correctIndex": 0,
          "explanation": "La recompensa guía la política de acciones."
        }
      ],
      "flashcards": [
        {
          "front": "Clasificación",
          "back": "Predice una categoría discreta."
        },
        {
          "front": "Regresión",
          "back": "Predice una magnitud numérica."
        },
        {
          "front": "Clustering",
          "back": "Encuentra agrupamientos en datos sin etiquetas objetivo."
        },
        {
          "front": "Aprendizaje supervisado",
          "back": "Entrenamiento con pares entrada-respuesta."
        },
        {
          "front": "Aprendizaje por refuerzo",
          "back": "Aprendizaje de acciones mediante recompensas e interacción."
        }
      ]
    },
    {
      "id": "m1-l4",
      "title": "Ética, riesgos y uso responsable",
      "description": "ISO 27001, ISO 42001, UNESCO y sesgos algorítmicos.",
      "durationMinutes": 45,
      "objectives": [
        "Diferenciar seguridad de la información y gobernanza de IA.",
        "Reconocer cuatro fuentes de sesgo.",
        "Proponer controles de mitigación."
      ],
      "sections": [
        {
          "heading": "Gobernanza y ética",
          "body": "La clase presenta la Recomendación de la UNESCO sobre ética de la IA (2021) como marco de principios: transparencia, privacidad y no discriminación. La gobernanza convierte principios en responsabilidades, controles, revisiones y evidencia. Un sistema técnicamente funcional puede producir daños si se utiliza fuera de contexto o se confía ciegamente en su resultado."
        },
        {
          "heading": "ISO/IEC 27001 e ISO/IEC 42001",
          "body": "ISO/IEC 27001 se enfoca en un sistema de gestión de seguridad de la información: confidencialidad, integridad y disponibilidad, controles de acceso, cifrado, incidentes y continuidad. ISO/IEC 42001 se orienta a sistemas de gestión de IA: responsabilidades, evaluación de impactos, riesgos, transparencia y mejora continua. Pueden ser complementarias: un hospital con historias clínicas y un modelo de apoyo diagnóstico tiene necesidades de ambas."
        },
        {
          "heading": "Sesgos: datos, modelo, proxy e interpretación",
          "body": "Sesgo de datos: los ejemplos no representan bien a todos los grupos. Sesgo de modelo: elecciones de variables, objetivos o métricas producen diferencias injustificadas. Sesgo de proxy: una variable aparentemente neutra funciona como sustituto de un atributo sensible. Sesgo de interpretación: las personas atribuyen al resultado una autoridad que no tiene. Las diapositivas discuten casos de reconocimiento facial, contratación automatizada, COMPAS y traducción automática; son disparadores para examinar impactos, no para asumir que todo sistema tiene idénticos fallos."
        },
        {
          "heading": "Mitigación y evaluación",
          "body": "La clase propone datos representativos, equipos diversos y auditorías periódicas. Como ampliación práctica, un plan de control puede definir grupos a evaluar, tasas de error por grupo, revisión de variables proxy, pruebas antes del despliegue, mecanismo de reclamos y supervisión humana. La seguridad de datos y la equidad del modelo deben evaluarse por separado: una API segura puede ofrecer decisiones sesgadas."
        }
      ],
      "example": "CASO GUIADO (ampliación): Una fintech usa ML para evaluar solicitudes de crédito. ISO 27001 ayuda a proteger los datos; ISO 42001 ayuda a gestionar el ciclo de vida y riesgos del modelo. Comparar falsos rechazos por grupos y revisar variables indirectas evita interpretar «el algoritmo lo decidió» como explicación suficiente.",
      "quiz": [
        {
          "id": "m1-l4-q1",
          "question": "Una empresa con información fiscal sensible y sin IA debería priorizar…",
          "options": [
            "ISO 27001",
            "Solo ISO 42001",
            "K-means",
            "Transformers"
          ],
          "correctIndex": 0,
          "explanation": "La seguridad de la información es el foco de ISO 27001."
        },
        {
          "id": "m1-l4-q2",
          "question": "Un hospital usa historias clínicas y un modelo de IA. ¿Qué normas pueden ser relevantes?",
          "options": [
            "Ninguna",
            "Solo ISO 42001",
            "Ambas",
            "Solo ISO 27001"
          ],
          "correctIndex": 2,
          "explanation": "Hay tanto riesgos de seguridad de información como de gestión de IA."
        },
        {
          "id": "m1-l4-q3",
          "question": "Un código postal sustituye indirectamente un atributo sensible. Es…",
          "options": [
            "Sesgo de proxy",
            "Regresión",
            "Overfitting",
            "ETL"
          ],
          "correctIndex": 0,
          "explanation": "Una variable proxy puede correlacionarse con características sensibles."
        },
        {
          "id": "m1-l4-q4",
          "question": "¿Qué acción ayuda a detectar sesgos?",
          "options": [
            "Evaluar tasas de error por grupos",
            "Usar solo accuracy global",
            "Eliminar auditorías",
            "Ocultar el origen de datos"
          ],
          "correctIndex": 0,
          "explanation": "Las métricas desagregadas permiten identificar diferencias de desempeño."
        }
      ],
      "flashcards": [
        {
          "front": "ISO 27001",
          "back": "Gestión de seguridad de la información."
        },
        {
          "front": "ISO 42001",
          "back": "Sistema de gestión de inteligencia artificial."
        },
        {
          "front": "Sesgo de datos",
          "back": "Muestras de entrenamiento poco representativas."
        },
        {
          "front": "Sesgo de proxy",
          "back": "Variable indirecta asociada a un atributo sensible."
        },
        {
          "front": "Sesgo de interpretación",
          "back": "Lectura humana errónea o excesivamente confiada de una salida."
        }
      ]
    },
    {
      "id": "m1-l5",
      "title": "Python y primeros modelos supervisados",
      "description": "De variables y funciones a la preparación de un dataset Iris.",
      "durationMinutes": 50,
      "objectives": [
        "Reconocer estructuras básicas de Python.",
        "Identificar variables predictoras y objetivo.",
        "Comprender división entrenamiento/prueba."
      ],
      "sections": [
        {
          "heading": "Python para datos",
          "body": "La sesión introduce Python en Google Colab/Jupyter. Variables almacenan valores, listas agrupan elementos, condicionales ejecutan ramas, bucles recorren colecciones y funciones encapsulan tareas. Para ML se suelen usar arrays y tablas; el foco inicial no es memorizar sintaxis sino poder leer un notebook, ejecutar celdas y explicar qué datos entran y qué sale."
        },
        {
          "heading": "Dataset, variables y etiqueta",
          "body": "Una tabla supervisada contiene observaciones en filas y características en columnas. X designa variables predictoras (por ejemplo largo y ancho de pétalos) e y la etiqueta objetivo (por ejemplo especie). El dataset Iris, usado en la demostración de clase, permite ejemplificar clasificación de especies a partir de medidas. Si cambiamos el objetivo a una medida numérica, la tarea se convierte en regresión."
        },
        {
          "heading": "Separación de datos y generalización",
          "body": "Entrenar y evaluar sobre las mismas observaciones da una imagen demasiado optimista. Se separan datos de entrenamiento y prueba; cuando hay selección de hiperparámetros se emplea además validación o validación cruzada. La división debe evitar filtraciones: información futura, etiquetas encubiertas o registros relacionados no deben contaminar la prueba."
        },
        {
          "heading": "Flujo mínimo de trabajo",
          "body": "Definir objetivo → explorar datos → tratar faltantes y categorías → separar conjuntos → entrenar un modelo de referencia → predecir → medir error → revisar resultados. Este orden es una ampliación didáctica que conecta el notebook de Python y la demostración Iris con el pipeline end-to-end de la clase siguiente."
        }
      ],
      "example": "PYTHON (ampliación ilustrativa):\nfrom sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\nX, y = load_iris(return_X_y=True)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)\nmodel = DecisionTreeClassifier(random_state=42).fit(X_train, y_train)\nprint(accuracy_score(y_test, model.predict(X_test)))\nInterpretación: el número es accuracy en una partición de prueba, no una garantía de desempeño futuro.",
      "quiz": [
        {
          "id": "m1-l5-q1",
          "question": "En Iris, predecir especie a partir de medidas es…",
          "options": [
            "Clasificación",
            "Regresión",
            "Clustering necesariamente",
            "Regla fija"
          ],
          "correctIndex": 0,
          "explanation": "La especie es una etiqueta discreta."
        },
        {
          "id": "m1-l5-q2",
          "question": "¿Qué representa y en ML supervisado?",
          "options": [
            "Las etiquetas objetivo",
            "El editor de código",
            "El número de filas siempre",
            "La GPU"
          ],
          "correctIndex": 0,
          "explanation": "y contiene la respuesta que el modelo intenta aprender."
        },
        {
          "id": "m1-l5-q3",
          "question": "¿Por qué separar entrenamiento y prueba?",
          "options": [
            "Para estimar generalización",
            "Para duplicar etiquetas",
            "Para evitar usar Python",
            "Para aumentar artificialmente accuracy"
          ],
          "correctIndex": 0,
          "explanation": "La prueba debe contener datos no usados para ajustar el modelo."
        },
        {
          "id": "m1-l5-q4",
          "question": "¿Qué riesgo hay si una columna revela la respuesta futura?",
          "options": [
            "Data leakage",
            "Clustering",
            "Normalización",
            "Tokenización"
          ],
          "correctIndex": 0,
          "explanation": "La filtración de información produce evaluaciones engañosas."
        }
      ],
      "flashcards": [
        {
          "front": "X",
          "back": "Matriz de características de entrada."
        },
        {
          "front": "y",
          "back": "Variable objetivo o etiqueta."
        },
        {
          "front": "train/test split",
          "back": "Separación para entrenar y estimar generalización."
        },
        {
          "front": "Iris",
          "back": "Dataset clásico de medidas de flores y etiquetas de especie."
        },
        {
          "front": "Data leakage",
          "back": "Información indebida de prueba o futuro que contamina entrenamiento/evaluación."
        }
      ]
    },
    {
      "id": "m1-l6",
      "title": "Métricas y evaluación de modelos",
      "description": "Matriz de confusión, precision, recall y errores de regresión.",
      "durationMinutes": 50,
      "objectives": [
        "Calcular e interpretar métricas.",
        "Entender por qué accuracy puede engañar.",
        "Seleccionar métricas según el costo de error."
      ],
      "sections": [
        {
          "heading": "La pregunta del banco: 99 % de accuracy",
          "body": "La clase plantea un modelo antifraude con 99 % de accuracy y pregunta si debe desplegarse. Si solo 1 de cada 100 operaciones es fraudulenta, un modelo que siempre dice «no fraude» acierta 99 de 100 pero no detecta ninguno. Por eso es fundamental considerar el desbalance de clases y el objetivo del negocio."
        },
        {
          "heading": "Matriz de confusión",
          "body": "En clasificación binaria: verdadero positivo (TP) detecta un caso positivo real; falso positivo (FP) alerta sin que exista el caso; falso negativo (FN) omite un caso real; verdadero negativo (TN) descarta correctamente. Accuracy=(TP+TN)/total. Precision=TP/(TP+FP): entre alertas, cuántas son correctas. Recall=TP/(TP+FN): entre positivos reales, cuántos detectamos. F1 combina precision y recall mediante su media armónica."
        },
        {
          "heading": "Elegir métricas por costo",
          "body": "Si omitir un fraude es muy costoso, recall puede ser central, sin ignorar los falsos positivos que afectan a clientes. Para clasificación desbalanceada, examinar matriz de confusión, precision/recall y curvas por umbral es más informativo que mirar una sola cifra. Evaluar con datos representativos del escenario real y revisar por grupos evita conclusiones superficiales."
        },
        {
          "heading": "Regresión: errores de predicción",
          "body": "MAE es el promedio de errores absolutos; expresa el error en las mismas unidades del objetivo. MSE promedia errores al cuadrado y penaliza más los errores grandes. RMSE es la raíz del MSE y vuelve a las unidades originales. R² compara la variación explicada con una referencia basada en la media; puede ser negativo. Una métrica aislada no reemplaza la inspección de residuos y la relevancia de negocio."
        }
      ],
      "example": "EJEMPLO NUMÉRICO (ampliación): TP=8, FP=2, FN=12, TN=978. Accuracy=(8+978)/1000=98,6 %. Precision=8/10=80 %. Recall=8/20=40 %. El modelo parece excelente por accuracy, pero pierde 12 de 20 fraudes. Discutí qué umbral y costo de error serían aceptables.",
      "quiz": [
        {
          "id": "m1-l6-q1",
          "question": "Con TP=8 y FN=12, recall es…",
          "options": [
            "80 %",
            "40 %",
            "98,6 %",
            "20 %"
          ],
          "correctIndex": 1,
          "explanation": "Recall=8/(8+12)=0,40."
        },
        {
          "id": "m1-l6-q2",
          "question": "¿Qué métrica responde «de todas las alertas, cuántas eran correctas»?",
          "options": [
            "Precision",
            "Recall",
            "MAE",
            "R²"
          ],
          "correctIndex": 0,
          "explanation": "Precision=TP/(TP+FP)."
        },
        {
          "id": "m1-l6-q3",
          "question": "¿Por qué 99 % accuracy puede ser engañoso?",
          "options": [
            "Por clases desbalanceadas",
            "Porque siempre significa fraude detectado",
            "Porque elimina FN",
            "Porque equivale a F1"
          ],
          "correctIndex": 0,
          "explanation": "Un modelo que predice la clase mayoritaria puede tener alta accuracy y nulo recall."
        },
        {
          "id": "m1-l6-q4",
          "question": "¿Qué métrica de regresión expresa error medio absoluto en unidades originales?",
          "options": [
            "MAE",
            "Accuracy",
            "Recall",
            "Precision"
          ],
          "correctIndex": 0,
          "explanation": "MAE es el promedio del valor absoluto de los errores."
        }
      ],
      "flashcards": [
        {
          "front": "Accuracy",
          "back": "Proporción de predicciones correctas."
        },
        {
          "front": "Precision",
          "back": "TP/(TP+FP): fiabilidad de alertas positivas."
        },
        {
          "front": "Recall",
          "back": "TP/(TP+FN): cobertura de positivos reales."
        },
        {
          "front": "F1",
          "back": "Media armónica de precision y recall."
        },
        {
          "front": "MAE",
          "back": "Promedio de errores absolutos en regresión."
        },
        {
          "front": "RMSE",
          "back": "Raíz del promedio de errores cuadrados."
        }
      ]
    },
    {
      "id": "m1-l7",
      "title": "Pipeline supervisado end-to-end",
      "description": "Preparación, entrenamiento, validación y despliegue responsable.",
      "durationMinutes": 45,
      "objectives": [
        "Enumerar etapas de un pipeline.",
        "Distinguir validación y prueba.",
        "Identificar sobreajuste y controles."
      ],
      "sections": [
        {
          "heading": "Qué es un pipeline",
          "body": "La clase 4 introduce un pipeline de clasificación end-to-end: un flujo reproducible que conecta preparación de datos, transformación, entrenamiento y evaluación. No es solamente llamar a fit(). El pipeline reduce inconsistencias entre lo que se hace al entrenar y lo que se hace al predecir nuevos registros."
        },
        {
          "heading": "Preparación correcta",
          "body": "Los valores faltantes, escalados y codificaciones deben aprenderse sobre datos de entrenamiento, no sobre todo el dataset antes de dividirlo. Una transformación aplicada al conjunto completo puede filtrar información estadística de prueba. Herramientas como Pipeline de scikit-learn permiten encadenar transformadores y un estimador."
        },
        {
          "heading": "Entrenar, validar y probar",
          "body": "El conjunto de entrenamiento ajusta parámetros. La validación compara alternativas y umbrales. La prueba estima rendimiento final sobre datos no utilizados en esas decisiones. La clase pregunta cuál de tres modelos desplegar mirando solo accuracy de entrenamiento: la respuesta responsable es que falta información sobre validación, generalización y costos de error."
        },
        {
          "heading": "Sobreajuste y operación",
          "body": "Overfitting ocurre cuando el modelo se adapta demasiado a ejemplos de entrenamiento y rinde peor en datos nuevos. Se mitiga con validación, complejidad apropiada y datos adecuados. Antes de operar también hay que registrar versiones, revisar deriva de datos, permisos, trazabilidad y supervisión humana según impacto. Estas consideraciones operativas son ampliación didáctica."
        }
      ],
      "example": "PYTHON (ampliación ilustrativa):\nfrom sklearn.pipeline import Pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\npipe = Pipeline([(\"scale\", StandardScaler()), (\"model\", LogisticRegression(max_iter=1000))])\npipe.fit(X_train, y_train)\ny_pred = pipe.predict(X_test)\nLa estandarización se ajusta con X_train dentro del pipeline y se aplica a X_test sin reajustarla.",
      "quiz": [
        {
          "id": "m1-l7-q1",
          "question": "¿Qué significa end-to-end?",
          "options": [
            "Flujo completo desde datos hasta evaluación",
            "Solo crear una variable",
            "Usar siempre una red profunda",
            "Evaluar en entrenamiento únicamente"
          ],
          "correctIndex": 0,
          "explanation": "El pipeline articula pasos de forma reproducible."
        },
        {
          "id": "m1-l7-q2",
          "question": "¿Dónde debe ajustarse un escalador?",
          "options": [
            "En entrenamiento",
            "En todo el dataset antes de separar",
            "Solo en test",
            "En los datos futuros"
          ],
          "correctIndex": 0,
          "explanation": "Ajustarlo antes de separar puede filtrar información."
        },
        {
          "id": "m1-l7-q3",
          "question": "¿Alcanza con accuracy de entrenamiento para elegir despliegue?",
          "options": [
            "Sí, siempre",
            "No, hay que comprobar generalización y costos",
            "Solo si es 99 %",
            "Si hay muchas columnas"
          ],
          "correctIndex": 1,
          "explanation": "El desempeño de entrenamiento no garantiza comportamiento en datos nuevos."
        },
        {
          "id": "m1-l7-q4",
          "question": "¿Qué es overfitting?",
          "options": [
            "Sobreajuste a datos de entrenamiento",
            "Error de sintaxis",
            "Falta de conexión SQL",
            "Un tipo de clustering"
          ],
          "correctIndex": 0,
          "explanation": "El modelo memoriza particularidades y generaliza peor."
        }
      ],
      "flashcards": [
        {
          "front": "Pipeline",
          "back": "Secuencia reproducible de preparación y modelado."
        },
        {
          "front": "Validación",
          "back": "Datos usados para seleccionar opciones sin tocar el test final."
        },
        {
          "front": "Prueba",
          "back": "Datos reservados para evaluación final."
        },
        {
          "front": "Overfitting",
          "back": "Sobreajuste que perjudica generalización."
        },
        {
          "front": "StandardScaler",
          "back": "Transformador que estandariza características numéricas."
        }
      ]
    },
    {
      "id": "m1-l8",
      "title": "Clustering no supervisado y cierre",
      "description": "Segmentación de clientes, K-means y repaso integrador del módulo.",
      "durationMinutes": 45,
      "objectives": [
        "Explicar clustering y K-means.",
        "Interpretar agrupamientos con criterio de negocio.",
        "Integrar ética, datos, métricas y pipeline."
      ],
      "sections": [
        {
          "heading": "Problema sin etiquetas",
          "body": "La última clase presenta una tabla con gasto_mensual y visitas_por_mes. Marketing quiere campañas diferentes, pero no conoce de antemano los perfiles de clientes. A diferencia de clasificación, no existe una etiqueta «tipo de cliente» para aprender: la tarea consiste en descubrir estructuras según similitud."
        },
        {
          "heading": "Cómo funciona K-means",
          "body": "K-means recibe un número K de grupos y alterna dos operaciones: asigna cada observación al centroide más cercano y actualiza centroides con el promedio de los puntos asignados. Repite hasta converger o alcanzar un límite. La distancia depende de la escala: si gasto está en miles y visitas en unidades, conviene analizar el escalado. K-means es una de las soluciones que las diapositivas proponen comparar, no la única técnica posible."
        },
        {
          "heading": "Interpretación y límites",
          "body": "Los grupos no son verdades naturales. Cambian con las variables, su escalado, la cantidad de clusters y los datos. Se pueden evaluar con métricas como silhouette (ampliación) y con criterios de utilidad de negocio. Un segmento de alto gasto y baja frecuencia puede orientar campañas, pero no autoriza inferir atributos personales no medidos."
        },
        {
          "heading": "Síntesis para el TP obligatorio",
          "body": "Primero definí la pregunta. Si hay etiquetas y querés categorías: clasificación. Si hay etiquetas y querés un número: regresión. Si no hay etiquetas y buscás grupos: clustering. Después definí fuentes, limpieza, división cuando corresponda, entrenamiento, métricas, sesgos y controles. El material del curso señala un TP obligatorio N.º 1 al cierre del módulo; la consigna concreta no está incluida en los archivos revisados, por lo que esta guía no sustituye esa consigna."
        }
      ],
      "example": "EJEMPLO (ampliación): Clientes A (gasto=100, visitas=1), B (110,2), C (900,12), D (950,11). Tras escalar ambas variables, K-means con K=2 podría separar A/B de C/D. Antes de usarlo, revisar si dos grupos realmente representan una estrategia comercial útil y si existen perfiles intermedios.",
      "quiz": [
        {
          "id": "m1-l8-q1",
          "question": "¿Qué dato falta para aplicar clasificación supervisada al caso de segmentación?",
          "options": [
            "Etiquetas de tipo de cliente",
            "Gasto mensual",
            "Visitas por mes",
            "Filas"
          ],
          "correctIndex": 0,
          "explanation": "Clasificación necesita ejemplos con la etiqueta objetivo."
        },
        {
          "id": "m1-l8-q2",
          "question": "¿Qué requiere K-means como parámetro?",
          "options": [
            "Número K de clusters",
            "Una etiqueta por fila",
            "Un LLM",
            "Una matriz de confusión"
          ],
          "correctIndex": 0,
          "explanation": "K indica cuántos grupos se buscan."
        },
        {
          "id": "m1-l8-q3",
          "question": "¿Por qué escalar gasto y visitas?",
          "options": [
            "Para evitar que la magnitud domine la distancia",
            "Para crear etiquetas",
            "Para garantizar justicia",
            "Para eliminar todos los errores"
          ],
          "correctIndex": 0,
          "explanation": "K-means usa distancias sensibles a las escalas."
        },
        {
          "id": "m1-l8-q4",
          "question": "¿Qué es correcto sobre los clusters?",
          "options": [
            "Son categorías objetivas inmutables",
            "Requieren interpretación y validación",
            "Siempre equivalen a fraude",
            "Garantizan rentabilidad"
          ],
          "correctIndex": 1,
          "explanation": "El significado y utilidad de los grupos deben contrastarse."
        }
      ],
      "flashcards": [
        {
          "front": "Clustering",
          "back": "Agrupamiento de observaciones sin etiquetas objetivo."
        },
        {
          "front": "K-means",
          "back": "Algoritmo que asigna puntos a K centroides y los actualiza."
        },
        {
          "front": "Centroide",
          "back": "Centro promedio de un cluster."
        },
        {
          "front": "Escalado",
          "back": "Ajuste de magnitudes para que las distancias sean comparables."
        },
        {
          "front": "Silhouette",
          "back": "Métrica opcional de cohesión y separación de grupos."
        }
      ]
    }
  ]
};
