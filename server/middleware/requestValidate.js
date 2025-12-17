const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || typeof name !== "string") {
    return res.status(400).json({ message: "Valid name is required" });
  }

  if (price === undefined || typeof price !== "number" || price < 0) {
    return res.status(400).json({ message: "Price must be a non-negative number" });
  }

  next();
};

export default validateProduct;
