/*Lecture 1 starts
console.log("JavaScript is working!");
Lecture 1 ends
*/

// let       // changeable values
// const     // fixed values (constants)

// let username = "Sandeep";
// const website = "https://github.com/";

// function greetUser() {
//     alert("Hello, welcome to my profile")
    
// }

// greetUser();

// document.querySelector("button").addEventListener("click", greetUser);

// This runs after the page loads -- automatically update the copyright year in the footer using JavaScript
window.onload = () => {
  document.getElementById("year").textContent = new Date().getFullYear();
};

// Function that greets the user
function greetUser() {
  const nameInput = document.getElementById("name").value;
  let userName = nameInput || "there";
  alert(`Hello ${userName}, welcome to my profile!`);

  // Also update the heading text
  document.getElementById("main-heading").textContent = `Welcome, ${userName}`;
  // document.getElementById("main-heading").textContent = "Welcome, Sandeep!";
}

// Event listener for the greet button
document.getElementById("greet-btn").addEventListener("click", greetUser);

// Add a class to the first skill
document.querySelector(".skills-list li").classList.add("highlighted");

// How to style all skills
// document.querySelectorAll(".skills-list li").forEach(item => {
//   item.classList.add("highlighted");
// });


const newSkill = document.createElement("li");
newSkill.textContent = "Problem Solving";
document.querySelector(".skills-list").appendChild(newSkill);

// Intercept form submit and validate --- Commented this as this is not required as Lecture 4.7 - Practice challenge - Form submit 
// document.getElementById("contact-form").addEventListener("submit", function(e) {
//   e.preventDefault();

//   const name = document.getElementById("name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const message = document.getElementById("message").value.trim();

//   if (!name || !email || !message) {
//     alert("All fields are required.");
//     return;
//   }

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!email.match(emailPattern)) {
//     alert("Please enter a valid email address.");
//     return;
//   }

//   alert("Thank you for your message, " + name + "! We’ll be in touch soon.");
//   document.getElementById("contact-form").reset();
// });

const skillsList = document.querySelector(".skills-list");
const newSkills = ["UI Design", "Communication", "Teamwork"];

newSkills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

const socialLinks = [
  { name: "GitHub", url: "https://github.com" },
  { name: "LinkedIn", url: "https://linkedin.com" },
  { name: "Twitter", url: "https://twitter.com" }
];

const socialList = document.querySelector(".social-links");

socialLinks.forEach(link => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.name;
  a.target = "_blank";
  li.appendChild(a);
  socialList.appendChild(li);
});

// BONUS: Dynamically add a new social link with .push() and re-render
socialLinks.push({ name: "YouTube", url: "https://youtube.com" });

// Add the new pushed link to the DOM
const lastLink = socialLinks[socialLinks.length - 1];
const li = document.createElement("li");
const a = document.createElement("a");
a.href = lastLink.url;
a.textContent = lastLink.name;
a.target = "_blank";
li.appendChild(a);
socialList.appendChild(li);

// Lecture 4.7 - Practical Example 1
// This toggles the .dark-mode class on the <body>, switching between normal and dark mode every time the button is clicked.
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Lecture 4.7 - Practical Example 2
// Challenge 1 - Swaps the profile picture to a fun image when the user hovers over it, and reverts when the mouse leaves.
document.querySelectorAll(".skills-list li").forEach(skill => {
  skill.addEventListener("mouseover", () => {
    skill.style.backgroundColor = "#ffd166";
  });

  skill.addEventListener("mouseout", () => {
    skill.style.backgroundColor = "";
  });
});

// Lecture 4.7 - Student Practice Challenge
// ----------------------
// Hover Profile Image
// ----------------------
const profileImg = document.querySelector(".profile-img");
const originalSrc = profileImg.src;

// ✅ Use a working image URL
// const hoverSrc = "https://avatars.githubusercontent.com/u/9919?s=200&v=4"; // GitHub Octocat
// Alternatively, you can store the images locally
const hoverSrc = "images/profile-hover.jpg";

profileImg.addEventListener("mouseover", () => {
  profileImg.src = hoverSrc;
});

profileImg.addEventListener("mouseout", () => {
  profileImg.src = originalSrc;
});


// Lecture 4.7 - Practical Challenge 2 - Show Confirmation Message on Form Submission
// ----------------------
// Form Submission Handling
// ----------------------
  const form = document.getElementById("contact-form");
  let confirmationMsg = document.createElement("p");
  confirmationMsg.id = "confirmation-msg";
  confirmationMsg.style.color = "green";
  confirmationMsg.style.fontWeight = "bold";
  form.insertAdjacentElement("afterend", confirmationMsg);

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop default form behavior

    // Clear message
    confirmationMsg.textContent = "";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !message) {
      alert("Please fill out all the fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Only show this if validation passed
    confirmationMsg.textContent = `Thanks for reaching out, ${name}! We'll get back to you soon.`;

    form.reset();
  });



// Lecture 4.7 - Practical Challenge 3 - Toggle the “About Me” Section
// ----------------------
// Toggle About Section
// ----------------------
const aboutSection = document.querySelector(".about");
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "Show/Hide About Me";
toggleBtn.style.marginTop = "10px";
aboutSection.parentNode.insertBefore(toggleBtn, aboutSection);

toggleBtn.addEventListener("click", () => {
  aboutSection.style.display = (aboutSection.style.display === "none") ? "block" : "none";
});












