class Form {
    constructor() {
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.title = createElement('h2');
        this.greeting = createElement('h2');




    }

    display() {
        this.input.position(width / 2, height / 2);
        player.name = this.input.value();
        this.button.position(this.input.x + this.input.width + 100, height / 2);
        this.button.mousePressed();
        this.title.html("Shooting Game")
        this.title.position(width / 2, 50)
    }

}