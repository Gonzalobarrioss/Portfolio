import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  //padding: 40px 0;
`;

export const Box = styled.div`
  position: relative;
  width: 325px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 30px;
  transition: 0.5s;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
    background: linear-gradient(315deg, #ffbc00, #ff0058);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
    filter: blur(30px);
    transition: 0.5s;
    background: linear-gradient(315deg, #ffbc00, #ff0058);
  }

  &:hover {
    &:before,
    &:after {
      transform: skewX(0deg);
      left: 20px;
      width: calc(100% - 90px);
    }

    span {
      &:before {
        top: -50px;
        left: 50px;
        width: 100px;
        height: 100px;
        opacity: 1;
      }
      &:after {
        bottom: -50px;
        right: 50px;
        width: 100px;
        height: 100px;
        opacity: 1;
      }
    }

    .content {
      left: -25px;
      padding: 60px 40px;
    }
  }

  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
    pointer-events: none;

    @keyframes animate {
      0%,
      100% {
        transform: translateY(10px);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: 0.5s;
      animation: animate 2s ease-in-out infinite;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: 0.5s;
      animation: animate 2s ease-in-out infinite;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      animation-delay: 1s;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  left: 0;
  padding: 20px 40px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  z-index: 1;
  transition: 0.5s;
  color: #fff;
`;

export const H2 = styled.h2`
  font-size: 2em;
  color: #fff;
  margin-bottom: 10px;
`;

export const P = styled.p`
  font-size: 1.1em;
  margin-bottom: 10px;
  line-height: 1.4em;
`;

export const Link = styled.a`
  display: inline-block;
  font-size: 1.1em;
  color: #111;
  background: #fff;
  padding: 10px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  margin-top: 5px;
`;