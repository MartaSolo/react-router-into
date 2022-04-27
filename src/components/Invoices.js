import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

export function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav>
        {invoices.map((invoice) => (
          <Link
            style={{ display: "block" }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
