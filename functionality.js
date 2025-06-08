const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");


//Modal Open function
const openModal = () => {
    console.log("Modal is open");
    modal.classList.add("active");
    overlay.classList.add("overlayactive");
};

//Modal Close function

const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};
