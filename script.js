let init = () => {
    let images = document.querySelectorAll('.card-img-top');
    console.log(images);
    images.forEach(element => {
        let height = element.height;
        let width = element.width;
        let overlay = document.getElementById(element.id.replace('image', 'overlay'));
        overlay.style.height = height + "px";
        overlay.style.width = width + "px";
        element.style.marginTop = "-" + height + "px";
    })
}

window.addEventListener('DOMContentLoaded', () => {
    init();
})
window.onresize = init;