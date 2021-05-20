const db = require('../../database/index.js');

module.exports = {

  getReviews: function (params, callback) {
    const { id, page, count, sort, product_id } = params;
    console.log(id);

    var queryStr = `SELECT * FROM reviews WHERE id=${id}`;

    db.query(queryStr, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },

  postReviews: function (params, callback) {
    var queryStr = 'INSERT INTO `reviews` (id, product_id, rating, date, summary, body, recommend, reported, reviewer_name, reviewer_email, response, helpfulness) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(queryStr, params, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },

  putHelpful: function (params, callback) {
    var queryStr =  `UPDATE reviews SET helpfulness=${params[0]} WHERE id=${params[1]}`;

    db.query(queryStr, params, function (error, data) {
      if (error) {
        throw error
      } else {
        callback(null, data);
      }
    });
  },

}
