document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  const width = 8
  const squares = []
  const frutas = ['🍉', '🍌', '🍇', '🍎', '🍒', '🥝', '🍓', '🍍', '🥥']
  const candyColors = [
    'red',
    'yellow',
    'orange',
    'purple',
    'green',
    'blue'

  ]

  const obtenerNumeroAlAzar = (array) => {
    return Math.floor((Math.random() * array.length))
  }
  
  const obtenerItemAlAzar = (array) => {
    return array[obtenerNumeroAlAzar(array)]
  }
  // crear board

  const createBoard = () =>{
    for (let i = 0; i < width*width; i++) {
      const square = document.createElement('div')
      let randomColor = Math.floor(Math.random()* candyColors.length)
      square.style.backgroundColor = candyColors[randomColor]
      grid.appendChild(square)
      squares.push(square)
      
    }
  }
  createBoard()
})