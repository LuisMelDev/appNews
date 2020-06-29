import React from 'react'
import PropTypes from 'prop-types'
import Noticia from "./noticia";
const ListadoNoticias = ({noticias}) => {
    return ( 
        <div className="grid grid-cols-3 gap-2">
            {noticias.map( noticia =>(
                <Noticia key={noticia.url} noticia={noticia} />
            ))}
        </div>
     );
}

ListadoNoticias.propTypes ={
    noticias: PropTypes.array.isRequired
}
 
export default ListadoNoticias;