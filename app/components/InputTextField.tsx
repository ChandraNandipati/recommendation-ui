import { ChangeEvent } from "react";
import { TextField, TextFieldVariants } from "@mui/material";

interface InputTextFieldProps {
  label: string;
  name: string;
  type: string;
  variant: TextFieldVariants;
  fullWidth?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string;
}

export default function InputTextField({
  label,
  name,
  type,
  variant,
  fullWidth,
  value,
  onChange,
  error,
  helperText,
}: InputTextFieldProps) {
  return (
    <TextField
      label={label}
      name={name}
      type={type}
      variant={variant}
      fullWidth={fullWidth}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
    />
  );
}
