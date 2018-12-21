'use strict';

class Dinausore {
    constructor(default_lifes, canvas) {
        this.lifes = default_lifes;
        this.canvas = canvas;
        this.reset_canvas_size();
        this.jump_step = 0;
    }

    next_step() {

    }

    loose_life() {
        this.lifes --;
    }

    reset_canvas_size() {
        this.size = {
            width: this.canvas.width(),
            height: this.canvas.height()
        };
    }

    jump_up() {
        this.jump_step = 1;
        return this;
    }

    jump_down() {
        this.jump_step = 0;
        return this;
    }

    draw_up() {
        return `<path   id="dino" 
                        d=" M40 ${this.size.height - 118} 
                            L60 ${this.size.height - 118} 
                            L62 ${this.size.height - 106}
                            L45 ${this.size.height - 106}
                            L62 ${this.size.height - 99}
                            L62 ${this.size.height - 98}
                            
                            L10 ${this.size.height - 22}
                            Z"/>`;
    }

    draw_down() {
        return `<path   id="dino" 
                        d=" M40 ${this.size.height - 106} 
                            L60 ${this.size.height - 106} 
                            L62 ${this.size.height - 90}
                            L45 ${this.size.height - 90}
                            L62 ${this.size.height - 87}
                            L62 ${this.size.height - 86}
                            
                            L10 ${this.size.height - 10}
                            Z"/>`;
    }

    draw() {
        $('#dino').remove();
        let actual_content = this.canvas.html();
        let dino = this.jump_step === 0 ? this.draw_down() : this.draw_up();
        this.canvas.html(dino + actual_content);
    }
}