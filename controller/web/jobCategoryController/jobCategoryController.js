module.exports = {
  categories: (req, res, categoryQuery) => {
    if (Object.keys(req.query).length > 0) {
      const { count } = req.query;
      try {
        categoryQuery.getAllCategory(count).then((categoryData) => {
          if (!categoryData.length > 0) {
            return res.badRequest(res.__("categoryDoesNotExist"));
          } else {
            let category = categoryData;
            return res.ok(category);
          }
        });
      } catch (err) {
        return res.serverError(err);
      }
    } else {
      return res.badRequest("Job count should be numeric value.");
    }
  },
};
