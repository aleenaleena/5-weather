// ========================================
// Toggle Class
// ========================================
// This function will toggle a given class
// on the CSS selector of your choosing.
//
// PARAMETERS:
// selector: the CSS selector to target
// className: the class to toggle
//
// In practice, your JavaScript might look
// like this:
// toggleClass('.myDiv', 'active')

function toggleClass (selector, className) {
  // Find all of the elements
  const elements = document.querySelectorAll(selector)

  // Attach an event listener to each element
  elements.forEach(function (el) {
    el.addEventListener('click', function () {
      this.classList.toggle(className)
    })
  })
}
