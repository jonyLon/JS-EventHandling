let getRandom = () => {
  return Math.floor(Math.random() * 100)
}

var bgen = document.querySelector("#generate")
var numb = document.querySelector("#numb")
bgen.addEventListener('click', () => {
  numb.textContent = getRandom();
})

var allspace = document.querySelector("#allspace")
var coord = document.querySelector("#coord")
allspace.addEventListener("mousemove", (e) => {
  coord.textContent = `X = ${e.clientX}, Y = ${e.clientY}`
})

var togbtn = document.querySelector("#toggle")
var p = document.querySelector("#text")
togbtn.addEventListener('click', () => {
  if (p.style.display === 'none') {
    p.style.display = "block"
  } else {
    p.style.display = "none"
  }
})

togbtn.addEventListener('click', () => {
  if (p.style.display === 'none') {
    p.style.display = "block"
  } else {
    p.style.display = "none"
  }
})

var htmlbtn = document.querySelector("#bhtml")
var cssbtn = document.querySelector("#bcss")
var jsbtn = document.querySelector("#bjs")

var arrbtn = [htmlbtn, cssbtn, jsbtn]

var htmltxt = document.querySelector("#html-txt")
var csstxt = document.querySelector("#css-txt")
var jstxt = document.querySelector("#js-txt")

var arr = [htmltxt, csstxt, jstxt]

arr.forEach((item) => item.style.display = "none")

htmltxt.style.display = "block"



// arrbtn[0].addEventListener("click", () => {
//   arr[0].style.display = "block"
//   arr[1].style.display = "none"
//   arr[2].style.display = "none"
// })

// arrbtn[1].addEventListener("click", () => {
//   arr[1].style.display = "block"
//   arr[0].style.display = "none"
//   arr[2].style.display = "none"
// })

// arrbtn[2].addEventListener("click", () => {
//   arr[2].style.display = "block"
//   arr[0].style.display = "none"
//   arr[1].style.display = "none"
// })


function toggleDisplay(index) {
  arr.forEach((el, i) => {
    el.style.display = i === index ? 'block' : 'none';
  });
}

arrbtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    toggleDisplay(index);
  });
});


var posts = document.querySelectorAll(".post")
var headbtns = document.querySelectorAll(".headbtn")

headbtns.forEach((item, index) => item.addEventListener("click", () => {
  posts[index].style.display = "none"
}))




var add5 = document.querySelector("#add")
var inner = document.querySelector("#inner")
add5.addEventListener("click", () => {
  let currentWidth = parseInt(inner.style.width) || 0
  if (currentWidth < 100) {
    currentWidth += 5
    inner.style.width = currentWidth + "%"
  }
})



const tds = document.getElementsByTagName("td");
Array.from(tds).forEach(item => {
  item.addEventListener("mouseover", (e) => {
    e.target.style.background = "orange";
  });
  item.addEventListener("mouseout", (e) => {
    e.target.style.background = "none";
  });
});

const pepe = document.querySelector('#frame7>p')
console.log(pepe);
pepe.addEventListener('contextmenu', (e) => {
  e.preventDefault();
})

const liketxt = document.querySelector('#like-num')
const like = document.querySelector('#frame8>section')
console.log(like, liketxt);

like.addEventListener('click', () => {
  let currentAmount = parseInt(liketxt.textContent) || 0;
  currentAmount++;
  liketxt.textContent = currentAmount;
})


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}