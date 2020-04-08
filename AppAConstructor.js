function App (config) {
  this.id = config.id;
  this.name = config.name;
  
  this.iconImg = ""; // p5.js img
  
  this._configDraw = config.draw;
  this._configDrawIcon = config.drawIcon;
  this._configIconUrl = config.iconUrl;
  this._configMouseClicked = config.mouseClicked;
  this._configMousePressed = config.mousePressed;
  this._configMouseReleased = config.mouseReleased;
  this._configSetup = config.setup;
  config._app = this;
  
  this.setup = function (id) {
    if (!this.id) {
      this.id = id;
    }
    
    if (this._configIconUrl) {
      this.iconImg = loadImage(this._configIconUrl);
    }
    
    if (this._configSetup) {
      this._configSetup.bind(config)();
    }
  };
  
  this.draw = function () {
    this._configDraw.bind(config)();
  }
  
  this._drawIconText = function (iconWidth, iconHeight, iconMargin) {
    fill(255);
    noStroke();
    textAlign(CENTER, BOTTOM);
    textSize(16);
    text(this.name, 0, iconHeight - (iconMargin / 2.0), iconWidth) - 10;
  };
  
  this.drawIcon = function (iconWidth, iconHeight, iconMargin) {
    stroke(0);
    fill(150)
    rect(0, 0, iconWidth, iconHeight);
    if (this._configDrawIcon) {
      this._configDrawIcon.bind(config)(iconWidth, iconHeight, iconMargin);
    } else if (this.iconImg) {
      this.iconImg.resize(iconWidth - iconMargin * 3, iconHeight - iconMargin * 3);
      image(this.iconImg, iconMargin * 1.5, iconMargin);
    }
    
    this._drawIconText(iconWidth, iconHeight, iconMargin);
  };
  
  this.open = function () {
    appSelected = this.id;
  };
  
  this.close = function () {
    desktop.open();
  };

  this.mousePressed = function () {
    if (this._configMousePressed) { this._configMousePressed.bind(config)(); }
  };

  this.mouseReleased = function () {
    if (this._configMouseReleased) { this._configMouseReleased.bind(config)(); }
  };

  this.mouseClicked = function () {
    if (this._configMouseClicked) { this._configMouseClicked.bind(config)(); }
  };
}
