const Name = document.getElementById('username')
const subject = document.getElementById('subject')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit', (e) => {
let messages = []
if (Name.value === '' || Name.value == null) {
messages.push('Name is required')
}

if (subject.value.length <= 6) {
messages.push('subject musus')
}
if (subject.value.length >= 20) {
messages.push('subject must be less than 20 characters')
}
if (messages.length > 0) {
e.preventDefault()
errorElement.innerText = messages.join(', ')
}
})