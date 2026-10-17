import { useContext } from "react";
import { DashbordContextStore } from "../../../context/globalStore";

export default function Products() {
  const { products } = useContext(DashbordContextStore);

  return (
    <>
      <h5> Our Products </h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products && products.length != 0 ? (
            products.map((value, index) => {
              return (
                <tr className="">
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                </tr>
              );
            })
          ) : (
            <h3> No Products Found</h3>
          )}
        </tbody>
      </table>
    </>
  );
}
