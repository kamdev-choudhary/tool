import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Box, Button, Paper, Typography } from "@mui/material";
import { FileCopy } from "@mui/icons-material";

const CodeSnippet = ({
  code,
  onClear,
  showCloseButton = true,
  variant = "body1",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied" state after 2 seconds
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "800px", margin: "auto", mt: 2 }}>
      <Paper
        sx={{
          padding: 1.5,
          position: "relative",
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: "background.paper",
          fontFamily: '"Courier New", Courier, monospace',
          overflow: "auto",
        }}
        elevation={3}
      >
        <Typography
          variant={variant}
          sx={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            marginBottom: 0,
            marginTop: 4,
            border: "1px solid rgba(0,0,0,0.1)",
            p: 2,
            borderRadius: 1,
          }}
        >
          {code}
        </Typography>

        <CopyToClipboard text={code} onCopy={handleCopy}>
          <Button
            color=""
            size="small"
            startIcon={<FileCopy />}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              fontSize: "12px",
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            <Typography variant="body2">
              {copied ? "Copied" : "Copy"}
            </Typography>
          </Button>
        </CopyToClipboard>

        {showCloseButton && (
          <Button
            onClick={onClear}
            color="error"
            sx={{
              position: "absolute",
              top: 8,
              left: 8,
              fontSize: "12px",
              borderRadius: 2,
              textTransform: "none",
            }}
          >
            <Typography variant="body2">Clear</Typography>
          </Button>
        )}
      </Paper>
    </Box>
  );
};

export default CodeSnippet;
