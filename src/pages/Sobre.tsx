import { Display } from "../componentes/Display";
import { Heading } from "../componentes/Heading";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import React, { useState } from "react";


import Perfil from "../assets/1664094305021.jpeg";
import { TransicaoImagem } from "../hooks/TransicaoImagem";

export function Sobre() {
  const [slide, setSlide] = useState(false);
  return (
    <div className="flex ml-3 mr-3 justify-center">
      <Display className="h-ds-session w-ds-session bg-black mr-2 ">
        <h1>teste</h1>
      </Display>

      <Display className="h-ds-aside w-ds-aside bg-black justify-center flex-wrap flex-col gap-9">
        <div className="flex flex-col items-center">
          <img src={Perfil} className="w-ds-pic h-ds-pic mt-3 rounded-xl" />
          <Heading className="text-white text-hd-md font-consolas mt-3">
            Daniel Santos
          </Heading>
          <Heading className="text-white text-hd-sm font-soon mt-2">
            Desenvolvedor Web
          </Heading>
        </div>
        <div className="flex justify-center items-center gap-2">
          
          <TransicaoImagem />

        </div>
      </Display>
    </div>
  );
}
