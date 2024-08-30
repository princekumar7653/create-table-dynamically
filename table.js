  // document.addEventListener('DOMContentLoaded', function () {
//     const table = document.getElementById('employeeTable');
//     const addButton = document.getElementById('addButton');
//     const popup = document.getElementById('popup');
//     // const saveButton = document.getElementById('saveButton');
//     const form = document.getElementById('employeeForm');
//     const closeButton = document.getElementById('closeButton');

//     addButton.addEventListener('click', () => {
//         openPopup();
//     });

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         saveEmployee();
//     });

//     closeButton.addEventListener('click', () => {
//         popup.style.display = 'none';
//     });

//     function openPopup() {
//         clearFields();
//         popup.style.display = 'block';
//     }

//     function saveEmployee() {
//         const firstName = document.getElementById('firstName').value;
//         const lastName = document.getElementById('lastName').value;
//         const dob = document.getElementById('dob').value;
//         const qualify = document.getElementById('qualify').value;
//         const status = document.getElementById('status').value;

//         if (firstName.trim() === '' || lastName.trim() === '' || dob.trim() === '' || qualify.trim() === '' || status.trim() === '') {
//             alert('Please fill in all fields');
//             return;
//         }

//         addEmployee(firstName, lastName, dob, qualify, status);
//         popup.style.display = 'none';
//     }

//     function addEmployee(firstName, lastName, dob, qualify, status) {
//         const newRow = table.insertRow();
//         const cell1 = newRow.insertCell(0);
//         const cell2 = newRow.insertCell(1);
//         const cell3 = newRow.insertCell(2);
//         const cell4 = newRow.insertCell(3);
//         const cell5 = newRow.insertCell(4);
//         const cell6 = newRow.insertCell(5);
//         const cell7 = newRow.insertCell(6);

//         cell1.textContent = table.rows.length - 1;
//         cell2.textContent = firstName;
//         cell3.textContent = lastName;
//         cell4.textContent = dob;
//         cell5.textContent = qualify;
//         cell6.appendChild(createStatusCircle(status));

//         const actionEdit = document.createElement('button');
//         actionEdit.className = 'action-button';
//         actionEdit.innerHTML = '<i class="fas fa-edit"></i>';
//         actionEdit.addEventListener('click', () => editEmployee(newRow.rowIndex - 1));

//         const actionDelete = document.createElement('button');
//         actionDelete.className = 'delete-button';
//         actionDelete.innerHTML = '<i class="fas fa-trash"></i>';
//         actionDelete.addEventListener('click', () => deleteEmployee(newRow.rowIndex - 1));


//         cell7.appendChild(actionEdit);
//         cell7.appendChild(actionDelete);
//     }

//     function editEmployee(index) {
//         openPopup();
//         const row = table.rows[index + 1];
//         document.getElementById('firstName').value = row.cells[1].textContent;
//         document.getElementById('lastName').value = row.cells[2].textContent;
//         document.getElementById('dob').value = row.cells[3].textContent;
//         document.getElementById('qualify').value = row.cells[4].textContent;
//         row.remove();
//     }

//     function deleteEmployee(index) {
//         table.deleteRow(index + 1);
//     }

//     function clearFields() {
//         document.getElementById('firstName').value = '';
//         document.getElementById('lastName').value = '';
//         document.getElementById('dob').value = '';
//         document.getElementById('qualify').value = '';
//         document.getElementById('status').value = 'active';
//     }

//     function createStatusCircle(status) {
//         const circle = document.createElement('span');
//         circle.classList.add('status-circle');
//         if (status === 'active') {
//             circle.classList.add('active');
//         } else if (status === 'inactive') {
//             circle.classList.add('inactive');
//         }
//         return circle;
//     }
// });

//////////////////////////////////////////

// document.addEventListener('DOMContentLoaded', function () {
//     const table = document.getElementById('employeeTable');
//     const addButton = document.getElementById('addButton');
//     const popup = document.getElementById('popup');
//     const form = document.getElementById('employeeForm');
//     const closeButton = document.getElementById('closeButton');

