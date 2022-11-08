import { Paper } from "@mui/material";
import { ReactNode, useEffect, useMemo } from "react";
import Prism from "prismjs";

type Props = {
  children: ReactNode;
  language?: string;
};

const HighlightedCode = ({ language = "javascript", children }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!children) {
    return null;
  }

  return (
    <Paper sx={{ marginY: 4, p: 1, borderRadius: "10px" }} className="code">
      <pre>
        <code className={`language-${language}`}>{children}</code>
      </pre>
    </Paper>
  );
};

export default HighlightedCode;
