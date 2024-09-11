document.querySelector('.LOGO').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('show_menu');
});


function goodscarousel () {
    
    let carouselWrapper = $('.carousel-wrapper');
    let  nextButton = $('.next');
    let prevButton = $('.pre');
    let  goodsItems = $('.Goods');
    
    let currentIndex = 0;
    let itemsToShow = 3; 
    let totalItems = goodsItems.length; 
    let itemWidth = goodsItems.width() + 50 ; 
    
    function itemreturnwidth() {
        return $('.Goods').width() + 50; 
    };
    $(window).on('resize', () => {
        itemWidth = itemreturnwidth (); 
        updateCarouselPosition(); 
    });
    function updateCarouselPosition() {
        let offset = -currentIndex * itemWidth;
        carouselWrapper.css('transform', `translateX(${offset}px)`);
        console.log(`translateX(${offset}px)`)// 디버깅확인용
    };
    nextButton.on('click', () => {
        if (currentIndex < totalItems - itemsToShow) {
            currentIndex++;
            updateCarouselPosition();
        }
    });
    
    prevButton.on('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarouselPosition();
        }
    });
};
goodscarousel ();





