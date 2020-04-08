var appStore = new App({
  
  ////////////////////////////////////////
  // vvv CONFIG USED BY CONSTRUCTOR vvv //
  ////////////////////////////////////////
  
  name: "App Store",
  iconUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrgo90JmfXfOsrQiOOVJzkO6aPF0pUoUE9Mje5jQD2n3GIwWp&s",
  
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
