//build a grid
//establish players
//establish rules
//establish control (start/end)
// establish turns



const grid = document.getElementById("grid")
// const outsider = document.getElementById("outsider")

class Box{
    constructor() {
        this.box = document.createElement("div")
        this.box.classList.add("box")        
    }

    addId (id) {
        this.box.id = id
    }
}

// for(let i = 0; i < 9; i++) {
//     const newBox = new Box()
//     // grid.append(newBox.box)
// }

for(let i = 0; i < 9; i++) {
    const newBox = new Box()
    newBox.addId(i)
    grid.appendChild(newBox.box)    
}

// console.log("grid: ", outsider)


//  an object is a way to store multiple [related] values 
// under one variable using keywords for each value

// create an array of colours. style each box with a colour 
// from the array whose index matches the box id





