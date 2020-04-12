$(window).on('load', () => {
    setTimeout(() => {
        $('body').removeClass('preload');
    }, 200);
});

const nav = $('#nav');
const navLinks = nav.find('a');

navLinks.scrolly({
    speed: 500,
    offset: () => nav.height()
})
.on('click', function() {
    navLinks
        .removeClass('active')
        .removeClass('active-locked');

    $(this)
        .addClass('active')
        .addClass('active-locked');
})
.each(function() {
    const linkElem = $(this),
          sectionId = $(this).attr('href'),
          section = $(sectionId);
          
    section.scrollex({
        mode: 'middle',
        enter: function() {
            if (navLinks.filter('.active-locked').length == 0) {
                navLinks.removeClass('active');
                linkElem.addClass('active');

            } else if ($this.hasClass('active-locked')) {
                linkElem.removeClass('active-locked');
            }
        }
    });
});;

