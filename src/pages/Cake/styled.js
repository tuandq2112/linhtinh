import styled from "styled-components";

export const CakeWrapper = styled.div`
  /* Cake Base */
  position: relative;
  margin: 100px auto;
  width: 200px;
  .cake-body {
  }
  .layer {
    display: block;
    background: #ffa177;
    height: 50px;
    width: 150px;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    position: absolute;
    top: 400px
  }

  .f1 {
    top: 90px;
    background: #774f38;
    height: 60px;
  }
  .f2 {
    top: 60px;
    background: #ece5ce;
    height: 60px;
  }
  .f3 {
    top: 30px;
    background: #e08e79;
    height: 60px;
  }
  .f4 {
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    background: #59280f;
    top: 6px;
  }

  /* Cake Spots */

  .spot-group {
    display: block;
    height: 14px;
    width: 14px;
    position: absolute;
  }
  .spot {
    display: block;
    height: 4px;
    width: 4px;
    border-radius: 50%;
    position: absolute;
  }
  .f1 .spot {
    background: #8c5f45;
  }
  .f2 .spot {
    background: #d6cfb6;
  }
  .f3 .spot {
    background: #eb9e8a;
  }
  .sg1 {
    bottom: 20px;
    left: 5px;
  }
  .s1 {
    top: 2px;
    left: 10px;
  }
  .s2 {
    top: 7px;
    left: 5px;
  }
  .s3 {
    left: 2px;
  }
  .sg1 {
    bottom: 20px;
    left: 5px;
  }
  .sg2 {
    bottom: 20px;
    right: 10px;
  }
  .sg3 {
    bottom: 21px;
    left: 6px;
  }
  .sg4 {
    bottom: 11px;
    right: 33px;
  }
  .sg5 {
    bottom: 15px;
    left: 25px;
  }
  .sg6 {
    bottom: 20px;
    right: 10px;
  }
  /* Icing */

  .icing {
    display: block;
    height: 50px;
    width: 150px;
    border-radius: 50%;
    background: #59280f;
    background-image: -webkit-gradient(
      linear,
      left bottom,
      left top,
      color-stop(0.29, #59280f),
      color-stop(0.8, #692f12)
    );
    position: absolute;
    top: 0px;
    z-index: 2;
  }

  /* Icing Drips */

  .drip-ctn {
    position: absolute;
    top: 0;
    z-index: 1;
  }
  .drip {
    display: block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #59280f;
    position: absolute;
  }
  .d1 {
    height: 25px;
    top: 20px;
  }
  .d2 {
    top: 30px;
    left: 15px;
  }
  .d3 {
    top: 35px;
    left: 30px;
  }
  .d4 {
    top: 38px;
    left: 47px;
  }
  .d5 {
    top: 40px;
    left: 65px;
  }
  .d6 {
    top: 38px;
    right: -100px;
  }
  .d7 {
    top: 35px;
    right: -115px;
  }
  .d8 {
    top: 30px;
    right: -133px;
  }
  .d9 {
    height: 25px;
    top: 20px;
    right: -150px;
  }

  /* Candles */

  .candle-ctn {
    display: block;
    width: 150px;
    height: 80px;
    position: absolute;
    top: -30px;
    z-index: 3;
  }
  .candle {
    position: absolute;
    top: 20px;
    left: 70px;
  }
  .c-base {
    display: block;
    height: 30px;
    width: 10px;
    background: #5fedb5;
    position: absolute;
    z-index: 2;
  }
  .wick {
    display: block;
    width: 2px;
    height: 6px;
    background: #ccc;
    position: absolute;
    top: -5px;
    left: 4px;
  }
  .flame {
    display: ${(props) => (props.burn ? "block" : "none")};
    height: 16px;
    width: 8px;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    background: #ff9e00;
    position: absolute;
    top: -20px;
    left: 1px;
    box-shadow: 0px 0px 20px yellow;
    -webkit-animation: flicker 2s infinite;
  }
  .highlight {
    display: block;
    height: 30px;
    width: 60px;
    background: #333;
    border-radius: 50%;
    position: absolute;
    top: 17px;
    left: -25px;
    background: -webkit-radial-gradient(
      center,
      ellipse cover,
      rgba(145, 66, 26, 1) 0%,
      rgba(105, 47, 18, 0) 80%
    );
    z-index: 1;
    -webkit-animation: highlight 2s infinite;
  }

  @-webkit-keyframes highlight {
    0% {
      opacity: 1;
    }
    5% {
      opacity: 1;
      -webkit-transform: translateY(-1px);
    }
    10% {
      opacity: 0.8;
    }
    15% {
      opacity: 1;
    }
    20% {
      opacity: 0.75;
      -webkit-transform-origin: right;
      -webkit-transform: translateX(1px);
    }
    25% {
      opacity: 1;
      -webkit-transform: translateY(1px) scaleY(0.9);
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 1;
    }
    40% {
      opacity: 0.9;
      -webkit-transform: translateX(-1px);
    }
    42% {
      opacity: 1;
    }
    50% {
      opacity: 0.85;
      -webkit-transform-origin: right;
      -webkit-transform: translateX(1px);
    }
    55% {
      opacity: 1;
      -webkit-transform: translateY(-1px);
    }
    60% {
      opacity: 0.9;
    }
    65% {
      opacity: 1;
    }
    70% {
      opacity: 0.95;
      -webkit-transform: translateX(-1px);
    }
    75% {
      opacity: 1;
      -webkit-transform: translateY(1px);
    }
    80% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    90% {
      -webkit-transform: translateX(-1px);
    }
    92% {
      opacity: 0.95;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes flicker {
    0% {
      opacity: 1;
    }
    5% {
      opacity: 1;
      -webkit-transform: translateY(-1px);
    }
    10% {
      opacity: 0.8;
    }
    15% {
      opacity: 1;
      -webkit-transform: scaleY(1.1);
    }
    20% {
      opacity: 0.75;
      -webkit-transform-origin: right;
      -webkit-transform: skew(-4deg);
    }
    25% {
      opacity: 1;
      -webkit-transform: translateY(2px) scaleY(0.9);
    }
    30% {
      opacity: 1;
    }
    35% {
      opacity: 1;
    }
    40% {
      opacity: 0.9;
      -webkit-transform-origin: left;
      -webkit-transform: skew(3deg);
    }
    42% {
      opacity: 1;
    }
    50% {
      opacity: 0.85;
      -webkit-transform-origin: right;
      -webkit-transform: skew(-2deg);
    }
    55% {
      opacity: 1;
      -webkit-transform: translateY(-1px);
    }
    60% {
      opacity: 0.9;
    }
    65% {
      opacity: 1;
      -webkit-transform: scaleY(1);
    }
    70% {
      opacity: 0.95;
      -webkit-transform-origin: right;
      -webkit-transform: skew(-3deg);
    }
    75% {
      opacity: 1;
      -webkit-transform: translateY(2px) scaleY(0.9);
    }
    80% {
      opacity: 1;
    }
    85% {
      opacity: 1;
    }
    90% {
      opacity: 0.8;
      -webkit-transform-origin: left;
      -webkit-transform: skew(2deg);
    }
    92% {
      opacity: 0.95;
    }
    100% {
      opacity: 1;
    }
  }
`;
