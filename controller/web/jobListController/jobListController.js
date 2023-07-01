module.exports = {
  jobs: (req, res, jobQuery) => {
    if (Object.keys(req.query).length > 0) {
      const { count } = req.query;
      try {
        if (isNaN(count)) {
          return res.badRequest("Job count should be numeric value.");
        } else {
          jobQuery.getAllJobs(count).then((jobData) => {
            if (!jobData.length > 0) {
              return res.badRequest(res.__("jobDoesNotExist"));
            } else {
              let jobs = jobData;
              return res.send(jobs);
            }
          });
        }
      } catch (err) {
        return res.serverError(err);
      }
    } else {
      return res.badRequest("Job count should be numeric value.");
    }
  },
};
