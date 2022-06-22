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
    var top_left = document.getElementById("top_left").value;
    var top_right = document.getElementById("top_right").value;
    var bottom_left = document.getElementById("bottom_left").value;
    var bottom_right = document.getElementById("bottom_right").value;
    // document.getElementById("result").innerHTML = "box-shadow: "+x+"px "+y+"px "+blur+"px "+spread+"px "+shadow+" ;";//for final output

    // for value under rage slider
    document.getElementById("top_left_value").innerHTML = top_left;
    document.getElementById("top_right_value").innerHTML = top_right;
    document.getElementById("bottom_left_value").innerHTML = bottom_left;
    document.getElementById("bottom_right_value").innerHTML = bottom_right;
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