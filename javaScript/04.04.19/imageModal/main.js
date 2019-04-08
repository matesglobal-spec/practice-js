var mainImg = document.querySelectorAll('.main_img'); 
var fullImg = document.getElementById('full_img'); 
var close = document.getElementById('close'); 
var orgImg = document.querySelector('.org_img');

for (let i = 0; i < mainImg.length; i++) {
    mainImg[i].addEventListener('click', function () {
        fullImg.style.display = 'block';
        orgImg.src = mainImg[i].src;
    });
    
}

close.addEventListener('click', function () {
    fullImg.style.display = 'none';
});
