import * as React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import AddIcon from "@mui/icons-material/Add";
import WorkIcon from "@mui/icons-material/Work";

import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CommandCodeSnippet from "./CommandCodeSnippet";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const MetricForm = ({ Metrics, open, setOpen, currentMetric, setMetrics }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [dependency, setDependency] = React.useState([]);

  const [Metric, setMetric] = React.useState({
    name: "",
    docker: "",
    commands: [],
    envVars: [],
    dependencies: [],
  });
  const [envVar, setEnvVar] = React.useState({ name: "", value: "" });
  const [command, setCommand] = React.useState({ name: "", task: "" });

  React.useEffect(() => {
    setMetric(currentMetric);
  }, [currentMetric]);

  const handleCommandNameChange = (e) => {
    setCommand({ ...command, name: e.target.value });
  };
  const handleCommandTaskChange = (e) => {
    setCommand({ ...command, task: e.target.value });
  };

  const addCommand = () => {
    setMetric({ ...Metric, commands: [...Metric.commands, command] });
    setCommand({ name: "", task: "" });
  };

  const handleSubmit = () => {
    console.log(Metric);
    let index = Metrics.map((Metric) => Metric.name).indexOf(Metric.name);
    if (index === -1) {
      console.log(index);
      Metrics.push(Metric);
      setMetrics(Metrics);
    } else {
      console.log(index);
      Metrics.splice(index, 1);
      Metrics.push(Metric);
      setMetrics(Metrics);
    }
    setOpen(false);
  };

  const handleCommandDelete = (index) => {
    let commands = Metric.commands;
    commands.splice(index, 1);
    setMetric({ ...Metric, commands });
  };

  const handleEnvVarDelete = (index) => {
    let envVars = Metric.envVars;
    envVars.splice(index, 1);
    setMetric({ ...Metric, envVars });
  };

  const addEnvVar = () => {
    setMetric({ ...Metric, envVars: [...Metric.envVars, envVar] });
    setEnvVar({ name: "", value: "" });
  };

  const handleNameChange = (e) => {
    setMetric({ ...Metric, name: e.target.value });
  };
  const handleEnvNameChange = (e) => {
    setEnvVar({ ...envVar, name: e.target.value });
  };
  const handleEnvValueChange = (e) => {
    setEnvVar({ ...envVar, value: e.target.value });
  };

  const handleDockerChange = (e) => {
    setMetric({ ...Metric, docker: e.target.value });
  };
  const handleDependencySelectChange = (event) => {
    const {
      target: { value },
    } = event;
    setDependency(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setMetric({ ...Metric, dependencies: value });
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          <Typography variant="h2">Add Metric</Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="row" alignItems="center" gap={5}>
              <Typography>Name</Typography>
              <TextField
                size="small"
                value={Metric.name}
                sx={{ width: 150 }}
                onChange={handleNameChange}
              />
            </Box>
            <Box display="flex" flexDirection="row" gap={5} alignItems="center">
              <Typography>Docker</Typography>
              <TextField
                size="small"
                value={Metric.docker}
                sx={{ width: 150 }}
                onChange={handleDockerChange}
              />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap={5}
              alignItems={Metric.commands.length === 0 ? "center" : "flex-start"}
            >
              <Typography>Commands:</Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                {Metric.commands.map((command, index) => (
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography variant="h4">{command.name}</Typography>
                    <CommandCodeSnippet content={command.task} />
                    <ClearIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleCommandDelete(index)}
                    />
                  </Box>
                ))}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={1}
                >
                  <Typography>Name</Typography>
                  <TextField
                    name="commandName"
                    size="small"
                    value={command.name}
                    sx={{ width: 150 }}
                    onChange={handleCommandNameChange}
                  />
                  <Typography>Task</Typography>
                  <TextField
                    size="small"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        addCommand();
                      }
                    }}
                    onChange={handleCommandTaskChange}
                    value={command.task}
                  />
                  <AddIcon sx={{ cursor: "pointer" }} onClick={addCommand} />
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              gap={5}
              alignItems={Metric.envVars.length === 0 ? "center" : "flex-start"}
            >
              <Typography>Environment Variables:</Typography>
              <Box display="flex" flexDirection="column" gap={1}>
                {Metric.envVars.map((envVar, index) => (
                  <Box
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    gap={1}
                  >
                    <Typography variant="body1">
                      {envVar.name}={envVar.value}
                    </Typography>
                    <ClearIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => handleEnvVarDelete(index)}
                    />
                  </Box>
                ))}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  gap={1}
                >
                  <Typography>Name</Typography>
                  <TextField
                    name="envVarName"
                    size="small"
                    value={envVar.name}
                    sx={{ width: 150 }}
                    onChange={handleEnvNameChange}
                  />
                  <Typography>Value</Typography>
                  <TextField
                    name="envVarValue"
                    size="small"
                    value={envVar.value}
                    sx={{ width: 150 }}
                    onChange={handleEnvValueChange}
                  />
                  <AddIcon sx={{ cursor: "pointer" }} onClick={addEnvVar} />
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="row" gap={5} alignItems="center">
              <Typography>Dependencies:</Typography>
              <FormControl sx={{ width: 300 }}>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  size="small"
                  value={dependency}
                  onChange={handleDependencySelectChange}
                  input={<OutlinedInput id="select-multiple-chip" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          icon={<WorkIcon />}
                          size="small"
                          color="primary"
                        />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {Metrics.map((Metric) => (
                    <MenuItem key={Metric.name} value={Metric.name}>
                      {Metric.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ textTransform: "none" }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ textTransform: "none" }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};