const currentPath = window.location.pathname;

document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href").startsWith("#")) {
        return;
    }
    if (link.pathname === currentPath) {
        link.classList.add("active");
    }
});
