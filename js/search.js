let inputField = document.querySelector(".input-field");


document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
  
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault(); 
      console.log(inputField.value);
    });
  });
  