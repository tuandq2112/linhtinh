import styled from "styled-components";

export const FoodRandomWrapper = styled.div`
  text-align: center;
  button {
    background: none;
    border: 1px solid black;
    font-size: 20px;
    border-radius: 5px;
  }

  #spin,
  #reset {
    position: absolute;
    bottom: 20vh;
    right: 45vw;
  }

  #spin:hover {
    color: rgb(0, 180, 120);
    border-color: rgb(0, 180, 120);
  }

  #spin:focus,
  #reset:focus {
    outline: none;
  }

  /* #reset {
  position: absolute;
  bottom: 20vh;
  right: 35vw;
} */

  #reset:hover {
    color: red;
    border-color: red;
  }

  #readout {
    position: absolute;
    bottom: 7vh;
    left: 35vw;
  }

  #selector {
    position: absolute;
    top: 21vh;
    right: 47.5vw;
    font-size: 40px;
    z-index: 3;
  }

  #result {
    font-size: 50px;
    color: rgb(0, 180, 120);
  }

  input {
    font-size: 16px;
    border: none;
    border-bottom: 1px solid black;
  }
`;
