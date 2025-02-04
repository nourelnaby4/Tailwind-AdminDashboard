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

// sidebar
const mobileNav = document.querySelector('.mnav');
const main = document.querySelector('.main_body');
const closeBtn = document.querySelector('.mnav__close-btn');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const mainClosedClass = 'ml-0';
const mainOpendClass = 'ml-64';

closeBtn.addEventListener('click', () => {
  mobileNav.classList.toggle(navOpenedClass);
  mobileNav.classList.toggle(navClosedClass);
  main.classList.toggle(mainClosedClass);
  main.classList.toggle(mainOpendClass);
});


// start: chart
const order_chart = document.getElementById('order-chart');
new Chart(order_chart, {
  type: 'line',
  data: {
    labels: generateDays(7),
    datasets: [{
      label: '# Active',
      data: generatRandomData(7),
      borderWidth: 1,
      fill:true,
      pointBackgroundColor: 'rgb(16,185,129)',
      borderColor : 'rgb(16,185,129)',
      backgroundColor: 'rgb(16 185 129 /.1)',
      tension: .2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

function generateDays(n){
const data = [];
  for(let i = 0; i < n; i++){
    const date = new Date();
    date.setDate(date.getDate() - i);
    data.push(date.toLocaleDateString('en-US', {month: 'short', day: 'numeric'}));
  }
  return data;
}

function generatRandomData(n){
  const data = [];
  for(let i = 0; i < n; i++){
    data.push(Math.round(Math.random() * 10));
    }
    return data;
  }
// end: chart