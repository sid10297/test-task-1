import AppContainer from "./components/AppContainer";
import HorizontalBorder from "./components/HorizontalBorder";
import Navbar from "./components/Navbar/index.jsx";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <HorizontalBorder />
      <Sidebar />
    </AppContainer>
  );
};

export default App;
