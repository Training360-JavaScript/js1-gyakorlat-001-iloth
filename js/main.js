const handleClick = () => {
    [...document.querySelectorAll(".button")].map(btn =>
        btn.addEventListener("click", () => console.log(btn.innerHTML))
    );
};