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

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.dropdown-menu').forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevents event bubbling

      // Close all other dropdowns before opening the clicked one
      document.querySelectorAll('.dropdown-items').forEach(dropdown => {
        if (!dropdown.classList.contains('hidden')) {
          dropdown.classList.add('hidden');
        }
      });

      const dropdown = button.nextElementSibling;
      if (dropdown && dropdown.classList.contains('dropdown-items')) {
        dropdown.classList.toggle('hidden');
      }
    });
  });

  // Close dropdown when clicking anywhere outside
  window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-items').forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
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


document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".order-tab button");
  const tables = document.querySelectorAll("[data-tab-for='order']");

  tabs.forEach(tab => {
    tab.addEventListener("click", function () {
      const selectedPage = this.getAttribute("data-tab-page");

      // Remove 'active' class from all buttons
      tabs.forEach(btn => btn.classList.remove("active", "text-gray-600"));
      this.classList.add("active", "text-gray-600");

      // Hide all tables and show only the selected one
      tables.forEach(table => {
        table.classList.add("hidden");
        if (table.getAttribute("data-page") === selectedPage) {
          table.classList.remove("hidden");
        }
      });
    });
  });
});
