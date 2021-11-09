window.onload = function () {

  // Get all h2 elements and append the array to the select element with the id "sort-list" within an option element.

  let h2 = document.getElementsByTagName("h2");
  let select = document.getElementById("sort-list");
  let defaultOption = document.createElement("option");
  defaultOption.text = "Select season";
  select.add(defaultOption);

  // Select and disable the default option.
  defaultOption.selectedIndex = 0;
  defaultOption.disabled = true;
  defaultOption.selected = true;

  // Create a function that hides all given elements.
  function hideElements(elements) {
    for (let e of elements) {
      e.style.display = "none";
    }
  }

  // Create a function that shows all given elements.
  function showElements(elements) {
    for (let e of elements) {
      e.style.display = "block";
    }
  }

  // Create a function that hides all elements with a given class name.
  function hideElementsByClassName(className) {
    let elements = document.getElementsByClassName(className);
    hideElements(elements);
  }

  // Create a function that shows all elements with a given class name.
  function showElementsByClassName(className) {
    let elements = document.getElementsByClassName(className);
    showElements(elements);
  }

  // Create a function that hides all elements with a given id.
  function hideElementsById(id) {
    let elements = document.getElementById(id);
    hideElements(elements);
  }

  // Create a function that shows all elements with a given id.
  function showElementsById(id) {
    let elements = document.getElementById(id);
    showElements(elements);
  }

  // const function hideAllElements = (elements) => {
  // 	for (let i = 0; i < elements.length; i++) {
  // 		elements[i].style.display = "none";
  // 	}
  // }

  // Hide all the "close-icons" and "faq-answers"
  hideElementsByClassName("close-icons");
  hideElementsByClassName("faq-answers");

  // Hide all the svg icons with class "add-icon"
  // let closeIcon = document.getElementsByClassName("close-icon");
  // for (let i of closeIcon) {
  // 	i.style.display = "none";
  // }

  // Add the h2 elements to the select element.
  for (let heading of h2) {
    let option = document.createElement("option");
    option.text = heading.innerText;
    select.add(option);
  }

  // Add the event listener to the select element.
  select.addEventListener("change", function () {
    // Get the selected option.
    let selectedOption = this.options[this.selectedIndex];

    // Get the selected option's text.
    let selectedOptionText = selectedOption.text;

    // Get all h2 elements.
    let sectionTitle = document.getElementsByTagName("h2");

    // Loop through the h2 elements and check if the text of the selected option matches the text of the h2 element.
    for (let heading of sectionTitle) {
      if (heading.innerText === selectedOptionText) {
        // If the text matches, scroll to the h2 element.
        heading.scrollIntoView();
      }
    }
  });
};