import { Button, Container, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";

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
          <Button variant="contained">text</Button>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
