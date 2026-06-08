// Get elements from the HTML document
const dropdown = document.getElementById('colorSelect'); // Dropdown list
const image = document.getElementById('roseImage'); // Image element

// Add event listener for 'change' event (triggered when selection changes)
dropdown.addEventListener('change', function() {
  // Get the value of the selected option (yellow, red, or pink)
  const selectedColor = dropdown.value;
  
  // Change the source of the image by substituting the selected color before ".jpg"
  image.src = `Rose-${selectedColor}.jpg`;
});
