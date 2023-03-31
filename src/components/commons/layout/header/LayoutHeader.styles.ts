import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 120px;
  background: rgb(247, 248, 250);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
`;

export const InnerLogo = styled.div`
  font-size: 35px;
  font-weight: bold;
  font-family: "Jalnan";
  color: gold;
  cursor: pointer;
`;

export const InnerButton = styled.span`
  margin: 10px;
  color: gold;
  cursor: pointer;
  font-family: "Jalnan";
`;