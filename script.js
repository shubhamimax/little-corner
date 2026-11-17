// PAGE 2 SCROLL REVEAL

document.addEventListener("DOMContentLoaded", () => {

    const storyPage = document.querySelector(".story-page");

    if (!storyPage) {
        console.error("Page 2 not found!");
        return;
    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("reveal");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0,
        rootMargin: "0px 0px -300px 0px"
    });

    observer.observe(storyPage);

});