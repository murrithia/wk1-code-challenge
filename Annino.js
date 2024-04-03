// Continuously prompts the user to enter a number between 0 and 100 until they cancel.
while (true) {
    // User input for a number.
    let input = prompt("Enter a number between 0 and 100:")

    // Exit loop if user cancels
    if (input === null) {
        break;
    }

    // Convert input to a number 
    let marks = parseFloat(input)
    
    // Check if the input is within  valid range.
    if (marks >= 0 && marks <= 100) {  
        let grade

        // Determine the grade based marks
        if (marks > 79) {
            grade = "A"
        } else if (marks >= 60 && marks <= 79) {
            grade = "B"
        } else if (marks >= 50 && marks <= 59) {
            grade = "C"
        } else if (marks >= 40 && marks <= 49) {
            grade = "D"
        } else {
            grade = "E"
        }
        
        // Display grade to user
        alert(Grade: ${grade})
    } else {
        // Display error for invalid input
        alert("Invalid input! Please enter a number between 0 and 100.")
    }    
}