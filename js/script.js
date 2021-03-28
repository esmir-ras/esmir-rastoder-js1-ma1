

// Question 1

const cat = {
    complain: "Meow",
    sayHello: function () {
        console.log("My cat says " + this.complain);
    }
};






// Question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// Question 3
var heading = document.querySelector("h3");

heading.style.fontSize = "2em";

// Question 4


// Question 5

var paragraphs = document.querySelectorAll("p");

console.log(paragraphs);

for(var i = 0; i <paragraphs.length; i++) {

    paragraphs[i].style.backgroundColor = "red";
} 

// Question 6 

var resultContainer = document.querySelector(".results");

resultContainer.innerHTML = "<p>New Paragraph</p>"
resultContainer.style.backgroundColor = "yellow";


// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function createList(list) {
    
    for(let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
    
}

// Question 8

function createCats(cats) {
    let html = "";
    for (let i = 0; i < cats.length; i++) {
      let ageProperty = "Age unknown";
  
      if (cats[i].age) {
        ageProperty = cats[i].age;
      }
  
      html += `<div>
      <h5>${cats[i].name}</h5>
      <p>${ageProperty}</p>
      </div>
      `;
    }
  
    return html;
  }
  
  const catsHtml = createCats(cats);
  const catsContainer = document.querySelector(".cat-container");
  catsContainer.innerHTML = catsHtml;

  // Playing

 