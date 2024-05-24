import React from "react";

const BestSeller = () => {
  return (
    <div>
      <div className="bestseller">
        <div className="best">
          <h1 className="besttext">Awesome</h1>
          <h3 className="besttitle">Shop</h3>
        </div>

        <div className="next2">
          <h3>NEXT</h3>
          <h3>Previous</h3>
        </div>
      </div>

      <div className="cards">
        <div className="image1">
          <img
            className="img"
            src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png"
            alt=""
          />
          <h1>Orange Chair</h1>
          <p>$140</p>
        </div>

        <div className="image2">
          <img
            className="img"
            src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_3.png"
            alt=""
          />
          <h1>Chair</h1>
          <p>$500</p>
        </div>

        <div className="image3">
        <img
            className="img"
            src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png"
            alt=""
          />
          <h1>Chair</h1>
          <p>$590</p>

        </div>
        <div className="image4">
        <img
            className="img"
            src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png"
            alt=""
          />
          <h1>Chair</h1>
          <p>$590</p>
        </div>

      </div>
    </div>
  );
};

export default BestSeller;
