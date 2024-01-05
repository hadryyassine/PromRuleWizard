import { Box, Typography } from "@mui/material";
import * as React from "react";
import { AddMetric } from "./addMetrics";
import { Metric } from "./Metrics";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const MetricList = ({ Metrics, setOpenMetricForm, setMetrics, setCurrentMetric }) => {
  const [visibleDesc, setVisibleDesc] = React.useState(false);

  return (
    <Box display="flex" flexDirection="column" sx={{ width: "80%" }} gap={2}>
      <Box display="flex" flexDirection="row" gap={1}>
        <Typography variant="h2">Metrics</Typography>
        {!visibleDesc && (
          <KeyboardArrowDownIcon
            sx={{ cursor: "pointer", title: "Show description" }}
            onClick={() => setVisibleDesc(true)}
          />
        )}
        {visibleDesc && (
          <KeyboardArrowUpIcon
            sx={{ cursor: "pointer", title: "Hide description" }}
            onClick={() => setVisibleDesc(false)}
          />
        )}
      </Box>
      {visibleDesc && (
        <Typography>
          A Metric is a singular execution unit that contains a set commands
        </Typography>
      )}
      {Metrics.map((Metric) => {
        return (
          <Metric
            Metric={Metric}
            Metrics={Metrics}
            setMetrics={setMetrics}
            setOpenMetricForm={setOpenMetricForm}
            setCurrentMetric={setCurrentMetric}
          />
        );
      })}
      <AddMetric setOpen={setOpenMetricForm} setCurrentMetric={setCurrentMetric} />
    </Box>
  );
};