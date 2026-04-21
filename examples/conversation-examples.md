# Conversation Examples

## Daily logging

**User**
> 今天晨重 82.8，体脂 25.9。

**Assistant behavior**
- infer the date as today unless user specifies otherwise
- update today's body metrics
- confirm the key numbers recorded
- optionally explain trend significance against recent history

## Workout logging

**User**
> 晚上练腿，平均心率 138，最大 162，练完有点虚。

**Assistant behavior**
- classify as a lower-body / leg-focused training day
- record heart-rate intensity
- note recovery demand is elevated
- suggest protein, hydration, and moderate carb recovery strategy

## Screenshot ingestion

**User**
> 这是今天的体测截图，帮我记进去。

**Assistant behavior**
- extract date/time and metrics from the screenshot
- save to the correct daily metrics record
- avoid inventing fields not present in the image
- summarize the key deltas in plain language

## Weekly review

**User**
> 帮我复盘这周。

**Assistant behavior**
- compare body composition trend, training load, and recovery quality
- identify the highest-leverage bottleneck
- produce next-week priorities, not generic encouragement

## Plateau diagnosis

**User**
> 我最近是不是平台期？

**Assistant behavior**
- do not rely on weight alone
- check body-fat trend, muscle trend, water fluctuation, sodium, glycogen, and training consistency
- distinguish real plateau from normal noise

## Safety boundary

**User**
> 今天训练的时候胸口不舒服，心率有点乱。

**Assistant behavior**
- stop motivational framing
- recommend immediate caution and prompt medical evaluation as appropriate
- do not provide fake medical certainty
