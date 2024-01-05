import React from "react";
import { Box, Typography } from "@mui/material";

export const AddMetric = ({ setOpen, setCurrentMetric }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        height: 100,
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)), #FFFFFF",
        border: "1px dashed #000000",
        borderRadius: 2,
        cursor: "pointer",
      }}
      onClick={() => {
        setCurrentMetric({
          metricName: "",
          description: "",
          thresholds: { warningThreshold: 0, criticalThreshold: 0 },
          alertConditions: { conditionType: "", duration: "" },
          labels: [{ key: "", value: "" }],
          annotations: [{ key: "", value: "" }],
        });
        setOpen(true);
      }}
    >
      <Typography variant="h3">Add Metrics</Typography>
    </Box>
  );
};
