const header = document.querySelector('header')

const fitzpatrick = {
  none: '#fdebd1',
  white: '#ffdbac',
  cream_white: '#f1c27d',
  light_brown: '#e0ac69',
  brown: '#c68642',
  dark_brown: '#8d5524'
}

const colors = Object.keys(fitzpatrick)
const length = colors.length

function diversify () {
  const svg = document.querySelector('#banner').contentDocument

  svg.querySelector('#person-1').setAttribute('fill', fitzpatrick[colors[Math.floor(Math.random() * length)]])
  svg.querySelector('#person-2').setAttribute('fill', fitzpatrick[colors[Math.floor(Math.random() * length)]])
  svg.querySelector('#person-3').setAttribute('fill', fitzpatrick[colors[Math.floor(Math.random() * length)]])
  svg.querySelector('#person-4').setAttribute('fill', fitzpatrick[colors[Math.floor(Math.random() * length)]])

  const xml = new XMLSerializer().serializeToString(svg)
  const encoded = window.btoa(xml)

  header.style.backgroundImage = `url(data:image/svg+xml;base64,${encoded})`
}

window.addEventListener('load', () => {
  document.querySelector('header').addEventListener('click', diversify)

  diversify()
})
