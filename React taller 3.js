"use client";
import { data } from "autoprefixer";

import { useState, useEffect } from "react";

export default function Principal() {
  const [datos, ponerDatos] = useState(null);

  useEffect(() => {
    async function llamarApi() {
      const peticion = await fetch("https://reqres.in/api/users?page=2");
      const respuesta = await peticion.json();
      ponerDatos(respuesta.data);
    }
    llamarApi();
  }, []);

  return (
    <u>
      {datos ? (
        datos.map((dato) => {
          return <Tarjeta datos={dato} />;
        })
      ) : (
        <p>actualizando...</p>
      )}
    </u>
  );
}

function Tarjeta(props) {
  return (
    <>
      {props.datos ? (
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Muy fácil de integrar</h3>
              <p className="my-4">Si valoras tu tiempo, sin duda elegiría esto."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="foto de perfil" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Desarrollador en Open AI</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Una base sólida para cualquier proyecto</h3>
              <p className="my-4">Diseñar con componentes de Figma que se pueden traducir fácilmente a las clases de utilidad de Tailwind CSS ahorra mucho tiempo."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="foto de perfil" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Diseñadora principal en Dropbox</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flujo de trabajo impresionante</h3>
              <p className="my-4">Estéticamente, los componentes bien diseñados son hermosos y, sin duda, elevarán tu próxima aplicación."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="foto de perfil" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Ingeniero de software en Facebook</div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Colaboración eficiente</h3>
              <p className="my-4">Tienes muchos ejemplos que se pueden utilizar para crear un prototipo rápido para tu equipo."</p>
            </blockquote>
            <figcaption className="flex items-center justify-center space-x-3">
              <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="foto de perfil" />
              <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CTO en Google</div>
              </div>
            </figcaption>
          </figure>
        </div>
      ) : (
        <p>actualizando</p>
      )}
    </>
  );
}
