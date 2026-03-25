document.addEventListener("DOMContentLoaded", function () {

    const typingElement = document.getElementById("typing-text");

    if (typingElement) {
        const text = "Hello, my \nname’s Lalit.";
        let index = 0;
        let speed = 60;

        function typeEffect() {
            if (index < text.length) {
                let char = text.charAt(index);

                if (char === "\n") {
                    typingElement.innerHTML += "<br>";
                } else {
                    typingElement.innerHTML += char;
                }

                index++;
                setTimeout(typeEffect, speed);
            }
        }

        typeEffect();
    }

});

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// EDUCATION ANIMATION
const timelineItems = document.querySelectorAll(".timeline-item");

function showTimeline() {
    timelineItems.forEach((item, index) => {
        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            setTimeout(() => {
                item.classList.add("show");
            }, index * 200);
        }
    });
}

window.addEventListener("scroll", showTimeline);


// ================= SECTION NAVIGATION =================
const sections = ["home", "about", "education", "skills", "contact"];
let current = 0;

/* Detect current section automatically */
window.addEventListener("scroll", () => {
    sections.forEach((id, index) => {
        const section = document.getElementById(id);
        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
            current = index;
        }
    });
});

/* DOWN → next section */
function scrollDown() {
    if (current < sections.length - 1) {
        document.getElementById(sections[current + 1]).scrollIntoView({
            behavior: "smooth"
        });
    }
}

/* UP → direct HOME */
function scrollUp() {
    document.getElementById("home").scrollIntoView({
        behavior: "smooth"
    });
}

// EMAILJS INIT
(function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // dashboard se milega
})();

// FORM SUBMIT
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_l9yhwpk", "YOUR_TEMPLATE_ID", {
        from_name: document.querySelector("input[type='text']").value,
        from_email: document.querySelector("input[type='email']").value,
        message: document.querySelector("textarea").value
    }).then(function () {
        alert("Message sent successfully ✅");
    }, function () {
        alert("Failed ❌");
    });
});