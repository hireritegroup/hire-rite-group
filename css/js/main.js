<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Employer Dashboard</title>

  <!-- Link to your CSS -->
  <link rel="stylesheet" href="css/styles.css">
</head>
// Simple FAQ toggle
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item p:first-child");

  faqItems.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});
