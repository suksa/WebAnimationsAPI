export default class Star {
    constructor (number, x, y, scale) {
        const el = document.createElement('div')
        el.classList.add('star')
        el.innerHTML = number
        el.style.cssText = `left: ${x}px; top: ${y}px`
        el.style.transform = `scale(${scale})`

        document.body.append(el)
    }
}