var population;
// Each rocket is alive till 500 frames
var lifespan = 330;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.6;
//Count targets
var tgt = 0;
/* Display is array with 5 positions, where:
pos 0 = generation
pos 1 = targets (generation)
pos 2 = accuracy (generation)
pos 3 = best generation
pos 4 = best target (best generation)
pos 5 = best acurracy (best generation)
*/
var display = [0, 0, 0.00, 0, 0, 0.00]

// Dimensions of barrier
var rx = 400;
var ry = 300;
var rw = 200;
var rh = 10;

function setup() {
    createCanvas(1000, 500);
    population = new Population();
    lifeP = createP();
    target = createVector(width / 2, 50);
}

function draw() {
    background(51, 0, 0);
    let colorBarrier = color(153, 51, 0);
    let colorTarget = color(204, 153, 0);
    population.run();

    // Displays count to window, decreasing
    document.getElementById("lt").innerText = 330 - count;

    //Writing in the table pt1
    document.getElementById("gen").innerText = display[0];
    document.getElementById("best_gen").innerText = display[3];
    document.getElementById("btgt").innerText = display[4];
    document.getElementById("bacc").innerText = display[5];

    count++;
    if (count == lifespan) {
        population.evaluate();
        population.selection();
        if (display[1] > display[4]) {
            display[4] = display[1];
            display[3] = display[0];
            display[5] = display[2];
        }
        count = 0;
        display[1] = 0;
        tgt = 0;
        //Delay in adding generation to show generation result
        setTimeout(() => { display[0]++; }, 1000);

    }
    // Renders barrier for rockets
    fill(colorBarrier);
    rect(rx, ry, rw, rh);
    // Renders target
    fill(colorTarget);
    ellipse(target.x, target.y, 16, 16);
}