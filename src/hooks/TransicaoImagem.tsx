import { Card } from "../componentes/Card";
import { Display } from "../componentes/Display";
import { FaBeer } from "react-icons/fa/";
import { Slot } from "@radix-ui/react-slot";

export function TransicaoImagem() {
  return (
    <Card.Root>
      <nav>
        <Card.Content className="flex">
          <Card.Root>
            <Card.Icon>
              <FaBeer />
            </Card.Icon>
          </Card.Root>
          <Card.Root>
            <h1>Teste</h1>
          </Card.Root>
        </Card.Content>
      </nav>
    </Card.Root>
  );
}
