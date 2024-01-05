import axios from "axios";

const API_URL = "http://localhost:8080";

export const generateConfigFile = (metrics, setConfigFileResponse) => {
  let requestBody = prepareRequestBody(metrics);
  console.log("Request body for /forwards:", requestBody);

  axios
    .post(`${API_URL}/forwards`, requestBody)
    .then((response) => {
      console.log("Response from /forwards:", response.data);
      setConfigFileResponse(response.data);
    })
    .catch((error) => {
      console.error("Error generating config file:", error);
    });
};

function prepareRequestBody(metrics) {
  let requestBody = {
    appMetricSource: prepareFlexmiMetrics(metrics),
  };
  return requestBody;
}

function prepareFlexmiMetrics(metrics) {
  let flexmiMetrics = "?nsuri: ApplicationMetricsSpecifications\n";
  metrics.forEach((metric) => {
    flexmiMetrics += `MetricSpecification: {\n`;
    flexmiMetrics += `    metricName: ${metric.metricName},\n`;
    flexmiMetrics += `    description: ${metric.description},\n`;
    flexmiMetrics += `    thresholds: {\n`;
    flexmiMetrics += `        warningThreshold: ${metric.thresholds.warningThreshold},\n`;
    flexmiMetrics += `        criticalThreshold: ${metric.thresholds.criticalThreshold}\n`;
    flexmiMetrics += `    },\n`;
    flexmiMetrics += `    alertConditions: {\n`;
    flexmiMetrics += `        conditionType: ${metric.alertConditions.conditionType},\n`;
    flexmiMetrics += `        duration: ${metric.alertConditions.duration}\n`;
    flexmiMetrics += `    },\n`;
    flexmiMetrics += prepareFlexmiLabelsAnnotations(metric.labels, "labels");
    flexmiMetrics += prepareFlexmiLabelsAnnotations(
      metric.annotations,
      "annotations"
    );
    flexmiMetrics += `}\n`;
  });
  return flexmiMetrics;
}

function prepareFlexmiLabelsAnnotations(items, type) {
  let flexmiItems = `    ${type}: {\n`;
  items.forEach((item) => {
    flexmiItems += `        key: ${item.key},\n`;
    flexmiItems += `        value: ${item.value}\n`;
  });
  flexmiItems += `    },\n`;
  return flexmiItems;
}
