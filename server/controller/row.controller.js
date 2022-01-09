const db = require("../db");
const {
  configureFilterQuery,
  checkFiltersValidity,
} = require("../services/row.services");

class RowController {
  async getRows(req, res) {
    try {
      const { page, size, filter, filterType, filterValue } = req.query;
      if (!page || !size) {
        return res
          .status(400)
          .json({ message: "неверные парраметры page size" });
      }
      if (filter && !checkFiltersValidity(filter, filterType, filterValue)) {
        return res.status(400).json({ message: "неверно заданы фильтры" });
      }
      const filterQuery = configureFilterQuery(filter, filterType, filterValue);
      const query = `SELECT id, name, to_char(date, 'DD-MM-YYYY') as date, distance, count FROM table_row ${filterQuery} ORDER BY id LIMIT $2 OFFSET (($1 - 1) * $2);`;
      const { rows } = await db.query(query, [page, size]);
      const total = await db.query(
        `select count(id) from table_row ${filterQuery};`
      );
      const totalCount = total.rows[0].count;
      const pagesTotal = Math.ceil(totalCount / size);
      return res.json({
        data: rows,
        page,
        size,
        total: totalCount,
        pagesTotal,
      });
    } catch (e) {
      console.log("get rows error", e.message);
      return res.status(500).json({ message: "server error" });
    }
  }

  async createRow(req, res) {
    try {
      const { name, count, date, distance } = req.body;
      const query =
        "INSERT INTO table_row (name, count, distance, date) values ($1, $2, $3, now()) RETURNING *";
      const row = await db.query(query, [name, count, distance]);
      res.json(row.rows[0]);
    } catch (e) {
      console.log("create row error", e.message);
      res.status(500).json({ message: "server error" });
    }
  }
}

module.exports = new RowController();
