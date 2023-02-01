const students = [
    {
      id: 1,
      name: "Jasmine",
      imageUrl: "",
      house: "Gryffindo"
    },  
    {
      id: 2,
      name: "Amelia",
      imageUrl: "",
      house: "Hufflepuff"  
    },
    {
      id: 3,
      name: "David",
      imageUrl: "",
      house: "Ravenclaw"  
    },
    {
      id: 4,
      name: "Nathan",
      imageUrl: "",
      house: "Slytherin"  
    },
    {
      id: 5,
      name: "Charlotte",
      imageUrl: "",
      house: "Ravenclaw"  
    },
    {
      id: 6,
      name: "Androw",
      imageUrl: "",
      house: "Gryffindo"
    },
    {
      id: 7,
      name: "Henry",
      imageUrl: "",
      house: "Ravenclaw"  
    },
    {
      id: 8,
      name: "Lio",
      imageUrl: "",
      house: "Slytherin" 
    },
    {
      id: 9,
      name: "Theodore",
      imageUrl: "",
      house: "Hufflepuff"  
    },
    {
      id: 10,
      name: "Sophia",
      imageUrl: "",
      house: "Gryffindo"
    },  
    {
      id: 11,
      name: "Ava",
      imageUrl: "",
      house: "Hufflepuff"  
    },
    {
      id: 12,
      name: "Jackson",
      imageUrl: "",
      house: "Ravenclaw"  
    },
    {
      id: 13,
      name: "Elijah",
      imageUrl: "",
      house: "Slytherin"  
    },
    {
      id: 14,
      name: "William",
      imageUrl: "",
      house: "Hufflepuff"  
    },
    {
      id: 15,
      name: "Lucas",
      imageUrl: "",
      house: "Slytherin"  
    },
    {
      id: 16,
      name: "Liam",
      imageUrl: "",
      house: "Slytherin"  
    },
    {
      id: 17,
      name: "Olivia",
      imageUrl: "",
      house: "Slytherin"  
    },
    
  ];

  //utility functions//
  const renderToDom = (divId, textToRender) => {
    const selectedElement = document.querySelector(divId);
    selectedElement.innerHTML = textToRender;
  };


  //cards on dom//
  const cardsOnDom = (students) => {
    let domString = "";
    for (const student of students) {
      domString += `<div class="card mb-3 align-items-center" style="width: 18rem;">
      <img src="${student.imageUrl}" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">${student.name}</p>
        <p class="card-text">${student.house}</p>
        <button class="btn btn-secondary" id="delete--${student.id}">EXPEL</button>
      </div>
    </div>`;
    }
    renderToDom("#app", domString);
  };

  // function to filter students with house
const filter = (students, houseString) => {
    const houseArray = [];
  
    for (const student of students) {
      if (student.house === houseString) {
        houseArray.push(student);
      }
    }
  
    return houseArray;
  };

const allButton = document.querySelector("#btn-all");
const greenButton = document.querySelector("#btn-green");
const blueButton = document.querySelector("#btn-blue");
const redButton = document.querySelector("#btn-red");
const yellowButton = document.querySelector("#btn-yellow");

allButton.addEventListener("click",() => {
  cardsOnDom(students);
});

greenButton.addEventListener("click", () => {
  const greenButton = filter(students, "Ravenclaw");
  cardsOnDom(greenButton);
});

blueButton.addEventListener("click", () => {
  const blueButton = filter(students, "Ravenclaw");
  cardsOnDom(blueButton);
});

redButton.addEventListener("click", () => {
  const redButton = filter(students, "Gryffindo");
  cardsOnDom(redButton);
});

yellowButton.addEventListener("click", () => {
  const yellowButton = filter(students, "Hufflepuff");
  cardsOnDom(yellowButton);
});

const createMember = (event) => {
    event.preventDefault();
    // grab the values from form
    const name = document.querySelector("#name");
    console.log(name);
    console.log(name.value);
  
    const newMember = {
      name: name.value,
      image: image.value,
      house: house.value,
    };
    console.log("new member", newMember);
  
    // push to team array
    pets.push(newMember);
  
    // rerender with new team
    cardsOnDom(students);
  };

const sortButton = document.querySelector("#Sortbtn");

// ****** DELETE ****** //
// ******************** //

// Here we will be using event bubbling
// 1. Target the app div

const appDiv = document.querySelector("#app");

// 2. Add an event listener to capture clicks

appDiv.addEventListener("click", (event) => {
  // 3. check e.target.id includes "delete"
  if (event.target.id.includes("delete")) {
    // 4. add logic to remove from array
    const [, memberId] = event.target.id.split("--");
    // what object needs to be removed and I know my memberId
    //Find where the object we want to delete is in the array
    const indexOfMember = students.findIndex(
      (object) => object.id === Number(memberId)
    );

    // Now we can use a splice to delete the object at the index
    students.splice(indexOfMember, 1);
  }
  // 5. Repaint the DOM with the updated array
  cardsOnDom(students);
});

const startApp = () => {
    cardsOnDom(students);
    // events(); // ALWAYS LAST
  };
  
  startApp();
  