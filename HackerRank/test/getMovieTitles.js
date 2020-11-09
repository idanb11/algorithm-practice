const https = require("https");
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 */
function getMovieTitles(substr) {
  const currentPage = 1;

  https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${currentPage}`, (res) => {
    res.setEncoding("utf8");
    res.on("data", function (body) {
      const parsed = JSON.parse(body);
      const movies = parsed.data;
      const totalPages = parsed.total_pages;
      const titles = [];
      movies.map((a) => {
        titles.push(a.Title);
      });

      for (let i = 2; i <= totalPages; i++) {
        const currentPage = i;
        const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${currentPage}`;
        https.get(url, (res) => {
          res.setEncoding("utf8");
          res.on("data", function (body) {
            const newData = JSON.parse(body);
            const newMovies = newData.data;

            newMovies.map((a) => {
              titles.push(a.Title);
            });

            titles.sort().forEach((title) => console.log(title));
          });
        });
      }
    });
  });
}

getMovieTitles("spiderman");
