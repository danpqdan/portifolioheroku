import { Display } from "../componentes/Display";
import { Heading } from "../componentes/Heading";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import React, { useState } from "react";

import Perfil from "../assets/1664094305021.jpeg";
import { TransicaoImagem } from "../hooks/TransicaoImagem";

export function Sobre() {
  const [slide, setSlide] = useState(false);
  return (
    <div className="flex ml-3 mr-3 justify-center overflow-hidden">
      <Display className="h-ds-session w-ds-session bg-black mr-2 ">
        <h1>teste</h1>
      </Display>

      <Display className="h-ds-aside w-ds-aside bg-black justify-center flex-wrap flex-col gap-9">
        <div className="flex flex-col items-center">
          <img
            src={Perfil}
            className="w-ds-pic h-ds-pic rounded-lg absolute top-16 shadow-blue-500 shadow-lg"
          />
          <Heading className="text-white text-hd-md font-consolas mt-10">
            Daniel Santos
          </Heading>
          <Heading className="text-white text-hd-sm font-soon">
            Desenvolvedor Web
          </Heading>
        </div>
        <nav className="flex flex-row relative ">
          <TransicaoImagem />
        </nav>
      </Display>
    </div>
  );
}
