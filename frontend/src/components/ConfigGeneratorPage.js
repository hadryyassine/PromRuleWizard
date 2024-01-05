import React, { useState, useCallback } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ConfigGeneratorHeader } from "./ConfigGeneratorHeader";
import { MetricForm } from "./MetricsForm";
import { MetricList } from "./MetricsList";
import { ConfigFileView } from "./ConfigFileView";
import { generateConfigFile } from "../service/service";

export const ConfigGeneratorPage = () => {
  const [metrics, setMetrics] = useState([]);
  const [configFileResponse, setConfigFileResponse] = useState("");
  const [currentMetric, setCurrentMetric] = useState(null);
  const [openMetricForm, setOpenMetricForm] = useState(false);

  const handleGenerateConfigFile = () => {
    generateConfigFile(metrics, setConfigFileResponse);
  };

  const updateMetrics = useCallback(
    (newMetric) => {
      const updatedMetrics = [...metrics];
      const index = metrics.findIndex(
        (m) => m.metricName === newMetric.metricName
      );
      if (index >= 0) {
        updatedMetrics[index] = newMetric;
      } else {
        updatedMetrics.push(newMetric);
      }
      setMetrics(updatedMetrics);
      console.log("Updated metrics", updatedMetrics);
    },
    [metrics]
  );

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ mt: 4, mb: 8, width: "80%", mx: "auto" }}
      alignItems="center"
      gap={5}
    >
      <ConfigGeneratorHeader />
      <MetricList
        metrics={metrics}
        setOpenMetricForm={setOpenMetricForm}
        setMetrics={setMetrics}
        setCurrentMetric={setCurrentMetric}
      />
      {openMetricForm && (
        <MetricForm
          open={openMetricForm}
          setOpen={setOpenMetricForm}
          currentMetric={currentMetric}
          setMetrics={setMetrics} // Directly pass setMetrics here
          Metrics={metrics}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        sx={{ textTransform: "none", width: "40%" }}
        onClick={handleGenerateConfigFile}
      >
        Generate YAML File
      </Button>
      <ConfigFileView configFile={configFileResponse} />
    </Box>
  );
};
