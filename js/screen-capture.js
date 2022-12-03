const capture = async () => {
  html2canvas(document.querySelector("#capture"), {
    onrendered: function(canvas) {
      document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    }
  });
};