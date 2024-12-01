import { useState } from "react";
import Child from "./Child";

export const Test = () => {
  const [data, setData] = useState(["Manoj", 22, "manoj@gmail.com"]);
  
  return (
    <div>
      <h1>Test</h1>
      <Child>
        <table border="1" style={{border:"none"}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {data?.map((item, index) => (
                <td key={index}>{item}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </Child>
    </div>
  );
};
