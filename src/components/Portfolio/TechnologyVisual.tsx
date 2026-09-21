import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountTreeOutlined from "@mui/icons-material/AccountTreeOutlined";
import SmartphoneOutlined from "@mui/icons-material/SmartphoneOutlined";
import StorageOutlined from "@mui/icons-material/StorageOutlined";
import type { EngagementShowcase } from "../../content/portfolio/engagementShowcase";

const marks: Record<string, { slug: string; color: string }> = {
  React: { slug: "react", color: "#087ea4" },
  "React Native": { slug: "react", color: "#087ea4" },
  "Next.js": { slug: "nextdotjs", color: "#151515" },
  Redux: { slug: "redux", color: "#764abc" },
  "MUI v5": { slug: "mui", color: "#007fff" },
  "Material UI": { slug: "mui", color: "#007fff" },
  Firebase: { slug: "firebase", color: "#dd2c00" },
  "Node.js": { slug: "nodedotjs", color: "#43853d" },
  MongoDB: { slug: "mongodb", color: "#116149" },
  Cypress: { slug: "cypress", color: "#177b69" },
  Nx: { slug: "nx", color: "#143055" },
  GraphQL: { slug: "graphql", color: "#d52c98" },
  Relay: { slug: "relay", color: "#d96c4e" },
  Ionic: { slug: "ionic", color: "#3880ff" },
  TypeScript: { slug: "typescript", color: "#3178c6" },
  Linux: { slug: "linux", color: "#151515" },
  Supabase: { slug: "supabase", color: "#237f5e" },
  "Tailwind CSS": { slug: "tailwindcss", color: "#087ea4" }
};

export const TechnologyMark = ({ name, size = 48 }: { name: string; size?: number }) => {
  const mark = marks[name];
  return mark ? (
    <Box
      component="span"
      role="img"
      aria-label={`${name} logo`}
      sx={{
        display: "inline-block",
        width: size,
        height: size,
        flexShrink: 0,
        bgcolor: mark.color,
        mask: `url(/images/technologies/${mark.slug}.svg) center / contain no-repeat`,
        WebkitMask: `url(/images/technologies/${mark.slug}.svg) center / contain no-repeat`
      }}
    />
  ) : (
    <Box
      aria-hidden="true"
      sx={{
        width: size,
        height: size,
        display: "grid",
        placeItems: "center",
        fontFamily: "monospace",
        fontWeight: 800,
        fontSize: size * 0.32,
        color: "#7c4b08"
      }}
    >
      {name.startsWith("AWS") || name.startsWith("Amazon") ? "AWS" : name.slice(0, 2)}
    </Box>
  );
};

const panels: Record<EngagementShowcase["visual"], { color: string; background: string; label: string }> = {
  cloud: { color: "#835311", background: "#f6eee1", label: "APPLICATION / CLOUD / DATA" },
  interface: { color: "#277491", background: "#e9f1f4", label: "INTERFACES / APPLICATION STATE" },
  mobile: { color: "#665d9e", background: "#efedf7", label: "MOBILE / CROSS-PLATFORM" },
  quality: { color: "#32785e", background: "#e7f0e9", label: "TEST / VERIFY / DELIVER" },
  data: { color: "#706136", background: "#f0eddf", label: "DATA / CONNECTED WORKFLOWS" },
  product: { color: "#86593c", background: "#f5e9e0", label: "IDEA / INTERFACE / PRODUCT" }
};

