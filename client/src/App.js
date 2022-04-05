import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import CreateScreen from "./Screens/CreateScreen";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import UpdateScreen from "./Screens/UpdateScreen";
function App() {
  return (
    <div className="App">
      <Header />

      <main className="py-5 align-item-center">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/create" element={<CreateScreen />} />
            <Route path="/update/:id" element={<UpdateScreen />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
