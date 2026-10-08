module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      startServerReadyPattern: "ready|started|localhost:3000",
      startServerReadyTimeout: 120000,
      url: [
        "http://127.0.0.1:3000/",
        "http://127.0.0.1:3000/?theme=dark",
        "http://127.0.0.1:3000/product",
        "http://127.0.0.1:3000/product?theme=dark",
        "http://127.0.0.1:3000/pricing",
        "http://127.0.0.1:3000/pricing?theme=dark"
      ],
      numberOfRuns: 1,
      settings: { preset: "mobile" }
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 0.98 }],
        "categories:best-practices": ["error", { minScore: 0.98 }],
        "categories:seo": ["error", { minScore: 0.98 }]
      }
    }
  }
};
