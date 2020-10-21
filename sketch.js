var bullet,wall;

var wall, thickness;
var bullet,speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed=random(223,321)
  weight=random(30,52)


  thickness=random(22,83)
  bullet=new Bullet(weight,speed);
  wall=new Wall(thickness);

    bullet=createSprite(50, 200, 50,5);  
    bullet.velocityX = speed;
    bullet.shapeColor=color(255);


    wall=createSprite(1200, 200, thickness, height/2);  

    wall.shapeColor=color(230,230,230);
  //wall.shapeColor=color(80,80,80)
}
function draw() {
  //bullet.sprite.collide(wall.sprite,calculateDeformation)
  if(hasCollided(bullet, wall))
  {
  	bullet.sprite.velocityX=0;
  	var damage=0.5 * bullet.weight * bullet.speed* bullet.speed/(wall.thickness *wall.thickness *wall.thickness);
  	bullet.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);


	if(damage>10)
	{
		wall.sprite.shapeColor=color(255,0,0);
		//bullet.sprite.x=bullet.sprite.x+(wall.thickness/2)
		wall.shapeColor=color(255,0,0);

	}



	if(damage<10)
	{
		wall.sprite.shapeColor=color(0,255,0);
		wall.shapeColor=color(0,255,0);
	}
	console.log(damage)


  }


  drawSprites();

}

function calculateDeformation()
{
	
	var damage=0.5 * bullet.weight * bullet.speed* bullet.speed/(wall.thickness *wall.thickness *wall.thickness);
	if(damage>100)
	{
		wall.sprite.shapeColor=color(255,0,0);
		//bullet.sprite.x=bullet.sprite.x+(wall.thickness/2)
	}
	

	if(damage<100)
	{
		wall.sprite.shapeColor=color(0,255,0);
	}
	console.log(damage)
}

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.sprite.x +lbullet.sprite.width;
	wallLeftEdge=lwall.sprite.x;
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
