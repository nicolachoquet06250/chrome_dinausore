'use strict';

$(window).ready(() => {
    const default_lifes = 10;

    $(window).on('keydown', e => EventHandlers.EnterKeyDown(e, canvas));
    $(window).on('keyup', e => EventHandlers.EnterKeyUp(e, canvas));
    $(window).resize(() => EventHandlers.all_resize(canvas));

    let canvas = new Canvas('game', default_lifes);
});
