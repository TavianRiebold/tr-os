var appPickAndPlace = new App({
  
  ////////////////////////////////////////
  // vvv CONFIG USED BY CONSTRUCTOR vvv //
  ////////////////////////////////////////
  
  name: "Pick N Place",
  iconUrl: "https://cdn0.iconfinder.com/data/icons/robotics-engineering-5/66/42-512.png",
  
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
