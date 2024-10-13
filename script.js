document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const closeModal = document.getElementById('close');

    // When an image is clicked, open the modal and display the clicked image
    galleryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            modal.style.display = 'block';
            modalImage.src = e.target.src;
        });
    });

    // When the close button is clicked, hide the modal
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Hide the modal when clicking outside the modal image
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
