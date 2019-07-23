

const flightSection = document.querySelector("#flight")

const flightHandlerFunction = () => {
    console.log(flightSection.className)
    flightSection.classList.remove("disabled")
    console.log(flightSection.className)
    flightSection.classList.add("enabled")
    console.log(flightSection.className)
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

// const targetClass = event.target.class.remove