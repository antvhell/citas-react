import React from "react";

export const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietarioo: {""}
        <span className="font-normal normal-case">Luis</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">luis@correo.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">15 Septiembre 2016</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet
          mi odio, sed rutrum purus elementum nec. Cras malesuada tincidunt
          neque in bibendum. Nam cursus, nunc vitae fringilla luctus, arcu eros
          porta velit, ut gravida dui turpis in eros. Praesent mattis varius
          commodo. Donec ultricies odio est. Mauris convallis nibh et odio
          consectetur porta. Etiam condimentum sit amet diam non gravida.
        </span>
      </p>
    </div>
  );
};
