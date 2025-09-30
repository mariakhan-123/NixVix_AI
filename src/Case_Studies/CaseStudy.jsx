import React, { useState } from "react";
import CaseStudyDetail from "./CaseStudyDetail";
import CaseStudyList from "./CaseStudyList";

import {caseData} from './CaseStudyData'

function CaseStudy() {
  

  const [activeCase, setActiveCase] = useState(caseData[0]);

  return (
    <div className="case-study-wrapper">
      {/* Detail Section */}
      <CaseStudyDetail activeCase={activeCase} />

      {/* Cards Section */}
      <CaseStudyList
        caseData={caseData}
        activeCase={activeCase}
        setActiveCase={setActiveCase}
      />
    </div>
  );
}

export default CaseStudy;
