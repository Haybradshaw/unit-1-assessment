

//------vars---
let count = 0;


//------constants-----
const counter = document.getElementById('counter');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const input = document.getElementById('input');

// //-------event buttons------
plus.addEventListener('click', add);
minus.addEventListener('click', subtract);

//-------functions------
  function add() {
    count += parseInt(input.value);
    render()
  };

   function subtract() {
    count -= parseInt(input.value);
    render()
   };

   function render() {
       counter.innerHTML = count;
   }
