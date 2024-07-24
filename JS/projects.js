$(document).ready(function() {
    $('.card').on('mouseenter', function (event) {
        const $desc = $(this).find('.project-description');
        let direction = getDirection($(this), event);
        let animateFrom = {};
        
        switch (direction) {
            case 0: animateFrom = { top: '-100%' }; break; // Top
            case 1: animateFrom = { left: '100%' }; break; // Right
            case 2: animateFrom = { top: '100%' }; break; // Bottom
            case 3: animateFrom = { left: '-100%' }; break; // Left
        }

        $desc.css(animateFrom).stop(true, true).show().animate({top: 0, left: 0}, 300);
    });

    $('.card').on('mouseleave', function () {
        $(this).find('.project-description').stop(true, true).fadeOut();
    });

    function getDirection($el, event) {
        const w = $el.width(),
              h = $el.height(),
              x = (event.pageX - $el.offset().left - (w / 2) * (w > h ? (h / w) : 1)),
              y = (event.pageY - $el.offset().top - (h / 2) * (h > w ? (w / h) : 1)),
              d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;

        return d;
    }
});