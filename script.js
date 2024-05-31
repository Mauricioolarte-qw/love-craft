const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segura?',
  'Piensalo bien',
  'Eso sí, piénsalo con calma, que esto no es cualquier cosa.',
  'Echa un buen vistazo, porque una vez que entres en este juego, no hay marcha atrás.',
  'Dale vueltas, pero ya sabes que aquí siempre hay sitio para ti.',
  'Mira, el otro botón es para entrar a la fiesta, pero una vez que estés adentro, no querrás salir.',
  'Antes de dar el paso, asegúrate de que estás ready para esta aventura juntos.',
  'No es solo un sí o un no, es un compromiso real. ¿Estás preparada para eso?',
  'Piénsalo dos veces, porque una vez que entres en mi mundo, no querrás salir.',
  'Esto es más que un simple cambio de estado en redes sociales, es un pacto entre tú y yo. ¿Estás segura de lo que estás a punto de hacer?',
  'Advertencia: Esto puede causar sonrisas permanentes y felicidad extrema. ¿Estás dispuesta a correr el riesgo?',
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
