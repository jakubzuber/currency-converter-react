import styled from "styled-components";
import background from "./background.jpg"

export const Main = styled.form`
  font-family: 'Montserrat', sans-serif;
  color: white;
  padding: 0 20px;
  margin: 0 auto;
  background-image: url("${ background }");
  background-position: center;
  height: 100vh;
  background-size: cover;
`;

export const Field = styled.fieldset`
  border: 4px solid rgb(92, 158, 228);
  padding: 20px;
  border-radius: 20px;
  margin: 40px 0;
  max-width: 700px;
  margin: 0 auto;
  background-color: rgba(19, 71, 149, 0.723);
`;

export const Title = styled.legend`
  text-align: center;
  font-size: 25px;
  background-color: rgb(92, 158, 228);
  padding: 5px;
  border: 3px solid black;
  border-radius: 10px;
`;

export const Annotation = styled.p`
  font-size: 11px;
  text-decoration: underline;
  text-decoration-color: rgb(92, 158, 228);
`;