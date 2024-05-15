const stars = document.querySelectorAll('.star i');

    stars.forEach((item, star1) => {
        item.addEventListener('click', 
        () => {
            stars.forEach((stars, star2) => {
                if (star1 >= star2) {
                    stars.classList.add("active");
                } else{
                    stars.classList.remove("active");
                } 
            })
        })
        
    });
    
const goTop = document.querySelector(".goTop");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goTop.classList.add("active");
    } else {
        goTop.classList.remove("active");
    }
});


const initSlider1 = () => {
    const imageList1 = document.querySelector(".sliders-nature .container .nature");
    const slideButtons1 = document.querySelectorAll(".sliders-nature .container .slide-button");

    slideButtons1.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList1.clientWidth * direction;
            imageList1.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });
}
window.addEventListener("load", initSlider1);

const initSlider2 = () => {
    const imageList2 = document.querySelector(".sliders-places .container .places");
    const slideButtons2 = document.querySelectorAll(".sliders-places .container .slide-button");

    slideButtons2.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList2.clientWidth * direction;
            imageList2.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });
}
window.addEventListener("load", initSlider2);



function openForm() {
    document.getElementById("overlay").style.display = "block";
}

function closeForm() {
    document.getElementById("overlay").style.display = "none";
}

function submitForm() {
    document.getElementById("overlay2").style.display="block";
}

function closeMessage() {
    document.getElementById("overlay2").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

function showSubscribeMessage() {
    document.getElementById("email").value = "";
    document.getElementById("subscribeMessage").style.visibility="visible";
}