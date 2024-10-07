import React from "react";
import MainHeader from "../components/headers/mainHeader.tsx";
import Container from "../components/container.tsx";
// @ts-ignore
import img1 from "../assets/images/ComImg.png";
// @ts-ignore
import img2 from "../assets/images/EIN.png";
// @ts-ignore
import img3 from "../assets/images/bankStatement.png";
// @ts-ignore
import img4 from "../assets/images/utilityBill.png";

function ReviewDocument() {
  return (
    <main>
      <MainHeader />
      <Container>
        <>
          <h1 className="text-3xl lg:text-4xl font-extrabold lg:my-8">
            Review Document
          </h1>
          <p className="text-text_light">Business Name</p>
          <div className="flex flex-col my-4">
            <p className="text-text text-lg font-bold">Documents</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-4">
              <div className="p-8 border border-bg_light rounded-lg">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img src={img1} alt="img" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold text-text text-xl my-3">
                    Articles of Incorporation
                  </h2>
                  <p className="text-text_light">
                    Submitted by the business. Verify that the document is
                    legible, in color, and contains the full document.
                  </p>
                </div>
              </div>
              <div className="p-8 border border-bg_light rounded-lg">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img src={img2} alt="img" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold text-text text-xl my-3">
                    EIN Verification Letter
                  </h2>
                  <p className="text-text_light">
                    Submitted by the business. Verify that the document is
                    legible, in color, and contains the full document.
                  </p>
                </div>
              </div>
              <div className="p-8 border border-bg_light rounded-lg">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img src={img3} alt="img" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold text-text text-xl my-3">
                    Bank Statement
                  </h2>
                  <p className="text-text_light">
                    Submitted by the business. Verify that the document is
                    legible, in color, and contains the full document.
                  </p>
                </div>
              </div>
              <div className="p-8 border border-bg_light rounded-lg">
                <div className="w-16 h-16 rounded-lg overflow-hidden">
                  <img src={img4} alt="img" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold text-text text-xl my-3">
                    Utility Bill
                  </h2>
                  <p className="text-text_light">
                    Submitted by the business. Verify that the document is
                    legible, in color, and contains the full document.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      </Container>
    </main>
  );
}

export default ReviewDocument;
