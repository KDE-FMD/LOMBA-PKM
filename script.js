function showInfo() {

    const infoSection =
        document.getElementById("infoSection");

    const contactSection =
        document.getElementById("contactSection");

    contactSection.classList.remove("active");

    infoSection.classList.add("active");

    infoSection.scrollIntoView({
        behavior: "smooth"
    });
}


function showContact() {

    const contactSection =
        document.getElementById("contactSection");

    const infoSection =
        document.getElementById("infoSection");

    infoSection.classList.remove("active");

    contactSection.classList.add("active");

    contactSection.scrollIntoView({
        behavior: "smooth"
    });
}


