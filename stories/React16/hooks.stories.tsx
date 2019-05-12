import React, { useState, useCallback, useEffect } from "react";

import { storiesOf } from "@storybook/react";

const Counter = (props: any) => {
  const [count, setCount] = useState(0);
  const consoleCount = () => {
    console.log(count);
  };
  return (
    <div>
      <button
        onClick={() => {
          setCount(c => c + 1);
          consoleCount();
        }}
      >
        +
      </button>
      <div>count:{count}</div>
    </div>
  );
};

storiesOf("React16|hooks", module).add("counter demo", () => <Counter />);
