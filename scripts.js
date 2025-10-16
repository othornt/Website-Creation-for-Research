const searchInput = document.getElementById('search-input');
const publicationsTable = document.getElementById('publications-table');
const currentYearEl = document.getElementById('current-year');

if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

if (searchInput && publicationsTable) {
  const rows = Array.from(publicationsTable.tBodies[0].rows);

  const filterRows = () => {
    const query = searchInput.value.trim().toLowerCase();

    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      const isVisible = text.includes(query);
      row.style.display = isVisible ? '' : 'none';
    });
  };

  searchInput.addEventListener('input', filterRows);
}
