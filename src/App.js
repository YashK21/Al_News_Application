import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const config = require("./config.json");
const App = () => {
  useEffect(() => {
    // alanbtn
    alanBtn({
      key: config.alankey,
      onCommand: ({ command }) => {
        if (command === "testCommand") {
          alert("Executed Successfully");
        }
      },
    });
  }, []);
  return (
    <>
      <h1>Alan AI News Application</h1>
    </>
  );
};

export default App;
