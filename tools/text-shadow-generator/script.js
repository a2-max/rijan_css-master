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
    var x = document.getElementById("x-position").value;
    var y = document.getElementById("y-position").value;
    var blur = document.getElementById("blur").value;
    var shadow = document.getElementById("shadow-color").value;
    document.getElementById("result").innerHTML = "text-shadow: "+x+"px "+y+"px "+blur+"px "+shadow+" ;";//for final output

    // for value under rage slider
    document.getElementById("x_position").innerHTML = x;
    document.getElementById("y_position").innerHTML = y;
    document.getElementById("blur_value").innerHTML = blur;
}

// copy to clipboard function 
function copyclipboard() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#result');
    cb.writeText(paragraph.innerText).then(() => swal({
                                                 title: "Copied :)",
                                                 text: "You Have Copied Code to Clipboard...Now Paste it to Your CSS...",
                                                 icon: "success",
                                                 button: "Okay",
                                                 }));
  }