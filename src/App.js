import AppContainer from "./components/AppContainer";
import HorizontalBorder from "./components/HorizontalBorder";
import Navbar from "./components/Navbar/index.jsx";
import Sidebar from "./components/Sidebar";
import Reports from "./pages/Reports";

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <HorizontalBorder />
      <Sidebar />
      <Reports />
    </AppContainer>
  );
};

export default App;
