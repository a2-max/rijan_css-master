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
    var scale = document.getElementById("scale").value;
    var skew = document.getElementById("skew").value;
    var rotate = document.getElementById("rotate").value;
    document.getElementById("result").innerHTML = "transform: translate("+x+"px,"+y+"px) "+"scale("+scale+") "+"skew("+skew+"deg )"+"rotate("+rotate+"deg);";//for final output

    // for value under rage slider
    document.getElementById("x_position").innerHTML = x;
    document.getElementById("y_position").innerHTML = y;
    document.getElementById("scale_value").innerHTML = scale;
    document.getElementById("skew_value").innerHTML = skew;
    document.getElementById("rotate_value").innerHTML = rotate;
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
  