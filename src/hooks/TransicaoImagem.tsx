import { useSpring } from "@react-spring/web";
import { useState } from "react";
import { Fa500Px, FaBeer } from "react-icons/fa/";
import { a } from "react-spring";
import { Card } from "../componentes/Card";

export function TransicaoImagem() {

  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const [items, setItems] = useState([1]);

  return (
    <nav className="flex justify-center items-center flex-row absolute ">
      {/* Inicio do card de skils */}
      {items.map((item) => (
        <Card.Root className="flex justify-center items-center">
          <div className="flex">
            <div
              onClick={() => set((state) => !state)}
              className="cursor-pointer "
            >
              {/*Seta Transição entre eventos*/}
              {/* Primeiro Card == SpringBoot */}
              <Card.Content key={item}>
                <Card.Icon>
                  <a.div
                    style={{
                      opacity: opacity.to((o) => 1 - o),
                      transform,
                    }}
                    className="absolute h-ds-md w-ds-md bg-blue-500 flex justify-center items-center rounded"
                  >
                    <a.div className="">
                      <FaBeer color="white" size={50} />
                    </a.div>
                  </a.div>
                </Card.Icon>
                <Card.Text>
                  <a.div
                    style={{
                      opacity,
                      transform,
                      rotateX: "180deg",
                    }}
                    className="h-ds-md w-ds-md bg-pink-900 rounded flex justify-center items-center "
                  >
                    <div className="flex justify-center items-center flex-col text-center gap-3 text-white">
                      <li className="list-none">SpringBoot</li>
                      <li>
                        Conhecimento do Eco-Sistema Spring, consumo e criação de
                        API
                      </li>
                      <li>Testes unitarios com JUnit</li>
                      <li>Persistencia de dados com Jakarta</li>
                    </div>
                  </a.div>
                </Card.Text>
              </Card.Content>
            </div>

            {/* ReactSkill */}

            <div
              onClick={() => set((state) => !state)}
              className="cursor-pointer"
            >
              {/*Seta Transição entre eventos*/}
              {/* Segundo Card == React */}
              <Card.Content key={item}>
                <Card.Icon>
                  <a.div
                    style={{
                      opacity: opacity.to((o) => 1 - o),
                      transform,
                    }}
                    className="absolute h-ds-md w-ds-md bg-blue-500 flex justify-center items-center rounded"
                  >
                    <a.div className="">
                      <Fa500Px color="white" size={50} />
                    </a.div>
                  </a.div>
                </Card.Icon>
                <Card.Text>
                  <a.div
                    style={{
                      opacity,
                      transform,
                      rotateX: "180deg",
                    }}
                    className="h-ds-md w-ds-md bg-pink-900 rounded flex justify-center items-center "
                  >
                    <div className="flex justify-center items-center flex-col text-center gap-3 text-white">
                      <li className="list-none">SpringBoot</li>
                      <li>
                        Conhecimento do Eco-Sistema Spring, consumo e criação de
                        API
                      </li>
                      <li>Testes unitarios com JUnit</li>
                      <li>Persistencia de dados com Jakarta</li>
                    </div>
                  </a.div>
                </Card.Text>
              </Card.Content>
            </div>

            {/* Terceiro Card == SoftSkils */}

            <div
              onClick={() => set((state) => !state)}
              className="cursor-pointer"
            >
              {/*Seta Transição entre eventos*/}
              {/* Segundo Card == React */}
              <Card.Content key={item}>
                <Card.Icon>
                  <a.div
                    style={{
                      opacity: opacity.to((o) => 1 - o),
                      transform,
                    }}
                    className="absolute h-ds-md w-ds-md bg-blue-500 flex justify-center items-center rounded"
                  >
                    <a.div className="">
                      <Fa500Px color="white" size={50} />
                    </a.div>
                  </a.div>
                </Card.Icon>
                <Card.Text>
                  <a.div
                    style={{
                      opacity,
                      transform,
                      rotateX: "180deg",
                    }}
                    className="h-ds-md w-ds-md bg-pink-900 rounded flex justify-center items-center "
                  >
                    <div className="flex justify-center items-center flex-col text-center gap-3 text-white">
                      <li className="list-none">SpringBoot</li>
                      <li>
                        Conhecimento do Eco-Sistema Spring, consumo e criação de
                        API
                      </li>
                      <li>Testes unitarios com JUnit</li>
                      <li>Persistencia de dados com Jakarta</li>
                    </div>
                  </a.div>
                </Card.Text>
              </Card.Content>
            </div>

            {/* Quarto Card == Contato */}

            <div
              onClick={() => set((state) => !state)}
              className="cursor-pointer"
            >
              {/*Seta Transição entre eventos*/}
              {/* Segundo Card == React */}
              <Card.Content key={item}>
                <Card.Icon>
                  <a.div
                    style={{
                      opacity: opacity.to((o) => 1 - o),
                      transform,
                    }}
                    className="absolute h-ds-md w-ds-md bg-blue-500 flex justify-center items-center rounded"
                  >
                    <a.div className="">
                      <Fa500Px color="white" size={50} />
                    </a.div>
                  </a.div>
                </Card.Icon>
                <Card.Text>
                  <a.div
                    style={{
                      opacity,
                      transform,
                      rotateX: "180deg",
                    }}
                    className="h-ds-md w-ds-md bg-pink-900 rounded flex justify-center items-center "
                  >
                    <div className="flex justify-center items-center flex-col text-center gap-3 text-white">
                      <li className="list-none">SpringBoot</li>
                      <li>
                        Conhecimento do Eco-Sistema Spring, consumo e criação de
                        API
                      </li>
                      <li>Testes unitarios com JUnit</li>
                      <li>Persistencia de dados com Jakarta</li>
                    </div>
                  </a.div>
                </Card.Text>
              </Card.Content>
            </div>
          </div>
        </Card.Root>
      ))}
    </nav>
  );
}
