function changeImage() {
    if (document.getElementById("esilehe_pilt").src.endsWith('tu.jpg')) {
        document.getElementById("esilehe_pilt").src = "tu2.JPG";
    }
    else {
        document.getElementById("esilehe_pilt").src = "tu.jpg";
    }
}