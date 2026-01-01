const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector("button");
  const answer = item.querySelector(".answer");
  const plusIcon = item.querySelector(".icon-plus");
  const minusIcon = item.querySelector(".icon-minus");

  answer.classList.add("hidden");

  button.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
  });
});
