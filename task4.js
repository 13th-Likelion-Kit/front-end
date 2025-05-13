let count = 1;

const hello = () => {
  let hello_str = document.getElementById("hello");
  count++ 
  if (count % 2 == 0) {
    hello_str.innerHTML = "<div>과제 끗~!<div/>";
  } else {
    hello_str.innerHTML = "<div>안녕!<div/>";
  }
};
