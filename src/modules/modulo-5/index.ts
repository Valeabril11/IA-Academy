import type { CourseModule } from '../../types/course';

export const modulo5: CourseModule = {
  "id": "modulo-5",
  "number": 5,
  "title": "Herramientas y evaluación",
  "subtitle": "Frameworks, evaluación, AutoML, visualización y SGIA",
  "color": "#f472b6",
  "status": "ready",
  "lessons": [
    {
      "id": "m5-l1",
      "title": "Frameworks y evaluación de modelos",
      "description": "De los tensores al entrenamiento, la validación y la elección de métricas confiables.",
      "durationMinutes": 95,
      "objectives": [
        "Distinguir tensores, frameworks y modelos entrenados.",
        "Construir y evaluar conceptualmente una red neuronal con TensorFlow/Keras y PyTorch.",
        "Elegir métricas apropiadas para clasificación y regresión.",
        "Evitar fuga de datos, sobreajuste y evaluaciones engañosas."
      ],
      "sections": [
        {
          "heading": "1. Del dato al tensor",
          "body": "Un tensor es una estructura de datos numéricos con forma (shape) y tipo (dtype). Un escalar tiene 0 ejes, un vector 1, una matriz 2 y un lote de imágenes puede tener 4: [lote, alto, ancho, canales]. La dimensionalidad no equivale al número de elementos. Por ejemplo, una imagen RGB de 64×64 píxeles tiene shape (64,64,3); un lote de 32 imágenes tiene shape (32,64,64,3). El framework aplica operaciones matemáticas sobre estos arreglos y calcula gradientes para aprender parámetros."
        },
        {
          "heading": "2. TensorFlow y PyTorch: qué resuelven",
          "body": "Ambos permiten definir capas, funciones de pérdida, optimizadores y ciclos de entrenamiento con CPU o aceleradores compatibles. TensorFlow suele utilizar Keras como API de alto nivel; PyTorch ofrece una interfaz imperativa muy utilizada en investigación y producción. No es correcto afirmar que uno es exclusivamente estático y el otro exclusivamente dinámico: ambos soportan ejecución flexible y mecanismos de compilación/optimización. Elegí según equipo, ecosistema, soporte de despliegue y necesidades reales, no por eslóganes."
        },
        {
          "heading": "3. El ciclo completo de Machine Learning",
          "body": "Primero definí problema, variable objetivo y criterio de éxito. Después reuní y depurá datos, separá entrenamiento, validación y prueba, ajustá transformaciones solo con entrenamiento, elegí un baseline, entrená, evaluá y documentá. Entrenamiento actualiza parámetros; validación permite seleccionar hiperparámetros; prueba estima el desempeño final sobre datos no utilizados para seleccionar el modelo. Para series temporales, respetá el orden temporal; no mezcles aleatoriamente información futura."
        },
        {
          "heading": "4. Arquitectura y entrenamiento en Keras",
          "body": "Una red densa conecta entradas numéricas con capas Dense y funciones de activación. ReLU introduce no linealidad; sigmoid suele emplearse en la salida de clasificación binaria. Compilar significa seleccionar optimizador, pérdida y métricas. fit ajusta pesos durante varias épocas; batch_size define cuántos ejemplos se procesan por actualización. La loss guía el aprendizaje y una métrica comunica desempeño; no son necesariamente lo mismo. En producción verificá versiones de librerías y compatibilidad del formato de guardado."
        },
        {
          "heading": "5. PyTorch y diferenciación automática",
          "body": "En PyTorch, nn.Module define el modelo y forward describe cómo se transforma la entrada. Un entrenamiento típico repite: poner gradientes a cero, calcular predicciones, evaluar loss, ejecutar backward para calcular gradientes y optimizer.step para actualizar parámetros. En evaluación se usa model.eval() y un contexto sin gradientes para evitar trabajo innecesario. Es importante separar claramente el código de entrenamiento del de inferencia."
        },
        {
          "heading": "6. Clasificación: matriz de confusión",
          "body": "En clasificación binaria, VP son positivos correctamente detectados, FP son negativos marcados como positivos, FN son positivos omitidos y VN son negativos correctamente descartados. Accuracy=(VP+VN)/total. Precision=VP/(VP+FP): entre los casos señalados, ¿cuántos eran realmente positivos? Recall=VP/(VP+FN): entre los positivos reales, ¿cuántos detectamos? F1 es la media armónica de precision y recall. Cuando hay clases desbalanceadas, accuracy por sí sola puede engañar."
        },
        {
          "heading": "7. ROC-AUC, PR-AUC y umbrales",
          "body": "Un clasificador suele producir una puntuación o probabilidad; el umbral convierte esa puntuación en una etiqueta. Modificar el umbral altera la relación entre falsos positivos y falsos negativos. ROC-AUC resume la capacidad de ordenar positivos por encima de negativos a través de umbrales; no mide calibración. En eventos muy raros, la curva precision-recall y su área pueden aportar más información. Elegí el umbral según el costo de errores y validalo con datos independientes."
        },
        {
          "heading": "8. Regresión: MAE, MSE y RMSE",
          "body": "Regresión predice valores continuos como demanda o tiempo de entrega. MAE promedia errores absolutos y mantiene la unidad original; MSE promedia errores al cuadrado y penaliza más los errores grandes; RMSE es la raíz de MSE y vuelve a la unidad original. Ejemplo: errores 2 y -4 dan MAE=3, MSE=10 y RMSE≈3,16. Compará siempre contra un baseline y revisá segmentos, no solo el promedio global."
        },
        {
          "heading": "9. Generalización, regularización y validación cruzada",
          "body": "Overfitting ocurre cuando el modelo memoriza particularidades del entrenamiento y pierde rendimiento fuera de muestra; underfitting cuando ni siquiera captura patrones relevantes. Dropout, regularización L2, early stopping y más datos adecuados pueden ayudar. k-fold divide el conjunto de desarrollo en k partes: entrena k veces y valida en cada parte. GridSearchCV busca combinaciones de hiperparámetros, pero el conjunto de prueba debe quedar intacto hasta el final. El preprocesamiento debe vivir dentro del pipeline de cada fold para evitar fuga de datos."
        },
        {
          "heading": "10. Escala, Spark y uso de modelos por API",
          "body": "Spark distribuye procesamiento de datos; PySpark permite utilizarlo desde Python. No sustituye automáticamente a TensorFlow/PyTorch: puede preparar conjuntos masivos antes de entrenar modelos. Usar un modelo por API significa enviar solicitudes a un servicio remoto; no equivale a entrenar un modelo propio. Al integrar APIs verificá autenticación, latencia, costos, privacidad, límites de uso, trazabilidad y manejo de errores."
        },
        {
          "heading": "11. Caso guiado: detectar pedidos con riesgo de demora",
          "body": "Supongamos 1.000 pedidos históricos con una etiqueta “demorado”. Usá variables disponibles al momento de crear el pedido, nunca la fecha efectiva de entrega ni datos posteriores. Si solo 5% se demora, un modelo que siempre dice “a tiempo” alcanza 95% accuracy, pero recall de demoras = 0. Elegí métricas por el costo de omitir demoras y compará con una regla simple. Evaluá por período y canal para detectar degradación. No automatices bloqueos sin revisión y criterios de negocio."
        }
      ],
      "example": "# Ejemplo didáctico: clasificación binaria con Keras\nimport numpy as np\nimport tensorflow as tf\n\n# Datos sintéticos: NO representan operaciones reales\nrng = np.random.default_rng(42)\nX = rng.normal(size=(500, 3)).astype(\"float32\")\ny = ((X[:, 0] + 0.6 * X[:, 1]) > 0.4).astype(\"float32\")\nX_train, X_val, X_test = X[:350], X[350:425], X[425:]\ny_train, y_val, y_test = y[:350], y[350:425], y[425:]\n\nmodel = tf.keras.Sequential([\n    tf.keras.Input(shape=(3,)),\n    tf.keras.layers.Dense(16, activation=\"relu\"),\n    tf.keras.layers.Dense(1, activation=\"sigmoid\"),\n])\nmodel.compile(optimizer=\"adam\", loss=\"binary_crossentropy\",\n              metrics=[\"accuracy\"])\nmodel.fit(X_train, y_train, validation_data=(X_val, y_val),\n          epochs=15, batch_size=32, verbose=0)\nprint(model.evaluate(X_test, y_test, verbose=0))\n# En un caso real, separar por tiempo si corresponde y calcular\n# precision/recall/F1 sobre el conjunto de prueba.",
      "quiz": [
        {
          "id": "m5-q1",
          "question": "¿Qué forma tiene un lote de 32 imágenes RGB de 64×64 en formato channels-last?",
          "options": [
            "(64, 64, 3)",
            "(32, 64, 64, 3)",
            "(32, 3)"
          ],
          "correctIndex": 1,
          "explanation": "La primera dimensión representa el tamaño del lote y las siguientes alto, ancho y canales."
        },
        {
          "id": "m5-q2",
          "question": "¿Qué afirmación sobre TensorFlow y PyTorch es más precisa?",
          "options": [
            "Solo TensorFlow permite producción",
            "Ambos soportan entrenamiento y despliegue; difieren en APIs y ecosistemas",
            "PyTorch no usa tensores"
          ],
          "correctIndex": 1,
          "explanation": "Ambos son frameworks maduros y la elección depende de requisitos y herramientas."
        },
        {
          "id": "m5-q3",
          "question": "¿Para qué se reserva el conjunto de prueba?",
          "options": [
            "Para seleccionar hiperparámetros repetidamente",
            "Para entrenar el modelo",
            "Para evaluar al final con datos no utilizados en selección"
          ],
          "correctIndex": 2,
          "explanation": "Usarlo durante la selección sesga la estimación final."
        },
        {
          "id": "m5-q4",
          "question": "En un clasificador de fraude, ¿qué mide recall?",
          "options": [
            "Porcentaje de fraudes reales detectados",
            "Porcentaje de alertas que son fraude",
            "Porcentaje de aciertos totales"
          ],
          "correctIndex": 0,
          "explanation": "Recall=VP/(VP+FN)."
        },
        {
          "id": "m5-q5",
          "question": "Un modelo predice siempre “no demora” cuando 95% no demora. ¿Qué ocurre?",
          "options": [
            "Recall de demoras es 100%",
            "Accuracy puede ser 95% aunque recall de demoras sea 0%",
            "F1 necesariamente es 95%"
          ],
          "correctIndex": 1,
          "explanation": "Las clases desbalanceadas vuelven insuficiente la accuracy."
        },
        {
          "id": "m5-q6",
          "question": "Con VP=30, FP=10 y FN=20, ¿cuál es la precision?",
          "options": [
            "0,60",
            "0,75",
            "0,50"
          ],
          "correctIndex": 1,
          "explanation": "Precision=30/(30+10)=0,75."
        },
        {
          "id": "m5-q7",
          "question": "Con VP=30 y FN=20, ¿cuál es el recall?",
          "options": [
            "0,60",
            "0,75",
            "0,90"
          ],
          "correctIndex": 0,
          "explanation": "Recall=30/(30+20)=0,60."
        },
        {
          "id": "m5-q8",
          "question": "¿Cuál es la principal diferencia entre MSE y MAE?",
          "options": [
            "MSE penaliza cuadráticamente los errores grandes",
            "MAE solo sirve para clasificación",
            "MSE conserva siempre la unidad original"
          ],
          "correctIndex": 0,
          "explanation": "MSE eleva al cuadrado los errores y sus unidades."
        },
        {
          "id": "m5-q9",
          "question": "¿Qué práctica evita data leakage en validación cruzada?",
          "options": [
            "Normalizar con todos los datos antes de dividir",
            "Ajustar transformaciones dentro de cada fold de entrenamiento",
            "Usar la prueba para elegir el modelo"
          ],
          "correctIndex": 1,
          "explanation": "Las estadísticas de transformación no deben aprenderse de validación o prueba."
        },
        {
          "id": "m5-q10",
          "question": "¿Qué hace optimizer.step() en un entrenamiento PyTorch?",
          "options": [
            "Actualiza parámetros usando gradientes",
            "Calcula automáticamente métricas ROC",
            "Guarda el dataset"
          ],
          "correctIndex": 0,
          "explanation": "Luego de backward(), el optimizador aplica una actualización."
        },
        {
          "id": "m5-q11",
          "question": "¿Para qué se usa GridSearchCV?",
          "options": [
            "Explorar combinaciones de hiperparámetros con validación cruzada",
            "Crear datos sintéticos",
            "Garantizar 100% de accuracy"
          ],
          "correctIndex": 0,
          "explanation": "Es una búsqueda sistemática, no una garantía de generalización."
        },
        {
          "id": "m5-q12",
          "question": "¿Qué describe mejor ROC-AUC?",
          "options": [
            "Calibración perfecta de probabilidades",
            "Capacidad discriminativa a través de umbrales",
            "Costo de infraestructura"
          ],
          "correctIndex": 1,
          "explanation": "Resume el ordenamiento de positivos y negativos, no la calibración."
        }
      ],
      "flashcards": [
        {
          "front": "Tensor",
          "back": "Arreglo numérico multidimensional caracterizado por shape y dtype."
        },
        {
          "front": "Epoch",
          "back": "Una pasada completa por los ejemplos de entrenamiento."
        },
        {
          "front": "Batch",
          "back": "Grupo de ejemplos procesado en una actualización."
        },
        {
          "front": "Loss",
          "back": "Función que optimiza el entrenamiento."
        },
        {
          "front": "Precision",
          "back": "VP/(VP+FP): confiabilidad de las alertas positivas."
        },
        {
          "front": "Recall",
          "back": "VP/(VP+FN): cobertura de positivos reales."
        },
        {
          "front": "F1",
          "back": "Media armónica de precision y recall."
        },
        {
          "front": "ROC-AUC",
          "back": "Discriminación del clasificador a través de umbrales."
        },
        {
          "front": "MAE",
          "back": "Promedio de errores absolutos, en unidad original."
        },
        {
          "front": "RMSE",
          "back": "Raíz del error cuadrático medio, en unidad original."
        },
        {
          "front": "Overfitting",
          "back": "Buen ajuste en entrenamiento y peor generalización."
        },
        {
          "front": "Data leakage",
          "back": "Información no disponible legítimamente contamina entrenamiento o selección."
        },
        {
          "front": "k-fold",
          "back": "Validación que rota k particiones como validación."
        },
        {
          "front": "GridSearchCV",
          "back": "Búsqueda de hiperparámetros con validación cruzada."
        },
        {
          "front": "PySpark",
          "back": "Interfaz de Python para Apache Spark."
        }
      ]
    },
    {
      "id": "m5-l2",
      "title": "Visualización, AutoML, ETL/BI y SGIA",
      "description": "De datos sin procesar a tableros, modelos automatizados y gobernanza responsable.",
      "durationMinutes": 90,
      "objectives": [
        "Diseñar un flujo ETL reproducible y explicar cuándo usar Spark.",
        "Seleccionar herramientas de visualización según el objetivo.",
        "Reconocer capacidades y límites de AutoML.",
        "Aplicar el ciclo PDCA a un sistema de gestión de IA según ISO/IEC 42001."
      ],
      "sections": [
        {
          "heading": "1. Arquitectura integral: del origen a la decisión",
          "body": "Una solución analítica suele conectar fuentes (CSV, ERP, API, SQL), ingestión, validaciones, transformaciones, almacenamiento, análisis, visualización y monitoreo. Los tableros describen y explican el negocio; un modelo de ML puede agregar predicciones. Cada capa debe tener responsables, definiciones de indicadores y controles de calidad. No es obligatorio entrenar IA: a veces una regla o un tablero resuelven mejor el problema."
        },
        {
          "heading": "2. Matplotlib y Seaborn",
          "body": "Matplotlib permite construir gráficos de barras, líneas, dispersión e histogramas con control detallado. Seaborn se apoya en Matplotlib y simplifica visualizaciones estadísticas como boxplots, heatmaps y distribuciones. Elegí barras para comparar categorías, líneas para tendencias temporales y dispersión para explorar relaciones numéricas. Rotulá ejes, unidades, período y fuente. Evitá ejes truncados engañosos y colores que sean la única forma de distinguir series."
        },
        {
          "heading": "3. Tableau, Streamlit y BI",
          "body": "Tableau es una plataforma de BI con paneles interactivos y conectores. Streamlit es un framework Python para crear aplicaciones de datos y prototipos web con filtros, gráficos y formularios. No son equivalentes: uno prioriza análisis visual empresarial y el otro permite construir interfaces con código. Power BI es otra alternativa de BI. Una visualización no garantiza datos actualizados: explicá frecuencia de refresco, filtros, permisos y definición de cada KPI."
        },
        {
          "heading": "4. ETL frente a ELT",
          "body": "ETL significa Extract, Transform, Load: extraer de una fuente, limpiar/estandarizar y cargar al destino. En ELT primero se carga y luego se transforma dentro del destino analítico. Ambos patrones son válidos. Ejemplo: unir ventas y devoluciones, convertir fechas y monedas con reglas explícitas, eliminar duplicados según una clave, validar totales y publicar una tabla curada. Conservá datos originales para auditoría y evitá eliminar registros sin registrar motivos."
        },
        {
          "heading": "5. Spark y PySpark",
          "body": "Apache Spark es un motor distribuido para grandes volúmenes de datos. Su abstracción DataFrame permite filtrar, agrupar, unir y escribir tablas; PySpark expone esa funcionalidad en Python. Puede operar en un equipo o un clúster, en batch o con Structured Streaming. No siempre conviene: para archivos pequeños, pandas o SQL suelen ser más simples y baratos. Los formatos Parquet y Delta son comunes para datos analíticos; elegí según infraestructura y gobernanza."
        },
        {
          "heading": "6. Calidad de datos y observabilidad",
          "body": "Una pipeline confiable valida esquema, tipos, unicidad, nulos, rangos, integridad referencial y frescura. Incorporá registros de ejecución, cantidad de filas leídas y escritas, duración, errores y alertas. Una regla como “no permitir cantidades negativas” debe tener excepciones documentadas (por ejemplo, devoluciones). Probá casos límite con datos ficticios antes de conectar sistemas reales. La trazabilidad permite reconstruir qué datos alimentaron un KPI o modelo."
        },
        {
          "heading": "7. AutoML: automatizar sin perder criterio",
          "body": "AutoML automatiza partes del proceso: selección de algoritmos, búsqueda de hiperparámetros, preprocesamiento y comparación de modelos. Ejemplos de ecosistemas incluyen H2O AutoML y servicios administrados en la nube. No garantiza el “mejor modelo” universal: depende de datos, presupuesto de cómputo, métrica, validación y restricciones. Una evaluación automatizada puede sobreajustarse si se consulta reiteradamente la prueba. Revisá explicabilidad, equidad, costo y posibilidad de mantener el sistema."
        },
        {
          "heading": "8. BI descriptivo, diagnóstico y predictivo",
          "body": "BI responde qué pasó y por qué pudo pasar mediante indicadores, segmentaciones y análisis. La predicción es una capacidad adicional, no la definición de BI. Ejemplo: un tablero de entregas muestra demora promedio, evolución y distribución por canal; un modelo estima riesgo futuro. Separá hechos observados de estimaciones y agregá incertidumbre cuando sea pertinente. Evitá presentar correlación como causalidad."
        },
        {
          "heading": "9. ISO/IEC 42001 y SGIA",
          "body": "ISO/IEC 42001 especifica requisitos para establecer, implementar, mantener y mejorar un sistema de gestión de IA (SGIA). No es un algoritmo ni una certificación automática de que un modelo es “ético”. Incluye contexto organizacional, liderazgo, planificación, soporte, operación, evaluación del desempeño y mejora. Su anexo A contiene controles de referencia para abordar riesgos y oportunidades de IA, que deben adaptarse al contexto."
        },
        {
          "heading": "10. PDCA y control humano",
          "body": "Planificar: definir alcance, responsables, riesgos y objetivos medibles. Hacer: ejecutar procesos y controles, documentar datos, proveedores y uso previsto. Verificar: medir indicadores, revisar incidentes, auditorías y cumplimiento. Actuar: corregir no conformidades y mejorar. En decisiones sensibles definí intervención humana, mecanismos de apelación, límites de automatización y responsables de aprobar cambios."
        },
        {
          "heading": "11. Proyecto integrador: tablero de calidad de pedidos",
          "body": "Diseñá un flujo con datos sintéticos de pedidos y entregas. Extraé CSV, validá fechas y claves, calculá indicadores (entregas a tiempo, retraso medio y faltantes), visualizá por mes y región y entrená opcionalmente un baseline de riesgo de demora. Publicá un tablero con definición de métricas y fecha de actualización. Registrá controles de acceso, retención y procedimiento de corrección. Entregables: diccionario de datos, pipeline reproducible, dashboard, evaluación y matriz simple de riesgos."
        }
      ],
      "example": "# Ejemplo reproducible de ETL pequeño + visualización\nimport pandas as pd\nimport matplotlib.pyplot as plt\nfrom io import StringIO\n\ncsv = StringIO(\"\"\"pedido,region,dias_entrega\n1,Norte,2\n2,Sur,5\n3,Norte,4\n4,Sur,3\n\"\"\")\ndf = pd.read_csv(csv)                  # EXTRACT\nassert df[\"pedido\"].is_unique\nassert df[\"dias_entrega\"].ge(0).all()\nresumen = (df.groupby(\"region\", as_index=False)\n           [\"dias_entrega\"].mean())  # TRANSFORM\nresumen.to_csv(\"resumen.csv\", index=False)  # LOAD\nresumen.plot.bar(x=\"region\", y=\"dias_entrega\", legend=False)\nplt.ylabel(\"Días promedio de entrega\")\nplt.tight_layout()\nplt.show()\n\n# Alternativa para grandes volúmenes con PySpark:\n# df = spark.read.option(\"header\", True).csv(\"pedidos.csv\")\n# df.groupBy(\"region\").avg(\"dias_entrega\").write.mode(\"overwrite\").parquet(\"salida\")\n# Requiere conversión explícita de tipos y Spark configurado.",
      "quiz": [
        {
          "id": "m5-q13",
          "question": "¿Qué secuencia corresponde a ETL?",
          "options": [
            "Extraer, transformar, cargar",
            "Evaluar, entrenar, lanzar",
            "Explorar, transferir, localizar"
          ],
          "correctIndex": 0,
          "explanation": "ETL prepara datos para su uso posterior."
        },
        {
          "id": "m5-q14",
          "question": "¿Qué herramienta facilita heatmaps estadísticos con Python?",
          "options": [
            "Seaborn",
            "Git",
            "Docker Compose"
          ],
          "correctIndex": 0,
          "explanation": "Seaborn ofrece una interfaz de alto nivel para visualización estadística."
        },
        {
          "id": "m5-q15",
          "question": "¿Qué caracteriza a Streamlit?",
          "options": [
            "Es un motor SQL distribuido",
            "Permite construir apps interactivas de datos con Python",
            "Es un estándar de auditoría"
          ],
          "correctIndex": 1,
          "explanation": "Streamlit convierte scripts Python en interfaces de datos."
        },
        {
          "id": "m5-q16",
          "question": "¿Cuándo es razonable elegir pandas en lugar de Spark?",
          "options": [
            "Cuando el conjunto cabe cómodamente en memoria y no necesita cómputo distribuido",
            "Cuando se requiere un clúster grande",
            "Cuando Spark es obligatorio para todo CSV"
          ],
          "correctIndex": 0,
          "explanation": "La simplicidad operativa importa; Spark tiene costos de coordinación."
        },
        {
          "id": "m5-q17",
          "question": "¿Qué hace la etapa Transform?",
          "options": [
            "Publica un modelo",
            "Limpia, une y estandariza datos",
            "Compra servidores"
          ],
          "correctIndex": 1,
          "explanation": "Transform prepara los datos para el destino."
        },
        {
          "id": "m5-q18",
          "question": "¿Qué NO garantiza AutoML?",
          "options": [
            "Explorar modelos",
            "Comparar hiperparámetros",
            "Eliminar la necesidad de validar riesgos y calidad"
          ],
          "correctIndex": 2,
          "explanation": "AutoML automatiza búsquedas, no sustituye la responsabilidad humana."
        },
        {
          "id": "m5-q19",
          "question": "¿Qué es PySpark?",
          "options": [
            "La API de Spark para Python",
            "Una librería exclusiva de gráficos",
            "Un estándar ISO"
          ],
          "correctIndex": 0,
          "explanation": "PySpark permite operar DataFrames y tareas distribuidas desde Python."
        },
        {
          "id": "m5-q20",
          "question": "¿Qué fase de PDCA verifica métricas y auditorías?",
          "options": [
            "Planificar",
            "Verificar",
            "Actuar"
          ],
          "correctIndex": 1,
          "explanation": "Check/Verificar compara resultados y controles con objetivos."
        },
        {
          "id": "m5-q21",
          "question": "¿Qué describe mejor ISO/IEC 42001?",
          "options": [
            "Un framework de deep learning",
            "Un estándar de sistema de gestión de IA",
            "Una herramienta de AutoML"
          ],
          "correctIndex": 1,
          "explanation": "Define requisitos organizacionales para gestionar IA."
        },
        {
          "id": "m5-q22",
          "question": "¿Qué práctica mejora la trazabilidad del ETL?",
          "options": [
            "Eliminar logs",
            "Registrar versiones, recuentos y validaciones",
            "Cambiar nombres de columnas sin documentación"
          ],
          "correctIndex": 1,
          "explanation": "Los metadatos permiten reproducir y auditar transformaciones."
        },
        {
          "id": "m5-q23",
          "question": "¿Qué diferencia principal existe entre ETL y ELT?",
          "options": [
            "En ELT se transforma después de cargar",
            "ETL no usa bases de datos",
            "ELT prohíbe validar datos"
          ],
          "correctIndex": 0,
          "explanation": "La posición de la transformación en el flujo es distinta."
        },
        {
          "id": "m5-q24",
          "question": "¿Cuál es una descripción correcta de BI?",
          "options": [
            "Solo sirve para predecir",
            "Apoya decisiones con análisis descriptivo y diagnóstico, y puede incorporar predicción",
            "Es sinónimo de entrenamiento de redes neuronales"
          ],
          "correctIndex": 1,
          "explanation": "BI abarca mucho más que predicción."
        }
      ],
      "flashcards": [
        {
          "front": "Matplotlib",
          "back": "Librería Python de visualización con control detallado."
        },
        {
          "front": "Seaborn",
          "back": "Visualización estadística de alto nivel basada en Matplotlib."
        },
        {
          "front": "Streamlit",
          "back": "Framework Python para aplicaciones web interactivas de datos."
        },
        {
          "front": "Tableau",
          "back": "Plataforma de BI y dashboards interactivos."
        },
        {
          "front": "ETL",
          "back": "Extract → Transform → Load."
        },
        {
          "front": "ELT",
          "back": "Extract → Load → Transform."
        },
        {
          "front": "Spark",
          "back": "Motor de procesamiento distribuido de datos."
        },
        {
          "front": "DataFrame",
          "back": "Estructura tabular para operaciones analíticas."
        },
        {
          "front": "Parquet",
          "back": "Formato columnar frecuente en analítica."
        },
        {
          "front": "AutoML",
          "back": "Automatización de etapas de selección y ajuste de modelos."
        },
        {
          "front": "Data quality",
          "back": "Validaciones de esquema, completitud, unicidad y consistencia."
        },
        {
          "front": "BI",
          "back": "Análisis de datos para apoyar decisiones; no solo predicción."
        },
        {
          "front": "SGIA",
          "back": "Sistema de gestión de inteligencia artificial."
        },
        {
          "front": "ISO/IEC 42001",
          "back": "Estándar de requisitos para un sistema de gestión de IA."
        },
        {
          "front": "PDCA",
          "back": "Planificar, Hacer, Verificar, Actuar."
        }
      ]
    }
  ]
};
