# Student-Company Association 📚🏢

This project allows the association of students to different companies based on geographical distance and the maximum number of students per company. The application is developed in JavaScript and HTML, using `localStorage` to store data related to students and companies.

## Key Features ✨

- **Add Student**: Allows you to enter student details, including name, surname, class, whether they are car/bike owners, if they are accompanied, and the maximum distance they are willing to travel. 🚗🏍️

- **Add Company**: Allows you to add company details, including name, email, phone number, and geographical location (latitude and longitude). 🏢📍

- **Associate Student with Company**: Students can be assigned to a company. The association check verifies:
  - If the company has reached the maximum number of students.
  - If the distance between the student and the company is within the student's max travel distance.

- **View Students**: Displays a list of students with their information, including the company they are associated with. You can filter between associated and unassociated students. 🔍📋

## Project Structure 📂

The project consists of three main parts:

1. **HTML**: The basic structure of the page.
2. **CSS**: Styles to make the interface visually appealing and organized.
3. **JavaScript**: Business logic for adding students and companies, associating students with companies, and managing data with `localStorage`.

## Technologies Used 💻

- **HTML5**: For the structure of the page.
- **CSS3**: For the page design.
- **JavaScript**: For managing logic and saving data.
- **localStorage**: For storing student and company data locally.

## Main Files 📝

- `index.html`: The main page containing the forms to enter data.
- `style.css`: Stylesheet for formatting the interface.
- `script.js`: Logic for handling students, companies, and associations.
