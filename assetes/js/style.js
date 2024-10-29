function toggleSidebar() {
    const sidebar = document.getElementById('sidebar1');
    sidebar.classList.toggle('hidden1');

    if (sidebar.classList.contains('hidden1')) {
        sidebar.classList.remove('w-75'); 
    } else {
        sidebar.classList.add('w-75'); 
    }
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar1');
    const hamburger = document.querySelector('.hamburger1');

    if (window.innerWidth <= 768) {
        if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
            if (!sidebar.classList.contains('hidden1')) {
                sidebar.classList.add('hidden1'); 
                sidebar.classList.remove('w-75'); 
            }
        }
    }
});

function updateSidebarVisibility() {
    const sidebar = document.querySelector("#sidebar1");
    if (window.innerWidth <= 768) {
        sidebar.classList.add("hidden1");
    } else {
        sidebar.classList.remove("hidden1");
    }
}

updateSidebarVisibility();
window.addEventListener("resize", updateSidebarVisibility);


document.querySelectorAll('.dropdown-menu .dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});



