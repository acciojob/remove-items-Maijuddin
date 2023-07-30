//your JS code here. If required.
window.onload = function() {
  // Get references to the dropdown list and the button
  const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.querySelector('input[type="button"]');

  // Function to handle the removal of the selected color
  function removeColor() {
    const selectedIndex = colorSelect.selectedIndex;
    if (selectedIndex !== -1) {
      colorSelect.remove(selectedIndex);
    }
  }

  // Attach the removeColor function to the button's click event
  removeButton.addEventListener('click', removeColor);
};