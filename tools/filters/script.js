// managing input 
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', inputChanged)
  })
  
  function inputChanged(e) {
    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      e.target.value
    )
  }

//   showing result
function myfunc(){
  // fetching input value
    var brightness = document.getElementById("brightness").value;
    var contrast = document.getElementById("contrast").value;
    var saturation = document.getElementById("saturation").value;
    var sepia = document.getElementById("sepia").value;
    var blur = document.getElementById("blur").value;
    var hue = document.getElementById("hue").value;
    var grayscale = document.getElementById("grayscale").value;
    var opacity = document.getElementById("opacity").value;
    var invert = document.getElementById("invert").value;

    // showing output code
      document.getElementById("brightness_result").innerHTML = "filter: brightness(" + brightness + "%) " + 
                                                                        "contrast(" + contrast + "%) " + 
                                                                        "saturate(" + saturation + "%) "+
                                                                        "sepia(" + sepia + "%) "+
                                                                        "blur(" + blur + "px) "+
                                                                        "hue-rotate(" + hue + "deg) "+
                                                                        "grayscale(" + grayscale + "%) "+
                                                                        "opacity(" + opacity + "%) "+
                                                                        "invert(" + invert + "%) "+
                                                                         ";";         

    // for value under rage slider
    document.getElementById("brightness_value").innerHTML = brightness;
    document.getElementById("contrast_value").innerHTML = contrast;
    document.getElementById("saturation_value").innerHTML = saturation;
    document.getElementById("sepia_value").innerHTML = sepia;
    document.getElementById("blur_value").innerHTML = blur;
    document.getElementById("hue_value").innerHTML = hue;
    document.getElementById("grayscale_value").innerHTML = grayscale;
    document.getElementById("opacity_value").innerHTML = opacity;
    document.getElementById("invert_value").innerHTML = invert;
}

// copy to clipboard function 
function copyclipboard() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('.result');
    cb.writeText(paragraph.innerText).then(() => swal({
                                                 title: "Copied :)",
                                                 text: "You Have Copied Code to Clipboard...Now Paste it to Your CSS...",
                                                 icon: "success",
                                                 button: "Ok I will Paste",
                                                 }));
  }
