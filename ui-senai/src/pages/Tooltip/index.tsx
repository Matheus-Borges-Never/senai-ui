import React from "react";
import { Tooltip } from "senai-design-system";

const TooltipExample = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "40px", background: "#121212" }}>
      {/* Exemplo com o tamanho 'lg' e botões em ambos os lados */}
      <Tooltip
        size="lg"
        title="Title"
        leftButtons="Action"
        rightButtons="Action"
      >
        Supporting line text lorem ipsum dolor sit amet, consectetur
      </Tooltip>

      {/* Exemplo com o tamanho 'small' e apenas um botão na direita */}
      <Tooltip
        size="small"
        title="Title"
        rightButtons="Action"
      >
        Supporting line text lorem ipsum dolor sit amet, consectetur
      </Tooltip>

      {/* Exemplo sem título e com botões em ambos os lados */}
      <Tooltip
        size="lg"
        leftButtons="Cancel"
        rightButtons="Confirm"
      >
        Another tooltip example with no title, only buttons.
      </Tooltip>

      {/* Exemplo com título e sem botões */}
      <Tooltip
        size="small"
        title="Title Only"
      >
        Supporting line text lorem ipsum dolor sit amet, consectetur
      </Tooltip>
    </div>
  );
};

export default TooltipExample;
