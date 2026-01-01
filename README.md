# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./Screenshot.png)

### Links

- Live Site URL: [live site here](https://jeanclaude09-dev.github.io/faq-accordion-main/)

## My process

1. First, the HTML structure for the FAQ items was created.
2. Each FAQ item contained a question, a button, and an answer section.
3. CSS classes were used to the minus button answers by default.
4. In a forEach function(is it a function) JavaScript event listeners were added to detect button clicks.
5. The classList.toggle() method was used to show or hide answers dynamically.

### Built with

- Semantic HTML5 markup
- Tailwind CSS
- JavaScript

### What I learned

```js
Array.ForEach((item) => {});
```

```js
button.addEventListener("click", () => {
  answer.classList.toggle();
});
```

### Continued development

DOM manipulation

### Useful resources

- Google

## Author

- Frontend Mentor - [@jeanclaude09-dev](https://www.frontendmentor.io/profile/jeanclaude09-dev)
- Twitter - [@iamjeanclaude09](https://www.twitter.com/iamjeanclaude09)
- Github - [@jeanclaude09-dev](https://github.com/Jeanclaude09-dev)

## Acknowledgments

Happy New Year y'all!
And especially my 2 friends Alex and [@Parfait](https://github.com/parfaitBashombe) who helped me fix the bugs in my solution (first time with js)
