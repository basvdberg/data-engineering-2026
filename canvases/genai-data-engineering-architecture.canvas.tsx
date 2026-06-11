import {
  H1,
  H2,
  Pill,
  Row,
  Stack,
  Text,
  useHostTheme,
} from "cursor/canvas";
import type { CSSProperties, ReactNode } from "react";

function DataEngineerIcon({ color, accent }: { color: string; accent: string }) {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden>
      <circle cx="36" cy="36" r="34" stroke={accent} strokeWidth="2" fill={color} />
      <circle cx="36" cy="26" r="10" stroke={accent} strokeWidth="2" fill="none" />
      <path
        d="M18 58c0-10 8-16 18-16s18 6 18 16"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="28" y="40" width="16" height="12" rx="2" stroke={accent} strokeWidth="1.5" fill="none" />
      <path d="M32 46h8M36 42v8" stroke={accent} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ArrowDown({ color }: { color: string }) {
  return (
    <svg width="24" height="32" viewBox="0 0 24 32" fill="none" aria-hidden>
      <path d="M12 2v22M6 18l6 8 6-8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GenAIBadge({ theme }: { theme: ReturnType<typeof useHostTheme> }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px",
        borderRadius: 8,
        border: `1px solid ${theme.accent.primary}`,
        background: theme.fill.tertiary,
      }}
    >
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path
          d="M14 3l2.2 6.8H23l-5.5 4 2.1 6.8L14 16.6 8.4 20.6l2.1-6.8L5 9.8h6.8L14 3z"
          stroke={theme.accent.primary}
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="14" cy="14" r="3" fill={theme.accent.primary} />
      </svg>
      <div>
        <Text weight="semibold" style={{ color: theme.accent.primary }}>
          Generative AI
        </Text>
        <Text size="small" tone="secondary">
          Translates declarative intent into implementation
        </Text>
      </div>
    </div>
  );
}

type LayerProps = {
  label: string;
  number: number;
  children: ReactNode;
  style?: CSSProperties;
  accent?: boolean;
};

function Layer({ label, number, children, style, accent }: LayerProps) {
  const theme = useHostTheme();
  const borderColor = accent ? theme.accent.primary : theme.stroke.secondary;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 720,
        borderRadius: 10,
        border: `1px solid ${borderColor}`,
        background: accent ? theme.fill.tertiary : theme.bg.elevated,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "12px 16px",
          borderBottom: `1px solid ${theme.stroke.tertiary}`,
          background: theme.fill.secondary,
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 600,
            color: accent ? theme.text.onAccent : theme.text.primary,
            background: accent ? theme.accent.primary : theme.fill.quaternary,
          }}
        >
          {number}
        </div>
        <H2 style={{ margin: 0 }}>{label}</H2>
      </div>
      <div style={{ padding: 16 }}>{children}</div>
    </div>
  );
}

function SourceBox({
  title,
  items,
  highlighted,
}: {
  title: string;
  items: string[];
  highlighted?: boolean;
}) {
  const theme = useHostTheme();

  return (
    <div
      style={{
        flex: 1,
        minWidth: 200,
        padding: 12,
        borderRadius: 8,
        border: `1px solid ${highlighted ? theme.accent.primary : theme.stroke.tertiary}`,
        background: highlighted ? theme.fill.tertiary : theme.bg.editor,
      }}
    >
      <Text weight="semibold" style={{ marginBottom: 8, color: highlighted ? theme.accent.primary : undefined }}>
        {title}
      </Text>
      <Stack gap={4}>
        {items.map((item) => (
          <Text key={item} size="small" tone="secondary">
            {item}
          </Text>
        ))}
      </Stack>
    </div>
  );
}

function ToolChip({ name }: { name: string }) {
  const theme = useHostTheme();
  return (
    <span
      style={{
        padding: "6px 12px",
        borderRadius: 6,
        fontSize: 12,
        border: `1px solid ${theme.stroke.tertiary}`,
        background: theme.bg.editor,
        color: theme.text.secondary,
      }}
    >
      {name}
    </span>
  );
}

