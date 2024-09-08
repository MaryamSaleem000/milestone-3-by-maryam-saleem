var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertion for HTMLInputElements and HTMLTextAreaElements
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var contactNumberElement = document.getElementById("contactNumber");
    var nationalityElement = document.getElementById("nationality");
    var genderElement = document.getElementById("gender");
    var dateOfBirthElement = document.getElementById("dateOfBirth");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    if (nameElement && emailElement && contactNumberElement && nationalityElement && genderElement && dateOfBirthElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contactNumber = contactNumberElement.value;
        var nationality = nationalityElement.value;
        var gender = genderElement.value;
        var dateOfBirth = dateOfBirthElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Create resume output
        var resumeOutput = "\n          <h2>Resume</h2>\n          <p><strong>Name:</strong> <span>".concat(name_1, "</span></p>\n          <p><strong>Email:</strong> <span>").concat(email, "</span></p>\n          <p><strong>Contact Number:</strong> <span>").concat(contactNumber, "</span></p>\n          <p><strong>Nationality:</strong> <span>").concat(nationality, "</span></p>\n          <p><strong>Gender:</strong> <span>").concat(gender, "</span></p>\n          <p><strong>Date of Birth:</strong> <span>").concat(dateOfBirth, "</span></p>\n          <h3>Education</h3><p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n          <h3>Experience</h3><p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n          <h3>Skills</h3><p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p>\n      ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
        else {
            console.error("The resumeOutput element is missing");
        }
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var currentValue = element.textContent || "";
            // Logic for editing content can be added here
            console.log('Current value:', currentValue);
        });
    });
}
