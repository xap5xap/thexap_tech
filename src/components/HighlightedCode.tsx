import { ReactNode, useEffect } from "react";
import Prism from "prismjs";
import Paper from "@mui/material/Paper";

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
    <Paper sx={{ display: "inline-block", p: 1, borderRadius: "10px" }} className="code">
      <code className={`language-${language}`}>{children}</code>
    </Paper>
  );
};

export default HighlightedCode;
