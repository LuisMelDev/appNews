import React from 'react';
import { useState } from 'react';

const useSelect = (stateInicial, opciones) => {

    let [state, updateState] = useState(stateInicial)

     const SelectNoticias= () => ( 
         <select className="appearance-none w-full text-gray-700 py-3 px-4 text-md bg-gray-200 rounded  focus:outline-none focus:bg-white border focus:border-gray-500 mb-4"
         value={state}
         onChange={ e => updateState(e.target.value)}
         >
             {opciones.map( opcion => (
                 <option value={opcion.value} key={opcion.value} >{opcion.label}</option>
             ) )}
         </select>
      );

      return [state, SelectNoticias]
}
 
export default useSelect;