let prevScrollPos = window.scrollY;

window.onscroll = function() {
    let currentScrollPos = window.scrollY;

    if (prevScrollPos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }

    prevScrollPos = currentScrollPos;
};

