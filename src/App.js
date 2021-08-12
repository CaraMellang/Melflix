import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import LikeCount from "./routes/LikeCount";
import Rating from "./routes/Rating";

function App() {
  return (
    <BrowserRouter>
      <div className="back">
        <Route path="/" component={Home} exact={true} />
        <Route path="/rating" component={Rating} />
        <Route path="/like_count" component={LikeCount} />
        <Route path="/option" component={Home} />
        <Route path="/movie/:id" component={Detail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
