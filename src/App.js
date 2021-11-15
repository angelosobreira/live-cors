import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://apl001.prosesmt.com.br:8080/api/customers")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  return (
    <div>
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
