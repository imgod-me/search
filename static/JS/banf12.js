//禁用f12及右键
document.oncontextmenu = function () {
    return false;
  };
  document.onkeydown = function (e) {
    var currKey = 0,
      evt = e || window.event;
    currKey = evt.keyCode || evt.which || evt.charCode;
    if (currKey == 123) {
      window.event.cancelBubble = true;
      window.event.returnValue = false;
    }
  };