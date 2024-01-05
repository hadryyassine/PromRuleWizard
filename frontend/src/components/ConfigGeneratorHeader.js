import * as React from "react";

import { Box, Typography } from "@mui/material";

import logo from "../logo.png";

export const ConfigGeneratorHeader = () => {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Box display="flex" flexDirection="row" gap={1}>
                <Box
                    component="img"
                    src={logo}
                    sx={{
                        display: { xs: "none", md: "flex" },
                        mr: 1,
                        height: "300px",
                    }}
                />
                {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                        display: { xs: "none", md: "flex" },
                        justifyContent: 'center', // Center horizontally
                        alignItems: 'center',      // Center vertically
                        fontFamily: "Inter",
                        fontWeight: 700,
                        fontSize: "40px",
                        textDecoration: "none",
                    }}
                >
                    {"Prometheus Rule Generator "}
                </Typography>
            </Box>
            <Typography variant="h1"> ~ Crafting Metrics Mastery with Effortless YAML Sorcery ~</Typography>{" "}
        </Box>
    );
};