
//counter
$({counter: 0}).animate({counter: 25}, {
  //Animate over a period of 2seconds
  duration: 2000,
  //Progress animation at constant pace using linear
  easing:'linear',
  step: function() {    
    //Every step of the animation, update the number value
    //Use ceil to round up to the nearest whole int
    $('.counter-up').text(Math.ceil(this.counter))
  },
  complete: function() {
    //Could add in some extra animations, like a bounc of colour change once the count up is complete.
  }
});



function openNav(id) {
  document.getElementById("mySidebar").style.width = "40%";
  var ele=document.getElementById("car-id");
  ele.value=id;

 document.getElementById(id).style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  var ele=document.getElementById("car-id").value;
  
  document.getElementById(ele).style.marginLeft = "0";

}

// Get the modal
var modal = document.getElementById('mySidebar');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).ready(function() {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});

+


$(document).ready(function() {
  var front = document.getElementsByClassName("front");
  var back = document.getElementsByClassName("back");

  var highest = 0;
  var absoluteSide = "";

  for (var i = 0; i < front.length; i++) {
    if (front[i].offsetHeight > back[i].offsetHeight) {
      if (front[i].offsetHeight > highest) {
        highest = front[i].offsetHeight;
        absoluteSide = ".front";
      }
    } else if (back[i].offsetHeight > highest) {
      highest = back[i].offsetHeight;
      absoluteSide = ".back";
    }
  }
  $(".front").css("height", highest);
  $(".back").css("height", highest);
  $(absoluteSide).css("position", "absolute");
});
