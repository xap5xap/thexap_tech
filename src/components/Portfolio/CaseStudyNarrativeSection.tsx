import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import type {
  AssetRecord,
  EvidenceItem,
  EvidenceState,
  NarrativeBlock,
  NarrativeSection
} from "../../content/portfolio/types";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  section: NarrativeSection;
  assetsById: Map<string, AssetRecord>;
  evidenceById: Map<string, EvidenceItem>;
};

const EVIDENCE_LABELS: Record<EvidenceState, string> = {
  observed: "Observed",
  "verified-outcome": "Verified outcome",
  assumption: "Assumption",
  hypothesis: "Hypothesis",
  illustrative: "Illustrative",
  planned: "Planned"
};

const EvidenceBlock = ({ evidence }: { evidence: EvidenceItem }) => {
  const source = evidence.source;

  return (
    <Box
      sx={{
        borderLeft: 3,
        borderColor: "primary.main",
        backgroundColor: "background.paper",
        borderRadius: 1,
        padding: { xs: 2.5, md: 3 }
      }}
    >
      <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap", mb: 1.5 }}>
        <Chip label={EVIDENCE_LABELS[evidence.state]} color="primary" size="small" />
        {source?.asOf && (
          <Typography variant="caption" color="text.secondary">
            Verified {source.asOf}
          </Typography>
        )}
      </Stack>
      <Typography variant="subtitle1" component="p" sx={{ mb: 1 }}>
        {evidence.statement}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {evidence.scope}
      </Typography>
      {evidence.disclosure && (
        <Typography variant="body2" sx={{ mt: 1.5 }}>
          {evidence.disclosure}
        </Typography>
      )}
      {source && (
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1.5 }}>
          Source:{" "}
          {source.href && source.access === "public" ? (
            <Link href={source.href} target="_blank" rel="noreferrer">
              {source.label}
            </Link>
          ) : (
            source.label
          )}
          {source.access === "privately-verified" ? " (privately verified)" : ""}
        </Typography>
      )}
    </Box>
  );
};

const MediaBlock = ({ asset }: { asset: AssetRecord }) => (
  <Box component="figure" sx={{ m: 0 }}>
    <Box
      sx={{
        overflow: "hidden",
        borderRadius: { xs: 1, md: 2 },
        border: 1,
        borderColor: "divider",
        backgroundColor: "background.paper"
      }}
    >
      <Image
        src={asset.src}
        alt={asset.alt}
        width={1440}
        height={1315}
        sizes="(max-width: 900px) 100vw, 900px"
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </Box>
    {asset.caption && (
      <Typography component="figcaption" variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
        {asset.caption}
      </Typography>
    )}
  </Box>
);

const TextList = ({ items }: { items: string[] }) => (
  <Box component="ul" sx={{ m: 0, pl: 3.5 }}>
    {items.map(item => (
      <Typography component="li" key={item} sx={{ mb: 1.25, pl: 0.5 }}>
        {item}
      </Typography>
    ))}
  </Box>
);

