import React from "react";
import { CakeWrapper } from "./styled";

function Cake() {
  return (
    <CakeWrapper>
      <div className="layer f1">
        <div className="spot-group sg1">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
          <div className="spot s3"></div>
        </div>
        <div className="spot-group sg2">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
        </div>
      </div>
      <div className="layer f2">
        <div className="spot-group sg3">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
        </div>
        <div className="spot-group sg4">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
          <div className="spot s3"></div>
        </div>
      </div>
      <div className="layer f3">
        <div className="spot-group sg5">
          <div className="spot s1"></div>
          <div className="spot s2"></div>
          <div className="spot s3"></div>
        </div>
      </div>
      <div className="layer f4">
        <div className="drip-ctn">
          <div className="drip d1"></div>
          <div className="drip d2"></div>
          <div className="drip d3"></div>
          <div className="drip d4"></div>
          <div className="drip d5"></div>
          <div className="drip d6"></div>
          <div className="drip d7"></div>
          <div className="drip d8"></div>
          <div className="drip d9"></div>
        </div>
      </div>
      <div className="candle-ctn">
        <div className="candle c1">
          <div className="c-base"></div>
          <div className="wick"></div>
          <div className="flame"></div>
          <div className="highlight"></div>
        </div>
      </div>
    </CakeWrapper>
  );
}

export default Cake;
