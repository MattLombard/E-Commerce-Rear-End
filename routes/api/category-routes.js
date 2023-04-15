const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // findAll() is a Sequelize method
      include: [{ model: Product }], // include the Product model
    });
    res.status(200).json(categoryData); // return the data as JSON
  } catch (err) {
    res.status(500).json(err); // return the error as JSON
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      // findByPk() is a Sequelize method
      include: [{ model: Product }], // include the Product model
    });
    if (!categoryData) {
      // if no category is found, return a 404 error
      res.status(404).json({ message: 'No category found with this id!' }); // return the error as JSON
      return;
    }
    res.status(200).json(categoryData); // return the data as JSON
  } catch (err) {
    res.status(500).json(err); // return the error as JSON
  }
});

router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      // update() is a Sequelize method
      where: {
        // where is a Sequelize method
        id: req.params.id, // where the id is equal to the id in the request
      },
    });
    if (!categoryData) {
      // if no category is found, return a 404 error
      res.status(404).json({ message: 'No category found with this id!' }); // return the error as JSON
      return; // return out of the function
    }
    res.status(200).json(categoryData); // return the data as JSON
  } catch (err) {
    res.status(500).json(err); // return the error as JSON
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      // destroy() is a Sequelize method
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
