import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";

export const MetricForm = ({
  open,
  setOpen,
  currentMetric,
  setMetrics,
  Metrics,
}) => {
  const [metric, setMetric] = useState({
    metricName: "",
    description: "",
    thresholds: { warningThreshold: 0, criticalThreshold: 0 },
    alertConditions: { conditionType: "", duration: "" },
    labels: [{ key: "", value: "" }],
    annotations: [{ key: "", value: "" }],
  });

  useEffect(() => {
    setMetric(currentMetric);
  }, [currentMetric]);

  const handleClose = () => setOpen(false);

  const handleInputChange = (e, field, subfield = null) => {
    if (subfield) {
      setMetric({
        ...metric,
        [field]: { ...metric[field], [subfield]: e.target.value },
      });
    } else {
      setMetric({ ...metric, [field]: e.target.value });
    }
  };

  const handleAddLabel = () => {
    setMetric({
      ...metric,
      labels: [...metric.labels, { key: "", value: "" }],
    });
  };

  const handleAddAnnotation = () => {
    setMetric({
      ...metric,
      annotations: [...metric.annotations, { key: "", value: "" }],
    });
  };

  const handleLabelChange = (index, key, value) => {
    const updatedLabels = metric.labels.map((label, i) => {
      if (i === index) {
        return { ...label, [key]: value };
      }
      return label;
    });
    setMetric({ ...metric, labels: updatedLabels });
  };

  const handleAnnotationChange = (index, key, value) => {
    const updatedAnnotations = metric.annotations.map((annotation, i) => {
      if (i === index) {
        return { ...annotation, [key]: value };
      }
      return annotation;
    });
    setMetric({ ...metric, annotations: updatedAnnotations });
  };

  const handleSubmit = () => {
    console.log("handleSubmit called", metric);

    // Check if Metrics is an array, initialize as empty array if not
    const metricsArray = Array.isArray(Metrics) ? Metrics : [];

    const index = metricsArray.findIndex(
      (m) => m.metricName === metric.metricName
    );

    if (index >= 0) {
      // Update existing metric
      metricsArray[index] = metric;
    } else {
      // Add new metric
      metricsArray.push(metric);
    }

    // Update the metrics state in the parent component
    setMetrics(metricsArray);

    handleClose(); // Close the form
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h6">Add Metric</Typography>
          <TextField
            label="Metric Name"
            value={metric.metricName}
            onChange={(e) => handleInputChange(e, "metricName")}
          />
          <TextField
            label="Description"
            value={metric.description}
            onChange={(e) => handleInputChange(e, "description")}
          />
          <TextField
            label="Warning Threshold"
            type="number"
            value={metric.thresholds.warningThreshold}
            onChange={(e) =>
              handleInputChange(e, "thresholds", "warningThreshold")
            }
          />
          <TextField
            label="Critical Threshold"
            type="number"
            value={metric.thresholds.criticalThreshold}
            onChange={(e) =>
              handleInputChange(e, "thresholds", "criticalThreshold")
            }
          />
          <TextField
            label="Condition Type"
            value={metric.alertConditions.conditionType}
            onChange={(e) =>
              handleInputChange(e, "alertConditions", "conditionType")
            }
          />
          <TextField
            label="Duration"
            value={metric.alertConditions.duration}
            onChange={(e) =>
              handleInputChange(e, "alertConditions", "duration")
            }
          />
          {metric.labels.map((label, index) => (
            <Box key={index} display="flex" gap={1}>
              <TextField
                label="Label Key"
                value={label.key}
                onChange={(e) =>
                  handleLabelChange(index, "key", e.target.value)
                }
              />
              <TextField
                label="Label Value"
                value={label.value}
                onChange={(e) =>
                  handleLabelChange(index, "value", e.target.value)
                }
              />
            </Box>
          ))}
          <Button onClick={handleAddLabel}>Add Label</Button>
          {metric.annotations.map((annotation, index) => (
            <Box key={index} display="flex" gap={1}>
              <TextField
                label="Annotation Key"
                value={annotation.key}
                onChange={(e) =>
                  handleAnnotationChange(index, "key", e.target.value)
                }
              />
              <TextField
                label="Annotation Value"
                value={annotation.value}
                onChange={(e) =>
                  handleAnnotationChange(index, "value", e.target.value)
                }
              />
            </Box>
          ))}
          <Button onClick={handleAddAnnotation}>Add Annotation</Button>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ textTransform: "none" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit} // This should call the handleSubmit function
          sx={{ textTransform: "none" }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};
