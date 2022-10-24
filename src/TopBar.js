import styled from "styled-components";
import { useUserContext } from "./Usuario";

export default function TopBar() {
  const { user } = useUserContext();
  console.log(user.image);
  return (
    <Container>
      <p>TrackIt</p>
      <img src={user.image} alt={"profileImage"} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-family: 'Playball', cursive;

  p {
    margin: 15px 0 0 18px;
    height: 49px;
    font-size: 38px;
    color: #ffffff;
  }

  img {
    margin: 9px 18px 0 0;
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
  }
`;
