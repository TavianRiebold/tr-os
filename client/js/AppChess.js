var appChess = new App({

  ////////////////////////////////////////
  // vvv CONFIG USED BY CONSTRUCTOR vvv //
  ////////////////////////////////////////

  name: "Chess",
  iconUrl: "https://static.thenounproject.com/png/21876-200.png",

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
