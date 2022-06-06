import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Wrapper = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin: 0 7px 7px;
  color: ${({ theme }) => theme.colors.attention};
`;
