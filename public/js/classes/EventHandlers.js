'use strict';

class EventHandlers {
    static EnterKeyDown(e, canvas) {
        if(e.keyCode === 32) canvas.jump()
    }

    static EnterKeyUp(e, canvas) {
        if(e.keyCode === 32) canvas.exit_jump()
    }

    static all_resize(canvas) {
        $('#game')
            .height($(window).height())
            .width($(window).width());
        canvas.dinau.reset_canvas_size();
        canvas.re_draw()
    }
}