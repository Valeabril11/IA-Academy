import type { CourseModule } from '../../types/course';

export const modulo3: CourseModule = {
  "id": "modulo-3",
  "number": 3,
  "title": "Programación para IA",
  "subtitle": "Python, datos, SQL, modelos y ETL",
  "color": "#34d399",
  "status": "ready",
  "lessons": [
    {
      "id": "m3-l1",
      "title": "Fundamentos de Python",
      "description": "Variables, tipos, condiciones y bucles",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los fundamentos de fundamentos de python.",
        "Aplicar el concepto a datos de ejemplo.",
        "Identificar errores y comprobar resultados."
      ],
      "sections": [
        {
          "heading": "Conceptos esenciales",
          "body": "Python interpreta instrucciones y permite representar datos con int, float, str y bool. Una variable vincula un nombre a un objeto; la asignación no declara un tipo fijo. Las condiciones if/elif/else deciden qué bloque ejecutar y los bucles for recorren iterables. La indentación delimita bloques, no es decorativa."
        },
        {
          "heading": "Aplicación práctica",
          "body": "Caso de estudio: variables, tipos, condiciones y bucles. Identificá los datos de entrada, verificá supuestos, ejecutá el ejemplo y explicá cada resultado. Registrá qué errores podrían aparecer y cómo validarías la salida."
        },
        {
          "heading": "Práctica guiada",
          "body": "1. Ejecutá el ejemplo en un entorno aislado. 2. Cambiá un valor de entrada y anticipá la salida. 3. Contrastá tu predicción con el resultado. 4. Explicá por qué el procedimiento funciona y qué limitaciones tiene."
        }
      ],
      "example": "edad = 20\nif edad >= 18:\n    print(\"Mayor\")\nfor numero in range(3):\n    print(numero)",
      "quiz": [
        {
          "id": "m3-l1-q1",
          "question": "¿Qué determina un bloque en Python?",
          "options": [
            "Llaves",
            "Indentación",
            "Punto y coma"
          ],
          "correctIndex": 1,
          "explanation": "La sangría determina qué instrucciones pertenecen al bloque."
        },
        {
          "id": "m3-l1-q2",
          "question": "¿Qué devuelve range(3)?",
          "options": [
            "0, 1, 2",
            "1, 2, 3",
            "0, 1, 2, 3"
          ],
          "correctIndex": 0,
          "explanation": "El extremo superior de range no se incluye."
        }
      ],
      "flashcards": [
        {
          "front": "Fundamentos de Python",
          "back": "Python interpreta instrucciones y permite representar datos con int, float, str y bool."
        },
        {
          "front": "¿Qué determina un bloque en Python?",
          "back": "Indentación — La sangría determina qué instrucciones pertenecen al bloque."
        },
        {
          "front": "¿Qué devuelve range(3)?",
          "back": "0, 1, 2 — El extremo superior de range no se incluye."
        }
      ]
    },
    {
      "id": "m3-l2",
      "title": "Funciones y estructuras de datos",
      "description": "Listas, tuplas, diccionarios y funciones",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los fundamentos de funciones y estructuras de datos.",
        "Aplicar el concepto a datos de ejemplo.",
        "Identificar errores y comprobar resultados."
      ],
      "sections": [
        {
          "heading": "Conceptos esenciales",
          "body": "Las listas son colecciones ordenadas y mutables; las tuplas son ordenadas e inmutables; los diccionarios relacionan claves con valores y los conjuntos almacenan elementos únicos. Las funciones encapsulan cálculos, reciben parámetros y devuelven resultados con return. Diferenciá modificar una lista de crear otra, y evitá usar listas mutables como argumentos por defecto."
        },
        {
          "heading": "Aplicación práctica",
          "body": "Caso de estudio: listas, tuplas, diccionarios y funciones. Identificá los datos de entrada, verificá supuestos, ejecutá el ejemplo y explicá cada resultado. Registrá qué errores podrían aparecer y cómo validarías la salida."
        },
        {
          "heading": "Práctica guiada",
          "body": "1. Ejecutá el ejemplo en un entorno aislado. 2. Cambiá un valor de entrada y anticipá la salida. 3. Contrastá tu predicción con el resultado. 4. Explicá por qué el procedimiento funciona y qué limitaciones tiene."
        }
      ],
      "example": "def promedio(valores):\n    return sum(valores) / len(valores) if valores else None\nventas = [10, 20, 30]\nprint(promedio(ventas))",
      "quiz": [
        {
          "id": "m3-l2-q1",
          "question": "¿Qué estructura asocia claves y valores?",
          "options": [
            "Tupla",
            "Diccionario",
            "Lista"
          ],
          "correctIndex": 1,
          "explanation": "Un dict permite acceder por clave."
        },
        {
          "id": "m3-l2-q2",
          "question": "¿Qué hace return?",
          "options": [
            "Imprime",
            "Devuelve un valor",
            "Repite la función"
          ],
          "correctIndex": 1,
          "explanation": "return entrega el resultado al llamador."
        }
      ],
      "flashcards": [
        {
          "front": "Funciones y estructuras de datos",
          "back": "Las listas son colecciones ordenadas y mutables; las tuplas son ordenadas e inmutables; los diccionarios relacionan claves con valores y los conjuntos almacenan elementos únicos."
        },
        {
          "front": "¿Qué estructura asocia claves y valores?",
          "back": "Diccionario — Un dict permite acceder por clave."
        },
        {
          "front": "¿Qué hace return?",
          "back": "Devuelve un valor — return entrega el resultado al llamador."
        }
      ]
    },
    {
      "id": "m3-l3",
      "title": "NumPy",
      "description": "Arrays, vectorización y broadcasting",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los fundamentos de numpy.",
        "Aplicar el concepto a datos de ejemplo.",
        "Identificar errores y comprobar resultados."
      ],
      "sections": [
        {
          "heading": "Conceptos esenciales",
          "body": "NumPy introduce ndarray: una estructura homogénea de N dimensiones con shape, dtype y operaciones vectorizadas. En una suma entre arrays compatibles, la operación se aplica elemento a elemento. Broadcasting permite combinar dimensiones compatibles sin replicar explícitamente datos. El slicing selecciona vistas en muchos casos; una copia independiente se obtiene con copy(). El indexado booleano filtra por condiciones."
        },
        {
          "heading": "Aplicación práctica",
          "body": "Caso de estudio: arrays, vectorización y broadcasting. Identificá los datos de entrada, verificá supuestos, ejecutá el ejemplo y explicá cada resultado. Registrá qué errores podrían aparecer y cómo validarías la salida."
        },
        {
          "heading": "Práctica guiada",
          "body": "1. Ejecutá el ejemplo en un entorno aislado. 2. Cambiá un valor de entrada y anticipá la salida. 3. Contrastá tu predicción con el resultado. 4. Explicá por qué el procedimiento funciona y qué limitaciones tiene."
        }
      ],
      "example": "import numpy as np\nprecios = np.array([100, 200, 300])\nprint(precios * 1.1)\nprint(precios[precios > 150])",
      "quiz": [
        {
          "id": "m3-l3-q1",
          "question": "¿Qué representa shape?",
          "options": [
            "El tipo de dato",
            "Las dimensiones del array",
            "La media"
          ],
          "correctIndex": 1,
          "explanation": "shape indica el tamaño de cada eje."
        },
        {
          "id": "m3-l3-q2",
          "question": "¿Para qué sirve broadcasting?",
          "options": [
            "Combinar arrays compatibles",
            "Guardar archivos",
            "Ordenar SQL"
          ],
          "correctIndex": 0,
          "explanation": "Extiende conceptualmente dimensiones compatibles."
        }
      ],
      "flashcards": [
        {
          "front": "NumPy",
          "back": "NumPy introduce ndarray: una estructura homogénea de N dimensiones con shape, dtype y operaciones vectorizadas."
        },
        {
          "front": "¿Qué representa shape?",
          "back": "Las dimensiones del array — shape indica el tamaño de cada eje."
        },
        {
          "front": "¿Para qué sirve broadcasting?",
          "back": "Combinar arrays compatibles — Extiende conceptualmente dimensiones compatibles."
        }
      ]
    },
    {
      "id": "m3-l4",
      "title": "Pandas",
      "description": "DataFrames, limpieza y agregación",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los fundamentos de pandas.",
        "Aplicar el concepto a datos de ejemplo.",
        "Identificar errores y comprobar resultados."
      ],
      "sections": [
        {
          "heading": "Conceptos esenciales",
          "body": "Pandas organiza datos tabulares en Series y DataFrames. read_csv carga un archivo, head permite inspeccionar filas e info resume tipos y valores no nulos. loc selecciona por etiquetas e iloc por posiciones. isna detecta faltantes; dropna elimina registros y fillna imputa valores según una regla justificada. groupby agrega por categorías y merge relaciona tablas mediante claves. Validá duplicados y tipos antes de interpretar resultados."
        },
        {
          "heading": "Aplicación práctica",
          "body": "Caso de estudio: dataframes, limpieza y agregación. Identificá los datos de entrada, verificá supuestos, ejecutá el ejemplo y explicá cada resultado. Registrá qué errores podrían aparecer y cómo validarías la salida."
        },
        {
          "heading": "Práctica guiada",
          "body": "1. Ejecutá el ejemplo en un entorno aislado. 2. Cambiá un valor de entrada y anticipá la salida. 3. Contrastá tu predicción con el resultado. 4. Explicá por qué el procedimiento funciona y qué limitaciones tiene."
        }
      ],
      "example": "import pandas as pd\ndf = pd.DataFrame({\"sector\": [\"A\", \"A\", \"B\"], \"ventas\": [10, 20, 15]})\nprint(df.groupby(\"sector\")[\"ventas\"].sum())",
      "quiz": [
        {
          "id": "m3-l4-q1",
          "question": "¿Qué hace groupby?",
          "options": [
            "Agrupa para agregar",
            "Elimina columnas",
            "Entrena un modelo"
          ],
          "correctIndex": 0,
          "explanation": "Agrupa registros para cálculos por categoría."
        },
        {
          "id": "m3-l4-q2",
          "question": "¿Qué método detecta faltantes?",
          "options": [
            "isna",
            "merge",
            "head"
          ],
          "correctIndex": 0,
          "explanation": "isna devuelve indicadores de valores ausentes."
        }
      ],
      "flashcards": [
        {
          "front": "Pandas",
          "back": "Pandas organiza datos tabulares en Series y DataFrames."
        },
        {
          "front": "¿Qué hace groupby?",
          "back": "Agrupa para agregar — Agrupa registros para cálculos por categoría."
        },
        {
          "front": "¿Qué método detecta faltantes?",
          "back": "isna — isna devuelve indicadores de valores ausentes."
        }
      ]
    },
    {
      "id": "m3-l5",
      "title": "SQL básico",
      "description": "Consultas, filtros y relaciones",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los fundamentos de sql básico.",
        "Aplicar el concepto a datos de ejemplo.",
        "Identificar errores y comprobar resultados."
      ],
      "sections": [
        {
          "heading": "Conceptos esenciales",
          "body": "SQL permite consultar tablas relacionales. SELECT elige columnas, FROM indica origen, WHERE filtra filas, GROUP BY agrupa y HAVING filtra grupos agregados. JOIN combina registros mediante claves relacionadas; un INNER JOIN conserva coincidencias y un LEFT JOIN conserva todas las filas de la tabla izquierda. Los parámetros evitan concatenar valores externos en consultas y reducen riesgos de inyección."
        },
        {
          "heading": "Aplicación práctica",
          "body": "Caso de estudio: consultas, filtros y relaciones. Identificá los datos de entrada, verificá supuestos, ejecutá el ejemplo y explicá cada resultado. Registrá qué errores podrían aparecer y cómo validarías la salida."
        },
        {
          "heading": "Práctica guiada",
          "body": "1. Ejecutá el ejemplo en un entorno aislado. 2. Cambiá un valor de entrada y anticipá la salida. 3. Contrastá tu predicción con el resultado. 4. Explicá por qué el procedimiento funciona y qué limitaciones tiene."
        }
      ],
      "example": "SELECT sector, SUM(ventas) AS total\nFROM pedidos\nWHERE estado = 'aprobado'\nGROUP BY sector\nHAVING SUM(ventas) > 100;",
      "quiz": [
        {
          "id": "m3-l5-q1",
          "question": "¿Qué cláusula filtra grupos agregados?",
          "options": [
            "WHERE",
            "HAVING",
            "ORDER BY"
          ],
          "correctIndex": 1,
          "explanation": "HAVING filtra resultados posteriores a GROUP BY."
        },
        {
          "id": "m3-l5-q2",
          "question": "¿Qué conserva LEFT JOIN?",
          "options": [
            "Todas las filas de la izquierda",
            "Solo coincidencias",
            "Solo duplicados"
          ],
          "correctIndex": 0,
          "explanation": "LEFT JOIN mantiene las filas de la tabla izquierda."
        }
      ],
      "flashcards": [
        {
          "front": "SQL básico",
          "back": "SQL permite consultar tablas relacionales."
        },
        {
          "front": "¿Qué cláusula filtra grupos agregados?",
          "back": "HAVING — HAVING filtra resultados posteriores a GROUP BY."
        },
        {
          "front": "¿Qué conserva LEFT JOIN?",
          "back": "Todas las filas de la izquierda — LEFT JOIN mantiene las filas de la tabla izquierda."
        }
      ]
    },
    {
      "id": "m3-l6",
      "title": "Scikit-learn",
      "description": "Preprocesamiento, entrenamiento y evaluación",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los fundamentos de scikit-learn.",
        "Aplicar el concepto a datos de ejemplo.",
        "Identificar errores y comprobar resultados."
      ],
      "sections": [
        {
          "heading": "Conceptos esenciales",
          "body": "Scikit-learn unifica el flujo fit, predict y transform. Separá entrenamiento y prueba antes de ajustar transformaciones para evitar fuga de datos. Pipeline encadena preprocesamiento y estimador; StandardScaler estima media y dispersión con el entrenamiento. En clasificación, evaluá precisión, recall y matriz de confusión según el costo de los errores; en regresión, MAE o RMSE describen error numérico. La validación cruzada estima variabilidad del rendimiento."
        },
        {
          "heading": "Aplicación práctica",
          "body": "Caso de estudio: preprocesamiento, entrenamiento y evaluación. Identificá los datos de entrada, verificá supuestos, ejecutá el ejemplo y explicá cada resultado. Registrá qué errores podrían aparecer y cómo validarías la salida."
        },
        {
          "heading": "Práctica guiada",
          "body": "1. Ejecutá el ejemplo en un entorno aislado. 2. Cambiá un valor de entrada y anticipá la salida. 3. Contrastá tu predicción con el resultado. 4. Explicá por qué el procedimiento funciona y qué limitaciones tiene."
        }
      ],
      "example": "from sklearn.datasets import load_iris\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.pipeline import make_pipeline\nfrom sklearn.preprocessing import StandardScaler\nfrom sklearn.linear_model import LogisticRegression\nX, y = load_iris(return_X_y=True)\nXtr, Xte, ytr, yte = train_test_split(X, y, random_state=42, stratify=y)\nmodelo = make_pipeline(StandardScaler(), LogisticRegression(max_iter=1000))\nmodelo.fit(Xtr, ytr)\nprint(modelo.score(Xte, yte))",
      "quiz": [
        {
          "id": "m3-l6-q1",
          "question": "¿Qué previene ajustar el scaler solo con entrenamiento?",
          "options": [
            "Fuga de datos",
            "Falta de memoria",
            "Errores de sintaxis"
          ],
          "correctIndex": 0,
          "explanation": "El conjunto de prueba no debe informar los parámetros de transformación."
        },
        {
          "id": "m3-l6-q2",
          "question": "¿Qué método entrena un estimador?",
          "options": [
            "fit",
            "predict",
            "score"
          ],
          "correctIndex": 0,
          "explanation": "fit ajusta los parámetros del estimador."
        }
      ],
      "flashcards": [
        {
          "front": "Scikit-learn",
          "back": "Scikit-learn unifica el flujo fit, predict y transform."
        },
        {
          "front": "¿Qué previene ajustar el scaler solo con entrenamiento?",
          "back": "Fuga de datos — El conjunto de prueba no debe informar los parámetros de transformación."
        },
        {
          "front": "¿Qué método entrena un estimador?",
          "back": "fit — fit ajusta los parámetros del estimador."
        }
      ]
    },
    {
      "id": "m3-l7",
      "title": "Modelos de ML y ETL",
      "description": "Del dato bruto a un modelo evaluable",
      "durationMinutes": 35,
      "objectives": [
        "Explicar los fundamentos de modelos de ml y etl.",
        "Aplicar el concepto a datos de ejemplo.",
        "Identificar errores y comprobar resultados."
      ],
      "sections": [
        {
          "heading": "Conceptos esenciales",
          "body": "Un flujo de ML comienza con el problema y la definición de una variable objetivo. ETL extrae datos de archivos, APIs o bases, los transforma con reglas auditables y los carga en un destino de análisis. Antes de entrenar, revisá calidad, sesgos, partición temporal y riesgo de fuga de datos. Establecé una línea base simple, elegí métricas vinculadas al impacto de negocio y monitoreá cambios de datos y rendimiento luego del despliegue. La automatización no reemplaza revisión humana en decisiones críticas."
        },
        {
          "heading": "Aplicación práctica",
          "body": "Caso de estudio: del dato bruto a un modelo evaluable. Identificá los datos de entrada, verificá supuestos, ejecutá el ejemplo y explicá cada resultado. Registrá qué errores podrían aparecer y cómo validarías la salida."
        },
        {
          "heading": "Práctica guiada",
          "body": "1. Ejecutá el ejemplo en un entorno aislado. 2. Cambiá un valor de entrada y anticipá la salida. 3. Contrastá tu predicción con el resultado. 4. Explicá por qué el procedimiento funciona y qué limitaciones tiene."
        }
      ],
      "example": "flujo = [\"extraer\", \"validar\", \"transformar\", \"dividir\", \"entrenar\", \"evaluar\", \"monitorear\"]\nfor etapa in flujo:\n    print(etapa)",
      "quiz": [
        {
          "id": "m3-l7-q1",
          "question": "¿Cuál es la primera decisión de un proyecto de ML?",
          "options": [
            "Elegir librería",
            "Definir el problema",
            "Publicar API"
          ],
          "correctIndex": 1,
          "explanation": "La tarea y el criterio de éxito orientan todas las decisiones."
        },
        {
          "id": "m3-l7-q2",
          "question": "¿Qué significa ETL?",
          "options": [
            "Extraer, transformar, cargar",
            "Evaluar, testear, lanzar",
            "Entrenar, transferir, leer"
          ],
          "correctIndex": 0,
          "explanation": "ETL estructura un pipeline de integración de datos."
        }
      ],
      "flashcards": [
        {
          "front": "Modelos de ML y ETL",
          "back": "Un flujo de ML comienza con el problema y la definición de una variable objetivo."
        },
        {
          "front": "¿Cuál es la primera decisión de un proyecto de ML?",
          "back": "Definir el problema — La tarea y el criterio de éxito orientan todas las decisiones."
        },
        {
          "front": "¿Qué significa ETL?",
          "back": "Extraer, transformar, cargar — ETL estructura un pipeline de integración de datos."
        }
      ]
    }
  ]
};
