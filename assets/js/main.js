const windowWidth = $(window).width();
const windowHeight = $(window).height();

// $('#header').mousemove((event) => {
//     const moveX = ((windowWidth / 2) - event.pageX) * 0.01;
//     const moveY = ((windowHeight / 2) - event.pageY) * 0.01;

//     $('#header-image').css('margin-left', `${moveX}px`);
//     $('#header-image').css('margin-top', `${moveY}px`);
// });

$(window).on('load', () => {
    setTimeout(() => {
        $('body').removeClass('preload');
    }, 200);
});