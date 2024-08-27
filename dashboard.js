document.addEventListener('DOMContentLoaded', function () {
    // Sidebar navigation highlight
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function () {
            sidebarLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search input[type="search"]');
    const projectContents = document.querySelectorAll('.main .content-div');

    searchInput.addEventListener('input', function () {
        const searchText = this.value.toLowerCase();
        projectContents.forEach(content => {
            const text = content.textContent.toLowerCase();
            if (text.includes(searchText)) {
                content.parentElement.style.display = 'block';
            } else {
                content.parentElement.style.display = 'none';
            }
        });
    });

    // Content icons interaction
    const starIcons = document.querySelectorAll('.image-div img:nth-child(1)');
    const eyeIcons = document.querySelectorAll('.image-div img:nth-child(2)');
    const shareIcons = document.querySelectorAll('.image-div img:nth-child(3)');

    starIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            this.classList.toggle('active');
            alert('Project starred!');
        });
    });

    eyeIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            alert('View project details.');
        });
    });

    shareIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            alert('Share project link.');
        });
    });

    // Collapsible sidebar
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Sidebar';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.left = '10px';
    toggleButton.style.zIndex = '1000';

    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
    });
});
