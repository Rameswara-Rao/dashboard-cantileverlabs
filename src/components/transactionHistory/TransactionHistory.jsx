import { Card, Table } from "react-bootstrap";
import { tableData } from "../../utils/constants";
import "./TransactionHistoryStyles.css";

const TransactionHistory = () => {
  return (
    <div>
      <Card className="card-mod mt-4">
        <Card.Body>
          <p className="goals-head text-center text-xl-start">
            Transaction history
          </p>

          <Table responsive>
            <thead>
              <tr>
                <th>Reciever</th>
                <th>Type</th>
                <th>Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, ind) => {
                return (
                  <tr key={ind} className="row-spacing">
                    <td className="py-3">
                      <img src={data.icon} width={22} alt="" />
                      <span className="reciever-text">{data.reciever}</span>
                    </td>
                    <td className="type-date-text py-3">{data.type}</td>
                    <td className="type-date-text py-3">{data.date}</td>
                    <td className="amount-text py-3">{data.amount}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TransactionHistory;
