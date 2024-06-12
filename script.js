document.querySelector('.hamburger').addEventListener('click', function() {
    this.classList.toggle('is-active');
    document.querySelector('.nav-list').classList.toggle('active');
});
document.addEventListener("DOMContentLoaded", function() {
    var index = 0;
    var images = ["./imgmahindra/carroformulae.webp", "./imgmahindra/carroformulae2.webp", "./imgmahindra/carroformulaereserva.jpg"]; 
    var imgElement = document.getElementById("imgbanner");

    function changeImage() {
        imgElement.src = images[index];
        index = (index + 1) % images.length;
        setTimeout(changeImage, 5000); 
    }

    changeImage();
});