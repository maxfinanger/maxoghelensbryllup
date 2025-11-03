import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RoutingMain } from "./routing/RoutingMain";

function App() {
    return (
        <Router>
            <div className="App bg-[#ffffff] center-content">
                <Header />
                <main className="m-0 p-0">
                    <RoutingMain />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
