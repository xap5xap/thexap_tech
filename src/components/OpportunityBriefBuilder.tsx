import ContentCopyRounded from "@mui/icons-material/ContentCopyRounded";
import DeleteOutlineRounded from "@mui/icons-material/DeleteOutlineRounded";
import DownloadRounded from "@mui/icons-material/DownloadRounded";
import PrintRounded from "@mui/icons-material/PrintRounded";
import AutoStoriesRounded from "@mui/icons-material/AutoStoriesRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Divider from "@mui/material/Divider";
import GlobalStyles from "@mui/material/GlobalStyles";
import LinearProgress from "@mui/material/LinearProgress";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";
import { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  buildOpportunityBriefMarkdown,
  countCompletedEssentials,
  createEmptyOpportunityBrief,
  ESSENTIAL_OPPORTUNITY_BRIEF_FIELDS,
  FICTIONAL_OPPORTUNITY_BRIEF,
  opportunityBriefFilename,
  type OpportunityBrief,
  type OpportunityBriefField
} from "../lib/opportunityBrief";

const TUTORIAL_PATH = "/blog/problem-and-audience";

const fieldProps = {
  fullWidth: true,
  autoComplete: "off",
  variant: "outlined" as const
};

const sectionHeadingSx = {
  alignItems: { xs: "flex-start", sm: "center" },
  flexDirection: { xs: "column", sm: "row" },
  justifyContent: "space-between",
  gap: 2
};

