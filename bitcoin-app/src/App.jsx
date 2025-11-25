import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./AppRoutes";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <EmojiProvider>
        <Navbar />
        <AppRoutes />
    </EmojiProvider>
  );
}

export default App;
