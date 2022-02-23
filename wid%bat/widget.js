(() => {
  var normal = g.theme.dark ? "#fff" : "#000";
  var background = g.theme.dark ? "#000" : "#fff";
  var charging = "#0f0";
  var red = "#f00";

  function draw() {
    var x = this.x, y = this.y;
    g.reset();
    l = E.getBattery();
    var c = l <= 15 ? red : normal;
    c = Bangle.isCharging() ? charging : c;
    var s = l < 10 ? "0" + l : l;

    g.setColor(background);
    g.fillRect(x,y,x + 16, y + 6);
    g.setColor(c);
    g.setFont('6x8', 1.5);
    g.drawString(s + "%", this.x, this.y);
  }

  WIDGETS["%bat"]={
    area:"tr",
    width: 16,
    draw:draw
  };
  setInterval(()=>WIDGETS["%bat"].draw(), 60000);
})();
