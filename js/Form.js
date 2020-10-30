
class Form {
    constructor() {
      
    }
  
    display(){
      var title = createElement('h2')
      title.html("Car Racing Game");
      title.position(330, 0);
      
      var input = createInput("Name");
      var button = createButton('Play');
      
      input.position(330, 180);
      button.position(330, 220);
  
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var name = input.value();
        
        playerCount+=1;
        player.update(name)
        player.updateCount(playerCount);
        var greeting = createElement('h3');
        greeting.html("Hello " + name )
        greeting.position(330, 220)
      });
  
    }
  }