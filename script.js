function handleStickyNavStyle() {
    var stickyNav = document.querySelector("#headerSection");

    console.log(stickyNav);
    //to check when element get's position sticky
    var observer = new IntersectionObserver(
        function(entries) {
            var latestStickyNav = document.querySelector("#headerSection");

            console.log(entries[0].intersectionRatio, "lol");

            // no intersection
            if (entries[0].intersectionRatio === 0)
                latestStickyNav.classList.add("sticky-active");
            // fully intersects
            else if (entries[0].intersectionRatio === 1)
                latestStickyNav.classList.remove("sticky-active");
        }, {
            threshold: [0, 1],
        }
    );

    observer.observe(stickyNav);
}

window.addEventListener("load", () => {
    handleStickyNavStyle();
});