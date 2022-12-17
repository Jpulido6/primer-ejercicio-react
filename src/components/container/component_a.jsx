import React from 'react';
import { Contacto } from '../../models/contact.class';
import ComponentB from '../pure/component_b';



const ComponentA = () => {
   const defaultContact = new Contacto('Carlos', 'Pulido','email@email.com',true);

    return (
        <div>
            <div>
                <h2>Contacto</h2>

            </div>
            <ComponentB contacto={defaultContact}></ComponentB>
        </div>
    );
};




export default ComponentA;
