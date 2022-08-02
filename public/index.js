const submit = document.getElementById('submit')

submit.addEventListener("click", function () {
  const inputValue = document.getElementById('word').value
  console.log(inputValue)
});

fetch('http://localhost:3000/test')
  .then(data => {
    return data.json()
  })
  .then(data => {
    console.log(data)
  })