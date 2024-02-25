import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./layout/Layout";

export const App = () => {
  return (
    <Router>
      <Layout />
    </Router>
  );
};
