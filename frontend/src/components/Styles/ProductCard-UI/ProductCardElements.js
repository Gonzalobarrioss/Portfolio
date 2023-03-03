import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Card = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;

  &:hover {
    &:before {
      clip-path: circle(300px at 80% -20%);
    }

    .imgbox {
      top: 0%;
      transform: translateY(0%);
    }

    .contentbox {
      height: 210px;
    }

    .size {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.5s;
    }

    .color {
      opacity: 1;
      visibility: visible;
      transition-delay: 0.6s;
    }

    .link {
      opacity: 1;
      transform: translateY(0px);
      transition-delay: 0.75s;
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #9bdc28;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }
  &:after {
    content: "Nike";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 12em;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.04);
  }
`;

export const ImgBx = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10000;
  width: 100%;
  height: 220px;
  transition: 0.5s;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-25deg);
    width: 270px;
  }
`;

export const ContentBx = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;
`;

export const H2 = styled.h2`
  padding: 0;
  margin: 0;
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
`;

export const Size = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;

  span {
    width: 26px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    display: inline-block;
    color: #111;
    background: #fff;
    margin: 0 5px;
    transition: 0.5s;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background: #9bdc28;
    }
  }
`;

export const H3 = styled.h3`
  padding: 0;
  margin: 0;
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
`;

export const Color = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;

  span {
    width: 20px;
    height: 20px;
    background: #ff0;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;

    &:nth-child(2) {
      background: #9bdc28;
    }
    &:nth-child(3) {
      background: #03a9f4;
    }
    &:nth-child(4) {
      background: #e91e63;
    }
  }
`;

export const Link = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  cursor: pointer;
`;
