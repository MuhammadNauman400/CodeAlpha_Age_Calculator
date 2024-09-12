function calculateAge() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if (!day || !month || !year) {
        document.getElementById("result").textContent = "Please enter a valid day, month, and year.";
        return;
    }

    if (day < 1 || day > 31) {
        document.getElementById("result").textContent = "Please enter a valid day.";
        return;
    }

    if (month < 1 || month > 12) {
        document.getElementById("result").textContent = "Please enter a valid month.";
        return;
    }

    const currentYear = new Date().getFullYear();
    if (year < 1900 || year > currentYear) {
        document.getElementById("result").textContent = "Please enter a valid year.";
        return;
    }


    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    if (!isNaN(age)) {
        document.getElementById("result").textContent = `You are ${age} years old.`;
    } else {
        document.getElementById("result").textContent = "Please enter a valid date.";
    }
}