const OpportunityBriefBuilder = () => {
  const [brief, setBrief] = useState<OpportunityBrief>(() => createEmptyOpportunityBrief());
  const [status, setStatus] = useState("");
  const [resetOpen, setResetOpen] = useState(false);
  const previewRef = useRef<HTMLPreElement | null>(null);
  const statusTimerRef = useRef<number | undefined>(undefined);
  const markdown = useMemo(() => buildOpportunityBriefMarkdown(brief), [brief]);
  const completed = countCompletedEssentials(brief);
  const totalEssentials = ESSENTIAL_OPPORTUNITY_BRIEF_FIELDS.length;

  useEffect(
    () => () => {
      if (statusTimerRef.current) window.clearTimeout(statusTimerRef.current);
    },
    []
  );

  const report = (message: string) => {
    setStatus(message);
    if (statusTimerRef.current) window.clearTimeout(statusTimerRef.current);
    statusTimerRef.current = window.setTimeout(() => setStatus(""), 5000);
  };

  const updateField =
    (field: OpportunityBriefField) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setBrief(current => ({ ...current, [field]: event.target.value }));
    };

  const selectPreview = () => {
    const selection = window.getSelection();
    if (!selection || !previewRef.current) return false;
    const range = document.createRange();
    range.selectNodeContents(previewRef.current);
    selection.removeAllRanges();
    selection.addRange(range);
    previewRef.current.focus();
    return true;
  };

  const copyMarkdown = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard API unavailable");
      await navigator.clipboard.writeText(markdown);
      report("Markdown copied.");
    } catch {
      report(
        selectPreview()
          ? "Preview selected. Use your browser's copy command."
          : "Copy is unavailable in this browser. Select the preview manually."
      );
    }
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = opportunityBriefFilename(brief.title);
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
    report("Markdown download prepared.");
  };

  const loadExample = () => {
    setBrief({ ...FICTIONAL_OPPORTUNITY_BRIEF });
    report("Fictional example loaded. Replace it with your own information.");
  };

  const resetBrief = () => {
    setBrief(createEmptyOpportunityBrief());
    setResetOpen(false);
    report("Brief cleared.");
  };

  return (
    <>
      <GlobalStyles
        styles={{
          "@media print": {
            "header, #main-content + div, .opportunity-builder-no-print": { display: "none !important" },
            "#main-content": { minHeight: "0 !important" },
            ".opportunity-builder-root": { padding: "0 !important", background: "#fff !important" },
            ".opportunity-builder-workspace": { display: "block !important" },
            ".opportunity-builder-preview": { border: "0 !important", boxShadow: "none !important" },
            ".opportunity-builder-preview pre": {
              color: "#000 !important",
              background: "#fff !important",
              maxHeight: "none !important",
              minHeight: "0 !important",
              overflow: "visible !important",
              padding: "0 !important",
              whiteSpace: "pre-wrap !important"
            }
          }
        }}
      />
      <Box className="opportunity-builder-root" sx={{ bgcolor: "background.default", py: { xs: 5, md: 9 } }}>
        <Box sx={{ width: "min(1480px, calc(100% - 32px))", mx: "auto" }}>
          <Box className="opportunity-builder-no-print" component="section" aria-labelledby="builder-title">
            <Typography sx={{ color: "primary.main", fontSize: 12, fontWeight: 800, letterSpacing: ".14em", mb: 2 }}>
              CHAPTER 01 COMPANION
            </Typography>
            <Typography
              component="h1"
              id="builder-title"
              sx={{
                maxWidth: 980,
                fontSize: { xs: 42, sm: 58, md: 74 },
                fontWeight: 800,
                lineHeight: 1.04,
                letterSpacing: "-.045em"
              }}
            >
              Turn an idea into a decision you can explain.
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ maxWidth: 780, mt: 3, fontSize: { xs: 18, md: 22 }, lineHeight: 1.55 }}
            >
              Fill the brief, inspect the live preview, then copy, download, or print clean Markdown. Use it to name the
              user, current situation, intended change, and assumption worth testing.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "center" }, mt: 3 }}>
              <Link component={NextLink} href={TUTORIAL_PATH} prefetch={false} sx={{ fontWeight: 700 }}>
                Read the related tutorial
              </Link>
              <Typography color="text.secondary" variant="body2">
                Start with a problem you can explain
              </Typography>
            </Stack>
            <Paper
              component="section"
              aria-labelledby="privacy-title"
              variant="outlined"
              sx={{ maxWidth: 900, mt: 4, p: { xs: 2.5, sm: 3 }, borderColor: "primary.main" }}
            >
              <Typography component="h2" id="privacy-title" sx={{ fontSize: 18, fontWeight: 750 }}>
                Private by design
              </Typography>
              <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.65 }}>
                Your entries stay in this browser tab. They are not sent to Xavier, analytics, Contentful, or any other
                service, and they are not stored in cookies or browser storage. Refreshing or closing this page clears
                them. If you consent to site analytics, only the page visit can be measured, never the brief content.
              </Typography>
            </Paper>
            <Box sx={{ width: "min(600px, 100%)", mt: 4 }}>
              <Stack direction="row" justifyContent="space-between" gap={2} sx={{ mb: 1 }}>
                <Typography id="brief-progress-label" color="text.secondary" variant="body2">
                  Brief completion
                </Typography>
                <Typography aria-live="polite" variant="body2" sx={{ fontWeight: 750 }}>
                  {completed} of {totalEssentials} essentials
                </Typography>
              </Stack>
              <LinearProgress
                aria-labelledby="brief-progress-label"
                variant="determinate"
                value={(completed / totalEssentials) * 100}
                sx={{ height: 10, borderRadius: 999 }}
              />
            </Box>
          </Box>

          <Box
            className="opportunity-builder-workspace"
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "minmax(0, 1fr)", lg: "minmax(0, 1.08fr) minmax(380px, .92fr)" },
              alignItems: "start",
              gap: { xs: 3, md: 4 },
              mt: { xs: 5, md: 7 }
            }}
          >
            <Paper
              className="opportunity-builder-no-print"
              component="form"
              noValidate
              onSubmit={event => event.preventDefault()}
              elevation={4}
              sx={{ p: { xs: 2.25, sm: 4, md: 5 }, borderRadius: { xs: 3, md: 4 } }}
            >
              <Stack sx={sectionHeadingSx}>
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Chip label="01" color="primary" sx={{ fontWeight: 800 }} />
                  <Typography component="h2" sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 750 }}>
                    Frame the opportunity
                  </Typography>
                </Stack>
                <Button variant="outlined" startIcon={<AutoStoriesRounded />} onClick={loadExample}>
                  Load fictional example
                </Button>
              </Stack>

              <Stack spacing={2.5} sx={{ mt: 4 }}>
                <TextField
                  {...fieldProps}
                  required
                  id="title"
                  name="title"
                  label="Working title"
                  placeholder="Shared request tracker"
                  value={brief.title}
                  onChange={updateField("title")}
                />
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2.5 }}>
                  <TextField
                    {...fieldProps}
                    required
                    id="role"
                    name="role"
                    label="Role"
                    placeholder="A team member"
                    value={brief.role}
                    onChange={updateField("role")}
                  />
                  <TextField
                    {...fieldProps}
                    required
                    id="situation"
                    name="situation"
                    label="Situation"
                    placeholder="Coordinating requests from chat and email"
                    value={brief.situation}
                    onChange={updateField("situation")}
                  />
                </Box>
                <TextField
                  {...fieldProps}
                  required
                  id="progress"
                  name="progress"
                  label="Task or progress"
                  placeholder="Prepare a shared view of what needs attention"
                  value={brief.progress}
                  onChange={updateField("progress")}
                />
                <TextField
                  {...fieldProps}
                  required
                  multiline
                  minRows={4}
                  id="today"
                  name="today"
                  label="What happens today?"
                  placeholder="Describe the current sequence and workaround without exaggeration."
                  value={brief.today}
                  onChange={updateField("today")}
                />
                <TextField
                  {...fieldProps}
                  required
                  multiline
                  minRows={3}
                  id="change"
                  name="change"
                  label="Intended change"
                  placeholder="Describe what the product should make possible within its control."
                  value={brief.change}
                  onChange={updateField("change")}
                />
                <TextField
                  {...fieldProps}
                  multiline
                  minRows={3}
                  id="nonGoals"
                  name="nonGoals"
                  label="Explicit non-goals"
                  placeholder="One per line. Name what this product will not promise or become."
                  value={brief.nonGoals}
                  onChange={updateField("nonGoals")}
                />
                <TextField
                  {...fieldProps}
                  multiline
                  minRows={3}
                  id="evidence"
                  name="evidence"
                  label="Evidence already available"
                  placeholder="Observation, interview, artifact, or none. Include the limit."
                  value={brief.evidence}
                  onChange={updateField("evidence")}
                />
              </Stack>

              <Divider sx={{ my: 5 }} />
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Chip label="02" color="primary" sx={{ fontWeight: 800 }} />
                <Typography component="h2" sx={{ fontSize: { xs: 24, sm: 28 }, fontWeight: 750 }}>
                  Make the decision testable
                </Typography>
              </Stack>
              <Stack spacing={2.5} sx={{ mt: 4 }}>
                <TextField
                  {...fieldProps}
                  required
                  multiline
                  minRows={4}
                  id="assumption"
                  name="assumption"
                  label="Primary falsifiable assumption"
                  placeholder="Write a belief that could be shown wrong."
                  value={brief.assumption}
                  onChange={updateField("assumption")}
                />
                <TextField
                  {...fieldProps}
                  required
                  multiline
                  minRows={3}
                  id="learningStep"
                  name="learningStep"
                  label="Cheapest next learning step"
                  placeholder="Choose the smallest action that examines the assumption."
                  value={brief.learningStep}
                  onChange={updateField("learningStep")}
                />
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 2.5 }}>
                  <Box
                    component="fieldset"
                    sx={{ m: 0, p: 2.5, border: 1, borderColor: "success.main", borderRadius: 3 }}
                  >
                    <Typography component="legend" sx={{ px: 1, fontWeight: 750 }}>
                      Continue branch
                    </Typography>
                    <Stack spacing={2.5}>
                      <TextField
                        {...fieldProps}
                        required
                        id="continueIf"
                        name="continueIf"
                        label="If this happens"
                        placeholder="At least three people show a recent example"
                        value={brief.continueIf}
                        onChange={updateField("continueIf")}
                      />
                      <TextField
                        {...fieldProps}
                        id="continueThen"
                        name="continueThen"
                        label="Then"
                        placeholder="Define the smallest complete flow"
                        value={brief.continueThen}
                        onChange={updateField("continueThen")}
                      />
                    </Stack>
                  </Box>
                  <Box
                    component="fieldset"
                    sx={{ m: 0, p: 2.5, border: 1, borderColor: "warning.main", borderRadius: 3 }}
                  >
                    <Typography component="legend" sx={{ px: 1, fontWeight: 750 }}>
                      Revise branch
                    </Typography>
                    <Stack spacing={2.5}>
                      <TextField
                        {...fieldProps}
                        id="reviseIf"
                        name="reviseIf"
                        label="If this happens"
                        placeholder="Fewer than three show a recent example"
                        value={brief.reviseIf}
                        onChange={updateField("reviseIf")}
                      />
                      <TextField
                        {...fieldProps}
                        id="reviseThen"
                        name="reviseThen"
                        label="Then"
                        placeholder="Revise the user, situation, or problem"
                        value={brief.reviseThen}
                        onChange={updateField("reviseThen")}
                      />
                    </Stack>
                  </Box>
                </Box>
                <TextField
                  {...fieldProps}
                  multiline
                  minRows={3}
                  id="questions"
                  name="questions"
                  label="Open questions"
                  placeholder="One per line. Keep unknowns that do not block this brief."
                  value={brief.questions}
                  onChange={updateField("questions")}
                />
              </Stack>
            </Paper>

            <Stack spacing={3} sx={{ position: { lg: "sticky" }, top: { lg: 94 } }}>
              <Paper
                className="opportunity-builder-preview"
                component="section"
                aria-labelledby="preview-title"
                elevation={4}
                sx={{ overflow: "hidden", borderRadius: { xs: 3, md: 4 } }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  gap={2}
                  sx={{ p: { xs: 2.5, sm: 3.5 } }}
                >
                  <Box>
                    <Typography sx={{ color: "primary.main", fontSize: 11, fontWeight: 800, letterSpacing: ".14em" }}>
                      LIVE PREVIEW
                    </Typography>
                    <Typography component="h2" id="preview-title" sx={{ mt: 0.5, fontSize: 26, fontWeight: 750 }}>
                      Your opportunity brief
                    </Typography>
                  </Box>
                  <Chip label="PROVISIONAL" size="small" color="warning" sx={{ fontWeight: 800 }} />
                </Stack>
                <Divider />
                <Box
                  component="pre"
                  ref={previewRef}
                  tabIndex={0}
                  aria-label="Generated Markdown preview"
                  sx={{
                    minHeight: { xs: 380, lg: 560 },
                    maxHeight: { xs: 560, lg: "calc(100vh - 310px)" },
                    m: 0,
                    p: { xs: 2.5, sm: 3.5 },
                    overflow: "auto",
                    whiteSpace: "pre-wrap",
                    overflowWrap: "anywhere",
                    bgcolor: theme => (theme.palette.mode === "dark" ? "#25262a" : "grey.50"),
                    color: "text.primary",
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
                    fontSize: 13,
                    lineHeight: 1.65
                  }}
                >
                  {markdown}
                </Box>
                <Divider />
                <Box className="opportunity-builder-no-print" sx={{ p: { xs: 2.5, sm: 3.5 } }}>
                  <Stack direction="row" flexWrap="wrap" useFlexGap spacing={1.25}>
                    <Button startIcon={<ContentCopyRounded />} onClick={copyMarkdown}>
                      Copy Markdown
                    </Button>
                    <Button variant="outlined" startIcon={<DownloadRounded />} onClick={downloadMarkdown}>
                      Download .md
                    </Button>
                    <Button variant="outlined" startIcon={<PrintRounded />} onClick={() => window.print()}>
                      Print or save PDF
                    </Button>
                    <Button
                      variant="text"
                      color="error"
                      startIcon={<DeleteOutlineRounded />}
                      onClick={() => setResetOpen(true)}
                    >
                      Reset
                    </Button>
                  </Stack>
                  <Typography
                    component="p"
                    role="status"
                    aria-live="polite"
                    sx={{ minHeight: 24, mt: 2, color: "success.light", fontSize: 14 }}
                  >
                    {status}
                  </Typography>
                </Box>
              </Paper>

              <Paper
                className="opportunity-builder-no-print"
                component="section"
                aria-labelledby="readback-title"
                variant="outlined"
                sx={{ p: 3, borderLeft: 5, borderLeftColor: "primary.main" }}
              >
                <Typography component="h2" id="readback-title" sx={{ fontSize: 19, fontWeight: 750 }}>
                  One-minute readback
                </Typography>
                <Typography color="text.secondary" sx={{ mt: 1, lineHeight: 1.65 }}>
                  Give the brief to someone unfamiliar with the idea. Can they explain the user, current situation,
                  intended change, non-goals, assumption, and next decision without extra context?
                </Typography>
              </Paper>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Dialog
        open={resetOpen}
        onClose={() => setResetOpen(false)}
        aria-labelledby="reset-dialog-title"
        aria-describedby="reset-dialog-description"
      >
        <DialogTitle id="reset-dialog-title">Clear this opportunity brief?</DialogTitle>
        <DialogContent>
          <DialogContentText id="reset-dialog-description">
            Every field in this tab will be cleared. Download or copy your Markdown first if you want to keep it.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" onClick={() => setResetOpen(false)}>
            Cancel
          </Button>
          <Button color="error" onClick={resetBrief}>
            Clear brief
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OpportunityBriefBuilder;
