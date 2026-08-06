/**
 * Global error-handling middleware.
 * Must be registered LAST in server.js (after all routes).
 * Catches errors thrown via next(err) from any controller.
 */

export default function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "An unexpected internal server error occurred.";

  console.error(`[ERROR] ${req.method} ${req.url} -> ${status}: ${message}`);

  res.status(status).json({
    error: err.name || "InternalServerError",
    message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
}
