// Custom script to close navbar on outside click

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('click', function (event) {
    const navbar = document.getElementById('navbarSupportedContent')
    const toggleButton = document.querySelector('.navbar-toggler')

    // Check if navbar is open and click is outside
    if (
      navbar &&
      navbar.classList.contains('show') &&
      !navbar.contains(event.target) &&
      toggleButton &&
      !toggleButton.contains(event.target)
    ) {
      // Get the Bootstrap Collapse instance and hide it
      const bsCollapse = bootstrap.Collapse.getInstance(navbar)
      if (bsCollapse) {
        bsCollapse.hide()
      }
    }
  })
})
