import { useRef } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import Value from "./Value";
import { useScrollProgress } from "./ScrollAnimation/useScrollProgress";

const EnergyPipe = dynamic(() => import("./ScrollAnimation/EnergyPipe"), { ssr: false });
const AgentScene = dynamic(() => import("./ScrollAnimation/AgentScene"), { ssr: false });

const SEGMENTS = {
  pipe1: [0.0, 0.08],
  scene1: [0.08, 0.28],
  pipe2: [0.28, 0.36],
  scene2: [0.36, 0.56],
  pipe3: [0.56, 0.64],
  scene3: [0.64, 0.84]
} as const;

function segmentProgress(progress: number, start: number, end: number): number {
  if (progress <= start) return 0;
  if (progress >= end) return 1;
  return (progress - start) / (end - start);
}

const valueData = [
  {
    title: "Rework pressure",
    description: [
      "A decision made in one part of the product can create new questions elsewhere when no one owns the connected state."
    ],
    imageSrc: "/images/communication.svg"
  },
  {
    title: "Hidden release risk",
    description: [
      "If completion evidence is not explicit, a build can look finished while important assumptions remain untested."
    ],
    imageSrc: "/images/Ethical.svg"
  },
  {
    title: "Founder or product-lead coordination load",
    description: [
      "Product and engineering ownership can keep returning to the person already carrying the business or product context."
    ],
    imageSrc: "/images/QC2.svg"
  }
];

const ValuesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const valuesContainerRef = useRef<HTMLDivElement>(null);
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const imageRef3 = useRef<HTMLDivElement>(null);
  const imageRefs = [imageRef1, imageRef2, imageRef3];

  const progress = useScrollProgress(sectionRef);

  const sceneProgresses = [
    segmentProgress(progress, SEGMENTS.scene1[0], SEGMENTS.scene1[1]),
    segmentProgress(progress, SEGMENTS.scene2[0], SEGMENTS.scene2[1]),
    segmentProgress(progress, SEGMENTS.scene3[0], SEGMENTS.scene3[1])
  ];

  return (
    <Box ref={sectionRef} component="section" sx={{ paddingY: 9, backgroundColor: "background.paper" }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "wrap",
          rowGap: 9
        }}
      >
        <Typography component="h2" variant="h3" textAlign="center">
          A working product can still be difficult to trust, release, or evolve.
        </Typography>
        <Typography color="text.secondary" textAlign="center" sx={{ maxWidth: 900 }}>
          Without a clearly owned next state, decisions can keep reopening, context can disappear between handoffs, and
          verification can remain implicit. The result is not necessarily a failed product. It is a product whose next
          move remains harder to coordinate and trust than it should be.
        </Typography>
        <Box
          ref={valuesContainerRef}
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 8,
            position: "relative",
            width: "100%"
          }}
        >
          <EnergyPipe progress={progress} imageRefs={imageRefs} containerRef={valuesContainerRef} />
          {valueData.map((el, idx) => (
            <Value
              key={idx}
              reverse={idx % 2 !== 0}
              title={el.title}
              description={el.description}
              imageSrc={el.imageSrc}
              imageRef={imageRefs[idx]}
              animatedScene={<AgentScene sceneIndex={idx} progress={sceneProgresses[idx]} />}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ValuesSection;
