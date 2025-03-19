import React from "react";

export default function Analytics() {
  return (
    <section className="stats secBg my-5 mt-3">
      <div className="container py-5">
        <div className="sectionTitle text-center primaryText mb-5 my-3">
          <h2>Github Stats</h2>
        </div>
        <div className="githubGraph d-flex justify-content-center">
          <div className="row gy-3">
            <div className="col-md-7">
              <div
                style={{
                  height: "180px",
                }}
                className="innerGraph h-100 rounded-1 overflow-hidden"
              >
                <img
                  style={{
                    objectFit: "cover",
                    border: "1px solid #7f3fbf",
                  }}
                  className="w-100 rounded-1 h-100"
                  src="https://camo.githubusercontent.com/fdb52f02a88347f60484bf8cbc227b775755e27380598727f7315af183a8050b/68747470733a2f2f6769746875622d70726f66696c652d73756d6d6172792d63617264732e76657263656c2e6170702f6170692f63617264732f70726f66696c652d64657461696c733f757365726e616d653d616c69316b68267468656d653d7261646963616c"
                />
              </div>
            </div>
            <div className="col-md-5">
              <div
                style={{
                  height: "180px",
                }}
                className="innerGraph h-100 "
              >
                <img
                  className="w-100 h-100"
                  src="https://camo.githubusercontent.com/e6e2057b8ea4a314797842bfe7d9b7f9ea2272f7eb2d55d14b6601ccb481c04b/68747470733a2f2f64656e766572636f646572312d6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616c69316b682673686f775f69636f6e733d7472756526636f756e745f707269766174653d74727565267468656d653d726561637426626f726465725f636f6c6f723d3746334642462662675f636f6c6f723d304431313137267469746c655f636f6c6f723d4638354437462669636f6e5f636f6c6f723d463844383636"
                />
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-start">
              <div
                style={{
                  minHeight: "180px",
                }}
                className="innerGraph overflow-hidden"
              >
                <img
                  style={{
                    objectFit: "cover",
                  }}
                  className="w-100 h-100"
                  src="https://camo.githubusercontent.com/ff72935a815e04befc154ae449f52fbbdb5b60a2a5d3f2639859af3197bfbd5b/68747470733a2f2f64656e766572636f646572312d6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d616c69316b68266c616e67735f636f756e743d38266c61796f75743d636f6d70616374267468656d653d726561637426626f726465725f636f6c6f723d3746334642462662675f636f6c6f723d304431313137267469746c655f636f6c6f723d4638354437462669636f6e5f636f6c6f723d463844383636"
                />
              </div>
            </div>
            <div className="col-md-7">
              <div
                style={{
                  minHeight: "180px",
                }}
                className="innerGraph rounded-1 overflow-hidden"
              >
                <img
                  style={{
                    objectFit: "cover",
                    border: "1px solid #7f3fbf",
                  }}
                  className="w-100 h-100 rounded-1"
                  src="https://camo.githubusercontent.com/7b52da7a94404445c271e86d1a7087866816025b99e3745cab9e3d1bed97b24c/68747470733a2f2f6769746875622d726561646d652d61637469766974792d67726170682e76657263656c2e6170702f67726170683f757365726e616d653d616c69316b6826637573746f6d5f7469746c653d416c69253230456c73616164616e792773253230476974487562253230416374697669747925323047726170682662675f636f6c6f723d30443131313726636f6c6f723d374633464246266c696e653d37463346424626706f696e743d37463346424626617265615f636f6c6f723d464646464646267469746c655f636f6c6f723d46464646464626617265613d74727565"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
