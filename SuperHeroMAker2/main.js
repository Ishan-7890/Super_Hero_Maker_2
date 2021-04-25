var canvas = new fabric.Canvas("avenvas");

block_width = 30;
block_height = 30;

groot_x = 10;
groot_y = 10; 

var player_object = "";

function player_update() 

  {
fabric.Image.fromURL("player.png", function(Img)

{
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set
    ({

    top:groot_y, left:groot_x

    });
  canvas.add(player_object);

} );

}

var block_object = "";

function new_img(get_img)

{
fabric.Image.fromURL(get_img , function(Img)

{
    block_object=Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set
    ( 
        {

top:groot_y, left:groot_x
    });
  canvas.add(block_object);
  
} );

}

window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{

  keypressed = e.keyCode;

if(keypressed == "70")
{
    new_image("ironman_face.png");
}

if(keypressed == "66")
{
    new_image("spiderman_body.png");
}

if(keypressed == "76")
{
    new_image("hulk_legs.png");
}

if(keypressed == "82")
{
    new_image("thor_right_hand.png");
}

if(keypressed == "72")
{
    new_image("captain_america_left_hand.png");
}

}