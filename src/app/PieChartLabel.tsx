import React, { FC } from "react";
import {
  EventPropTypeInterface,
  StringOrNumberOrCallback,
  VictoryLabel,
  VictoryLabelProps,
  VictoryTooltip,
  VictoryTooltipProps,
} from "victory";

type PieChartLabelProps = {} & VictoryLabelProps & VictoryTooltipProps;

const PieChartLabel: FC<PieChartLabelProps> & {
  defaultEvents: EventPropTypeInterface<string, StringOrNumberOrCallback>[];
} = (props) => {
  return (
    <g>
      <VictoryLabel {...props} />

      <VictoryTooltip
        {...props}
        text={({ datum }) => `${datum.x}\n${datum.y}%`}
        style={{ fill: "#000", fontSize: 25 }}
        x={250}
        y={250}
        orientation="top"
        pointerLength={0}
        cornerRadius={50}
        flyoutWidth={150}
        flyoutHeight={100}
        flyoutStyle={{ fill: "#FBD1A2" }}
      />
    </g>
  );
};

PieChartLabel.defaultEvents = VictoryTooltip.defaultEvents;

export default PieChartLabel;
