var canvasWidth = 864;
var canvasHeight = 480;

var appSelected = -1;
var apps = [appStore, appSettings, appPickAndPlace, appChess, appDrawing, appQA, appFace,];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  
  desktop.setup(-1);
  desktop.apps = apps;
  
  apps = apps.sort(function (a, b) {
    return b.id - a.id;
  });
  
  for (var i = 0; i < apps.length; i++) {
    apps[i].setup(i);
  }
}

function draw() {
  getSelectedApp().draw();
}

function mousePressed() {
  getSelectedApp().mousePressed();
}

function mouseReleased() {
  getSelectedApp().mouseReleased();
}

function mouseClicked() {
  getSelectedApp().mouseClicked();
}

function getSelectedApp() {
  if (appSelected < 0 || appSelected >= apps.length) {
    return desktop;
  } else {
    return apps[appSelected];
  }
}
