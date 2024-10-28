function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('hidden');

    if (sidebar.classList.contains('hidden')) {
        sidebar.classList.remove('w-75'); 
    } else {
        sidebar.classList.add('w-75'); 
    }
}

document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');


    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
        if (!sidebar.classList.contains('hidden')) {
            sidebar.classList.add('hidden'); 
            sidebar.classList.remove('w-75'); 
        }
    }
});



function updateSidebarVisibility() {
    const sidebar = document.querySelector("#sidebar");
    if (window.innerWidth <= 768) {
        sidebar.classList.add("hidden");
    } else {
        sidebar.classList.remove("hidden");
    }
}


updateSidebarVisibility();


window.addEventListener("resize", updateSidebarVisibility);

