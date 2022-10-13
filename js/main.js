//OBTENER LOS STEPS
const steps = document.querySelectorAll(".step");

//OBTENER LA BARRA DE PROGRESO
const bar = document.getElementById("bar");

//OBTENER LA REFERENCIA A LOS BOTONES
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

//GUARDAR EL PASO EN EL QUE ESTAMOS
let currentStep = 1;

//ESCUCHAR EL BOTON SIGUIENTE
nextButton.addEventListener("click", () => {
    if (currentStep < steps.length) {
    //SUMAR 1 A LOS PASOS
    currentStep++;

    updateProgress();
    }
})

//ESCUCHAR EL BOTON SIGUIENTE
prevButton.addEventListener("click", () => {

    if (currentStep > 1) {
        //RESTAR 1 A LOS PASOS
        currentStep--;

        updateProgress();
    }

});

//FUNCION PARA ACTUALIZAR EL PROGRESO
function updateProgress() {
    //ACTUALIZAR PASOS
    steps.forEach((step, index) => {
        if (index < currentStep) {
            step.classList.add("active")
        } else {
            step.classList.remove("active")
        }
    });

    //ACTUALIZAR BARRA
    const progress = (currentStep - 1) / (steps.length - 1) * 100
    bar.style.width = progress + "%"

    //CONTROL DE LOS BOTONES
    if (currentStep == steps.length) {
        nextButton.disabled = true
    } else if (currentStep == 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = nextButton.disabled = false;
    }
}

