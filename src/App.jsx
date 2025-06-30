import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsOfServiceEn from "../src/components/TermsOfServiceEn"
import DataProcessingAgreement from "../src/components/DataProcessingAgreement"
import SubProcessor from "./components/SubProcessor";
import PrivacyPolicy from "./components/PrivacyPolicy";
import DEPrivacyPolicy from "./components/DEPrivacyPolicy";
import DEDataProcessingAgreement from "./components/DEDataProcessingAgreement";''
import DETermsOfService from "./components/DETermsOfService";
import DESubProcessor from "./components/DESubProcessor";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<TermsOfServiceEn />} />
        <Route path="/DataProcessingAgreement" element={<DataProcessingAgreement />} />
        <Route path="/SubProcessor" element={<SubProcessor />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/DEPrivacyPolicy" element={<DEPrivacyPolicy />} />
        <Route path="/DEDataProcessingAgreement" element={<DEDataProcessingAgreement />} />
        <Route path="/DETermsOfService" element={<DETermsOfService />} />
        <Route path="/DESubProcessor" element={<DESubProcessor />} />
      </Routes>
    </Router>
  );
}

export default App;
