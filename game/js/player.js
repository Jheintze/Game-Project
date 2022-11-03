

class Player {
	constructor() {
		this.width = 200
		this.height = 300
		this.x = 0
		this.y = 1400 - this.height
		
		this.score = 0
	}

	draw() {
		

		
		if (this.y >= 1400 - this.height) {
			this.y = 1400 - this.height
		}

		image(game.playerImage, this.x, this.y, this.width, this.height)
	}

	
    moveUp() {
        if (this.y >= 50 && this.y  <= 1100) {
        this.y -= 50
        }
}
    moveDown(){
        if(this.y >=0 && this.y <= 1100){
            this.y +=50
        }
    }
}