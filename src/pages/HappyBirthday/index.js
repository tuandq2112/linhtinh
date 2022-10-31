import React, { useEffect, useState } from "react";
import { FoodRandomWrapper } from "./styled";

function SinhNhatCoHue() {
  const [state, _setState] = useState({
    list: ["Bún bò", "Bún bò", "Bún bò", "Bún bò", "Bún bò", "Bún bò"],

    radius: 75, // PIXELS
    rotate: 0, // DEGREES
    easeOut: 0, // SECONDS
    angle: 0, // RADIANS
    top: null, // INDEX
    offset: null, // RADIANS
    net: null, // RADIANS
    result: null, // INDEX
    spinning: false,
  });
  const setState = (data = {}) => {
    _setState((prevState) => ({ ...prevState, ...data }));
  };

  useEffect(() => {
    renderWheel();
  }, []);

  const renderWheel = () => {
    // determine number/size of sectors that need to created
    let numOptions = state.list.length;
    let arcSize = (2 * Math.PI) / numOptions;
    setState({
      angle: arcSize,
    });

    // get index of starting position of selector
    topPosition(numOptions, arcSize);

    // dynamically generate sectors from state list
    let angle = 0;
    for (let i = 0; i < numOptions; i++) {
      let text = state.list[i];
      renderSector(i + 1, text, angle, arcSize, getColor());
      angle += arcSize;
    }
  };

  const topPosition = (num, angle) => {
    // set starting index and angle offset based on list length
    // works upto 9 options
    let topSpot = null;
    let degreesOff = null;
    if (num === 9) {
      topSpot = 7;
      degreesOff = Math.PI / 2 - angle * 2;
    } else if (num === 8) {
      topSpot = 6;
      degreesOff = 0;
    } else if (num <= 7 && num > 4) {
      topSpot = num - 1;
      degreesOff = Math.PI / 2 - angle;
    } else if (num === 4) {
      topSpot = num - 1;
      degreesOff = 0;
    } else if (num <= 3) {
      topSpot = num;
      degreesOff = Math.PI / 2;
    }

    setState({
      top: topSpot - 1,
      offset: degreesOff,
    });
  };

  const renderSector = (index, text, start, arc, color) => {
    // create canvas arc for each list element
    let canvas = document.getElementById("wheel");
    let ctx = canvas.getContext("2d");
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let radius = state.radius;
    let startAngle = start;
    let endAngle = start + arc;
    let angle = index * arc;
    let baseSize = radius * 3.33;
    let textRadius = baseSize - 150;

    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle, false);
    ctx.lineWidth = radius * 2;
    ctx.strokeStyle = color;

    ctx.font = "17px Arial";
    ctx.fillStyle = "black";
    ctx.stroke();

    ctx.save();
    ctx.translate(
      baseSize + Math.cos(angle - arc / 2) * textRadius,
      baseSize + Math.sin(angle - arc / 2) * textRadius
    );
    ctx.rotate(angle - arc / 2 + Math.PI / 2);
    ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
    ctx.restore();
  };

  const getColor = () => {
    // randomly generate rbg values for wheel sectors
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgba(${r},${g},${b},0.4)`;
  };

  const spin = () => {
    // set random spin degree and ease out time
    // set state variables to initiate animation
    let randomSpin = Math.floor(Math.random() * 900) + 500;
    setState({
      rotate: randomSpin,
      easeOut: 2,
      spinning: true,
    });

    // calcalute result after wheel stops spinning
    setTimeout(() => {
      getResult(randomSpin);
    }, 2000);
  };

  const getResult = (spin) => {
    // find net rotation and add to offset angle
    // repeat substraction of inner angle amount from total distance traversed
    // use count as an index to find value of result from state list
    const { angle, top, offset, list } = state;
    let netRotation = ((spin % 360) * Math.PI) / 180; // RADIANS
    let travel = netRotation + offset;
    let count = top + 1;
    while (travel > 0) {
      travel = travel - angle;
      count--;
    }
    let result;
    if (count >= 0) {
      result = count;
    } else {
      result = list.length + count;
    }

    // set state variable to display result
    setState({
      net: netRotation,
      result: result,
    });
  };

  const reset = () => {
    // reset wheel and result
    setState({
      rotate: 0,
      easeOut: 0,
      result: null,
      spinning: false,
    });
  };
  return (
    <div>
      <div class="container-fluid">
        <div class="jumbotron img_banner_hpbd">
          <div class="text-center text-danger bg-danger">
            <h1>TO: NGUYEN TRAN THUY VAN</h1>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row ">
          <div class="col-xs-4 col-md-4 col-sm-4">
            <p style="padding-top: 5px"></p>
            <span class="text-capitalize text-right bottom-align-text" />

            <p></p>
          </div>
          <div id="bond" class="col-xs-8 col-md-8 col-sm-8 text-center">
            <img
              data-toggle="modal"
              data-target="#myModal"
              class="media-object img-responsive img-thumbnail bg-snow-tranparent-hidden"
              src="img/Winter happy birthday.jpg"
              alt="80x80px"
              style="height: 360px"
            />
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="myModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 class="modal-title text-info" id="myModalLabel">
                Thiệp sinh nhật
              </h4>
            </div>
            <div class="modal-body">
              <div class="containeri">
                <img
                  class="img img-responsive"
                  src="img/Winter happy birthday.jpg"
                  alt="80x80px"
                  style="height: 560px"
                />
                <audio controls autoplay>
                  <source src="ms/hpbd.MP3" type="audio/ogg" />
                  <source src="ms/hppd.MP3" type="audio/mpeg" />
                  <a href="#">horse</a>
                </audio>
              </div>
              <h1 class="heading text-danger bg-danger">
                <div class="containeri">
                  <img
                    class="img img-responsive"
                    src="img/Snowmen-and-Sledding-Thank-You-Note.jpg"
                  />
                  <p class="top-right">Cô Tạ Thị Kim Huệ</p>
                  <p class="bottom-right">going karaoke with me</p>
                  <p class="top-left">grilling meat a lot for me</p>
                  <p class="and">and making me happy.</p>
                  <p class="center">Happy birthday to you!</p>
                  <p class="bottom-left">Sok Kim Thanh</p>
                </div>
              </h1>
              <div class="containeri">
                <img class="img img-responsive" src="img/tntv.jpg" />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" class="btn btn-primary">
                OK
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer class="container-fluid footer navbar-fixed-bottom">
        <div class="container">
          <div class="row">
            <div class="col-xs-8">
              <p class="text-left">
                Copyright &copy; 2017 - www.facebook.com/sok.thanh
              </p>
            </div>
            <div class="col-xs-4">
              <p class="text-center text-capitalize kp">
                HAPPY BIRTHDAY TO YOU!{" "}
              </p>
              <img class="img img-responsive" src="img/title.jpg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SinhNhatCoHue;
