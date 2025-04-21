Create a visualization of the model benchmark results using HTML, CSS, and JavaScript.

The visualization must satisfy the following requirements:

- The visualization must focus on the primary metric for each benchmark:
  - The scores must be normalized to a 0-100 scale.
  - `percent_correct` for `aider_polyglot` (already normalized)
  - `normalized_score` for `kcores_llm_arena` (min is 0, max is 400, normalize it to 0-100)
- The visualization must use friendly names for the benchmarks, which are:
  - `aider_polyglot` -> "Aider polyglot coding leaderboard"
  - `kcores_llm_arena` -> "KCORES LLM Arena"
- The visualization must combine the results for all benchmarks into a single visualization.
- The visualization must compare the relative performance of the models across the benchmarks.
- The top 3 models for each benchmark should be clearly labeled.
- Each model should have an associated color to make it easier to identify.

Technical Requirements:

- The entire visualization logic must be self-contained in a single HTML file.
- Data must be loaded from `results.js` via a script tag from the same directory.
- Assume `results.js` is already in the same directory as the HTML file.
- You can use any external libraries you want. However, you need to include the library from a CDN directly in the HTML file.

Output format:

- Just output the HTML code.
- Assume the HTML file is named `index.html` and is in the same directory as `results.js`.
- Refer to the sample HTML file as the starting point.
