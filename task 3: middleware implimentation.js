// custom logger 
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};
app.use(logger);

//authentication middleware
const authenticate = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== "my-secret-key") {
    return res.status(401).json({ error: "Unauthorized: Invalid API Key" });
  }
  next();
};

// Apply auth only to /api routes
app.use("/api", authenticate);

//validation middleware 
const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || typeof price !== "number") {
    return res.status(400).json({ error: "Invalid product data" });
  }
  next();
};

//use it on create/update:
app.post("/api/products", validateProduct, (req, res) => { ... });
app.put("/api/products/:id", validateProduct, (req, res) => { ... });
