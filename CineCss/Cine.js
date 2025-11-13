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

function VisibilidadMapa() {
    const mapaDiv = document.getElementById('mapaDiv');
    const ocultarMapaIcon = document.getElementById('ocultarMapa');

    if (!mapaDiv || !ocultarMapaIcon) {
        return;
    }

    const isVisible = mapaDiv.style.display !== 'none';

    if (isVisible) {
        mapaDiv.style.display = 'none';
        ocultarMapaIcon.style.display = 'none';
    } else {
        mapaDiv.style.display = 'block';
        ocultarMapaIcon.style.display = 'block';
    }
}

function resaltarEnlaceActual() {
    const rutaActual = window.location.pathname.split('/').pop();

    const enlaces = {
        'CineQuinto.html': 'CineQuinto',   
        'Cartelera.html': 'Cartelera', 
    };

    let idResaltar = null;

    if (enlaces[rutaActual]) {
        idResaltar = enlaces[rutaActual];
    } 
    else if (rutaActual === '') {
        idResaltar = 'CineQuinto'; 
    }

    if (idResaltar) {
        const elemento = document.getElementById(idResaltar);
        if (elemento) {
            elemento.classList.add('enlace-activo'); 
        }
    }
}

window.addEventListener('load', () => {
    configurarNavegacion();
    resaltarEnlaceActual();

    const mapaDiv = document.getElementById('mapaDiv');
    const ocultarMapaIcon = document.getElementById('ocultarMapa');
    const dondeEstamosLink = document.getElementById('dE');

    if (mapaDiv) {
        mapaDiv.style.display = 'none';
    }
    if (ocultarMapaIcon) {
        ocultarMapaIcon.style.display = 'none';
    }

    if (dondeEstamosLink) {
        dondeEstamosLink.addEventListener('click', VisibilidadMapa);
    }

    if (ocultarMapaIcon) {
        ocultarMapaIcon.addEventListener('click', VisibilidadMapa);
    }

    const trailer = document.getElementById('trailer');
    const ocultarTrailerIcon = document.getElementById('ocultarTrailer');
    const verTrailerButton = document.querySelector('#carousel #subtitle .button');
    
    if (trailer) {
        trailer.style.display = 'none';
    }
    if (ocultarTrailerIcon) {
        ocultarTrailerIcon.style.display = 'none';
    }
    
    if (verTrailerButton) {
        verTrailerButton.addEventListener('click', VisibilidadTrailer);
    }

    if (ocultarTrailerIcon) {
        ocultarTrailerIcon.addEventListener('click', VisibilidadTrailer);
    }
});