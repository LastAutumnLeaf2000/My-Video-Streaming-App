import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
// import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import WatchPage from "./components/WatchPage";
import { Suspense, lazy } from "react";
import Shimmer from "./components/Shimmer";
const WatchPage = lazy(()=>import("./components/WatchPage"))

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<MainContainer />} />
              <Route path="watch" element={<Suspense fallback={<Shimmer/>}>
                                                <WatchPage />
                                           </Suspense>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
