//build a grid
//establish players
//establish rules
//establish control (start/end)
// establish turns

const grid = document.getElementById("grid")

class Box{
    constructor() {
        this.box = document.createElement("div")
        this.box.classList.add("box")
    }
}

for(let i = 0; i < 9; i++) {
    const newBox = new Box()
    grid.append(newBox.box)
}


