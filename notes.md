JavaScript Interview Questions and Answers
===========================
Questions
===========================
- What is a potential pitfall with using `typeof bar === "object"` to determine if `bar` is an object? How can this pitfall be avoided?
  = pitfall is using `typeof` might refer too high in the scope of prototypes which would determine to be false.

===========================
Answers
===========================
- What is a potential pitfall with using `typeof bar === "object"` to determine if `bar` is an object? How can this pitfall be avoided?
  = Everything in JavaScript is an object, including null. Depending on what we want to check `bar` to be, array, function, etc., we could use `console.log((bar !== null) && (bar.constructor === Object));` and check that the constructor returns an object.

