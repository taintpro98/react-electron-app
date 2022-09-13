import React, { useState } from "react";

function Login() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {`Login ${count}`}
    </div>
  );
}

export default Login;
