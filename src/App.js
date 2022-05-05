import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
const alankey =
  "dbabce39f80956a6b3fdad15ff31791e2e956eca572e1d8b807a3e2338fdd0dc/stage";
const App = () => {
  useEffect(() => {
    // alanbtn
    alanBtn({
      key: alankey,
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
