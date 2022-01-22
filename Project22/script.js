const minusBtn = document.getElementById('decrease')
const plusBtn = document.getElementById('increase')
const sizeEl = document.getElementById('size')
const colorEl = document.getElementById('color')
const clearBtn = document.getElementById('clear')

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let size = 20
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) => {
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function decreaseSize() {
    if (sizeEl.innerHTML > 1) {
        sizeEl.innerHTML--
        size = sizeEl.innerHTML
    }
}

function increaseSize() {
    if (sizeEl.innerHTML < 40) {
        sizeEl.innerHTML++
        size = sizeEl.innerHTML
    }
}

minusBtn.addEventListener('click', decreaseSize)

plusBtn.addEventListener('click', increaseSize)

colorEl.addEventListener('input', () => {
    color = colorEl.value
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})