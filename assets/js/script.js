var modal = document.getElementById('modal')

function openModal() {
    modal.style.display = 'block'
    modal.style.opacity = 1
}

function closeModal() {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none'
    }
}