// const myButton = document.getElementById('my-button-id')

// myButton.addEventListener('click', () => {
//   const name = document.getElementById('myInput').value
//   document.getElementById('greeting').innerHTML =
//     'Hello, ' + name + '! Welcome!'
//   console.log('>> name: ', name)
//   localStorage.setItem('userName', name)
//   // document.getElementById('storedName').innerHTML = localStorage.setItem(
//   //   'userName'
//   // )
// })

// const addToLocal = () => {
//   const takeValue = document.getElementById('myInput').value
//   console.log('takeValue :>> ', takeValue)
//   chrome.storage.set({ foo: 'hello', bar: 'hi' }, () => {
//     console.log('Value is set to ' + takeValue)
//   })
//   // return localStorage.setItem('someValue', takeValue)
// }
document.getElementById('btn').addEventListener('click', nameMe())
function nameMe() {
  console.log('nie wime check me :>> ')
}
