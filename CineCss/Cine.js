function VisibilidadTrailer() {
    const trailer = document.getElementById('trailer');
    const ocultarTrailerIcon = document.getElementById('ocultarTrailer');

    const isVisible = trailer.style.display !== 'none';

    if (isVisible) {
        trailer.style.display = 'none';
        ocultarTrailerIcon.style.display = 'none';
    } else {
        trailer.style.display = 'block';
        ocultarTrailerIcon.style.display = 'block';
    }
}

function configurarNavegacion() {
    const cineQuintoLink = document.getElementById('CineQuinto');
    const carteleraLink = document.getElementById('Cartelera');

    if (cineQuintoLink) {
        cineQuintoLink.addEventListener('click', () => {
            window.location.href = 'CineQuinto.html';
        });
        cineQuintoLink.style.cursor = 'pointer'; 
    }

    if (carteleraLink) {
        carteleraLink.addEventListener('click', () => {
            window.location.href = 'Cartelera.html';
        });
        carteleraLink.style.cursor = 'pointer';
    }
}

window.addEventListener('load', () => {
    configurarNavegacion()
    const trailer = document.getElementById('trailer');
    const ocultarTrailerIcon = document.getElementById('ocultarTrailer');

    if (trailer) {
        trailer.style.display = 'none';
    }
    if (ocultarTrailerIcon) {
        ocultarTrailerIcon.style.display = 'none';
    }

    const verTrailerButton = document.querySelector('#subtitle .button');

    if (verTrailerButton) {
        verTrailerButton.addEventListener('click', () => {
            if (trailer && trailer.style.display === 'none') {
                VisibilidadTrailer();
            }
        });
    }

    if (ocultarTrailerIcon) {
        ocultarTrailerIcon.addEventListener('click', VisibilidadTrailer);
    }
});

