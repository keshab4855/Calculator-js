// selecting

let result = document.querySelector("#inputext");
let calculate = (number) => {
  // initially result.value is 0 so add the number to display
  result.value = result.value + number;
};

let Result = () => {
  //try method lets you test a block of code for errors and catch lets you handle the error
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("enter the valid input");
  }
};

function clr() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
