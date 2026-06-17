document.addEventListener("DOMContentLoaded", function () {

  // FAQ Accordion

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

      document.querySelectorAll(".faq-answer").forEach(ans => {

        if(ans !== answer){
          ans.style.display = "none";
        }

      });

      if(answer.style.display === "block"){
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }

    });

  });

  // Smooth Scroll

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

      e.preventDefault();

      const target = document.querySelector(
        this.getAttribute("href")
      );

      if(target){

        target.scrollIntoView({
          behavior: "smooth"
        });

      }

    });

  });

  // Navbar Shadow

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {

    if(!header) return;

    if(window.scrollY > 50){

      header.style.boxShadow =
      "0 10px 25px rgba(0,0,0,0.15)";

    } else {

      header.style.boxShadow =
      "0 2px 10px rgba(0,0,0,0.05)";

    }

  });

});

console.log("Sahara Dental Care Loaded Successfully");
