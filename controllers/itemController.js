const Item = require('../models/Item');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.getAllItems = catchAsync(async (req, res) => {
  const items = await Item.find({ owner: req.user._id });

  res.status(200).json({
    status: 'success',
    results: items.length,
    data: {
      items,
    },
  });
});

exports.getItemById = catchAsync(async (req, res) => {
  const item = await Item.findById(req.params.id);

  if (!item) throw new AppError('No itemfound', 404);

  res.status(200).json({
    status: 'success',
    data: {
      item,
    },
  });
});

exports.createItem = catchAsync(async (req, res) => {
  const data = req.body;
  data.owner = req.user._id;

  const item = await Item.create(data);

  res.status(201).json({
    status: 'success',
    data: {
      item,
    },
  });
});

exports.updateItemById = catchAsync(async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!item) throw new AppError('No item found', 404);

  res.status(200).json({
    status: 'success',
    data: {
      item,
    },
  });
});

exports.deleteItemById = catchAsync(async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);

  if (!item) throw new AppError('No item found', 404);

  res.status(204).json({
    status: 'success',
    data: {
      item: null,
    },
  });
});
