const imageSources = ['1.jpg','2.jpeg','3.jpeg','4.webp','5.webp','6.jpeg','7.jpeg','8.jpeg','9.webp','10.jpeg'];
function changeBackgroundImage() {
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
}
setInterval(changeBackgroundImage, 1000);
