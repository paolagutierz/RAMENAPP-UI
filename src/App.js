import { Box, Grommet } from 'grommet';
import AppRouter from './AppRouter';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <AppRouter></AppRouter>
    </Grommet>
  );
}

export default App;
