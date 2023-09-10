import { Container, ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import Calculator from './component/Calculator';

const myTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#fff',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={myTheme}>
        <Container maxWidth='md'>
          <Calculator></Calculator>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
