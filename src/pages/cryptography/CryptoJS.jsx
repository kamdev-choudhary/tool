import React, { useState } from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Grid2 as Grid,
  Divider,
  Button,
} from "@mui/material";
import { encryptData, decryptData } from "../../constants/functions";
import CodeSnippet from "../../components/CodeSnippet";

function Crypto() {
  const [encryptText, setEncryptText] = useState(""); // For text to encrypt
  const [encryptSecret, setEncryptSecret] = useState(""); // Secret key for encryption
  const [encryptedText, setEncryptedText] = useState(""); // Encrypted output
  const [encryptionError, setEncryptionError] = useState(null); // Encryption error

  const [decryptText, setDecryptText] = useState(""); // For encrypted text to decrypt
  const [decryptSecret, setDecryptSecret] = useState(""); // Secret key for decryption
  const [decryptedText, setDecryptedText] = useState(""); // Decrypted output
  const [decryptionError, setDecryptionError] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset "Copied" state after 2 seconds
  };

  const handleEncryptData = () => {
    try {
      const encrypted = encryptData(encryptText, encryptSecret);
      setEncryptedText(encrypted);
      setEncryptionError(null);
    } catch (error) {
      setEncryptionError(error.message);
    }
  };

  const handleDecryptData = () => {
    try {
      const decrypted = decryptData(decryptText, decryptSecret);
      setDecryptedText(decrypted);
      setDecryptionError(null);
    } catch (error) {
      setDecryptionError(error.message);
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 2, p: 0.5, display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">Crypto JS</Typography>
      </Box>

      {/* Encryption Section */}
      <Paper
        elevation={4}
        sx={{
          borderRadius: 2,
          p: 3,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          ":hover": {
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Encryption
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <TextField
              size="small"
              fullWidth
              label="Enter Text"
              value={encryptText}
              onChange={(e) => setEncryptText(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <TextField
              size="small"
              fullWidth
              label="Secret Key"
              value={encryptSecret}
              onChange={(e) => setEncryptSecret(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <Button onClick={handleEncryptData} fullWidth variant="contained">
              Encrypt
            </Button>
          </Grid>
        </Grid>
        {encryptionError && (
          <Typography color="error">{encryptionError}</Typography>
        )}
        {encryptedText && (
          <>
            <Divider sx={{ mt: 2 }} />
            <CodeSnippet
              code={encryptedText}
              onClear={() => setEncryptedText(null)}
            />
          </>
        )}
      </Paper>

      {/* Decryption Section */}
      <Paper
        elevation={4}
        sx={{
          borderRadius: 2,
          p: 3,
          mt: 3,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease-in-out",
          ":hover": {
            boxShadow: "0px 6px 16px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Decryption
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <TextField
              size="small"
              fullWidth
              label="Encrypted Text"
              value={decryptText}
              onChange={(e) => setDecryptText(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <TextField
              size="small"
              fullWidth
              label="Secret Key"
              value={decryptSecret}
              onChange={(e) => setDecryptSecret(e.target.value)}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 4 }}>
            <Button onClick={handleDecryptData} fullWidth variant="contained">
              Decrypt
            </Button>
          </Grid>
        </Grid>
        {decryptionError && (
          <Typography color="error">{decryptionError}</Typography>
        )}
        {decryptedText && (
          <>
            <Divider sx={{ mt: 2 }} />
            <CodeSnippet
              code={decryptedText}
              onClear={() => setDecryptedText(null)}
            />
          </>
        )}
      </Paper>
    </Box>
  );
}

export default Crypto;
