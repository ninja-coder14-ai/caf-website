
// 1. INTERACTIVE FORM HANDLING AND VALIDATION

const form = document.getElementById("feedback-form");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("form-message");

    if (username !== "" && email !== "") {

        message.textContent =
            "Thank you for visiting, " + username +
            "! We will contact you at " + email + ".";

    } else {

        message.textContent = "Please fill in your name and email.";

    }

});


// 2. TABLE ROW HIGHLIGHTING

const rows = document.querySelectorAll("#menu-items tr");

rows.forEach(function(row) {

    row.addEventListener("mouseover", function() {
        row.style.backgroundColor = "#f5d6b8";
    });

    row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
    });

});


// 3. LIGHT AND DARK MODE SWITCHER

const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

});


// 4. INTERACTIVE ORDER TOTAL CALCULATOR

const checkboxes = document.querySelectorAll(".menu-checkbox");
const totalDisplay = document.getElementById("total");

function calculateTotal() {

    let total = 0;

    checkboxes.forEach(function(checkbox) {

        if (checkbox.checked) {
            total += Number(checkbox.value);
        }

    });

    totalDisplay.textContent = "Total: $" + total;

}

checkboxes.forEach(function(checkbox) {

    checkbox.addEventListener("change", calculateTotal);

});


// 5. TYPE CONVERSION AND AGE DISCOUNT VERIFICATION

const birthYearInput = document.getElementById("birth-year");
const discountMessage = document.getElementById("discount-message");

birthYearInput.addEventListener("change", function() {

    const birthYear = parseInt(birthYearInput.value);
    const currentYear = new Date().getFullYear();

    if (
        birthYearInput.value.trim() === "" ||
        !Number.isInteger(birthYear) ||
        birthYear < 1900 ||
        birthYear > currentYear
    ) {

        discountMessage.textContent = "Please enter a valid birth year.";
        discountMessage.style.color = "red";
        return;

    }

    const age = currentYear - birthYear;

    if (age <= 25) {

        discountMessage.textContent =
            "You qualify for the age-based student discount!";

        discountMessage.style.color = "green";

    } else if (age >= 60) {

        discountMessage.textContent =
            "You qualify for the senior discount!";

        discountMessage.style.color = "green";

    } else {

        discountMessage.textContent =
            "Sorry, no age-based discount is available.";

        discountMessage.style.color = "red";

    }

});


// 6. READ MORE AND READ LESS TOGGLE

const readMoreButton = document.getElementById("read-more-button");
const extraStory = document.getElementById("extra-story");

readMoreButton.addEventListener("click", function() {

    extraStory.classList.toggle("hidden");

    if (extraStory.classList.contains("hidden")) {

        readMoreButton.textContent = "Read More";

    } else {

        readMoreButton.textContent = "Read Less";

    }

});


// 7. LIVE CATEGORY FILTER

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.category;

        rows.forEach(function(row) {

            const rowCategory = row.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === rowCategory
            ) {

                row.style.display = "";

            } else {

                row.style.display = "none";

            }

        });

        // Highlight the currently selected filter button
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// 8. DYNAMIC OPENING STATUS

const openingStatus = document.getElementById("opening-status");

const currentHour = new Date().getHours();

if (currentHour >= 8 && currentHour < 20) {

    openingStatus.textContent = "We are Open!";
    openingStatus.style.color = "green";

} else {

    openingStatus.textContent = "Closed - Open at 8 AM";
    openingStatus.style.color = "red";

}


// 9. LIVE CHARACTER COUNTER

const specialNotes = document.getElementById("special-notes");
const characterCount = document.getElementById("character-count");

specialNotes.addEventListener("input", function() {

    const remaining = 100 - specialNotes.value.length;

    characterCount.textContent =
        remaining + " characters remaining";

});
