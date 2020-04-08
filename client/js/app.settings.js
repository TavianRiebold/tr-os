var appSettings = new App({
  
  ////////////////////////////////////////
  // vvv CONFIG USED BY CONSTRUCTOR vvv //
  ////////////////////////////////////////
  
  name: "Settings",
  iconUrl: "https://image.flaticon.com/icons/svg/17/17214.svg",
  
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
