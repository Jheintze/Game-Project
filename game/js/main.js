const game = new Game()
const livesEL = document.querySelector('#livesEL')
let lives = 3



// Load game assets
function preload() {
	game.preload()
}

function setup() {
	createCanvas(1400, 1400)
}

function draw() {
	game.draw()
}

function keyPressed() {
	
    if (keyCode === UP_ARROW) {
		game.player.moveUp()
	}
    if (keyCode === DOWN_ARROW) {
		game.player.moveDown()
	}
}
 