# Training Rebuild Assistant Skill

AI-native training, recovery, and body-composition coaching skill for Hermes Agent.

This repository packages a reusable Hermes Skill that helps users:
- log body metrics, workouts, meals, and recovery notes through natural conversation
- ingest screenshots as first-class inputs
- keep records strictly separated by date
- generate daily summaries, weekly reviews, and trend-based coaching
- stay scientific, practical, and sustainable instead of chasing gimmicks

## Why this project exists

Most fitness tracking tools force people into forms, rigid schemas, or calorie-counting bureaucracy.
This skill takes a different approach:

- **Conversation first**: users talk naturally
- **Structured under the hood**: Hermes extracts stable data for longitudinal analysis
- **AI native**: the model interprets context instead of relying on giant rule trees
- **Date isolated**: today stays today; historical context informs trends without polluting daily logs
- **Coach, not drill sergeant**: rigorous and actionable, but still human

## Repository layout

```text
.
├── skill/
│   └── SKILL.md                # The Hermes Skill definition
├── docs/
│   └── product-spec-v1.md      # Product and behavior specification
├── examples/
│   └── conversation-examples.md
├── CHANGELOG.md
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

## What the skill does

### 1. Long-term health archive
Maintains a stable user profile with goals, heart-rate boundaries, supplement stack, and recovery constraints.

### 2. Daily logs with strict date ownership
Stores body metrics and behavior logs by date so trend analysis stays trustworthy.

### 3. Screenshot ingestion
Uses Hermes vision workflows to extract body-composition reports and workout history screenshots into structured records.

### 4. Trend-aware coaching
Explains whether changes likely come from fat loss, muscle gain, glycogen, water retention, sodium intake, or recovery debt.

### 5. Safety rails
Avoids pretending to be a doctor, highlights red-flag scenarios, and discourages extreme strategies.

## Install into Hermes

### Recommended: installer CLI

The repo now ships a small installer CLI so installation is not just “copy these two files by hand”.

#### Local clone

```bash
git clone https://github.com/kylinzhao/training-rebuild-assistant-skill.git
cd training-rebuild-assistant-skill
node bin/install.js install
```

Check current install status:

```bash
node bin/install.js check
```

What it does:
- copies `skill/SKILL.md` to `~/.hermes/skills/wellness/training-rebuild-assistant/SKILL.md`
- copies `docs/product-spec-v1.md` to `~/.hermes/skills/wellness/training-rebuild-assistant/references/product-spec-v1.md`

#### Future `npx` form

The repository already contains `package.json` + `bin/install.js`, so once it is published as an npm package, the intended command becomes:

```bash
npx training-rebuild-assistant-skill install
```

### Manual install

If you do not want Node/npm involved, you can still copy the files manually:

```bash
mkdir -p ~/.hermes/skills/wellness/training-rebuild-assistant
cp skill/SKILL.md ~/.hermes/skills/wellness/training-rebuild-assistant/SKILL.md
mkdir -p ~/.hermes/skills/wellness/training-rebuild-assistant/references
cp docs/product-spec-v1.md ~/.hermes/skills/wellness/training-rebuild-assistant/references/product-spec-v1.md
```

## Recommended storage layout

The skill spec recommends persisting runtime data separately from the skill definition itself:

```text
~/.hermes/training_rebuild_assistant/
├── profile.json
├── daily_metrics/
├── daily_logs/
├── monthly_summaries/
└── weekly_reviews/
```

This repository intentionally contains the **skill definition**, not personal health data.

## Example user requests

- “今天晨重 82.8，体脂 25.9”
- “晚上练腿，平均心率 138，最大 162”
- “这是今天的体测截图，帮我记进去”
- “帮我总结今天”
- “复盘这周训练和恢复”
- “我最近是在掉脂，还是只是掉水？”

More examples: [examples/conversation-examples.md](examples/conversation-examples.md)

## Design principles

- **AI native over workflow theater**
- **Structured storage over memory drift**
- **Scientific interpretation over scale obsession**
- **Sustainable execution over extreme plans**
- **Human coaching tone over empty motivation slogans**

## Roadmap

### v1
- Skill definition
- product spec
- screenshot ingestion guidance
- daily/weekly analysis framework

### v2
- weekly review templates
- better recovery-decision prompts
- optional chart/report generators

### v3
- calendar/cron integrations
- environment-aware hiking preparation
- more reusable import pipelines for wearable/device exports

## Contributing

Contributions are welcome, especially around:
- clearer skill prompts
- better screenshot ingestion strategies
- safer coaching boundaries
- reusable analysis/reporting templates
- docs and translations

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT — see [LICENSE](LICENSE).
