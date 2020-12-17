const header = document.querySelector("header");

const containers = header.querySelectorAll(".select__container");

containers.forEach(container => {
    container.addEventListener("mouseenter", () => {
        container.style.background = "white";
        const selectField = container.querySelector(".select__field");
        selectField.style.background = "white";
    });
    container.addEventListener("mouseleave", () => {
        container.style.background = "#ecf0f1";
        const selectField = container.querySelector(".select__field");
        selectField.style.background = "#ecf0f1";
    });
});

const main = document.querySelector("main");

main.addEventListener("click", event => {
    // console.log("clicked");
    if(event.target.tagName == "IMG"){
        const img = event.target;
        const section = img.parentNode;
        if(section.classList.contains("selected")){ // 포함, 선택됨
            section.classList.remove("selected");
        } else { // 선택이 안된 경우에 클릭한 경우
            section.classList.add("selected");
        }
    }
});