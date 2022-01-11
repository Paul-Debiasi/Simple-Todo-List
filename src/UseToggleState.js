import { useState } from "react";

export default function UseToggleState(initial = false) {
  const [state, setState] = useState(initial);
  const toggle = () => setState(!state);
  return [state, toggle];
}
