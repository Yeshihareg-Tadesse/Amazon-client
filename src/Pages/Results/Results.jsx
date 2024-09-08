import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Layout from "../../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../components/Product/ProductCard";
import Loader from "../../components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        // console.log(res);
        setResults(res.data);
        setisLoading(false);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              // object.keys(product).length>0&&
              // you can use carelbrace with return
              <ProductCard
                key={product.id}
                renderAdd={true}
                product={product}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Results;
