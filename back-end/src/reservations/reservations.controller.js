/**
 * List handler for reservation resources
 */

const service = require("./reservations.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function list(req, res) {
  data = await service.list();
  res.json({
    data
  });
}

module.exports = {
  asyncErrorBoundary(list)
};
