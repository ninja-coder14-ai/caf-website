# caf-website

# ☕ Daily Brew Cafe

Daily Brew Cafe is a responsive and interactive cafe website built using HTML5, CSS3, and JavaScript. It provides a simple online cafe experience where users can explore the menu, calculate their order total, switch between light and dark themes, and submit feedback.

This project was developed as a practical assignment to demonstrate JavaScript DOM manipulation, event handling, form validation, and interactive webpage functionality.

## ✨ Features

The website includes the following interactive features:

### 1. Interactive Form Handling & Validation
- Uses the `submit` event listener.
- Prevents the page from refreshing using `e.preventDefault()`.
- Reads the user's name and email.
- Displays a personalized confirmation message.
- Checks that both fields are filled before submission.

### 2. Table Row Highlighting
- Uses `mouseover` and `mouseout` events.
- Highlights menu rows when the mouse moves over them.
- Restores the original appearance when the mouse leaves.

### 3. Light/Dark Mode Switcher
- Includes a theme toggle button.
- Uses `classList.toggle()` to switch between light and dark themes.
- Changes the webpage's background and text colors.

### 4. Interactive Order Total Calculator
- Provides checkboxes next to menu items.
- Uses the `change` event to detect selections.
- Calculates the total price dynamically.
- Updates the order total whenever an item is selected or unselected.

### 5. Age Verification & Discount
- Accepts the user's birth year.
- Uses `parseInt()` to convert the input string into an integer.
- Calculates the user's approximate age.
- Displays a student-age discount message for users aged 25 or younger and a senior discount message for users aged 60 or older.

### 6. Read More / Read Less
- Displays an additional paragraph in the About Us section.
- Uses `classList.toggle()` to show or hide the extra content.
- Changes the button text between "Read More" and "Read Less".

### 7. Live Category Filter
- Provides three filter buttons:
  - All
  - Drinks
  - Pastries
- Uses JavaScript to display only the selected category.
- Hides non-matching menu rows using `style.display`.

### 8. Dynamic Opening Status
- Uses `new Date().getHours()` to get the current hour.
- Displays "We are Open!" between 8 AM and 8 PM.
- Displays "Closed - Open at 8 AM" outside those hours.

### 9. Live Character Counter
- Includes a special requests textarea with a 100-character limit.
- Uses the `input` event listener.
- Displays the number of remaining characters as the user types.

## 🛠️ Technologies Used

- **HTML5:** Webpage structure and semantic elements.
- **CSS3:** Styling, layout, responsive design, and themes.
- **JavaScript:** DOM manipulation, event listeners, validation, calculations, and interactive functionality.

## 📁 Project Structure

```text
Daily-Brew-Cafe/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 🚀 How to Run the Project

1. Download or clone this repository.
2. Open the project folder.
3. Make sure all three files (`index.html`, `styles.css`, and `script.js`) are in the same directory.
4. Open `index.html` in your preferred web browser.
5. Explore the menu and test the interactive features.

No additional software or dependencies are required.

## 🧪 Testing the Features

You can test the website by performing these actions:

- Enter your name and email and submit the feedback form.
- Hover over different menu table rows.
- Click the theme switcher.
- Select multiple menu items and observe the total price.
- Enter a birth year to check the discount message.
- Click Read More and Read Less.
- Filter the menu by Drinks and Pastries.
- Check the opening status displayed under the main heading.
- Type in the special requests box and observe the character counter.

## 📱 Responsive Design

The website includes CSS media queries to adjust its layout for smaller screens, including mobile devices and tablets.

## ⚠️ Project Limitations

- The feedback form is front-end only and does not store or send submitted information.
- The age-based discount is an example and does not verify actual student eligibility.
- Menu prices and opening hours are sample values.
- The website requires an internet connection to load its externally hosted cafe image.

## 🎯 Learning Objectives

Through this project, the following concepts were practiced:

- HTML semantic elements and webpage structure.
- CSS styling and responsive layouts.
- JavaScript DOM selection and manipulation.
- Event handling using `addEventListener()`.
- Form validation and `preventDefault()`.
- Type conversion using `parseInt()`.
- Conditional statements and calculations.
- Dynamic content updates using `textContent`.
- CSS class manipulation using `classList`.
- Working with JavaScript Date objects.

## 👩‍💻 Author

Developed as a Computer Science practical assignment.

---

**Daily Brew Cafe — Fresh Coffee, Fresh Moments! ☕**
