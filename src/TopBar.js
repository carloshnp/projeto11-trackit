import styled from "styled-components";
import { useContext } from "react";

export default function TopBar() {
  // const userImage = useContext(UserContext)
  return (
    <Container>
      <p>TrackIt</p>
      {/* <img src={userImage} alt={"profileImage"} /> */}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  p {
    margin-top: 10px;
    margin-left: 18px;
    height: 49px;
    font-size: 38px;
  }

  img {
    margin-top: 9px;
    margin-rigth: 18px;
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
