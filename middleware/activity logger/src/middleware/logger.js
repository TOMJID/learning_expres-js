import fs from "fs";
import path from "path";

const logFilePath = path.join(process.cwd(), "activity.log");

const ActivityLogger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const logMAssage = `{ At: ${timestamp} } { Method: ${req.method} } { From: ${req.url} }`;
  console.log(logMAssage);

  fs.appendFile(logFilePath, logMAssage + "\n", (err) => {
    if (err) {
      console.error("Failed to write activity log:", err);
    }
  });

  next();
};

export default ActivityLogger;
