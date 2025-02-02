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
  
  document.querySelectorAll('.dropdown-menu').forEach(button => {
    button.addEventListener('click', () => {
      const dropdown = button.nextElementSibling; // Selects the next sibling (dropdown)
      if (dropdown) {
        dropdown.classList.toggle('hidden'); // Toggle the 'hidden' class
      }
    });
  });
  
  // Close dropdown when clicking anywhere outside
window.addEventListener('click', (event) => {
  document.querySelectorAll('.dropdown-items').forEach(dropdown => {
    if (!dropdown.classList.contains('hidden') && !dropdown.closest('li').contains(event.target)) {
      dropdown.classList.add('hidden');
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const notificationTab = document.querySelector(".notification-menu");
  const messageTab = document.querySelector(".message-menu");
  const notificationItems = document.querySelector(".notification-items");
  const messageItems = document.querySelector(".message-items");

  // Initially show notifications and hide messages
  messageItems.style.display = "none";
  notificationTab.classList.add("active");

  notificationTab.addEventListener("click", () => {
    notificationItems.style.display = "block";
    messageItems.style.display = "none";

    notificationTab.classList.add("active");
    messageTab.classList.remove("active");
  });

  messageTab.addEventListener("click", () => {
    messageItems.style.display = "block";
    notificationItems.style.display = "none";

    messageTab.classList.add("active");
    notificationTab.classList.remove("active");
  });
});
