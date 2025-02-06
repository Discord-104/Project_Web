# 🎬 Ticket Booking System

This project allows users to book tickets for a movie or event by providing their personal details, choosing their seat, and confirming their booking. The application utilizes local storage to save ticket data.

## 📝 Features

- **User Registration**: Users can input their name, surname, birth date, seat column, and seat number.
- **Data Validation**: Ensures that all fields are correctly filled out before confirming the booking.
- **Local Storage**: Stores the ticket information in the browser's local storage for persistence.
- **Duplicate Checking**: Automatically highlights duplicate bookings (same seat number and column).
- **Modifiable Tickets**: Allows users to modify or delete tickets after submission.
- **Responsive Table**: Displays all bookings in a clean table format.

## 🚀 How to Use

1. **Booking a Ticket**:  
   - Open the page to book tickets.
   - Fill in the required fields: Name, Surname, Date of Birth, Seat Column, Seat Number, and accept the terms and conditions.
   - Click "Confirm" to submit your booking.

2. **View Bookings**:  
   - Navigate to the second page to view all the booked tickets.
   - Duplicates (same seat and column) will be highlighted in red.

3. **Modify or Delete Bookings**:  
   - You can modify or delete a booking by clicking the "Edit" button and then selecting "Cancel" for any ticket.

## 🛠️ Technologies Used

- **HTML** for structure.
- **CSS** for styling.
- **JavaScript** for functionality and local storage operations.

## 📂 File Structure

```
├── css/
│   └── style.css
├── js/
│   ├── Biglietto.js
│   ├── Comune.js
│   ├── Index.js
│   └── Seconda.js
├── index.html
└── seconda.html
```

## 💬 Contact

For any questions or feedback, feel free to open an issue or contact me directly.

---

Enjoy booking your tickets! 🎟️✨
