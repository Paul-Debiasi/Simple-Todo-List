import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (initial) => {
  const [value, setValue] = useState(initial);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };
  return [value, handleChange, reset];
};
