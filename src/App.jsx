import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TermsOfServiceEn from "../src/components/TermsOfServiceEn"
import DataProcessingAgreement from "../src/components/DataProcessingAgreement"



function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<TermsOfServiceEn />} />
        <Route path="/DataProcessingAgreement" element={<DataProcessingAgreement />} />
      </Routes>
    </Router>
  );
}

export default App;
