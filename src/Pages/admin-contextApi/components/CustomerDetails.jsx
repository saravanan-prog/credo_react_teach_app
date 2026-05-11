import ProductDetails from "./ProductsDetails";

import { AdminContext } from "../../../core/context/gernalContext";
import { useContext } from "react";

export default function CustomerDetails() {

    const { users } = useContext(AdminContext)

    return <div>
        <p> CustomerDetails Component </p>

        <div className="mt-5">
            <h3>Our customers </h3>

            <table className="table table-border">
                <thead>
                    <tr>
                        <th>sno</th>
                        <th>customer Name </th>
                        <th> Email </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((value, key) => {
                        return <tr key={key}>
                            <td>{key + 1} </td>
                            <td>{value?.name?.firstname + ' ' + value?.name?.lastname} </td>
                            <td>{value?.email} </td>
                        </tr>
                    })}
                </tbody>
            </table>

            <div className="m-3 fw-700 text-center">Total Customers : {users.length} </div>
        </div>


        <div className="mt-5">
            <ProductDetails />
        </div>

    </div>
}