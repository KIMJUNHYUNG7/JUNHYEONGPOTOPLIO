$(window).on('scroll', function() {
    let navBG = $('.nav_BG');
    let changetext = $('.top_nav a');
    let scrollPosition = $(window).scrollTop(); // 함수 호출 수정

    if (scrollPosition > 80) {
        navBG.addClass('Down_nav'); // 대소문자 수정
        changetext.css('color', '#eee'); // 대소문자 수정
    } else {
        navBG.removeClass('Down_nav'); // 대소문자 수정
        changetext.css('color', '#333'); // 대소문자 수정
    }
});
let currentPage = 0; // 전역 변수로 설정

// $(window).on('scroll', function () {
//     let totalPages = $('.page').length; // 총 페이지 수 계산
//     let scrollPosition = $(window).scrollTop(); // 현재 스크롤 위치
//     let windowHeight = $(window).height(); // 화면 높이

//     // 스크롤이 아래로 이동할 때
//     if (scrollPosition > currentPage * windowHeight + (windowHeight / 2) && currentPage < totalPages - 1) {
//         currentPage++;
//         $('html, body').animate({
//             scrollTop: currentPage * windowHeight
//         }, 500); // 0.5초 동안 부드럽게 이동
//     }
//     // 스크롤이 위로 이동할 때
//     else if (scrollPosition < currentPage * windowHeight - (windowHeight / 2) && currentPage > 0) {
//         currentPage--;
//         $('html, body').animate({
//             scrollTop: currentPage * windowHeight
//         }, 500); // 0.5초 동안 부드럽게 이동
//     }
// });



$('#home').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.page1').offset().top
    }, 500); // 0.5초 동
})
$('#skill').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.page2').offset().top
    }, 500); // 0.5초 동
})
$('#project').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.page3').offset().top
    }, 500); // 0.5초 동
})
$('#contact').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $('.page4').offset().top
    }, 500); // 0.5초 동
})



function project_slide (){

    
    let currentitem = 0; // 현재 아이템 인덱스 (1부터 시작)
    let totalitem = $('.project_box').length; // 총 아이템 수
    let itemtoshow = 2;
    let boxwidth = updateDimensions(); // 초기 box width 계산
    
    $(window).on('resize', function() {
        boxwidth = updateDimensions();
        slideUpdate();
    });
    
    function updateDimensions() {
        return $('.project_box').outerWidth(true); 
    }
    
    function slideUpdate() {
        let itemsToShow = itemtoshow;
        
        // 모바일 해상도에서는 itemtoshow 값 조정
        if (matchMedia("screen and (max-width: 767px)").matches) {
            itemsToShow = 1; // 모바일에서는 한 개씩 표시
        }
        else if(matchMedia("screen and (max-width: 1024px)").matches){
            itemsToShow = 1
        }
        
        $('.next_btn').off('click').on('click', function() {
            if (currentitem < totalitem - itemsToShow) {
                currentitem++;  
                let offset = -currentitem * boxwidth;
                $('.project_wrap').css('transform', `translateX(${offset}px)`);
            }
        });
        
        $('.pre_btn').off('click').on('click', function() {
            if (currentitem > 0) {
                currentitem--;
                let offset = -currentitem * boxwidth;
                $('.project_wrap').css('transform', `translateX(${offset}px)`);
            }
        });
    }
    
    slideUpdate(); // 초기 슬라이드 설정
}
    
project_slide ();


// let click = false;
// $('.project1').on('click',function(e){
//     e.target = 
//     if (){

//         $('.modal1').addClass('show');
//     }
//     else{
//         $('.modal1').removeClass('show');
//     }
// })

