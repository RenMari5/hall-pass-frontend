import "./App.css";
import { MantineProvider, Text } from "@mantine/core";

function App() {
  return (
    <div className="App">
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Text>Welcome to Mantine!</Text>
      </MantineProvider>
    </div>
  );
}

export default App;
