import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import V4InteractionsVariables from "./pages/V4InteractionsVariables";
import AndroidCompact from "./pages/AndroidCompact";
import V2WithAutoLayout from "./pages/V2WithAutoLayout";
import V3WithMoreAutoLayoutAnd from "./pages/V3WithMoreAutoLayoutAnd";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/no-effort":
        title = "";
        metaDescription = "";
        break;
      case "/v2-with-auto-layout":
        title = "";
        metaDescription = "";
        break;
      case "/v3-with-more-auto-layout-and-layer-building":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<V4InteractionsVariables />} />
      <Route path="/no-effort" element={<AndroidCompact />} />
      <Route path="/v2-with-auto-layout" element={<V2WithAutoLayout />} />
      <Route
        path="/v3-with-more-auto-layout-and-layer-building"
        element={<V3WithMoreAutoLayoutAnd />}
      />
    </Routes>
  );
}
export default App;
