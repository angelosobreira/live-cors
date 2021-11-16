import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  async function gravaCliente() {
    var res = await axios.put("https://api.taskip.com.br:8080/api/customers", {
      id: 1,
      description: "Angelo Sobreira",
    });
    console.log(res);
  }

  async function pesqCliente() {
    var res = await axios.get("https://api.taskip.com.br:8080/api/customers");
    console.log(res.data);
    setData(res.data);
  }

  return (
    <div>
      <div>
        <button onClick={pesqCliente}>Pesquisar Cliente</button>
        <button onClick={gravaCliente}>Adicionar Cliente</button>
      </div>
      <ul>
        {data.map((customer) => (
          <li key={customer.id}>
            {customer.id} - {customer.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
