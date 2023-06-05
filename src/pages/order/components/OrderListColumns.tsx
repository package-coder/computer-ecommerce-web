import { Chip } from "@mui/material";
import { TableGridProps } from "../../../components/TableGrid";
import moment from "moment";

function clipStatus(value: number) {
  switch(value) {
    case 0: return "CANCELLED";
    case 1: return "COMPLETED";
    case 2: return "PENDING";
  }
}

const OrderListColumns: TableGridProps["columns"] = [
  {
    id: "_id",
    label: "ID",
    style: { maxWidth: 100 }
  },
  
  {
    id: "createdAt",
    label: "Date",
    render: (value: any) => <Chip label={moment(value).format('MMMM DD, YYYY')} />
  },
  {
    id: 'status',
    label: 'Status',
    render: (value: any) => <Chip label={clipStatus(value)} />
  },
  {
    id: "address",
    label: 'Address',
  },
];

export default OrderListColumns;
