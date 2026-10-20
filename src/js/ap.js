import {
  getAllStudents,
  createStudents,
  updateStudent,
  deleteStudents,
} from "./index.js";

const container = document.querySelector("#students-container");
const btnGetStudents = document.querySelector("#get-students-btn");
const form = document.querySelector("#add-student-form");

const createMarkup = (students) => {
  return `<ul data-student-list>${students
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

// function getStudents() {
//   getAllStudents()
//     .then((students) => renderStudents(students))
//     .catch((err) => console.log(err));
// }

async function getStudents() {
  try {
    const students = await getAllStudents();
    renderStudents(students);
  } catch (err) {
    console.log(err);
  }
}

btnGetStudents.addEventListener("click", getStudents);

// Функція для відображення студентів у таблиці

// function renderStudents(students) {
//   const studentsMurkup = createMarkup(students);
//   container.innerHTML = studentsMurkup;
// }

async function renderStudents(students) {
  students = await getAllStudents();
  const studentsMurkup = createMarkup(students);
  container.innerHTML = studentsMurkup;
}

// Функція для додавання нового студента

async function addStudent(e) {
  e.preventDefault();

  const newStudent = {
    name: form.name.value,
    age: Number(form.age.value),
    course: form.course.value,
    skills: form.skills.value,
    email: form.email.value,
    isEnrolled: form.isEnrolled.checked,
  };

  try {
    const newStudentFormServer = await createStudents(newStudent);
    const newStudentFormServerMarkup = `<li>
        <article data-id="${newStudentFormServer.id}">
        <h3>${newStudentFormServer.name}</h3>
        <p>${newStudentFormServer.age}</p>
        <p>${newStudentFormServer.course}</p>
        <p>${newStudentFormServer.skills}</p>
        <p>${newStudentFormServer.email}</p>
        <p>${newStudentFormServer.isEnrolled}</p>
                <div>
      <button data-action="edit">Edit</button>
    <button data-action="delete">Delete</button>
    </div>
        </article>
      

        </li>`;
    container
      .querySelector("[data-student-list]")
      .insertAdjacentHTML("beforeend", newStudentFormServerMarkup);
    form.reset();
  } catch (err) {
    console.log(err);
  }
}

form.addEventListener("submit", addStudent);

// Функція для оновлення студента

function updateStudent(id) {
  // твій код
}

// Функція для видалення студента

// function deleteStudent(id) {
//   deleteStudents(id)
//     .then((students) => getStudents(students))
//     .catch((err) => console.log(err));
//   console.log(id);
// }

async function deleteStudent(id) {
  try {
    await deleteStudents(id);
    await getStudents(students);
  } catch (err) {
    console.log(err);
  }
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
