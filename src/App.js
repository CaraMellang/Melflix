import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Rating from "./routes/Rating";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} exact={true} />
      <Route path="/rating" component={Rating} />
      <Route path="/option" component={Home} />
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

export default App;
