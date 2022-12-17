import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contact.class';


const ComponentB = ({contacto}) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h2>
                Apellido: { contacto.apellido }
            </h2>
            <h2>
                Email: { contacto.email }
            </h2>
            <h4>
                 { contacto.conectado ? 'Contacto En Linea':'Contacto No Disponible'}
            </h4>    
        </div>
    );
};


ComponentB.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ComponentB;
