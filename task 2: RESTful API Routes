// In-memory data store

let products = [];

// GET /api/products - List all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

// GET /api/products/:id - Get specific product

app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// POST /api/products - Create new product

app.post("/api/products", (req, res) => {
  const { name, description, price, category, inStock } = req.body;
  const newProduct = { id: uuidv4(), name, description, price, category, inStock };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id - Update product

app.put("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  Object.assign(product, req.body);
  res.json(product);
});

// DELETE /api/products/:id - Delete product

app.delete("/api/products/:id", (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: "Product deleted successfully" });
});
