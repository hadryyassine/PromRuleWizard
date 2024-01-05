import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import { ConfigGeneratorHeader } from "./ConfigGeneratorHeader";

import { MetricForm } from "./MetricsForm";
import { MetricList } from "./MetricsList";

import { ConfigFileView } from "./ConfigFileView.js";

export const ConfigGeneratorPage = () => {
    const [ciConfig, setCiConfig] = React.useState({
        Metrics: [],
        globalUnits: [],
        targetCi: "circleCI",
    });
    const [configFileResponse, setConfigFileResponse] = React.useState("");
    const [currentMetric, setCurrentMetric] = React.useState({
        name: "",
        docker: "",
        commands: [],
        envVars: [],
        dependencies: [],
    });

    const [openMetricForm, setOpenMetricForm] = React.useState(false);

    const setMetrics = (Metrics) => setCiConfig({ ...ciConfig, Metrics });

    const setTargetCi = (targetCi) => setCiConfig({ ...ciConfig, targetCi });
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
                Metrics={ciConfig.Metrics}
                setOpenMetricForm={setOpenMetricForm}
                setMetrics={setMetrics}
                setCurrentMetric={setCurrentMetric}
            />
            <MetricForm
                open={openMetricForm}
                setOpen={setOpenMetricForm}
                currentMetric={currentMetric}
                Metrics={ciConfig.Metrics}
                setMetrics={setMetrics}

            />
            
            <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none", width: "40%" }}
            //onClick={() => generateConfigFile(ciConfig, setConfigFileResponse)}
            >
                Generate YAML File
            </Button>
            <ConfigFileView configFile={configFileResponse} />
        </Box>
    );
};