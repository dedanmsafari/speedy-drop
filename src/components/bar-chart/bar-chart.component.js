import { BarChart } from "react-native-chart-kit";
import React from "react";
import { Dimensions } from "react-native";
import { colors } from "../../infrastructure/theme/colors";

function* yLabel() {
  yield* ["0", "50", "100", "150", "200", "250", "350", "400"];
}

const screenWidth = Dimensions.get("window").width;
const yLabelIterator = yLabel();
const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#ffffff",
  backgroundGradientToOpacity: 0,
  fillShadowGradientFrom: "#004b26",
  fillShadowGradientFromOpacity: 1,
  fillShadowGradientTo: "#004b26",
  fillShadowGradientToOpacity: 1,
  decimalPlaces: 0,
  // formatYLabel: () => yLabelIterator.next().value,
  color: () => colors.brand.primary,
  barRadius: 10,
  barPercentage: 0.4,
  useShadowColorFromDataset: false,
};

const data = {
  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  datasets: [
    {
      data: [400, 300, 400, 400, 300, 400, 300],
    },
  ],
};

export const BarChartComponent = () => {
  return (
    <BarChart
      data={data}
      fromZero={true}
      width={screenWidth}
      withInnerLines={false}
      showBarTops={false}
      height={350}
      chartConfig={chartConfig}
    />
  );
};
