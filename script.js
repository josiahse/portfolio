$('.fa-bars').on('click', function(event){
    event.preventDefault;
    $('.nav-box').toggleClass('show-nav')
    $('main').toggleClass('move-main')
});

let slideIndex = 1;

//dir will either be +1 or -1 depending on whether "next" or "prev" is clicked
const switchSlide = (dir) => {
    console.log(slideIndex)
    $(`.proj${slideIndex}`).toggleClass('show-slide');
    slideIndex += dir;
    console.log(slideIndex);
    //enable proper looping of slides
    if (slideIndex === 6){
        slideIndex = 1;
    } else if (slideIndex === 0) {
        slideIndex = 5;
    }
    $(`.proj${slideIndex}`).toggleClass('show-slide');
}

$('.next').on('click', function(event) {
    event.preventDefault;
    switchSlide(1);
});

$('.prev').on('click', function (event) {
    event.preventDefault;
	switchSlide(-1);
});