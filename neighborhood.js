const restaurants = [
  "Duff's Famous Wings",
  "99 Fast Food",
  "Bocce Club Pizza",
  "Sato Brewpub",
]("#btn").click(function () {
  let randomPlace = restaurants[Math.floor(Math.random() * restaurants.length)]
  document.getElementById("randomChoice").innerHTML = picker(randomChoice)
})

btn.addEventListener("click", function () {
  alert(randomPlace)
})
