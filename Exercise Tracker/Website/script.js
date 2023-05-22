var navLoad = anime({
  targets: "#nav-cont-back",
  translateY: [-300, 0],
});

var runningGuy= anime({
  targets: '#guyRun',
  translateX: [-200, 0],
  duration: 2800
})

var slide1 = anime({
  targets: '#footer',
  translateY: [1000, 0],
  duration: 1600
})

var spinJog = anime({
  targets: '.joggingWomen',
  translateY: [-200, 0],
  scale: [0,2,1],
  rotate: '1turn',
  delay: anime.stagger(100, {from: 'first'})// increase delay by 100ms for each elements.
})


function myFunction() {
  // ...
  var x = document.getElementById("fname").value;
  document.querySelector("#userNameD").innerHTML = "Welcome: " + x;
}



function generateChart() {
  //chart

const labels = [
    'Day 1',
    'Day 2',
    'Day 3',
    'Day 4',
    'Day 5',
    'Day 6',
    'Day 7',
];

var input1 = document.getElementById("inputDay1").value;
var input2 = document.getElementById("inputDay2").value;
var input3 = document.getElementById("inputDay3").value;
var input4 = document.getElementById("inputDay4").value;
var input5 = document.getElementById("inputDay5").value;
var input6 = document.getElementById("inputDay6").value;
var input7 = document.getElementById("inputDay7").value;


var total =
parseFloat(input1) +
parseFloat(input2) +
parseFloat(input3) +
parseFloat(input4) +
parseFloat(input5) +
parseFloat(input6) +
parseFloat(input7);

if (total < 10) {
  document.getElementById("messagePass").innerHTML =
    "Your time does not meet the requirement! Try again.";
  document.getElementById("proceed").style.display = "none";
} else {
  document.getElementById("messagePass").innerHTML =
    "Congratulations! You may access level 2.";
  document.getElementById("proceed").style.display = "initial";
}


const data = {
    labels: labels,
    datasets: [
        {
            // label: 'Total Number of Cases',
            label: "Hours",
            backgroundColor: ['#FF0000'],

            borderColor: '#1AA7EC',
            data: [input1, input2, input3, input4, input5, input6, input7],

        }
        



    ]
};


var chartOption = {
    responsive: true,
    title: {
        display: true,
        text: 'Distance'
    },
};


const config = {
    type: 'line',
    data: data,
    options: chartOption
};
const myChart = new Chart(
    document.getElementById('myChart'),
    config
);
}



$(document).ready(function () {
  
  
  $("#fullpage").fullpage({
    //initialize
    
    //set options
    sectionsColor: ["#55CEFF", "#FFFDD0", "#62BD69"],
    navigation: true,
    navigationPosition: "right",
    navigationTooltips: ["Welcome", "Main Section", "Progress Section"],
    anchors: ["section1", "section2", "section3"],
    //name the anchors for each section

    afterLoad: function (origin, destination, direction) {
      
      if (destination.index == 0) {
        document.getElementById("nav-cont-back").style.display = "none";
        spinJog.play();
        
      }
      if (destination.index == 1) {
        document.getElementById("nav-cont-back").style.display = "initial";
        slide1.play()
        
      }
      if (destination.index == 2) {
        document.getElementById("nav-cont-back").style.display = "initial";
        runningGuy.play();
      }
    },
  });
  // $.fn.fullpage.setMouseWheelScrolling(false);
  // $.fn.fullpage.setAllowScrolling(false);

})


tippy('#whatExTrack', {
  content: ['Exercise Tracker is an online app that helps users keep track of their weekly exercise regime.'],
});

tippy('#whatExTrack', {
  placement: 'bottom-right',
  trigger: 'hover',
  animation: 'perspective-extreme',
  theme: 'translucent',
  interactive: true,
});





//   function myFunction() {
//     // ...
//     var x = String(document.getElementById("fname").value);
//     localStorage.setItem(username, x);
//     let Uname = localStorage.getItem(username);
//     document.getElementById("userNameD").innerHTML = "welcome" + Uname;
//   }
  
// });

// window.onload = function myFunction() {
//   var x = document.getElementById("fname").value;
//   document.querySelector("#demo").innerHTML = x;
// };


// $(document).ready(function(){
//   $("#submitTT").click(function(){
//     var x = String($("#fname").val());
//     localStorage.setItem("username", x);
//     let Uname = localStorage.getItem("username");
//     $("#userNameDe").text("Welcome: " + Uname);
//   });
// });

