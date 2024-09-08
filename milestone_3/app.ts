document.getElementById("resumeForm")?.addEventListener("submit", function (event) {
  event.preventDefault();

  // Type assertion for HTMLInputElements and HTMLTextAreaElements
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const contactNumberElement = document.getElementById("contactNumber") as HTMLInputElement;
  const nationalityElement = document.getElementById("nationality") as HTMLInputElement;
  const genderElement = document.getElementById("gender") as HTMLInputElement;
  const dateOfBirthElement = document.getElementById("dateOfBirth") as HTMLInputElement;
  const educationElement = document.getElementById("education") as HTMLTextAreaElement;
  const experienceElement = document.getElementById("experience") as HTMLTextAreaElement;
  const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;

  if (nameElement && emailElement && contactNumberElement && nationalityElement && genderElement && dateOfBirthElement && educationElement && experienceElement && skillsElement) {
      const name = nameElement.value;
      const email = emailElement.value;
      const contactNumber = contactNumberElement.value;
      const nationality = nationalityElement.value;
      const gender = genderElement.value;
      const dateOfBirth = dateOfBirthElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      // Create resume output
      const resumeOutput = `
          <h2>Resume</h2>
          <p><strong>Name:</strong> <span>${name}</span></p>
          <p><strong>Email:</strong> <span>${email}</span></p>
          <p><strong>Contact Number:</strong> <span>${contactNumber}</span></p>
          <p><strong>Nationality:</strong> <span>${nationality}</span></p>
          <p><strong>Gender:</strong> <span>${gender}</span></p>
          <p><strong>Date of Birth:</strong> <span>${dateOfBirth}</span></p>
          <h3>Education</h3><p id="edit-education" class="editable">${education}</p>
          <h3>Experience</h3><p id="edit-experience" class="editable">${experience}</p>
          <h3>Skills</h3><p id="edit-skills" class="editable">${skills}</p>
      `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
          resumeOutputElement.innerHTML = resumeOutput;
          makeEditable();
      } else {
          console.error("The resumeOutput element is missing");
      }
  }
});

function makeEditable() {
  const editableElements = document.querySelectorAll('.editable');
  editableElements.forEach(element => {
      element.addEventListener('click', function () {
          const currentValue = element.textContent || "";
          // Logic for editing content can be added here
          console.log('Current value:', currentValue);
      });
  });
}
