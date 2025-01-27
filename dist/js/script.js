document.querySelectorAll('.slider-dropdown-toggle').forEach(item => {
    item.addEventListener('click', () => {
      const dropdown = item.closest('li').querySelector('.slider-dropdown-items');
    
      if (dropdown.style.maxHeight) {
        dropdown.style.maxHeight = null;
        dropdown.style.opacity = '0';
      } else {
        dropdown.style.maxHeight = dropdown.scrollHeight + 'px';
        dropdown.style.opacity = '1';
      }

      const arrow = item.closest('li').querySelector('.arrow');
      if (arrow.style.transform === 'rotate(90deg)') {
        arrow.style.transform = 'rotate(0deg)';
      } else {
        arrow.style.transform = 'rotate(90deg)';
      }
    });
  });
  