//화면 비율 계산
var currentWidth = window.innerWidth;
function ResponsiveWidth() {

    var slideWidth = document.querySelector('.carousel_box').clientWidth;
    var slides = document.querySelectorAll('.carousel_box .slide');
    var sliderWrapper = document.querySelector('.carousel_wrap');

    slides.forEach(slide => {
        slide.style.width = `${slideWidth}px`;
    });

    sliderWrapper.style.width = `${slideWidth * slides.length}px`;
}
window.addEventListener('resize', ResponsiveWidth);
ResponsiveWidth();
//로그인 버튼 이벤트
$('.login').on('click', () => {
    if ($('.login_black_bg').css('display') == 'none') {
        $('.login_black_bg').addClass('show');
    }
});

$('.login_black_bg').on('click', function(e) {
    console.log(e.target)
    if ($(e.target).is($('.login_black_bg'))) {
        $('.login_black_bg').removeClass('show');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.menu');
    const dropdown = document.querySelector('.dropdown');
    
    menu.addEventListener('mouseenter', function() {
        dropdown.classList.add('show');
    });
    
//     document.querySelector('.nav_box').addEventListener('mouseleave', function() {
//         dropdown.classList.remove('show');
// })
    dropdown.addEventListener('mouseleave', function() {
        dropdown.classList.remove('show');
})
});


function mobilemenu() {
    let menucontainer = $('.mobile_menu_bg');
    $('.mobile_menu').on('click', function() {
        if (window.innerWidth <= 768) {
            menucontainer.toggle('mobile_menu_show');
            
        } else {
            menucontainer.removeClass('mobile_menu_show');
        }
    });
}
mobilemenu();





//메인케러셀 업데이트바

let CurrentPage = 1;
let currentPage = 1;
let totalPages = $('.slide').length;

function updateProgressBar() {
    let progressBar = document.querySelector('.progress-bar');
    let progress = (currentPage / totalPages) * 100;

    progressBar.style.width = `${progress}%`;


    progressBar.style.backgroundColor = '#492F50';

    // console.log(`Progress: ${progress}%`);  // 디버깅용 로그
}


updateProgressBar();
//케러셀 버튼 이벤트
$('.next_btn').on('click', () => {
    if (currentPage < totalPages) {
        $('.carousel_wrap').css('transform', `translateX(-${currentPage}00vw)`);
        currentPage++;
    } else {
        $('.carousel_wrap').css('transform', 'translateX(0vw)');
        currentPage = 1;
    }
    updateProgressBar();
});

$('.pre_btn').on('click', () => {
    if (currentPage > 1) {
        $('.carousel_wrap').css('transform', `translateX(-${(currentPage - 2)}00vw)`);
        currentPage--;
    } else {
        $('.carousel_wrap').css('transform', 'translateX(-600vw)');
        currentPage = totalPages;
    }
    updateProgressBar();
});

//케러셀 오토슬라이드 이벤트
let interval;

function startSlide() {

    interval = setInterval(function(){
        currentPage = (currentPage + 1) % totalPages;
        $('.carousel_wrap').css('transform', `translateX(-${currentPage}00vw)`);

        updateProgressBar();
    },3000);
};

function stopSlide() {
    clearInterval(interval);
};

$('.carousel_wrap').on('mouseover', function() {
    stopSlide();
});

$('.carousel_wrap').on('mouseout', function() {
    stopSlide(); 
    startSlide(); 
});

stopSlide();
startSlide();
//케러셀 드래그 이벤트
function dragcarousel() {
    let startpoint = 0;
    let userclick = false;

    $('.carousel_wrap').on('mousedown', '.slide', function (e) {
        startpoint = e.clientX;
        userclick = true;
    });

    $('.carousel_wrap').on('mousemove', '.slide', function (e) {
        if (userclick) {
            $('.carousel_wrap').css('transform', `translateX(${e.clientX - startpoint}px)`);
        }
    });

    $('.carousel_wrap').on('mouseup', '.slide', function (e) {
        if (userclick) {
            userclick = false;
            const movedrag = e.clientX - startpoint;

            if (movedrag < -200 && currentPage < 7) {
                currentPage++;
            } else if (movedrag > 200 && currentPage > 1) {
                currentPage--;
            }
            // if( currentPage > 7){
            //     $('.carousel_wrap').css('transform', 'translateX(0vw)');
            //         currentPage = 1;
            // }

            $('.carousel_wrap').css('transform', `translateX(-${(currentPage - 1) * 100}vw)`);
            updateProgressBar();
        }

    });
}

dragcarousel();

function highlight_slide() {
    let currentslide = 0;
    let totalslide = $('.highlight_slide').length;
    function calculateSlideWidth() {
        return $('.highlight_slide').width() + 50; 
    }
    let slidewidth = calculateSlideWidth();

   
    function setSlides() {
        if (window.innerWidth >= 1024 && window.innerWidth <= 1279) {
            
            slidewidth = calculateSlideWidth();
            $('.highlight_wrap').css('transform', `translateX(-${slidewidth * currentslide}px)`);
        } else if (window.innerWidth >= 768) {
          
            slidewidth = calculateSlideWidth();
            $('.highlight_wrap').css('transform', `translateX(-${slidewidth * currentslide}px)`);
        } else {
           
            slidewidth = calculateSlideWidth();
            $('.highlight_wrap').css('transform', `translateX(-${slidewidth * currentslide}px)`);
        }
    }

    // '다음' 버튼 클릭 이벤트
    $('.highlight_next_btn').on('click', function () {
        if (window.innerWidth >= 1024 && window.innerWidth <= 1279) {
          
            if (currentslide < totalslide - 3) {
                currentslide++;
                $('.highlight_wrap').css('transform', `translateX(-${slidewidth * currentslide}px)`);
                $('.highlight_wrap').css('transition', 'transform 0.5s ease');
            }
        } else if (window.innerWidth >= 768) {
          
            if (currentslide < totalslide - 3) {
                currentslide++;
                $('.highlight_wrap').css('transform', `translateX(-${slidewidth * currentslide}px)`);
                $('.highlight_wrap').css('transition', 'transform 0.5s ease');
            }
        } else {

            if (currentslide < totalslide - 1) {
                currentslide++;
                $('.highlight_wrap').css('transform', `translateX(-${slidewidth * currentslide}px)`);
                $('.highlight_wrap').css('transition', 'transform 0.5s ease');
            }
        }
    });

    $('.highlight_pre_btn').on('click', function () {
        if (currentslide > 0) {
            currentslide--;
            $('.highlight_wrap').css('transform', `translateX(-${slidewidth * currentslide}px)`);
            $('.highlight_wrap').css('transition', 'transform 0.5s ease');
        }
    });

    $(window).on('resize', function () {
        setSlides();
    });

    setSlides(); 
}


highlight_slide();



function scheduleCarousel() {
    let itemMousedown = 0;
    let itemWidth = $('.schedule_slide').width();  
    let currentTranslateX = 0;
    let itemdrag = false;
    let mouseMoved = false;
    let totalSlides = $('.schedule_slide').length; 

  
    function calculateSlideParameters() {
        itemWidth = $('.schedule_slide').width(); 
        
        if (window.innerWidth >= 1024 && window.innerWidth <= 1279) {
            visibleSlides = 3; 
        } else if (window.innerWidth >= 768) {
            visibleSlides = 5; 
        } else {
            visibleSlides = 1; 
        }

        let minTranslateX = -(itemWidth * (totalSlides - visibleSlides));  // 최소 이동 거리
        let maxTranslateX = 0;  

      
        if (minTranslateX > 0) {
            minTranslateX = 0;
        }

        return {
            minTranslateX,
            maxTranslateX
        };
    }

    
    let { minTranslateX, maxTranslateX } = calculateSlideParameters();


    function startDrag(e) {
        itemMousedown = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        itemdrag = true;
        mouseMoved = false;
        e.preventDefault();
        $('.schedule_wrap').css('transition', 'none');
    }

    
    function duringDrag(e) {
        if (itemdrag) {
            mouseMoved = true;
            let moveX = (e.type === 'mousemove' ? e.clientX : e.touches[0].clientX) - itemMousedown;
            let newTranslateX = currentTranslateX + moveX;

            newTranslateX = Math.max(minTranslateX, Math.min(maxTranslateX, newTranslateX));
            $('.schedule_wrap').css('transform', `translateX(${newTranslateX}px)`);
        }
    }

  
    function endDrag(e) {
        if (itemdrag) {
            itemdrag = false;
            let moveX = (e.type === 'mouseup' ? e.clientX : e.changedTouches[0].clientX) - itemMousedown;

            if (moveX < -30) {
                currentTranslateX -= itemWidth;
            } else if (moveX > 30) {
                currentTranslateX += itemWidth;
            }

            currentTranslateX = Math.max(minTranslateX, Math.min(maxTranslateX, currentTranslateX));
            $('.schedule_wrap').css({
                'transform': `translateX(${currentTranslateX}px)`,
                'transition': 'transform 0.3s ease'
            });

            if (mouseMoved) {
                e.preventDefault();
            }

            let progressPercentage = Math.abs(currentTranslateX) / (itemWidth * (totalSlides - visibleSlides)) * 100;
            schedule_progress_bar(progressPercentage);

            console.log(`translateX(${currentTranslateX}px)`);
            console.log($('.schedule_wrap').width());
            console.log(currentTranslateX);
            console.log(moveX);
            console.log(progressPercentage);
        }
    }

    function addMouseEvents() {
        $('.schedule_wrap').on('mousedown', startDrag);
        $(document).on('mousemove', duringDrag);
        $(document).on('mouseup', endDrag);
    }

    function addTouchEvents() {
        $('.schedule_wrap').on('touchstart', startDrag);
        $('.schedule_wrap').on('touchmove', duringDrag);
        $('.schedule_wrap').on('touchend', endDrag);
    }

    function setEventsBasedOnDevice() {
        if (window.innerWidth < 768) {
            
            addTouchEvents();
           
            $('.schedule_wrap').off('mousedown');
            $(document).off('mousemove');
            $(document).off('mouseup');
        } else {
           
            addMouseEvents();
            $('.schedule_wrap').off('touchstart');
            $('.schedule_wrap').off('touchmove');
            $('.schedule_wrap').off('touchend');
        }
    }

    $(window).on('resize', function () {
        ({ minTranslateX, maxTranslateX } = calculateSlideParameters()); 
        setEventsBasedOnDevice(); 
    });

    ({ minTranslateX, maxTranslateX } = calculateSlideParameters()); 
    setEventsBasedOnDevice(); 
}


scheduleCarousel();



function schedule_progress_bar(progressPercentage) {
    let scd_prgb = $('.bar').width(); 
    let scd_prgb_container = $('.schedule_progress_bar').width();

    let newTranslateX = (progressPercentage / 100) * (scd_prgb_container - scd_prgb);
    
    $('.bar').css({
        'transform': `translateX(${newTranslateX}px)`,
        'transition': 'transform 0.3s ease'
    });
}


spawn_carousel();




function spawn_carousel () {
    let currentslide = 0;
    let totalslide = $('.spawn_slide').length;
    let slidewidth = $('.spawn_slide').width() + 33;
    
    $('.spawn_next').on('click', function () {   
    if (currentslide < totalslide - 5) {
        currentslide ++;
        $('.spawn_box').css('transform', `translateX(-${slidewidth * currentslide}px)`);
        $('.spawn_box').css('transition', 'transform 0.5s ease' );
        
        console.log(totalslide);
        console.log(currentslide);
        console.log(slidewidth);
        console.log(`translateX(-${slidewidth * currentslide}px)`);
    }});
    $('.spawn_pre').on('click', function () {   
        if (currentslide > 0) {
            currentslide --;
            $('.spawn_box').css('transform', `translateX(-${slidewidth * currentslide}px)`);
            $('.spawn_box').css('transition', 'transform 0.5s ease' );
            console.log(totalslide);
            console.log(currentslide);
            console.log(slidewidth);
            console.log(`translateX(${(slidewidth * currentslide)}px)`);
        }});
        
    };


        
            