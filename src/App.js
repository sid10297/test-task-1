import AppContainer from "./components/AppContainer";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";
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
      <ContentContainer>
        <Reports />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
};

export default App;