const ProductFlow = ({ title, steps }: { title: string; steps: string[] }) => (
  <Box>
    <Typography variant="h6" component="h3" sx={{ mb: 3 }}>
      {title}
    </Typography>
    <Box
      component="ol"
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(5, minmax(0, 1fr))" },
        gap: 2,
        p: 0,
        m: 0,
        listStyle: "none"
      }}
    >
      {steps.map((step, index) => (
        <Box
          component="li"
          key={step}
          sx={{
            minWidth: 0,
            p: 2.5,
            borderRadius: 1,
            backgroundColor: "background.paper",
            borderTop: 3,
            borderColor: index === steps.length - 1 ? "text.secondary" : "primary.main"
          }}
        >
          <Typography variant="caption" color="primary.main" sx={{ fontWeight: 700, mb: 1 }}>
            {String(index + 1).padStart(2, "0")}
          </Typography>
          <Typography variant="body2">{step}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

const DecisionBlock = ({ block }: { block: Extract<NarrativeBlock, { kind: "decision" }> }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: { xs: "1fr", md: "minmax(220px, 0.7fr) minmax(0, 1.3fr)" },
      gap: { xs: 2, md: 5 },
      p: { xs: 2.5, md: 4 },
      borderRadius: 1,
      backgroundColor: "background.paper"
    }}
  >
    <Box>
      <Typography color="primary.main" variant="caption" sx={{ fontWeight: 700, mb: 1 }}>
        Product decision
      </Typography>
      <Typography variant="h6" component="h3">
        {block.decision}
      </Typography>
    </Box>
    <Stack spacing={2.5}>
      <Box>
        <Typography variant="subtitle1" component="h4" sx={{ mb: 0.75 }}>
          Context
        </Typography>
        <Typography color="text.secondary">{block.context}</Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" component="h4" sx={{ mb: 0.75 }}>
          Alternatives considered
        </Typography>
        <TextList items={block.alternatives} />
      </Box>
      <Box>
        <Typography variant="subtitle1" component="h4" sx={{ mb: 0.75 }}>
          Trade-offs
        </Typography>
        <TextList items={block.tradeOffs} />
      </Box>
      <Box sx={{ borderTop: 1, borderColor: "divider", pt: 2 }}>
        <Typography variant="subtitle1" component="h4" color="primary.main" sx={{ mb: 0.75 }}>
          Result
        </Typography>
        <Typography>{block.result}</Typography>
      </Box>
    </Stack>
  </Box>
);

const NarrativeBlockRenderer = ({
  block,
  assetsById,
  evidenceById
}: {
  block: NarrativeBlock;
  assetsById: Map<string, AssetRecord>;
  evidenceById: Map<string, EvidenceItem>;
}) => {
  switch (block.kind) {
    case "paragraph":
      return <Typography sx={{ maxWidth: 820 }}>{block.body}</Typography>;
    case "list":
      return <TextList items={block.items} />;
    case "media": {
      const asset = assetsById.get(block.assetId);
      return asset ? <MediaBlock asset={asset} /> : null;
    }
    case "product-flow":
      return <ProductFlow title={block.title} steps={block.steps} />;
    case "decision":
      return <DecisionBlock block={block} />;
    case "evidence": {
      const evidence = evidenceById.get(block.evidenceId);
      return evidence ? <EvidenceBlock evidence={evidence} /> : null;
    }
    case "system-behavior":
      return (
        <Box sx={{ p: 3, borderRadius: 1, backgroundColor: "background.paper" }}>
          <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
            {block.job}
          </Typography>
          <Typography variant="subtitle1" component="h4">
            Inputs
          </Typography>
          <TextList items={block.inputs} />
          <Typography variant="subtitle1" component="h4" sx={{ mt: 2 }}>
            Outputs
          </Typography>
          <TextList items={block.outputs} />
          <Typography variant="subtitle1" component="h4" sx={{ mt: 2 }}>
            Failure modes
          </Typography>
          <TextList items={block.failureModes} />
          <Typography variant="subtitle1" component="h4" sx={{ mt: 2 }}>
            Safeguards
          </Typography>
          <TextList items={block.safeguards} />
          <Typography variant="subtitle1" component="h4" sx={{ mt: 2 }}>
            Evaluation
          </Typography>
          <TextList items={block.evaluation} />
        </Box>
      );
  }
};

const CaseStudyNarrativeSection = ({ id, eyebrow, title, section, assetsById, evidenceById }: Props) => {
  if (section.completion !== "complete") {
    return null;
  }

  return (
    <Box component="section" id={id} sx={{ py: { xs: 7, md: 11 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "minmax(180px, 0.5fr) minmax(0, 1.5fr)" },
          gap: { xs: 2, md: 7 }
        }}
      >
        <Typography component="p" color="primary.main" variant="subtitle1" sx={{ fontWeight: 700 }}>
          {eyebrow}
        </Typography>
        <Box>
          <Typography variant="h3" component="h2" sx={{ mb: 2.5, maxWidth: 820 }}>
            {title}
          </Typography>
          <Typography component="p" variant="subtitle1" color="text.secondary" sx={{ maxWidth: 820 }}>
            {section.summary}
          </Typography>
        </Box>
      </Box>
      <Stack spacing={{ xs: 3, md: 4 }} sx={{ mt: { xs: 4, md: 6 } }}>
        {section.blocks.map((block, index) => (
          <NarrativeBlockRenderer
            key={`${block.kind}-${index}`}
            block={block}
            assetsById={assetsById}
            evidenceById={evidenceById}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CaseStudyNarrativeSection;
