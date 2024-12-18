// Seleccionar todas las secciones con clase "animada"
const secciones = document.querySelectorAll(".animada");

// Función para verificar si una sección está en pantalla
const verificarVisibilidad = () => {
    secciones.forEach(seccion => {
        const rect = seccion.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            seccion.classList.add("visible");
        } else {
            seccion.classList.remove("visible");
        }
    });
};

// Escucha el evento de desplazamiento (scroll)
window.addEventListener("scroll", verificarVisibilidad);

// Verificar visibilidad inicial
verificarVisibilidad();
