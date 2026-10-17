import { useContext } from "react";
import { DashbordContextStore } from "../../../context/globalStore";
import Products from "./Products";

export default function CustomerList() {
  const { customers } = useContext(DashbordContextStore);

  return (
    <>
      <h5> Our Customers </h5>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.length != 0 ? (
            customers.map((value, index) => {
              return (
                <tr className="">
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                </tr>
              );
            })
          ) : (
            <h3> No Customers Found</h3>
          )}
        </tbody>
      </table>
      <div>
        <Products />
      </div>
    </>
  );
}
