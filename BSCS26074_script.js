// Show welcome pop-up on page load
window.onload = function() {
    alert("Welcome to my website!");
    
    // Set current year in footer automatically
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
};

// Function for products page availability toggle
function checkAvailability(elementId) {
    document.getElementById(elementId).textContent = "Not Available";
}