Create a visualization of the model benchmark results using HTML, CSS, and JavaScript.

The visualization must satisfy the following requirements:

- The visualization must load data from `results.js` via a script tag from the same directory:
  - `<script src="results.js"></script>`
- The visualization must focus on the primary metric for each benchmark:
  - `percent_correct` for `aider_polyglot`
  - `normalized_score` for `kcores_llm_arena`
- The visualization must use friendly names for the benchmarks, which are:
  - `aider_polyglot` -> "Aider polyglot coding leaderboard"
  - `kcores_llm_arena` -> "KCORES LLM Arena"
- The visualization must show the relative performance of the models for each benchmark.
- The top 3 models for each benchmark should be clearly labeled.
- Each model should have an associated color to make it easier to identify.

Technical Requirements:

- The entire visualization must be contained in a single HTML file.
- You can use any external libraries you want. However, you need to include the library from a CDN directly in the HTML file.
