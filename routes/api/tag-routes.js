const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // async function
  try {
    // try to run the code
    const tagData = await Tag.findAll({
      // findAll() is a Sequelize method
      include: [{ model: Product, through: ProductTag }], // include the Product model
    });
    res.status(200).json(tagData); // return the data as JSON
  } catch (err) {
    // if there is an error, run this code
    res.status(500).json(err); // return the error as JSON
  }
});

router.get('/:id', async (req, res) => {
  // async function
  try {
    // try to run the code
    const tagData = await Tag.findByPk(req.params.id, {
      // findByPk() is a Sequelize method
      include: [{ model: Product, through: ProductTag }], // include the Product model
    });
    if (!tagData) {
      // if no tag is found, return a 404 error
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
