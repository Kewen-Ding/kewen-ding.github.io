let navbar = document.getElementsByClassName("sidebar")[0];
let topBtn = document.getElementById("topBtn");
let sticky = (navbar) ? navbar.offsetTop : 0;

window.onscroll = function () {
    if (navbar) {
        myStickyNav();
    }
};

function myStickyNav() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
        topBtn.style.display = "block";
    } else {
        navbar.classList.remove("sticky");
        topBtn.style.display = "none";
    }
}


// When the user clicks the button, open the modal 
function imageOnClick(e) {
    let modal = document.getElementById('imageModal');
    if (modal) {
        let src = e.getAttribute("src");
        let title = e.getAttribute("title");
        document.getElementById("largerImage").src = src
        document.getElementById("modal-image-title").innerHTML = title
        modal.style.display = "block";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    let modal = document.getElementById('imageModal');
    if (modal && event.target == modal) {
        modal.style.display = "none";
    }
}