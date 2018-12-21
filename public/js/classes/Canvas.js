'use strict';

class Canvas {
    constructor(id, default_lifes) {
        this.id = id;
        this.context = $('#' + this.id);
        this.context.width($(window).width())
            .height($(window).height())
            .css('background', 'white');
        $('body').css('overflow', 'hidden');

        this.dinau = new Dinausore(default_lifes, this.context);
        this.cactus = new Cactus(this.context);

        this.init_canvas();
    }

    init_canvas() {
        this.draw_ground();
        this.draw_dinau();
        this.draw_cactus();
    }

    draw_dinau() {
        this.dinau.draw();
    }

    draw_ground() {
        this.context.html(`<line x1="0" y1="${(this.context.height() - 10)}" x2="${this.context.width()}" y2="${(this.context.height() - 10)}" style="stroke: rgb(0,0,0); stroke-width: 2" />`);
    }

    draw_cactus() {
        this.cactus.draw();
    }

    jump() {
        this.dinau.jump_up().draw();
    }

    exit_jump() {
        this.dinau.jump_down().draw();
    }

    re_draw() {
        this.init_canvas();
    }
}