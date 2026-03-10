// Filter projects by category
function filterSelection(str) {
  const items = document.getElementsByClassName('filterItems');
  const btns = document.querySelectorAll('.filter-btn');

  // Update active button
  btns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.filter === str) btn.classList.add('active');
  });

  // Show/hide items
  Array.from(items).forEach(item => {
    item.classList.remove('show');
    if (str === 'all' || item.classList.contains(str)) {
      item.classList.add('show');
    }
  });
}

// Initialize — show all on load
document.addEventListener('DOMContentLoaded', () => {
  filterSelection('all');
});