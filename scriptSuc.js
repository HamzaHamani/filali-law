document
  .getElementById("contact_form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    // Collect the form data
    var formData = new FormData(this);

    // Send the form data via AJAX
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Show success message
          document.getElementById("form_success_message").style.display =
            "block";
          // Optionally, you can reset the form
          document.getElementById("contact_form").reset();
        } else {
          alert("Une erreur s'est produite, veuillez réessayer.");
        }
      })
      .catch((error) => {
        alert("Une erreur s'est produite, veuillez réessayer.");
      });
  });