//     let currentEditIndex = -1;

//     addButton.addEventListener('click', () => {
//         openPopup();
//     });

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         saveEmployee();
//     });

//     closeButton.addEventListener('click', () => {
//         popup.style.display = 'none';
//         currentEditIndex = -1;
//     });

//     function openPopup() {
//         clearFields();
//         popup.style.display = 'block';
//     }

//     function saveEmployee() {
//         const firstName = document.getElementById('firstName').value;
//         const lastName = document.getElementById('lastName').value;
//         const dob = document.getElementById('dob').value;
//         const qualify = document.getElementById('qualify').value;
//         const status = document.getElementById('status').value;

//         if (firstName.trim() === '' || lastName.trim() === '' || dob.trim() === '' || qualify.trim() === '' || status.trim() === '') {
//             alert('Please fill in all fields');
//             return;
//         }

//         if (currentEditIndex === -1) {
//             addEmployee(firstName, lastName, dob, qualify, status);
//         } else {
//             updateEmployee(currentEditIndex, firstName, lastName, dob, qualify, status);
//         }

//         popup.style.display = 'none';
//         currentEditIndex = -1;
//     }

//     function addEmployee(firstName, lastName, dob, qualify, status) {
//         const newRow = table.insertRow();
//         const cell1 = newRow.insertCell(0);
//         const cell2 = newRow.insertCell(1);
//         const cell3 = newRow.insertCell(2);
//         const cell4 = newRow.insertCell(3);
//         const cell5 = newRow.insertCell(4);
//         const cell6 = newRow.insertCell(5);
//         const cell7 = newRow.insertCell(6);

//         cell1.textContent = table.rows.length - 1; // Auto-generate Employee ID
//         cell2.textContent = firstName;
//         cell3.textContent = lastName;
//         cell4.textContent = dob;
//         cell5.textContent = qualify;
//         cell6.appendChild(createStatusCircle(status));

//         const actionEdit = document.createElement('button');
//         actionEdit.className = 'action-button';
//         actionEdit.innerHTML = '<i class="fas fa-edit"></i>';
//         actionEdit.addEventListener('click', () => {
//             currentEditIndex = newRow.rowIndex - 1;
//             editEmployee(currentEditIndex);
//         });

//         const actionDelete = document.createElement('button');
//         actionDelete.className = 'delete-button';
//         actionDelete.innerHTML = '<i class="fas fa-trash"></i>';
//         actionDelete.addEventListener('click', () => deleteEmployee(newRow.rowIndex - 1));

//         cell7.appendChild(actionEdit);
//         cell7.appendChild(actionDelete);
//     }

//     function editEmployee(index) {
//         const row = table.rows[index + 1];
//         document.getElementById('firstName').value = row.cells[1].textContent;
//         document.getElementById('lastName').value = row.cells[2].textContent;
//         document.getElementById('dob').value = row.cells[3].textContent;
//         document.getElementById('qualify').value = row.cells[4].textContent;
//         document.getElementById('status').value = row.cells[5].querySelector('span').classList.contains('active') ? 'active' : 'inactive';

//         popup.style.display = 'block';
//     }

//     function updateEmployee(index, firstName, lastName, dob, qualify, status) {
//         const row = table.rows[index + 1];
//         row.cells[1].textContent = firstName;
//         row.cells[2].textContent = lastName;
//         row.cells[3].textContent = dob;
//         row.cells[4].textContent = qualify;
//         row.cells[5].innerHTML = ''; // Clear the current status circle
//         row.cells[5].appendChild(createStatusCircle(status));
//     }

//     function deleteEmployee(index) {
//         table.deleteRow(index + 1);
//         currentEditIndex = -1;
//     }

//     function clearFields() {
//         document.getElementById('firstName').value = '';
//         document.getElementById('lastName').value = '';
//         document.getElementById('dob').value = '';
//         document.getElementById('qualify').value = '';
//         document.getElementById('status').value = 'active';
//     }