export default function GenAIDataEngineeringArchitecture() {
  const theme = useHostTheme();

  return (
    <Stack gap={20} style={{ padding: 24, alignItems: "center" }}>
      <Stack gap={8} style={{ alignItems: "center", textAlign: "center", maxWidth: 640 }}>
        <H1>Gen AI and Data Engineering</H1>
        <Text tone="secondary">
          The data engineer steers a three-layer stack: declarative intent at the top, generated code in the middle, standard tools at the bottom.
        </Text>
      </Stack>

      <Stack gap={8} style={{ alignItems: "center" }}>
        <DataEngineerIcon color={theme.fill.secondary} accent={theme.accent.primary} />
        <Text weight="semibold">Data Engineer</Text>
        <Text size="small" tone="secondary">
          Defines intent, reviews output, owns the solution
        </Text>
      </Stack>

      <ArrowDown color={theme.stroke.primary} />

      <Layer label="Specification of intent" number={1} accent>
        <Text tone="secondary" style={{ marginBottom: 12 }}>
          Technology-agnostic, declarative description of <em>what</em> the solution must do — not how it is built.
        </Text>
        <Row gap={12} wrap style={{ marginBottom: 12 }}>
          <SourceBox
            title="Design patterns — Generic"
            highlighted
            items={[
              "Separate what and how",
              "Functional decomposition",
              "Prefer simple decomposition",
              "Simplicity",
            ]}
          />
          <SourceBox
            title="Design patterns — Data engineering"
            items={[
              "Data extractor",
              "Data object & poller",
              "Data solution layers",
              "Event-based orchestration",
            ]}
          />
          <SourceBox
            title="Documentation & standards"
            items={[
              "Architecture decisions",
              "DSA metadata (transformations)",
              "Release notes & runbooks",
            ]}
          />
        </Row>
        <Row gap={8} align="center">
          <Pill tone="accent" size="small">
            Declarative
          </Pill>
          <Pill tone="neutral" size="small">
            Technology-agnostic
          </Pill>
          <Pill tone="neutral" size="small">
            AI-ready vocabulary
          </Pill>
        </Row>
      </Layer>

      <Stack gap={4} style={{ alignItems: "center" }}>
        <ArrowDown color={theme.accent.primary} />
        <GenAIBadge theme={theme} />
        <ArrowDown color={theme.accent.primary} />
      </Stack>

      <Layer label="Code and configuration" number={2}>
        <Text tone="secondary" style={{ marginBottom: 12 }}>
          Generated and reviewed implementation — the <em>how</em> on a concrete stack.
        </Text>
        <Row gap={8} wrap style={{ marginBottom: 12 }}>
          {[
            "Python modules",
            "SQL & migrations",
            "Airflow DAGs",
            "Docker & compose",
            "CI/CD workflows",
            "Tests & hooks",
            "Environment config",
          ].map((item) => (
            <ToolChip key={item} name={item} />
          ))}
        </Row>
        <Text size="small" tone="tertiary">
          Hand-written code gives way to AI-generated code, steered by the specification above.
        </Text>
      </Layer>

      <ArrowDown color={theme.stroke.primary} />

      <Layer label="Standard tools" number={3}>
        <Text tone="secondary" style={{ marginBottom: 12 }}>
          Proven, off-the-shelf platforms that execute the generated solution in production.
        </Text>
        <Row gap={8} wrap>
          {[
            "Apache Airflow",
            "PostgreSQL",
            "Docker",
            "GitHub Actions",
            "NGINX",
            "Cursor IDE",
          ].map((tool) => (
            <ToolChip key={tool} name={tool} />
          ))}
        </Row>
      </Layer>

      <div
        style={{
          width: "100%",
          maxWidth: 720,
          padding: "12px 16px",
          borderRadius: 8,
          border: `1px dashed ${theme.stroke.secondary}`,
          textAlign: "center",
        }}
      >
        <Text size="small" tone="tertiary">
          Source: Data Engineering 2026 · Design patterns from data-engineering-design-patterns
        </Text>
      </div>
    </Stack>
  );
}
