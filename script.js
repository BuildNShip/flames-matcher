// Function to calculate FLAMES result
function calculateFlames() {
  const name1 = document.getElementById("name1").value.toLowerCase();
  const name2 = document.getElementById("name2").value.toLowerCase();

  // Check if either name is empty and add placeholder if necessary
  if (name1 === "") {
    document
      .getElementById("name1")
      .setAttribute("placeholder", "This field is required");
  } else if (name2 === "") {
    document
      .getElementById("name2")
      .setAttribute("placeholder", "This field is required");
  } else {
    // Create a string of all unique characters in the two names
    let combinedNames = name1 + name2;
    combinedNames = combinedNames.replace(/ /g, ""); // Remove spaces
    combinedNames = Array.from(new Set(combinedNames)).join("");

    // FLAMES calculation
    let flames = "flames";
    let index = 0;

    while (flames.length > 1) {
      index = (index + combinedNames.length - 1) % flames.length;
      flames = flames.slice(0, index) + flames.slice(index + 1);
    }

    const resultDiv = document.getElementById("result");
    console.log(resultDiv);
    resultDiv.textContent = getFlamesMeaning(flames);
    console.log(getFlamesMeaning(flames));
  }

  // Function to get the meaning of the FLAMES result
  function getFlamesMeaning(flames) {
    const meanings = {
      f: "You have good Friendship",
      l: "You guys are in Love",
      a: "Nice Affection",
      m: "Happy Married Life",
      e: "You are Enemies",
      s: "You both are Siblings",
    };

    return meanings[flames];
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Get the button element
  const buttonElement = document.getElementById('submit-button');

  // Add keydown event listener to the document
  document.addEventListener('keydown', function(event) {
      // Check if the pressed key is "Enter"
      if (event.keyCode === 13 || event.key === "Enter") {
          // Prevent default behavior (like submitting a form)
          event.preventDefault();
          
          // Trigger the button click
          buttonElement.click();
      }
  });
});
