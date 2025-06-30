import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsOfServiceEn from "../src/components/TermsOfServiceEn"
import DataProcessingAgreement from "../src/components/DataProcessingAgreement"
import SubProcessor from "./components/SubProcessor";
import PrivacyPolicy from "./components/PrivacyPolicy";


function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<TermsOfServiceEn />} />
        <Route path="/DataProcessingAgreement" element={<DataProcessingAgreement />} />
        <Route path="/SubProcessor" element={<SubProcessor />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
