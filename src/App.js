import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          maxWidth="xl"
          sx={{
            background: "#fff",
          }}
        >
          <Appbar/>
          <Banner/>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
