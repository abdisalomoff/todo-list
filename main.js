let elForm = document.querySelector(".form");
let elInputName = document.querySelector(".name-input");
let elInputLastName = document.querySelector(".lastname-input");
let elInputAge = document.querySelector(".age-input");
let list = document.getElementById("list");

let todos = JSON.parse(localStorage.getItem('elementPerson')) || [];

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let inputName = elInputName.value.trim();
    let inputLastName = elInputLastName.value.trim();
    let inputAge = Number(elInputAge.value);

    const obj = {
        name: inputName,
        lastname: inputLastName,
        age: inputAge
    }

    if (inputName == "" && inputLastName == "" && inputAge == "") {
        alert("Ma'lumot kiriting!");
    } else if (inputName == "" && inputLastName == "") {
        alert("Ismingiz hamda familiyangzi ham kiriting!");
    } else if (inputName == "" && inputAge == "") {
        alert("Ismingiz hamda yoshingizni ham kiriting!");
    } else if (inputLastName == "" && inputAge == "") {
        alert("Familiyangizni hamda yoshingizni ham kiriting!");
    } else if (inputName == "") {
        alert("Ismingizni ham kiriting!");
    } else if (inputLastName == "") {
        alert("Familiyangizni ham  kiriting!");
    } else if (inputAge == "" && !isNaN(inputAge)) {
        alert("Yoshingizni ham kiritng");
    } else
        todos.push(obj);
    localStorage.setItem('elementPerson', JSON.stringify(todos))

    elForm.reset();
    render(todos)

    // console.log(inputName);
    // console.log(inputLastName);
    // console.log(inputAge);
})



// render***********

function render() {
    list.innerHTML = "";

    todos.forEach((person, index) => {
        let newLi = document.createElement('li')
        newLi.classList.add("my-3", "py-3", "shadow", "list-group-item")
        // newLi.textContent = item;
        list.appendChild(newLi)

        let newRow = document.createElement('div')
        newRow.classList.add("row", "d-flex", "align-items-center");
        newLi.appendChild(newRow);

        let textBox = document.createElement('div');
        textBox.classList.add("col-7");
        newRow.appendChild(textBox);

        let nameTeg = document.createElement('p');
        textBox.classList.add("h4", "m-0");
        textBox.appendChild(nameTeg);
        nameTeg.textContent = `Name: ${person.name}`;

        let lastNameTeg = document.createElement('p');
        textBox.classList.add("h4", "m-0");
        textBox.appendChild(lastNameTeg);
        lastNameTeg.textContent = `Lastname: ${person.lastname}`;

        let ageTeg = document.createElement('p');
        textBox.classList.add("h4", "m-0");
        textBox.appendChild(ageTeg);
        ageTeg.textContent = `Age: ${person.age}`;

        let btnBox = document.createElement('div');
        btnBox.classList.add("col-5");
        newRow.appendChild(btnBox);

        let editBtn = document.createElement('button');
        editBtn.classList.add("btn", "btn-primary", "btn-edit", );
        btnBox.appendChild(editBtn);
        editBtn.textContent = "Edit"

        let deletBtn = document.createElement('button');
        deletBtn.classList.add("btn", "btn-danger", "btn-delet", "ml-4", );
        btnBox.appendChild(deletBtn);
        deletBtn.textContent = "Delet";

        // DELETE BUTTON****
        deletBtn.addEventListener("click", () => {
            todos.splice(index, 1);
            localStorage.setItem('elementPerson', JSON.stringify(todos));
            console.log(deletBtn);
            render(todos);
        })

       
        // EDIT BUTTON****
         // let editBtn = document.querySelector(".btn-edit");
        editBtn.addEventListener('click', () => {
            let newName = prompt("Yangi ismni kiriting: ", person.name);
            let newLastName = prompt("Yangi familiyani kiriting: ", person.lastname);
            let newAge = prompt("Yangi yoshni kiriting: ", person.age);


            person.name = newName;
            person.lastname = newLastName;
            person.age = newAge;

            localStorage.setItem('elementPerson', JSON.stringify(todos))
            render(todos);

            console.log(editBtn);
        })

    });

};

render();

// edit*************