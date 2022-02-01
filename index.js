  
  
const query = `SELECT *  \
FROM Products`

// simple query
connection.query(
   query,
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
    }
  );

  const insertQuery = `Insert into products (Id, Description, Sku)
  VALUes (?, ?, ?)`

  // connection.query(insertQuery, [5, "My New product", "123454"],
  // (err, results) => {
  //   if(err) {
  //     console.log(err)
  //   }
  //   console.log(results)
  // })
  
  let sql = "INSERT INTO ContactPersons (Id, name, Email, Phone, address) VALUES ?";
  let values = [
    [6, "Maxo Jean", "maxo@aol.com", "5613062021", "9927 Boca FL"],
    [2, "Seneque Fleurilus", "senque@aol.com", "5613062022", "9928 Boca FL"],
    [3, "Adrien Stephene", "adrien@aol.com", "5613062023", "9929 Boca FL"],
    [4, "Davidson Demesier", "davidson@aol.com", "5613062024", "9930 Boca FL"],
    [5, "Marie Nicolas", "marie@aol.com", "5613062026", "9931 Boca FL"]
  ];
  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
connection.end(); 

