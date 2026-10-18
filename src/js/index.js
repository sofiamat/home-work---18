// READ
export const getAllStudents = () => {
  const url = "http://localhost:3030/students";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.log(err));
};

//CREATE
export const createStudents = (student) => {
  const url = "http://localhost:3030/students";

  return fetch(urk, {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.log(err));
};

// UPDATE
export const updateStudent = (id, student) => {
  const url = `http://localhost:3030/students/${id}`;

  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.log(err));
};

// DELETE
export const deleteStudents = (id) => {
  const url = `http://localhost:3030/students/${id}`;

  return fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .catch((err) => console.log(err));
};
