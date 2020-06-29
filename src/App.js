import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Formulario from "./components/formulario";
import ListadoNoticias from "./components/listadoNoticias";
import Spinner from "./components/spinner";

// key d30ba79cab1147c4a3bfc2879d3af3bc

function App() {
  const [categoria, guardarCategoria] = useState("general");
  const [noticias, guardarNoticias] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=d30ba79cab1147c4a3bfc2879d3af3bc`;

      setCargando(true);

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
      setCargando(false);
    };
    consultarApi();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />

      <div className="w-1/2 mx-auto py-4 bg-white shadow-lg rounded mt-2 px-6 mb-8">
        <Formulario guardarCategoria={guardarCategoria} />
      </div>

      {cargando ? (
        <Spinner />
      ) : (
        <div className="w-11/12 mx-auto transition-all duration-1000 delay-75 ease-in-out">
          <ListadoNoticias noticias={noticias} />
        </div>
      )}
    </>
  );
}

export default App;
