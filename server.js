const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

// === MIDDLEWARE ===
app.use(cors());
app.use(express.json());

// === API ROUTES ===
const appLinks = require("./routes/appLinks");
app.use("/api/app-links", appLinks);

// === SERVE REACT FRONTEND ===
const clientBuildPath = path.join(__dirname, "client", "build");

if (fs.existsSync(clientBuildPath)) {
  // Serve static files
  app.use(express.static(clientBuildPath));

  // Serve index.html for any unknown route (SPA support)
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
} else {
  console.log("⚠️  client/build not found – frontend not included.");
}

// === PORT FOR RENDER ===
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
