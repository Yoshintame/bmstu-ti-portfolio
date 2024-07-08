document.getElementById("nav-toggle-btn").addEventListener("click", function () {
  const nav = document.querySelector(".main-nav");
  nav.classList.toggle("hidden");

  this.classList.toggle("nav-btn_close");
  this.classList.toggle("nav-btn_open");
});

document.getElementById("sort-by-name").addEventListener("click", function () {
  sortSkills("name");
});

document.getElementById("sort-by-level").addEventListener("click", function () {
  sortSkills("level");
});

function sortSkills(criteria) {
  const skillList = document.querySelector(".skill-list");
  const skills = Array.from(skillList.querySelectorAll("dt"));

  skills.sort((a, b) => {
    if (criteria === "name") {
      return a.dataset.name.localeCompare(b.dataset.name);
    } else if (criteria === "level") {
      return b.dataset.level - a.dataset.level;
    }
  });

  skills.forEach((skill) => {
    const dd = skill.nextElementSibling;
    skillList.appendChild(skill);
    skillList.appendChild(dd);
  });
}