//     function createStatusCircle(status) {
//         const circle = document.createElement('span');
//         circle.classList.add('status-circle');
//         if (status === 'active') {
//             circle.classList.add('active');
//         } else if (status === 'inactive') {
//             circle.classList.add('inactive');
//         }
//         return circle;
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById('employeeTable');
    const addButton = document.getElementById('addButton');
    const popup = document.getElementById('popup');
    const form = document.getElementById('employeeForm');
    const closeButton = document.getElementById('closeButton');

    let currentEditIndex = -1;

    addButton.addEventListener('click', () => {
        openPopup();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        saveEmployee();
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
        currentEditIndex = -1;
    });

    function openPopup() {
        clearFields();
        popup.style.display = 'block';
    }

    function saveEmployee() {
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const dob = document.getElementById('dob').value;
        const qualify = document.getElementById('qualify').value;
        const status = document.getElementById('status').value;

        if (firstName.trim() === '' || lastName.trim() === '' || dob.trim() === '' || qualify.trim() === '' || status.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        if (currentEditIndex === -1) {
            addEmployee(firstName, lastName, dob, qualify, status);
        } else {
            updateEmployee(currentEditIndex, firstName, lastName, dob, qualify, status);
        }

        popup.style.display = 'none';
        currentEditIndex = -1;
    }

    function addEmployee(firstName, lastName, dob, qualify, status) {
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);

        cell1.textContent = table.rows.length - 1; // Auto-generate Employee ID
        cell2.textContent = firstName;
        cell3.textContent = lastName;
        cell4.textContent = dob;
        cell5.textContent = qualify;
        cell6.appendChild(createStatusCircle(status));

        const actionEdit = document.createElement('button');
        actionEdit.className = 'action-button';
        actionEdit.innerHTML = '<i class="fas fa-edit"></i>';
        actionEdit.addEventListener('click', () => {
            currentEditIndex = newRow.rowIndex - 1;
            editEmployee(currentEditIndex);
        });

        const actionDelete = document.createElement('button');
        actionDelete.className = 'delete-button';
        actionDelete.innerHTML = '<i class="fas fa-trash"></i>';
        actionDelete.addEventListener('click', () => deleteEmployee(newRow.rowIndex - 1));

        cell7.appendChild(actionEdit);
        cell7.appendChild(actionDelete);
    }

    function editEmployee(index) {
        const row = table.rows[index + 1];
        document.getElementById('firstName').value = row.cells[1].textContent;
        document.getElementById('lastName').value = row.cells[2].textContent;
        document.getElementById('dob').value = row.cells[3].textContent;
        document.getElementById('qualify').value = row.cells[4].textContent;
        document.getElementById('status').value = row.cells[5].querySelector('span').classList.contains('active') ? 'active' : 'inactive';

        popup.style.display = 'block';
    }

    function updateEmployee(index, firstName, lastName, dob, qualify, status) {
        const row = table.rows[index + 1];
        row.cells[1].textContent = firstName;
        row.cells[2].textContent = lastName;
        row.cells[3].textContent = dob;
        row.cells[4].textContent = qualify;
        row.cells[5].innerHTML = ''; // Clear the current status circle
        row.cells[5].appendChild(createStatusCircle(status));
    }

    function deleteEmployee(index) {
        table.deleteRow(index + 1);
        renumberEmployeeIDs();
        currentEditIndex = -1;
    }

    function renumberEmployeeIDs() {
        for (let i = 1; i < table.rows.length; i++) {
            table.rows[i].cells[0].textContent = i; // Update the employee ID to be sequential
        }
    }

    function clearFields() {
        document.getElementById('firstName').value = '';
        document.getElementById('lastName').value = '';
        document.getElementById('dob').value = '';
        document.getElementById('qualify').value = '';
        document.getElementById('status').value = 'active';
    }

    function createStatusCircle(status) {
        const circle = document.createElement('span');
        circle.classList.add('status-circle');
        if (status === 'active') {
            circle.classList.add('active');
        } else if (status === 'inactive') {
            circle.classList.add('inactive');
        }
        return circle;
    }
});
