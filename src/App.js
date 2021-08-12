import { BrowserRouter, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import LikeCount from "./routes/LikeCount";
import Rating from "./routes/Rating";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Route path="/" component={Home} exact={true} />
      <Route path="/rating" component={Rating} />
      <Route path="/like_count" component={LikeCount} />
      <Route path="/option" component={Home} />
      <Route path="/movie/:id" component={Detail} />
    </BrowserRouter>
  );
}

const GlobalStyled = createGlobalStyle`
html , body , #root{
  height:100%;
  background: #121212;
  font-family:'Roboto';
}
a, a:link, a:visited , a:hover , a:focus{
  text-decoration:none;
  color:unset
}
`;
export default App;
