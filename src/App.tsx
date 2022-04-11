import React from "react";
import { FC } from "react";
import { BrowserRouter,} from "react-router-dom";
import Header from "./components/Header";
const LazyProduct = React.lazy(() => import('./components/Sections'))
const App:FC = () => {
  return (
    <div className="app">
    <BrowserRouter>
      <Header />
        <LazyProduct />
    </BrowserRouter>
    </div>
  );
}

export default App;
