document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', inputChanged)
  })
  
  function inputChanged(e) {
    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      e.target.value
    )
  }

// copy to clipboard function starts

// for cursor type auto
function auto() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#auto');
    cb.writeText("cursor: auto;").then(() => "");
  }

// for cursor type pointer
function pointer() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#pointer');
    cb.writeText("cursor: pointer;").then(() => "");
  }
// for cursor type text
function text() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#text');
    cb.writeText("cursor: text;").then(() => "");
  }
// for cursor type progress
function progress() {
     const cb = navigator.clipboard;
     const paragraph = document.querySelector('#progress');
     cb.writeText("cursor: progress;").then(() => "");
  }
// for cursor type wait
function wait() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#wait');
    cb.writeText("cursor: wait;").then(() => "");
 }
// for cursor type initial
function initial() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#initial');
    cb.writeText("cursor: initial;").then(() => "");
 }
// for cursor type zoom_in
function zoom_in() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#zoom_in');
    cb.writeText("cursor: zoom-in;").then(() => "");
 }
// for cursor type zoom_out
function zoom_out() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#zoom_out');
    cb.writeText("cursor: zoom-out;").then(() => "");
 }
// for cursor type grab
function grab() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#grab');
    cb.writeText("cursor: grab;").then(() => "");
 }
// for cursor type grabbing
function grabbing() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#grabbing');
    cb.writeText("cursor: grabbing;").then(() => "");
 }
// for cursor type help
function help() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#help');
    cb.writeText("cursor: help;").then(() => "");
 }
 // for cursor type all_scroll
function all_scroll() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#all_scroll');
    cb.writeText("cursor: all-scroll;").then(() => "");
 }
// for cursor type cell
function cell() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#cell');
    cb.writeText("cursor: cell;").then(() => "");
 }
// for cursor type copy
function copy() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#copy');
    cb.writeText("cursor: copy;").then(() => "");
 }
// for cursor type move
function move() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#move');
    cb.writeText("cursor: move;").then(() => "");
 }
// for cursor type crosshair
function crosshair() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#crosshair');
    cb.writeText("cursor: crosshair;").then(() => "");
 }
// for cursor type none
function none() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#none');
    cb.writeText("cursor: none;").then(() => "");
 }
// for cursor type vertical_text
function vertical_text() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#vertical_text');
    cb.writeText("cursor: vertical-text;").then(() => "");
 }
// for cursor type s_resize
function s_resize() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#s_resize');
    cb.writeText("cursor: s-resize;").then(() => "");
 }
// for cursor type e_resize
function e_resize() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#e_resize');
    cb.writeText("cursor: e-resize;").then(() => "");
 }
// for cursor type w_resize
function w_resize() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#w_resize');
    cb.writeText("cursor: w-resize;").then(() => "");
 }
// for cursor type se_resize
function se_resize() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#se_resize');
    cb.writeText("cursor: se-resize;").then(() => "");
 }
// for cursor type sw_resize
function sw_resize() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#sw_resize');
    cb.writeText("cursor: sw-resize;").then(() => "");
 }
// for cursor type row_resize
function row_resize() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#row_resize');
    cb.writeText("cursor: row-resize;").then(() => "");
 }
// for cursor type col_resize
function col_resize() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#col_resize');
    cb.writeText("cursor: col-resize;").then(() => "");
 }
// for cursor type alias
function alias() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#alias');
    cb.writeText("cursor: alias;").then(() => "");
 }
// for cursor type not_allowed
function not_allowed() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#not_allowed');
    cb.writeText("cursor: not-allowed;").then(() => "");
 }
