const timestamp = () => {
  return new Date().toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

const activityLogger = (req, res, next) => {
  console.log(`[ at: ${timestamp()}] \n [method: ${req.method}] `);
  next();
};
export { timestamp, activityLogger };
