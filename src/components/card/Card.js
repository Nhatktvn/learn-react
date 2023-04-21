import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      height: 100%;
      width: 100%;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    width: calc(100% - 38px);
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
    z-index: 10;
    border-radius: 20px;
    .content-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        .user-name {
          font-size: 16px;
          font-weight: 300;
        }
      }
      .card-like {
        display: flex;
        align-items: center;
        column-gap: 12px;
        img {
          display: flex;
          align-items: center;
          column-gap: 12px;
        }
        .like-number {
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
        }
      }
    }
    .content-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content-title {
        font-size: 18px;
        font-weight: 500;
        color: black;
        margin: 0;
      }
      .content-number {
        font-size: ${(props) => props.fontSize || "18px"};
        font-weight: 700;
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
        color: transparent;
        ${(props) =>
          props.secondary &&
          css`
            background: red;
          `};
        -webkit-background-clip: text;
        background-clip: text;
      }
    }
  }
`;

const Card = (props) => {
  return (
    <StyledCard secondary={props.secondary} fontSize={props.fontSize}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=400x300&vertical=top"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="content-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=400x300&vertical=top"
              alt=""
            />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-like">
            <img src="/coolicon.svg" alt="" />
            <span className="like-number">256</span>
          </div>
        </div>
        <div className="content-bottom">
          <div className="content-title">Cosmic Perspective</div>
          <span
            className="content-number"
            secondary={props.secondary}
            fontSize={props.fontSize}
          >
            12,000 PSL{" "}
          </span>
        </div>
      </div>
    </StyledCard>
  );
};
export default Card;
