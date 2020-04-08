var appDrawing = new App({
  
  ////////////////////////////////////////
  // vvv CONFIG USED BY CONSTRUCTOR vvv //
  ////////////////////////////////////////
  
  name: "Drawing",
  iconUrl: "https://image.flaticon.com/icons/png/512/98/98755.png",
  
  draw: function () {
    background(240);
    fill(0);
    text(this.name, 100, 50);
  },
  
  mousePressed: function () {
    this._app.close();
  },
  
  ////////////////////////////////////////
  // vvv USER DEFINED / HELPER DATA vvv //
  ////////////////////////////////////////
  
  
});
