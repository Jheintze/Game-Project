
class Game {
	constructor() {
		this.background = new Background()
		this.player = new Player()
		this.backgroundImages
		this.playerImage
		this.obstacles = []
		this.Mutti
		
	}

	preload() {
		this.backgroundImages = [
			{ src: loadImage("../assets/helmholtz.jpg"), x: 0, speed: 5 },
			
		]
        this.Mutti = loadImage("../assets/pics/momsticker2.webp")
		this.playerImage = loadImage("../assets/walkingdude2.gif")
		
	}
    draw() {
       clear()
       this.background.draw()
       this.player.draw()
        
       
       
		if (frameCount % 90 === 0) {
			this.obstacles.push(new Obstacle(this.Mutti))
		}

        // Draw the obstacles
		this.obstacles.forEach(function (obstacle) {
			obstacle.draw()
		})

        //filter stuff out thats been hit or was out
		this.obstacles = this.obstacles.filter(obstacle => {
			console.log(this)

			if (obstacle.collision(this.player)) {
				return false
			    
			} else {
				return true
				this.lives--
				document.querySelector("span").innerText = this.lives
			}
		})
       if (this.obstacles.length > 10){
		//	textSize(40)
		//	text("WINNNNN", 100, 100)

          // console.log("WINNER WINNER CHICKEN DINNER")
       }
}
}

//player.score--
//this.lives--
//document.querySelector("h2").innerText = this.lives






















