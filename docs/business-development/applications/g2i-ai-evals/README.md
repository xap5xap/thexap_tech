# G2i Staff Software Engineer (AI Evals)

- **Status:** Applied, confirmed by Xavier on October 2, 2026.
- **Application channel:** G2i's Ashby listing.
- **Job:** [Staff Software Engineer (AI Evals)](https://jobs.ashbyhq.com/g2i/becdfa73-ad7f-4920-8456-808cef38ff5d).
- **Work ledger:** [XAP-247](https://linear.app/thexap/issue/XAP-247/prepare-a-verified-resume-for-g2i-staff-software-engineer-ai-evals).

The confirmation date records Xavier's report. The exact submission time, form answers, and uploaded attachment were not read back. The saved PDF is the final reviewed version from this chat, preserved without content changes.

## Saved resume

- [PDF](../../../../output/pdf/xavier-perez-g2i-resume.pdf)
- [Editable text](resume.md)
- [PDF builder](build_resume.py)

The resume includes Xavier's confirmed 15+ years of experience, full-stack and AWS work, two anonymous recent product examples, and Codex/Claude Code workflows. The owned product remains labeled in development. Website and Upwork addresses are visible for printed copies and clickable in the PDF.

These files are application records. They are not imported into portfolio data or served as website downloads.

## Rebuild

The builder contains the resume content and layout. Updating it regenerates both the PDF and Markdown snapshot. Requires Python with `reportlab`, plus Liberation Sans regular and bold TrueType fonts.

From the repository root:

```sh
python3 docs/business-development/applications/g2i-ai-evals/build_resume.py --font-dir /path/to/liberation-sans-fonts
```

After a content or layout change, render and inspect the PDF, then check text extraction, links, metadata, and project anonymity. The saved version was checked as a one-page PDF with three link annotations.
