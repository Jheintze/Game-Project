

class Obstacle {
	constructor(image) {
		this.image = image
        // p5 provides the variables width and height - they contain width and height of the canvas 
		this.x = width
		this.y = (Math.random() * height) 
		this.width = 150
		this.height = 150
	}

	draw() {
		this.x--
		image(this.image, this.x, this.y, this.width, this.height)
	}

	collision(playerInfo) {
		// console.log("collision")

		// Get the middle of the obstacle
		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2

		// Get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		
        // dist(x1, y1, x2, y2) returns the distance between the objects
		if (dist(obstacleX, obstacleY, playerX, playerY) > 50) {
			return false
		} else {
			lives -= 1
			livesEL.innerHTML = lives
			return true
			if ( lives === 0){
				
			}
		}
	}
}
