import styled from "styled-components";
import Header from "./Header";
import ListProducts from "./ListProducts";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

export default function Menu() {
  const {user} = useContext(UserContext);

  return (
    <>
      <Body>
        <Header />

        <Topic>
          <h2>Olá {user}, Escolha já o melhor móvel para sua casa!</h2>
        </Topic>

        <Products>
          <h6>Produtos</h6>

          <Box>
            <ListProducts />
          </Box>
        </Products>
      </Body>
    </>
  );
}

const Body = styled.div`
  background-color: #f7f7f7;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`;

const Topic = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 100px;

h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 18px;
    padding-left: 10px;
    color: #BA8A23
}
`;

const Products = styled.div`
  margin-top: 10px;

  h6 {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    padding-top: 35px;
    padding-left: 26px;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Card = styled.div`
  height: 220px;
  width: 150px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 100%;
    height: 100px;
    border-radius: 5px;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: #808080;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  h4 {
    padding-top: 15px;
    font-size: 17px;
    color: black;
    font-family: "Poppins", sans-serif;
    margin-bottom: 20px;
  }

  ion-icon {
    font-size: 22px;
    padding-top: 13px;
  }
`;
