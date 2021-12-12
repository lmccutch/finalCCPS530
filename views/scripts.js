
const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=d66166d8-ccdd-40b7-b081-952ed1773172', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)
  
  console.log(data)
}
request.send()