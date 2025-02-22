import React from "react";

const Jumbotron = () => {
    // Definición de la función que maneja el clic
    const handleClick = () => {
        // Colocamos la URL de tu perfil de LinkedIn
        window.open("https://www.linkedin.com/in/luisalba10", "_blank");
    };

    return (
        <div className="mb-4 bg-light rounded-3 mx-5 mt-4">
            <div className="container-fluid py-5 text-start">
                <h1 className="display-5 fw-bold">Ingeniería en Acción: Redes, Transmisión y Estrategia!</h1>
                <p className="col-md-12 fs-2">
                    Especialista en telecomunicaciones y gestión de proyectos. Diseñando y optimizando redes con visión estratégica y tecnología de vanguardia.
                </p>
                {/* El botón ejecuta handleClick al hacer clic */}
                <button
                    className="btn btn-primary btn-lg"
                    type="button"
                    onClick={handleClick} // La función se llama cuando el usuario hace clic
                >
                    Visita mi Perfil en LinkedIn!!!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;