export const TechnologyVisual = ({
  technologies,
  showcase,
  large = false
}: {
  technologies: string[];
  showcase: EngagementShowcase;
  large?: boolean;
}) => {
  const panel = panels[showcase.visual];
  const visible = technologies.slice(0, large ? 4 : 3);
  const Icon =
    showcase.visual === "mobile"
      ? SmartphoneOutlined
      : showcase.visual === "data"
        ? StorageOutlined
        : AccountTreeOutlined;
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: large ? { xs: 270, md: 380 } : 210,
        height: "100%",
        backgroundColor: panel.background,
        color: "#202124",
        p: { xs: 2.5, md: large ? 4 : 3 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: `radial-gradient(${panel.color}18 1px, transparent 1px)`,
        backgroundSize: "18px 18px"
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
        <Typography
          sx={{ fontFamily: "monospace", fontSize: 11, letterSpacing: ".12em", fontWeight: 700, color: panel.color }}
        >
          {visible.length ? "THE TECHNOLOGY" : "THE ENGAGEMENT"}
        </Typography>
        <Box aria-hidden="true" sx={{ display: "flex", gap: 0.5 }}>
          {[0, 1, 2].map(n => (
            <Box
              key={n}
              sx={{ width: 5, height: 5, borderRadius: "50%", bgcolor: panel.color, opacity: 1 - n * 0.25 }}
            />
          ))}
        </Box>
      </Box>
      {visible.length ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: large ? { xs: 1.5, md: 3 } : { xs: 1.5, md: 2.5 },
            py: large ? 5 : 3
          }}
        >
          {visible.map((name, index) => (
            <Box key={name} sx={{ textAlign: "center", minWidth: 0, flex: "0 1 auto" }}>
              <Box
                sx={{
                  width: large ? { xs: 60, md: 86 } : { xs: 60, md: 70 },
                  height: large ? { xs: 60, md: 86 } : { xs: 60, md: 70 },
                  bgcolor: "rgba(255,255,255,.88)",
                  border: "1px solid rgba(0,0,0,.07)",
                  boxShadow: "0 8px 24px rgba(30,40,50,.06)",
                  borderRadius: "16px",
                  display: "grid",
                  placeItems: "center",
                  mx: "auto",
                  transform: index === 1 ? "translateY(-8px)" : "none"
                }}
              >
                <TechnologyMark name={name} size={large ? 48 : 40} />
              </Box>
              <Typography sx={{ fontSize: 11, fontWeight: 700, mt: 1.5, maxWidth: 90, lineHeight: 1.3 }}>
                {name}
              </Typography>
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, my: 3, justifyContent: "center" }}>
          <Icon sx={{ color: panel.color, fontSize: large ? 85 : 65, strokeWidth: 1 }} />
          <Box sx={{ borderLeft: `1px solid ${panel.color}40`, pl: 2 }}>
            {showcase.strengths.slice(0, 2).map(text => (
              <Typography key={text} sx={{ fontFamily: "monospace", fontSize: 12, my: 1, maxWidth: 140 }}>
                {text}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
      <Typography sx={{ fontFamily: "monospace", color: panel.color, fontSize: 10, letterSpacing: ".07em" }}>
        {panel.label}
      </Typography>
    </Box>
  );
};

const technologyGroup = (name: string) =>
  /Cypress|Nx/.test(name)
    ? "Verification"
    : /MongoDB|Firebase|Redux|GraphQL|Relay/.test(name)
      ? "State & data"
      : /AWS|Amazon|Node|Linux/.test(name)
        ? "Services"
        : "Interface";

export const TechnologyMap = ({ technologies }: { technologies: string[] }) => {
  const groups = ["Interface", "State & data", "Services", "Verification"]
    .map(label => ({ label, items: technologies.filter(name => technologyGroup(name) === label) }))
    .filter(group => group.items.length);
  return (
    <Box component="figure" sx={{ m: 0 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: `repeat(${Math.min(groups.length, 2)}, minmax(0, 1fr))`,
            md: `repeat(${Math.min(groups.length, 3)}, minmax(0, 1fr))`
          },
          gap: 2
        }}
      >
        {groups.map((group, i) => (
          <Box key={group.label} sx={{ border: 1, borderColor: "divider", borderRadius: "16px", overflow: "hidden" }}>
            <Box sx={{ px: 2, py: 1.25, bgcolor: "background.paper", display: "flex", gap: 1.5, alignItems: "center" }}>
              <Typography sx={{ color: "primary.main", fontFamily: "monospace", fontSize: 11 }}>0{i + 1}</Typography>
              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{group.label}</Typography>
            </Box>
            <Box sx={{ p: 2, display: "flex", flexWrap: "wrap", gap: 1.5 }}>
              {group.items.map(name => (
                <Box key={name} sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ bgcolor: "#f3f3f0", p: 0.6, borderRadius: "6px", display: "flex" }}>
                    <TechnologyMark name={name} size={20} />
                  </Box>
                  <Typography sx={{ fontSize: 13 }}>{name}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Typography component="figcaption" variant="caption" color="text.secondary" sx={{ mt: 1.5 }}>
        Technology map: recorded tools grouped by responsibility.
      </Typography>
    </Box>
  );
};
