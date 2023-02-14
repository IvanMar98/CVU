import CardItems from "./CardItems";

function Inicio() {

    
    return (
        <div className="container-fluid d-flex flex-column align-items-center">
            <h1 className="text-primary fw-bold mb-5">Menu Principal</h1>
            <div className="container-fluid d-flex flex-column mb-4">
                <h4 className="text-primary fs-4 ps-3 mb-3">Datos Generales</h4>
                <div className=" container-fluid d-flex justify-content-between">
                    <CardItems 
                        icon="fa-solid fa-user" 
                        title="Perfil y Cuenta"
                    />
                    <CardItems
                        icon="fa-solid fa-address-book"
                        title="Datos de Contacto"
                    />
                    <CardItems
                        icon="fa-solid fa-briefcase" 
                        title="Datos Laborales"
                    />
                </div>
            </div>
            <div className="container-fluid d-flex flex-column mb-4">
                <h4 className="text-primary fs-4 ps-3 mb-3">Perfil Academico</h4>
                <div className="container-fluid d-flex justify-content-between">
                    <CardItems
                        icon="fa-solid fa-book-open-reader"
                        title="Productividad Academica"
                    />
                </div>
            </div>
        </div>
    );
}

export default Inicio;