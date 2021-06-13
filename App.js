const sidebarBtn = document.querySelector('#show');
const sidebar = document.querySelector('.aside');

sidebarBtn.addEventListener('click', () =>{
    sidebar.classList.toggle('show-sidebar');
});

AOS.init();


var i=0,text;
text = "Coder`s World";

var typeText = document.querySelector(".typeText");
    var textToBeTypedArr = ["Sidhu MooseWala", "5911", "Legend", "G.O.A.T"];
    var index = 0, isAdding = true, textToBeTypedIndex = 0
    typeText.style.color = 'yellow';
    function playAnim() {
      setTimeout(function () {
        // set the text of typeText to a substring of the text to be typed using index.
        typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
        if (isAdding) {
          // adding text
          if (index > textToBeTypedArr[textToBeTypedIndex].length) {
            // no more text to add
            isAdding = false
            //break: wait 2s before playing again
            setTimeout(function () {
              playAnim()
            }, 2000)
            return
          } else {
            // increment index by 1
            index++
          }
        } else {
          // removing text
          if (index === 0) {
            // no more text to remove
            isAdding = true
            //switch to next text in text array
            textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
          } else {
            // decrement index by 1
            index--
          }
        }
        // call itself
        playAnim()
      }, isAdding ? 120 : 60)
    }
    // start animation
    playAnim();

    window.onload=function(){
      document.getElementById("my_audio").play();
      document.getElementById("my_audio").volume = 0.2;
    }