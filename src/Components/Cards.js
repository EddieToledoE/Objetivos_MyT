import React from 'react'
import Card from './Card'

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const cards = [
  {
    id: 1,
    title: "Antecedentes de la Empresa",
    text: "Miranda y Toledo es un estudio fotográfico de carácter familiar ubicado en Tonalá, Chiapas, México en la Av. San Francisco entre las calles Oriente y Dr. Belisario Dominguez, dicha empresa esta ubicada en el sector terciario ya que ofrece servicios a terceros , El representante legal es el señor Bartolo Miranda Matias, siendo el un Co-Propietario, Numero de contacto 9661025479",
    image: image1
  },
  {
    id: 2,
    title: "Problemática encontrada",
    text: "Durante la entrevista realizada al dueño de Miranda y Toledo, se identificaron una serie de problemas que afectan la eficiencia y la gestión de información en la empresa, especialmente en el ámbito de la creación de cuadros generacionales. Pérdida de información y malos entendidos,	Dificultad para rastrear el progreso del pedido",
    image: image2,
  },
  {
    id: 3,
    title: "Propuesta de solución",
    text: "Para abordar estos problemas y mejorar la gestión interna, se propone el desarrollo de un software personalizado que cubra las necesidades específicas de Miranda y Toledo. Automatización de la carga de pedidos, Seguimiento, Gestión de procesos, Almacenamiento y acceso a la información",
    image: image3,
  },
  {
    id: 3,
    title: "Módulos propuestos para la App Web",
    text: "Para el desarrollo de la App Web se utilizaran JavaScript y Css para crear una aplicación web interactiva y visualmente atractiva. JavaScript será el lenguaje de programación principal que permitirá agregar funcionalidades dinámicas y lógica. Con React, una potente libreria de JavaScript, crearemos componentes reutilizables y gestionar eficientemente el estado de la aplicación.",
    image: image4,
  }
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text}) => (
          <div className="col-md-3" key={id}>
            <Card imageSource={image} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Cards