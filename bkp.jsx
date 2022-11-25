import "./styles.css";
import React, { useEffect, useState } from "react";
// - fazer um fetch da api https://covid19.mathdro.id/api/countries/BR/confirmed
// - pegar o resultado e mostrar na pagina
// - fazer uma filtragem: exibir apenas estados que tem a primeira letra S
// - adicionar um background "gray" nas linhas pares

export default function App() {
  const [estado, setEstado] = useState([]);

  useEffect(() => {
    async function fetchTeste(url) {
      const response = await fetch(url);
      const json = await response.json();
      setEstado(json);
      console.log("Teste ------->", json);
    }
    fetchTeste("https://covid19.mathdro.id/api/countries/BR/confirmed");
  }, []);

  const filtro = () => {
    return estado.map((table, i) => {
      console.log("estado ------->", table);

      const { provinceState } = table;
      if (provinceState.charAt(0) == "S") {
        return (
          <tr key={i} style={{ backgroundColor: i % 2 == 0 ? "gray" : "#fff" }}>
            <td>{provinceState}</td>
          </tr>
        );
      }
    });
  };

  return (
    <div className="App">
      <h1>RetailHub Teste - Matheus</h1>
      <table id="tabela">
        <tbody>
          <tr>
            <th>estado</th>
          </tr>
          {filtro()}
        </tbody>
      </table>
    </div>
  );
}
