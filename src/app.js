var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    turns: 0,
    g1:["","",""],
    g2:["","",""],
    g3:["","",""],
    Line1:[3],
    Line2:[3],
    Line3:[3],
    gameOn: false,

    
    play: function(place, event){
        var game = event.getCurrentTarget();
        var location = place.getLocation();
        
    }
    
    playGame: function(){
        //top
        if(location.x >390 && location.x <560 && location.y >400 && game.g1[1]==''){
    
                if(game.turns%2 === 1){
                    game.Line1[1] = new cc.Sprite(res.X_png);
                    game.Line1[1].setPosition(480, 500);
                    game.addChild(game.Line1[1], 1);
                    game.g1[1] = 'X';
                }
                else{
                    game.Line1[1] = new cc.Sprite(res.O_png);
                    game.Line1[1].setPosition(480, 500);
                    game.addChild(game.Line1[1], 1);
                    game.g1[1] = '0';
                }
                game.turns++;
                gameOn = true;
            }
            //top-left
            else if(location.x < 390 && location.y >400 && game.g1[0]==''){
                
                if(game.turns%2 === 1){
                    game.Line1[0] = new cc.Sprite(res.X_png);
                    game.Line1[0].setPosition(300,500);
                    game.addChild(game.Line1[0], 1);
                    game.g1[0] = 'X';
                }
                else{
                    game.Line1[0] = new cc.Sprite(res.O_png);
                    game.Line1[0].setPosition(300,500);
                    game.addChild(game.Line1[0], 1);
                    game.g1[0] = '0';
                }
                game.turns++;
                gameOn = true;
            }
            //top-right
            else if(location.x >570 && location.y >400 && game.g1[2]==''){
 
                if(game.turns%2 === 1){
                    game.Line1[2] = new cc.Sprite(res.X_png);
                    game.Line1[2].setPosition(660, 500);
                    game.addChild(game.Line1[2], 1);
                    game.g1[2] = 'X';
                }
                else{
                    game.Line1[2] = new cc.Sprite(res.O_png);
                    game.Line1[2].setPosition(660, 500);
                    game.addChild(game.Line1[2], 1);
                    game.g1[2] = '0';
                }
                game.turns++;
                gameOn = true;
            }
            //right
            else if(location.x >570 && location.y <400 && location.y >230 && game.g2[2]==''){

                if(game.turns%2 === 1){
                    game.Line2[2] = new cc.Sprite(res.X_png);
                    game.Line2[2].setPosition(660, 318);
                    game.addChild(game.Line2[2], 1);
                    game.g2[2] = 'X';
                }
                else{
                    game.Line2[2] = new cc.Sprite(res.O_png);
                    game.Line2[2].setPosition(660, 318);
                    game.addChild(game.Line2[2], 1);
                    game.g2[2] = '0';
                }
                game.turns++;
                gameOn = true;
            }
            //Down_right
            else if(location.x >570 && location.y <220 && game.g3[2]==''){
           
                if(game.turns%2 === 1){
                    game.Line3[2] = new cc.Sprite(res.X_png);
                    game.Line3[2].setPosition(660,136);
                    game.addChild(game.Line3[2], 1);
                    game.g3[2] = 'X';
                }
                else{
                    game.Line3[2] = new cc.Sprite(res.O_png);
                    game.Line3[2].setPosition(660,136);
                    game.addChild(game.Line3[2], 1);
                    game.g3[2] = '0';
                }
                game.turns++;
                gameOn = true;
            }
            //Down
            else if(location.x >390 && location.x<560 && location.y <220 && game.g3[1]==''){
         
                if(game.turns%2 === 1){
                    game.Line3[1] = new cc.Sprite(res.X_png);
                    game.Line3[1].setPosition(480,136);
                    game.addChild(game.Line3[1], 1);
                    game.g3[1] = 'X';
                }
                else{
                    game.Line3[1] = new cc.Sprite(res.O_png);
                    game.Line3[1].setPosition(480,136);
                    game.addChild(game.Line3[1], 1);
                    game.g3[1] = '0';
                }
                game.turns++;
                gameOn = true;
            }
            //Down_Left
            else if(location.x <390 && location.y <220 && game.g3[0]==''){
       
                if(game.turns%2 === 1){
                    game.Line3[0] = new cc.Sprite(res.X_png);
                    game.Line3[0].setPosition(300,136);
                    game.addChild(game.Line3[0], 1);
                    game.g3[0] = 'X';
                }
                else{
                    game.Line3[0] = new cc.Sprite(res.O_png);
                    game.Line3[0].setPosition(300,136);
                    game.addChild(game.Line3[0], 1);
                    game.g3[0] = '0';
                }
                game.turns++;
                gameOn = true;
            }
            //Left
            else if(location.x < 390 && location.y <400 && location.y >230 && game.g2[0]==''){
   
                if(game.turns%2 === 1){
                    game.Line2[0] = new cc.Sprite(res.X_png);
                    game.Line2[0].setPosition(300,318);
                    game.addChild(game.Line2[0], 1);
                    game.g2[0] = 'X';
                }
                else{
                    game.Line2[0] = new cc.Sprite(res.O_png);
                    game.Line2[0].setPosition(300,318);
                    game.addChild(game.Line2[0], 1);
                    game.g2[0] = '0';
                }
                game.turns++;
                gameOn = true;
            }
            //Center
             else if(location.x > 390 && location.x < 570 && location.y < 400 && location.y > 230 && game.g2[1]==''){
                 
                if(game.turns%2 === 1){
                    game.Line2[1] = new cc.Sprite(res.X_png);
                    game.Line2[1].setPosition(480, 318);
                    game.addChild(game.Line2[1], 1);
                    game.g2[1] = 'X';
                }
                else{
                    game.Line2[1] = new cc.Sprite(res.O_png);
                    game.Line2[1].setPosition(480, 318);
                    game.addChild(game.Line2[1], 1);
                    game.g2[1] = '0';
                }
                game.turns++;
                gameOn = true;
            }

            

},
    
   
        
    ctor:function () {
        
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("TicTacToe J.A.V", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.tablero_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);

        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: this.play

		}, this);

        return true;
    }
});


                

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

