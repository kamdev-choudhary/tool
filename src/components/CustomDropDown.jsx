import { Close } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";

function CustomDropDown({
  data = [],
  value = [],
  keyField = "id",
  onChange,
  disabled = false,
  label = "",
  name = "",
  dropdownValue = "",
  readonly = false,
  required = false,
  showClearButton = true,
}) {
  // Function to clear the value
  const handleClear = () => {
    onChange({ target: { value: "" } });
  };

  return (
    <FormControl required={required} size="small" fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
        readOnly={readonly}
        endAdornment={
          !readonly &&
          value !== "" &&
          showClearButton && (
            <IconButton onClick={handleClear} sx={{ mr: 1 }}>
              <Close />
            </IconButton>
          )
        }
      >
        {data?.map((item, index) => (
          <MenuItem
            key={item?.[keyField] || index}
            value={item?.[dropdownValue]}
          >
            {item?.[name]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default CustomDropDown;
