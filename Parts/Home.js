class Home
{
   constructor()
   {
      this.title = createElement('h1');
      this.input = createInput("Enter your name");
      this.button = createButton("Play");
      this.greeting = createElement('h2');
      this.refresh = createButton("Restart");
   }
   hide()
   {
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
   }
   display()
   {
      this.title.html("Car racer");
      this.title.position(500,100);
      this.input.position(500,250);
      this.button.position(500,400);
      this.refresh.position(500,500);
      this.button.mousePressed(()=>
      {
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount = playerCount + 1;
         player.index = playerCount;
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("Hello "+ player.name);
         this.greeting.position(500,250);
      })
      this.refresh.mousePressed(()=>
      {
         player.updateCount(0);
         game.update(0);
      })
   }
}