import { Box, Typography } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const Metric = ({
  metric,
  metrics,
  setMetrics,
  setOpenMetricForm,
  setCurrentMetric,
}) => {
  const deleteMetric = () => {
    let newMetrics = metrics.filter((m) => m.metricName !== metric.metricName);
    setMetrics(newMetrics);
  };

  const editMetric = () => {
    setCurrentMetric(metric);
    setOpenMetricForm(true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{ bgcolor: "#E7E7E7", borderRadius: 2, p: 2 }}
    >
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Box display="flex" flexDirection="row" gap={1} alignItems="center">
          <Typography color="primary" fontWeight="bold">
            {metric.metricName}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row" gap={1}>
          <EditIcon
            sx={{
              cursor: "pointer",
              color: "primary.main",
              "&:hover": { color: "secondary.main" },
            }}
            fontSize="small"
            onClick={editMetric}
          />
          <DeleteIcon
            sx={{
              cursor: "pointer",
              color: "primary.main",
              "&:hover": { color: "secondary.main" },
            }}
            fontSize="small"
            onClick={deleteMetric}
          />
        </Box>
      </Box>
      <Typography variant="body1">Description: {metric.description}</Typography>
      <Typography variant="body1">
        Warning Threshold: {metric.thresholds.warningThreshold}
      </Typography>
      <Typography variant="body1">
        Critical Threshold: {metric.thresholds.criticalThreshold}
      </Typography>
      <Typography variant="body1">
        Condition Type: {metric.alertConditions.conditionType}
      </Typography>
      <Typography variant="body1">
        Duration: {metric.alertConditions.duration}
      </Typography>
      <Box>
        <Typography variant="h6">Labels:</Typography>
        {metric.labels.map((label, index) => (
          <Typography key={index} variant="body1">
            {label.key}: {label.value}
          </Typography>
        ))}
      </Box>
      <Box>
        <Typography variant="h6">Annotations:</Typography>
        {metric.annotations.map((annotation, index) => (
          <Typography key={index} variant="body1">
            {annotation.key}: {annotation.value}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
