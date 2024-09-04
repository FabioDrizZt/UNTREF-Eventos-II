/* const padre = document.querySelector('.padre')
const hijo = document.querySelector('.hijo')

padre.addEventListener('click', () => {
  window.alert('Padre fue clickeado')
})

hijo.addEventListener('click', (event) => {
  event.stopPropagation()
  window.alert('Hijo fue clickeado')
})
 */

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const nombre = document.querySelector('#Nombre').value
  console.log(`Nombre: ${nombre}`)

  const genero = document.querySelector('[name=genero]:checked')
  console.log(`Genero: ${genero.value}`)

  const intereses = document.querySelectorAll('[name=intereses]:checked')
  const valoresIntereses = []
  intereses.forEach((interes) => valoresIntereses.push(interes.value))
  console.log(valoresIntereses)
  console.log('atrapamos el evento!')
})
