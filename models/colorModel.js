const db = require("../config/dbConfig");

const Color = {
  createSwatch: async (swatchData) => {
    const query =
      "INSERT INTO colors (type, value) VALUES ($1, $2) RETURNING *";
    const values = [swatchData.type, JSON.stringify(swatchData)];
    const res = await db.query(query, values);
    return res.rows[0];
  },
  getSwatches: async () => {
    const query = "SELECT * FROM colors ORDER BY created_at DESC LIMIT 5";
    const res = await db.query(query);
    return res.rows;
  },
};

module.exports = Color;
