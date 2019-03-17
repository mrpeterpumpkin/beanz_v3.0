
$(document).ready(function () {
    var controller = new ScrollMagic.Controller();

    TweenMax.from(".logo", 1, {
        delay: 1.5,
        opacity: 0,
        scale: 0
    });

    $('.scroll').each(function () {
        console.log(this);

        var ourScene = new ScrollMagic.Scene({
            triggerElement: this.children[0],
            triggerHook: .7,
            duration: '80%'
        })
            .setClassToggle(this, 'fade-in')
            .addTo(controller);
    });

})






