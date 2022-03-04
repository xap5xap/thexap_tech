import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const ThemeModeToggle: FC<Props> = ({ checked, onChange }) => {
  return (
    <Tooltip title={checked ? "Light mode" : "Dark mode"}>
      <IconButton color="primary" onClick={() => onChange(!checked)}>
        {checked ? (
          <LightModeOutlined fontSize="small" />
        ) : (
          <DarkModeOutlined fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeModeToggle;
