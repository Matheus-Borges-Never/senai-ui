import React from "react";
import { Toggle } from "senai-design-system";

const App: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Toggle Ativado, tamanho md */}
      <div>
        <p>Toggle Ativado (md)</p>
        <Toggle size="md" />
      </div>

      {/* Toggle Desativado, tamanho md */}
      <div>
        <p>Toggle Desativado (md)</p>
        <Toggle size="md" />
      </div>

      {/* Toggle Ativado, tamanho lg */}
      <div>
        <p>Toggle Ativado (lg)</p>
        <Toggle size="lg" />
      </div>

      {/* Toggle Desativado, tamanho lg */}
      <div>
        <p>Toggle Desativado (lg)</p>
        <Toggle size="lg" />
      </div>

      {/* Toggle Desabilitado, tamanho md */}
      <div>
        <p>Toggle Desabilitado (md)</p>
        <Toggle size="md" disabled />
      </div>

      {/* Toggle Desabilitado, tamanho lg */}
      <div>
        <p>Toggle Desabilitado (lg)</p>
        <Toggle size="lg" disabled />
      </div>
    </div>
  );
};

export default App;
