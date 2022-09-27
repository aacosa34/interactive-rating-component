// Function to get the value from a selector given
const $ = (selector) => document.querySelector(selector)

const card = $(".card") // Get the card element
const form = $(".rating") // Get the form element
const ratings = document.querySelectorAll('input[name="rating-value"]') // Get all the radio values
const thanks = $(".thanks") // Get the thanks element
const greeting = $(".greeting") // Get the greeting element
const valoration = $(".valoration") // Get the valoration element

// We get the thanks div hidden
thanks.style.display = "none"

form.addEventListener("submit", (e) => {
  e.preventDefault()
  console.log("Submit!")
  ratings.forEach((rating) => {
    if (rating.checked) {
      greeting.innerHTML = `You selected ${rating.value} out of 5`
      // Hide valoration and show thanks
      valoration.style.display = "none"
      thanks.style.display = "block"
    }
  })
})
