import styled from "styled-components/native";

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 20px;
`;
export const BarChartContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-left: -25px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  flex: 0.5;
`;
export const PickerContainer = styled.View`
  flex-direction: row;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 15px;
  width: 50px;
`;

export const DatesContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 10px;
`;

export const WeeksContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const FocusedDot = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;

export const ReportsContainer = styled.View`
  flex-direction: row;
  height: 80px;
`;
export const ReportsIconSection = styled.View`
  flex: 0.2;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-top: 8px;
`;
export const ReportsDetailsSection = styled.View`
  flex: 0.8;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProgressBar = styled.View`
  height: 20px;
  width: ${({ width }) => width};
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
`;

export const ViewReportsButton = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 20px;
`;
