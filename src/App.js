import { Box, Grommet } from "grommet";
import AppRouter from "./AppRouter";
import theme from "./theme";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Grommet theme={theme}>
      <AppRouter></AppRouter>
    </Grommet>
  );
}

export default App;
