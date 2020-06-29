import React from "react";
import PropTypes from 'prop-types'

const Noticia = ({ noticia }) => {

    const {source, title, description, url,urlToImage}  = noticia;

    const imagen = (urlToImage) ? 
    (<img
        className="w-full relative"
        src={urlToImage}
        alt={title}
      />)
      : null;
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      {imagen}
      <span className="absolute -mt-8 text-md px-3 text-white">{source.name}</span>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      <div className="px-6 py-4">
        <a href={url} target="_blank" rel="noopener noreferrer" className="block bg-blue-200 rounded px-3 py-3 text-sm font-semibold text-gray-700 mr-2 text-center">
          Ver noticia completa
        </a>
      </div>
    </div>
  );
};

Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}

export default Noticia;
