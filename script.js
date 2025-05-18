function showPage(page) {
    const nonVegPage = document.getElementById('page-nonveg');
    const vegPage = document.getElementById('page-veg');
  
    if (page === 'veg') {
      nonVegPage.classList.add('hidden');
      vegPage.classList.remove('hidden');
    } else {
      vegPage.classList.add('hidden');
      nonVegPage.classList.remove('hidden');
    }
  }
// Placeholder for future interactivity, if needed
console.log("Veg Menu Loaded");
  