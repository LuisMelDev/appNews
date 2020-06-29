import React from "react";
import PropTypes from 'prop-types'

import useSelect from "../hooks/useSelect";

const Formulario = ({guardarCategoria}) => {
  const categorias = [
      {value: "business", label: "Negocios"},
      {value: "entertainment", label: "Entretenimiento"},
      {value: "general", label: "General"},
      {value: "health", label: "Salud"},
      {value: "science", label: "Ciencia"},
      {value: "sports", label: "Deportes"},
      {value: "technology", label: "Tecnologia"},
    ];
  const [estado, Select] = useSelect("general", categorias);

  const buscarNoticias = e=>{
      e.preventDefault()

      guardarCategoria(estado)
  }
  return (
    <div className="container grid grid-col-1">
      <form onSubmit={buscarNoticias}>
        <h2 className="text-4xl font-bold text-gray-700 mb-4 ">
          Encuentra las noticias por categoria
        </h2>
        <Select />
        <input
          type="submit"
          value="Buscar"
          className="w-full py-3 font-bold text-lg bg-red-500 rounded text-white"
        />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  guardarCategoria: PropTypes.func.isRequired
}

export default Formulario;
