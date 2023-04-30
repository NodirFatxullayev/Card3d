let card = document.querySelectorAll(".card");

card.forEach((item) => {
    item.addEventListener("mousemove", (e) => {
        item.style.transform = `rotateX(${(e.offsetY - 250)/20}deg) rotateY(${(e.offsetX - 175)/20}deg)`;
    });
})

card.forEach((item) => {
    item.addEventListener("mouseout", (e) => {
        item.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
})