document.addEventListener('DOMContentLoaded', function () {
  const btnToggle = document.querySelector('.toggle-btn');
  const mangasViews = document.querySelector('.seccion-mangas');
  const searchInput = document.querySelector('.search-input');

  btnToggle.addEventListener('click', function () {
    console.log('click');
    document.getElementById('sidebar').classList.toggle('active');
    mangasViews.classList.toggle('margen-activo');
    
    // Verifica si el input existe
    if (searchInput) {
        searchInput.classList.toggle('search-reducido');
        
        // Aplica la animación de desaparición
        searchInput.classList.add('placeholder-desaparece');
        
        // Luego de la animación, elimina el placeholder
        setTimeout(() => {
            if (searchInput.placeholder) {
                searchInput.placeholder = '';
            } else {
                searchInput.placeholder = 'Nombre del Manga'; // Vuelve a poner el placeholder si estaba vacío
                searchInput.classList.remove('placeholder-desaparece');  // Reinicia la animación
            }
        }, 300); // Tiempo en milisegundos, debe coincidir con el tiempo de transición en el CSS
    } else {
        console.log('No se encontró el input de búsqueda');
    }
});
});







