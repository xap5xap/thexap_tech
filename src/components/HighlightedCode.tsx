import { Paper } from "@mui/material";
import { ReactNode, useEffect } from "react";
import Prism from "prismjs";

type Props = {
  children: ReactNode;
  language?: string;
  renderPre?: boolean;
};

const HighlightedCode = ({ language = "javascript", children, renderPre = false }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  if (!children) {
    return null;
  }

  if (!renderPre) {
    return (
      <code
        className={`language-${language}`}
        style={{
          backgroundColor: "#303136",
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
          marginLeft: 5,
          marginRight: 5,
          padding: 5
        }}
      >
        {children}
      </code>
    );
  }
  return (
    <Paper component="pre" sx={{ marginY: 4, p: 2, borderRadius: "10px" }} className="code">
      <code className={`language-${language}`}>{children}</code>
    </Paper>
  );
};

export default HighlightedCode;
