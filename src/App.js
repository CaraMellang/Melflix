import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Genres from "./routes/Genres";
import Rating from "./routes/Rating";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Navigation />
      <Route path="/" component={Home} exact={true} />
      <Route path="/rating" component={Rating} />
      <Route path="/genres" component={Genres} />
      <Route path="/option" component={Home} />
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

const GlobalStyled = createGlobalStyle`
html , body , #root{
  /* height:100%; */
  background: #181818;
  /* #121212 */
  font-family:'Roboto';
}
a, a:link, a:visited , a:hover , a:focus{
  text-decoration:none;
  color:unset
}
`;
export default App;
