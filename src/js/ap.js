import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudents,
} from "./index.js";

const container = document.querySelector("#students-container");
const btnGetStudents = document.querySelector("#get-students-btn");

const createMarkup = (students) => {
  return `<ul>${students
    .map((student) => {
      return `<li>
        <article data-id="${student.id}">
        <h3>${student.name}</h3>
        <p>${student.age}</p>
        <p>${student.course}</p>
        <p>${student.skills}</p>
        <p>${student.email}</p>
        <p>${student.isEnrolled}</p>
                <div>
      <button data-action="edit">Edit</button>
    <button data-action="delete">Delete</button>
    </div>
        </article>
      

        </li>`;
    })
    .join("")}</ul>`;
};

// Функція для отримання всіх студентів

function getStudents() {
  getAllStudents()
    .then((students) => renderStudents(students))
    .catch((err) => console.log(err));
}

btnGetStudents.addEventListener("click", getStudents);

// Функція для відображення студентів у таблиці

function renderStudents(students) {
  const studentsMurkup = createMarkup(students);
  container.innerHTML = studentsMurkup;
}

// Функція для додавання нового студента

function addStudent(e) {
  // твій код
}

// Функція для оновлення студента

function updateStudent(id) {
  // твій код
}

// Функція для видалення студента

function deleteStudent(id) {
  deleteStudents(id)
    .then((students) => getStudents(students))
    .catch((err) => console.log(err));
  console.log(id);
}

container.addEventListener("click", (e) => {
  const target = e.target;
  if (target.dataset.action === "delete") {
    const studentElem = target.closest("[data-id]");
    if (studentElem) {
      const studentId = studentElem.dataset.id;
      deleteStudent(studentId);
      const studentItem = studentElem.closest("li");
      studentItem.remove();
    }
  }
});
