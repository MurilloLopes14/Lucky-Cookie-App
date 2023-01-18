import styled from "styled-components/native";

export const AppStyle = styled.View`
  background-color: #16b8f3;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 30px;
  color: aliceblue;
  margin: 10px 10px;
  letter-spacing: 1px;
  text-align: center;
  font-weight: bold;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;

export const OpacityButton = styled.TouchableOpacity`
  width: 250px;
  border-radius: 15px;
  border: 2px solid #aaa;
  padding: 5px 10px;
  filter: brightness(1.1);
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: azure;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
