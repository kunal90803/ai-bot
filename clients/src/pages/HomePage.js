import React from "react";
import { Box, Typography, Card, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="center" alignItems="center" gap={4} p={2}>
      <Box>
        <Typography variant="h6">Text Summariser</Typography>
        <Card
          onClick={() => navigate("/summary")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 200,
            width: 200,
            '&:hover': {
              border: 2,
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
          <Stack p={3} pt={0}>
            <Typography> Summarize long text into short sentences</Typography>
          </Stack>
        </Card>
      </Box>
      
      <Box >
        <Typography variant="h6">Paragraph generator</Typography>
        <Card
          onClick={() => navigate("/paragraph")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 200,
            width: 200,
            '&:hover': {
              border: 2,
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
          <Stack p={3} pt={0}>
            <Typography> Briefly Explain the Topic</Typography>
          </Stack>
        </Card>
      </Box>
      <Box>
        <Typography variant="h6">Chat with AI</Typography>
        <Card
          onClick={() => navigate("/chatbot")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 200,
            width: 200,
            '&:hover': {
              border: 2,
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
          <Stack p={3} pt={0}>
            <Typography> AI chat provides intelligent, responsive interactions.</Typography>
          </Stack>
        </Card>
      </Box>
      <Box>
        <Typography variant="h6">Code Generator</Typography>
        <Card
          onClick={() => navigate("/codegen")}
          sx={{
            boxShadow: 2,
            borderRadius: 5,
            height: 200,
            width: 200,
            '&:hover': {
              border: 2,
              boxShadow: 0,
              borderColor: "primary.dark",
              cursor: "pointer",
            },
          }}
        >
          <DescriptionRounded sx={{ fontSize: 80, color: "primary.main", mt: 2, ml: 2 }} />
          <Stack p={3} pt={0}>
            <Typography> Generates the function code in your suitable language</Typography>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default HomePage;
