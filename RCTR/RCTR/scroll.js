document.addEventListener("click", function(e) {
    const link = e.target.closest("a[href]");

    if (!link) return;

    const linkUrl = link.getAttribute("href");

    // Ignore external links, mailto, tel, etc.
    if (linkUrl.startsWith("http") || linkUrl.startsWith("mailto:") || linkUrl.startsWith("tel:")) {
        return;
    }

    const currentPage = window.location.pathname.split("/").pop();  
    const targetPage = linkUrl.split("/").pop();

    // If user clicks the SAME page link again
    if (currentPage === targetPage) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
});
