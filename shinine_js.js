function searchInventory(event) {
    event.preventDefault();
    const searchInput = document.getElementById('Search').value.toLowerCase();
    const inventoryItems = document.querySelectorAll('.inventory-item');

    inventoryItems.forEach(item => {
        const itemName = item.getAttribute('data-name').toLowerCase();
        if (itemName.includes(searchInput)) {
            item.style.display = 'block';
            item.classList.add('fade-in');
        } else {
            item.style.display = 'none';
            item.classList.remove('fade-in');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const inventoryItems = document.querySelectorAll('.inventory-item');
    inventoryItems.forEach(item => {
        item.classList.add('fade-in');
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your inquiry! We will get back to you soon.');
            contactForm.reset();
        });
    }
});