const btn = document.getElementById("bar_id");
const onOff = document.querySelector("#left_side_bar");
const left_side_bar = document.getElementById("right_sidebar_id");
const left_side_bar_v = document.getElementById("left_side_bar");
const signout = document.querySelector(".your_profile_image");
const signout_box = document.querySelector("#sign_out_box");
const pop_id = document.getElementById("pop_id");
const close_sign = document.getElementById("close_sign");

setTimeout(adShow, 3000);

function adShow() {
  pop_id.classList.add("vVisible");
}

close_sign.addEventListener("click", function(){
    pop_id.classList.add("unVisible");
});



btn.addEventListener("click", function () {
  onOff.classList.toggle("onOff");
  left_side_bar.classList.toggle("new_width");
  btn.classList.toggle("active_button");
  left_side_bar_v.classList.toggle("with_auto");
});

//   sign out
signout.addEventListener("click", function () {
  signout_box.classList.toggle("offOn");
});

document.querySelector(".header_part").addEventListener("click", function () {
  this.classList.toggle("bg_red");
});

document.addEventListener("keyup", function () {
  let text_vl = document.getElementById("text_vl").value;
  document.getElementById("result").innerHTML = text_vl;
});
