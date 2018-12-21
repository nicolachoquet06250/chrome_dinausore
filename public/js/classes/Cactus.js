'use strict';

class Cactus {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset_canvas_size();
        this.nb = Math.floor(Math.random() * 5);
        this.size_min = Math.floor(Math.random() * 11);
        this.size_max = Math.floor(Math.random() * 11);
        this.init_cactus_sizes();
    }

    reset_canvas_size() {
        this.size = {
            width: this.canvas.width(),
            height: this.canvas.height()
        };
    }

    init_cactus_sizes() {
        this.cactus = [];
        for(let i = 0, max = this.nb; i < max; i++) {
            this.cactus.push(Math.floor(Math.random() * this.size_max) + this.size_min)
        }
    }

    draw() {
        let actual_content = this.canvas.html();
        for(let i = 0, max = this.cactus.length; i < max; i++) {
            let cactus = `<path d=" M100 ${this.size.height - 10} 
                                    L100 ${this.size.height - 15} 
                                    L95 ${this.size.height - 15} 
                                    L95 ${this.size.height - 20}
                                     
                                    Z" />`;
            actual_content = cactus + actual_content;
        }
    }
}