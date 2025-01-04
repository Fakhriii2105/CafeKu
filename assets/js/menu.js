const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        button.classList.add("active");
        const category = button.getAttribute("data-category");

        menuItems.forEach((item) => {
            if (category === "all" || item.getAttribute("data-category") === category) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
