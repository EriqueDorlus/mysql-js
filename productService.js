import { getConnection } from "\.db";

const getAllProducts = () => {
const connection = getConnection();
connection.query("SELECT * FROM products", (err, results) => {
    if (err) {
        console.log(err); 
    }
    console.log(results);
    return results
    });
   
}

import { getConnection } from "./db";

const getAllProducts = () => {
    const connection = getConnection();

    //return connection.query("SELECT * FROM products")
    
    return connection
    .query("SELECT * FROM products")
    .then(results => {
        return results;
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        connection.end();
    })
}

const getAllProductsAsync = async () => {
    const connection = getConnection();
    const products = [];
    try {
         products =  await connection.query("SELECT * FROM products")

    } catch (err) {
        console.log(err);
    } finally {
        connection.end();
    }

    return products;
}
white_check_mark
