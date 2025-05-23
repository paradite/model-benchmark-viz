// global variable format for easy loading into the HTML file
const results = {
  "o3 (high)": {
    "aider_polyglot": {
      "percent_correct": 79.6,
      "cost": 111.03,
      "correct_edit_format": 95.1,
      "edit_format": "diff"
    }
  },
  "o4-mini (high)": {
    "aider_polyglot": {
      "percent_correct": 72.0,
      "cost": 19.64,
      "correct_edit_format": 90.7,
      "edit_format": "diff"
    },
    "kcores_llm_arena": {
      "normalized_score": 318.8
    }
  },
  "GPT-4.1": {
    "aider_polyglot": {
      "percent_correct": 52.4,
      "cost": 9.86,
      "correct_edit_format": 98.2,
      "edit_format": "diff"
    }
  },
  "Claude 3.5 Sonnet": {
    "aider_polyglot": {
      "percent_correct": 51.6,
      "cost": 14.41,
      "correct_edit_format": 99.6,
      "edit_format": "diff"
    },
    "kcores_llm_arena": {
      "normalized_score": 330.8
    }
  },
  "Claude 3.7 Sonnet (Thinking)": {
    "aider_polyglot": {
      "percent_correct": 64.9,
      "cost": 36.83,
      "correct_edit_format": 97.8,
      "edit_format": "diff"
    },
    "kcores_llm_arena": {
      "normalized_score": 334.8
    }
  },
  "Gemini 2.5 Pro": {
    "aider_polyglot": {
      "percent_correct": 72.9,
      "cost": 6.32,
      "correct_edit_format": 92.4,
      "edit_format": "diff-fenced"
    },
    "kcores_llm_arena": {
      "normalized_score": 370.6
    }
  },
  "DeepSeek R1": {
    "aider_polyglot": {
      "percent_correct": 56.9,
      "cost": 5.42,
      "correct_edit_format": 96.9,
      "edit_format": "diff"
    },
    "kcores_llm_arena": {
      "normalized_score": 319.4
    }
  },
  "DeepSeek V3 (0324)": {
    "aider_polyglot": {
      "percent_correct": 55.1,
      "cost": 1.12,
      "correct_edit_format": 99.6,
      "edit_format": "diff"
    },
    "kcores_llm_arena": {
      "normalized_score": 328.3
    }
  },
  "Grok 3 Beta": {
    "aider_polyglot": {
      "percent_correct": 53.3,
      "cost": 11.03,
      "correct_edit_format": 99.6,
      "edit_format": "diff"
    },
    "kcores_llm_arena": {
      "normalized_score": 296.0
    }
  }
};

const models = Object.keys(results);
