const Product = require('../models/product');
const { getRandomImageUrl } = require('../services/imageService');
const { validateProduct } = require('../validators/productValidator');

// Funcion para listar todos los productos
async function list(req, res, next) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) { next(err); }
}

// Funcion para obtener un producto por ID
async function getById(req, res, next) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(product);
  } catch (err) { next(err); }
}

// Funcion para crear un nuevo producto
async function create(req, res, next) {
  try {
    const { error, value } = validateProduct(req.body);
    if (error) return res.status(400).json({ errors: error.details.map(d => d.message) });

    // Obtener imagen externa
    const image_url = await getRandomImageUrl({ width: 800, height: 600, source: process.env.IMAGE_SOURCE });

    const newProduct = await Product.create({ ...value, image_url });
    res.status(201).json(newProduct);
  } catch (err) { next(err); }
}
 // Funcion para actualizar un producto existente
async function update(req, res, next) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    const { error, value } = validateProduct(req.body);
    if (error) return res.status(400).json({ errors: error.details.map(d => d.message) });

    await product.update(value);
    res.json(product);
  } catch (err) { next(err); }
}

// Funcion para eliminar un producto
async function remove(req, res, next) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });
    await product.destroy();
    res.status(204).send();
  } catch (err) { next(err); }
}

module.exports = { list, getById, create, update, remove };
