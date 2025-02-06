# Weather Forecast for Italian Municipalities 🌦️🇮🇹

This project allows users to view the weather forecast for Italian municipalities. The application fetches the list of municipalities, lets users select one, and shows the weather forecast with temperature data and weather icons, along with a temperature chart.

## Features ✨

- **Select a Municipality**: Users can choose an Italian municipality from a dropdown list populated dynamically via an API. 🏙️
- **View Weather Forecast**: Displays the weather forecast for the selected municipality, showing date, time, weather description, temperature (°C), and weather icon. 🌡️☁️
- **Temperature Chart**: A line chart that visually represents the temperature trend over the next forecasted hours. 📊
- **Data Caching**: The list of municipalities is cached in the browser's `localStorage` for faster access. ⚡

## Project Structure 📂

1. **HTML**: The main structure of the page, including a dropdown to select a municipality, a button to fetch the forecast, and a container to display results. 🗂️
2. **CSS**: Stylesheet for the layout and design of the app. 🎨
3. **JavaScript**: Logic for interacting with the OpenWeather API, populating the municipality dropdown, displaying weather data in a table, and generating the temperature chart. 📜

## Technologies Used 💻

- **HTML5**: For the structure of the page.
- **CSS3**: For styling the page and the elements.
- **JavaScript**: To fetch and display weather data, and create the temperature chart.
- **OpenWeather API**: For fetching weather forecasts. 🌍
- **Chart.js**: For displaying the temperature data in a line chart. 📈
- **localStorage**: For caching the list of municipalities to improve performance. 🔒

## Main Files 📝

- `index.html`: The main HTML page containing the structure of the app.
- `style.css`: The CSS file for styling the app.
- `script.js`: JavaScript logic for fetching weather data and rendering the table and chart.
