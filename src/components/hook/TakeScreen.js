import html2canvas from "html2canvas";
const takeScreen = () => {
    html2canvas(document.getElementById("#capture")).then(
      (canvas) => {
        let linkcito = document.createElement("a");
        linkcito.href = canvas.toDataURL();
        linkcito.download = "tw.jpg";
        linkcito.click();
      }
    );
  };

  
  export default takeScreen;