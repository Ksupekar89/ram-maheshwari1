

// var menubutton = document.querySelector('.menubutton');
// console.log(menubutton);

// var showdiv = document.querySelector('.menubutton-div');
// console.log(showdiv);



// document.addEventListener('click', function(event) {
//     if (event.target === wrap || wrap.contains(event.target)) {
//         showdiv.style.display = 'none';
//     }
//   });
  
//   menubutton.addEventListener('click', function(event) {
//     showdiv.style.display = 'flex';
//     event.stopPropagation(); 
//   });



// var menubutton = document.querySelector('.menubutton');
// console.log(menubutton);

// var showdiv = document.querySelector('.menubutton-div');
// console.log(showdiv);

// document.addEventListener('click', function(event) {
//     if (!menubutton.contains(event.target) && !showdiv.contains(event.target)) {
//         showdiv.style.display = 'none';
      
//     }
// });

// menubutton.addEventListener('click', function(event) {
//     // Toggle the display of showdiv
//     if (showdiv.style.display === 'flex') {
//         showdiv.style.display = 'none'; 
    
//     } else {
//         showdiv.style.display = 'flex';
//     }
//     event.stopPropagation();
// });



var menubutton = document.querySelector('.menubutton');
var showdiv = document.querySelector('.menubutton-div');

showdiv.style.display = 'none';
showdiv.style.opacity = '0'; 
showdiv.style.transition = 'opacity 0.5s ease'; 

// Hide the menu when clicking outside of it
document.addEventListener('click', function(event) {
    if (!menubutton.contains(event.target) && !showdiv.contains(event.target)) {
        hideMenu();
    }
});

menubutton.addEventListener('click', function(event) {
    if (showdiv.style.display === 'flex') {
        hideMenu();
    } else {
        showMenu();
    }
    event.stopPropagation(); 
});

function showMenu() {
    showdiv.style.display = 'flex'; 
    setTimeout(() => {
        showdiv.style.opacity = '1'; 
        showdiv.style.visibility = 'visible'; 
    }, 10); 
}

function hideMenu() {
    showdiv.style.opacity = '0';
    setTimeout(() => {
        showdiv.style.visibility = 'hidden'; 
        showdiv.style.display = 'none'; 
    }, 500);
}



