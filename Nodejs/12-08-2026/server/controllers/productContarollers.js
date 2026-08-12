import Product from "../models/Product.js";

// all products
const getAllProducts = async (req, res) => {
  try {
    const { search, category } = req.query;

    let filter = {};

    if (search) {
      filter.$or = [
        {
          name: { $regex: search, $options: "i" },
        },
      ];
    }

    if (category && category !== "All") {
      filter.category = category;
    }

    const products = await Product.find(filter).sort({ createAt: -1 });

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// single product

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        sucess: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add product

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, image, stock } = req.body;

    // validation

    if (!name || !description || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Name , description , price and category are required.",
      });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
      stock: stock || 0,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Product added successfully!.",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update product

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        sucess: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully!.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// delete product

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        sucess: false,
        message: "Product not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!.",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export {getAllProducts , getProductById , addProduct , updateProduct , deleteProduct}
