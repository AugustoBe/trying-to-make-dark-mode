const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

checkbox.addEventListener('change', () => {
    document.h1.classList.toggle('dark');
});