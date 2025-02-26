const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];


span.addEventListener('click', closeModal);

function openModal() {
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
}

function showAlert(message, alertType) {
    const alert = document.createElement('div');
    alert.className = `alert ${alertType}`;
    alert.innerText = message;
    document.getElementById('alerts-container').appendChild(alert);

    setTimeout(() => {
        alert.classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('alerts-container').removeChild(alert);
        }, 500);
    }, 3000);
}

function showLoading() {
    const button = document.querySelector('.btn.loading');
    button.classList.add('loading');
    setTimeout(() => {
        button.classList.remove('loading');
    }, 2000); 
}


window.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}