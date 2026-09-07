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


/* COUNTDOWN */

function updateCountdown() {

    const countdownBoxes =
        document.querySelectorAll(".countdown-box");


    countdownBoxes.forEach(function (box) {

        const targetDate =
            new Date(
                box.getAttribute("data-date")
            ).getTime();


        const now =
            new Date().getTime();


        const distance =
            targetDate - now;


        if (distance <= 0) {

            box.innerHTML =
                "<p style='grid-column: 1 / -1; color: white; text-align: center;'>Sesi telah dimulai / selesai</p>";

            return;
        }


        const days =
            Math.floor(
                distance /
                (1000 * 60 * 60 * 24)
            );


        const hours =
            Math.floor(
                (distance %
                    (1000 * 60 * 60 * 24))
                /
                (1000 * 60 * 60)
            );


        const minutes =
            Math.floor(
                (distance %
                    (1000 * 60 * 60))
                /
                (1000 * 60)
            );


        const seconds =
            Math.floor(
                (distance %
                    (1000 * 60))
                /
                1000
            );


        box.querySelector(".days").textContent =
            String(days).padStart(2, "0");

        box.querySelector(".hours").textContent =
            String(hours).padStart(2, "0");

        box.querySelector(".minutes").textContent =
            String(minutes).padStart(2, "0");

        box.querySelector(".seconds").textContent =
            String(seconds).padStart(2, "0");

    });

}


/* JALANKAN COUNTDOWN */

updateCountdown();

setInterval(
    updateCountdown,
    1000
);