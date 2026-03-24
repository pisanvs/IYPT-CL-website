// ─── Rules & Bases content ────────────────────────────────────────────────────
// Update PDF_URL once the official document is published.

export const PDF_URL = '#'; // TODO: replace with actual PDF link

export const BASES_SECTIONS = [
  {
    id: 'elegibilidad',
    title: 'Elegibilidad',
    summary: 'Quiénes pueden participar',
    items: [
      {
        heading: 'Estudiantes',
        body: 'Pueden participar estudiantes actualmente matriculados en enseñanza media (1° hasta 3° medio) en un establecimiento educacional chileno, ya sea público, subvencionado, particular, incluyéndose los no tradicionales.',
      },
      {
        heading: 'Nacionalidad',
        body: 'No se requiere nacionalidad chilena. Cualquier estudiante matriculado en un colegio chileno puede integrar un equipo.',
      },
      {
        heading: 'Profesor guía',
        body: 'Cada equipo debe contar con un profesor guía que actúe como responsable adulto. El profesor no compite ni recibe puntuación.',
      },
    ],
  },
  {
    id: 'equipos',
    title: 'Conformación de equipos',
    summary: '3 a 5 estudiantes por equipo',
    items: [
      {
        heading: 'Tamaño del equipo',
        body: 'Un equipo debe tener entre 3 y 5 estudiantes. Se recomienda 5 para cubrir todos los roles durante el torneo sin sobrecarga.',
      },
      {
        heading: 'Un colegio, un equipo',
        body: 'Cada establecimiento puede inscribir un equipo. Equipos con estudiantes de distintos colegios no están permitidos en la fase clasificatoria.',
      },
      {
        heading: 'Capitán',
        body: 'El equipo debe designar un capitán que coordina la comunicación con la organización y toma decisiones tácticas durante los Physics Fights.',
      },
    ],
  },
  {
    id: 'formato',
    title: 'Formato del torneo — Physics Fight',
    summary: 'Debate científico estructurado entre tres equipos',
    items: [
      {
        heading: 'Los tres roles',
        body: 'Cada Physics Fight enfrenta a tres equipos con roles distintos: Reporter (presenta su solución), Opponent (critica y señala debilidades) y Reviewer (evalúa el intercambio). Los roles rotan en cada ronda.',
      },
      {
        heading: 'Flujo de un fight (~45 min)',
        body: '1. El Opponent elige el problema de la lista. 2. El Reporter presenta su investigación (12 min). 3. El Opponent interroga y critica (5 min + discusión). 4. El Reviewer comenta el intercambio (3–4 min). 5. El jurado realiza preguntas a los tres equipos. 6. Los jueces puntúan.',
      },
      {
        heading: 'Elección del problema',
        body: 'El Opponent selecciona el problema a debatir de entre los 17 problemas oficiales del año. El Reporter puede rechazar el problema, pero acumula una penalización de factor multiplicador.',
      },
    ],
  },
  {
    id: 'problemas',
    title: 'Los problemas',
    summary: '17 problemas abiertos publicados por IYPT International',
    items: [
      {
        heading: 'Naturaleza de los problemas',
        body: 'Los 17 problemas del IYPT no tienen solución única conocida. Son enunciados breves que esconden complejidad real. Los equipos deben investigar experimental y teóricamente durante meses.',
      },
      {
        heading: 'Publicación',
        body: 'Los problemas oficiales son publicados por el IYPT internacional en agosto/septiembre del año anterior al torneo. Los problemas del IYPT 2027 estarán disponibles en iypt.org.',
      },
      {
        heading: 'Preparación',
        body: 'Los equipos no están obligados a preparar todos los problemas, pero sí deben estar familiarizados con la mayoría. Equipos con más problemas preparados tienen mayor ventaja táctica.',
      },
    ],
  },
  {
    id: 'puntuacion',
    title: 'Sistema de puntuación',
    summary: 'Escala 1–10 por rol, evaluada por jurado académico',
    items: [
      {
        heading: 'Escala de notas',
        body: 'Cada juez asigna una nota de 1 a 10 a cada equipo en su rol (Reporter, Opponent, Reviewer). La nota evalúa la calidad del razonamiento, no la corrección de la respuesta.',
      },
      {
        heading: 'Puntaje total',
        body: 'El puntaje final de un Physics Fight es el promedio de las notas del jurado para cada equipo. Los puntajes de todas las rondas se acumulan para determinar clasificación.',
      },
      {
        heading: 'Criterios de evaluación',
        body: 'El jurado, compuesto por físicos académicos, evalúa: solidez experimental, profundidad teórica, capacidad de argumentar bajo presión, claridad de la presentación y calidad de las preguntas al oponente.',
      },
    ],
  },
  {
    id: 'seleccion',
    title: 'Proceso de selección',
    summary: 'Clasificatorias → Final nacional → IYPT Internacional',
    items: [
      {
        heading: 'Rondas clasificatorias',
        body: 'En mayo de 2026 se realizarán Physics Fights clasificatorios. Todos los equipos inscritos participan. Los 2–3 equipos con mayor puntaje acumulado avanzan a la final.',
      },
      {
        heading: 'Final nacional',
        body: 'En junio de 2026 se realizará la final entre los equipos clasificados. El formato es idéntico al clasificatorio. El equipo ganador es declarado representante de Chile.',
      },
      {
        heading: 'IYPT Internacional 2027',
        body: 'El equipo ganador representará a Chile en el International Young Physicists\' Tournament 2027, compitiendo contra equipos de 40+ países. La ciudad sede se anuncia por IYPT International.',
      },
    ],
  },
];
