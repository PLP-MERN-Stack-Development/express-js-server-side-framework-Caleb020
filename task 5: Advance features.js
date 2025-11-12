app.get("/api/products", (req, res) => {
  const { category, page = 1, limit = 5 } = req.query;

  let filtered = products;
  if (category) filtered = filtered.filter(p => p.category === category);

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + Number(limit));

  res.json({
    total: filtered.length,
    page: Number(page),
    limit: Number(limit),
    products: paginated,
  });
});

//search by name
app.get("/api/search", (req, res) => {
  const { name } = req.query;
  if (!name) return res.status(400).json({ error: "Missing search term" });
  const results = products.filter(p =>
    p.name.toLowerCase().includes(name.toLowerCase())
  );
  res.json(results);
});

//product statistics
app.get("/api/products/stats", (req, res) => {
  const stats = products.reduce((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  res.json(stats);
});

