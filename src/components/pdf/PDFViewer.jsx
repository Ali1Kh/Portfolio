import React, { useEffect, useState } from "react";
import $ from "jquery";
const PDFViewer = ({ pdfUrl }) => {
  useEffect(() => {
    $("body").click(() => {
      $(".pdfContainer").css("display", "none");
      $("body").css("overflow", "auto");
    });
  }, []);

  return (
    <div className="pdfFrame" style={{ width: "100%", height: "100%" }}>
      <div className="h-100">
        <iframe className="rounded-3" src={pdfUrl} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default PDFViewer;