$('.project1').on('click', () => {
    if ($('.modal1').css('display') == 'none') {
        $('.modal1').addClass('show');
    }
});
$('.modal1').on('click', function() {
        $('.modal1').removeClass('show');
});
$('.project2').on('click', () => {
    if ($('.modal2').css('display') == 'none') {
        $('.modal2').addClass('show');
    }
});
$('.modal2').on('click', function() {
        $('.modal2').removeClass('show');
});
$('.project3').on('click', () => {
    if ($('.modal3').css('display') == 'none') {
        $('.modal3').addClass('show');
    }
});
$('.modal3').on('click', function() {
        $('.modal3').removeClass('show');
});

    


// let currentitem = 2;
// let totalitem = $('.project_box').length; 
// let boxwidth = $('.project_box').width() + 100 ;

// $('.next_btn').on('click',function () {
//     if(currentitem < totalitem ){
//         currentitem ++ ;
//         $('.project_wrap').css('transform',`translateX(-${boxwidth}px)`)
//         console.log(currentitem)
//     }

// })
// $('.pre_btn').on('click',function () {
//     if(){
//         currentitem -- ; 
//         $('.project_wrap').css('transform',`translateX(${boxwidth}px)`)
//         console.log(currentitem)
//     }

// })

// let usermousedown = false;
// let startpoint = 0;
// let moveX = 0;
// let endX = 0;
// let movetranslate = 0;
// const $projectWrap = $('.project_wrap');
// const totalWidth = $projectWrap.width(); // 전체 너비

// // 마우스 다운 이벤트 핸들러
// $projectWrap.on('mousedown', function(e) {
//     usermousedown = true;
//     startpoint = e.clientX;
   
// //    $('.project_box').on('click', function(e){

// //        e.preventDefault(); // 기본 동작 방지
// //    })
   
   
// });

// // 마우스 무브 이벤트 핸들러
// $(document).on('mousemove', function(e) {
//     if (usermousedown) {
//         moveX = e.clientX - startpoint;
//         const newTranslate = movetranslate + moveX;
//         // $('.project_box').on('click', function(e){
        
//         //     e.preventDefault(); //
//         // })
        
//         // 이동 거리를 제한하여 범위를 유지
//         const maxTranslate = 0; // 왼쪽 끝 (0)
//         const minTranslate = -totalWidth + $projectWrap.parent().width(); // 오른쪽 끝

//         if (newTranslate > maxTranslate) {
//             $projectWrap.css('transform', `translateX(${maxTranslate}px)`);
//         } else if (newTranslate < minTranslate) {
//             $projectWrap.css('transform', `translateX(${minTranslate}px)`);
//         } else {
//             $projectWrap.css('transform', `translateX(${newTranslate}px)`);
//         }
//     }
// });

// // 마우스 업 이벤트 핸들러
// $(document).on('mouseup', function(e) {
//     if (usermousedown) {
//         usermousedown = false;
//         movetranslate += moveX; // 현재 이동 거리 저장
//         endX = moveX;

//         e.preventDefault();
//     }
// });


    // let usermousedown = false;
    // let startpoint = 0;
    // let moveX = 0;
    // let endX = 0;
    // let movetranslate = 0;
    // let totalmove = $('.project_wrap').width()

    // $('.project_wrap').on('mousedown', function(e) {
    //     usermousedown = true;
    //     startpoint = e.clientX;
    //     e.preventDefault(); // 기본 동작 방지
    // });

    // $(document).on('mousemove', function(e) {
    //     if (usermousedown ) {
    //         moveX = e.clientX - startpoint;
    //         $('.project_wrap').css('transform', `translateX(${movetranslate + moveX}px)`);
    //     }
    // });

    // $(document).on('mouseup', function(e) {
    //     if (usermousedown) {
    //         usermousedown = false;
    //         movetranslate += moveX; 
    //         endX = moveX;
    //         /
    //     }
    // });




//프로젝트 워랩 부분을 유저가 마우스 다운 함
//마우스 좌표를 변수에 저장 하고 
//마우스가 다운 된상태에서 움직이면(드래그)
//유저가 드래그 한만큼 워랩에 박스요소들을 엑스 축 만큼 움직이게 해주고
//마우스를 떗을때 드래그 한만큼 움직이게 해줘