# Model Benchmark Result visualization

A project by [16x Eval](https://eval.16x.engineer/) team to evaluate the ability of different models to generate visualizations of the results of model benchmark tests.

## Benchmark Data

The data is stored in `top-models.json`.

Benchmark Data Sources:

- [Aider polyglot coding leaderboard](https://aider.chat/docs/leaderboards/)
- [KCORES LLM Arena](https://github.com/KCORES/kcores-llm-arena)

## Model Inclusion Criteria

To avoid too much clutter, we employ the following criteria for model inclusion:

- The model must not be superceded by a newer model, where "newer" is defined as a model released by the same company with strictly higher performance and similar cost.
  - For example, o3-mini is superceded by o4-mini by OpenAI, hence it is not included.
