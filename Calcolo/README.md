# Compound Interest Calculator

## Description 📊

This is a simple **Compound Interest Calculator** built with **HTML**, **CSS**, and **JavaScript**. It allows users to input their initial capital, interest rate, and time period (in years) to calculate both the **interest** and the **final amount (montante)** accumulated after the specified time with compound interest. This project serves as an educational tool for learning basic financial concepts such as compound interest.

---

## Features 🚀

- **User Input**:
  - Initial Capital (`C`)
  - Interest Rate (`i %`)
  - Time in Years (`t`)
  
- **Outputs**:
  - Compound Interest (`I`)
  - Final Amount (`M`), which is the sum of the initial capital and interest accumulated.

---

## How It Works ⚙️

1. **User Input**: 
   - The user provides the initial capital, interest rate, and time in years via a simple form.
  
2. **Calculation**: 
   - Upon clicking the "Calcola" button, the JavaScript function `Calcola()` is triggered.
   - The function performs the following calculations:
     - **Interest (I)** = `Capital * Interest Rate * Time`
     - **Montante (M)** = `Capital * (1 + Interest Rate) ^ Time`

3. **Results**: 
   - The results are displayed in the form fields for interest and final amount.
   - The user can see both the **interest** and the **final amount** in real-time after the calculation.

---

## Technologies Used 💻

- **HTML**: To structure the form and the input fields.
- **CSS**: For styling and responsive design.
- **JavaScript**: To perform the calculations and dynamically display the results.

---

## How to Use 📝

1. Enter the **initial capital** in the corresponding field.
2. Input the **interest rate** in percentage (e.g., 5 for 5%).
3. Specify the **time period** in years.
4. Click the **"Calcola"** button to calculate the interest and the final amount.
5. The results will be displayed below the form.

---

## Example 🔍

- **Initial Capital**: 1000
- **Interest Rate**: 5%
- **Time**: 3 years

After clicking "Calcola", the output would show:

- **Interest (I)**: 150.00
- **Montante (M)**: 1157.63

---

## Styling 💅

The CSS provides a clean and simple layout:

- **Centered Heading**: The title is centered on the page.
- **Form Layout**: The form elements are arranged in a responsive flexbox layout, ensuring proper alignment.
- **Results Display**: The results are presented in clearly visible boxes for easy reading.

## Contributions 🤝

Feel free to fork this project, submit issues, or propose improvements! All contributions are welcome.
