import { DataGrid } from '@material-ui/data-grid';
import Alert from '@material-ui/lab/Alert';
import axios from './../../AxiosClient';
import Button from "./../common/Button/Button";
import CircularProgress from '@material-ui/core/CircularProgress';
import isEmpty from "lodash/isEmpty";
import moment from 'moment';
import React, {useState} from 'react';
import styles from './OrderHistory.css';

const OrderHistory = () => {

    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    // Fetch all orders
    const fetchOrders = (event) => {
        setLoading(true);
        axios.get('https://udemy-react-94dcc-default-rtdb.firebaseio.com/orders.json')
        .then(response => {
            setOrders(Object.values(response.data || {}));
        })
        .catch(error => {
            //console.log(error);
            setOrders([]);
        })
        .finally(() => {
            setLoading(false);
            setShowAlert(true);
        });
    }

    const columns = [
        { field: 'id', headerName: 'OrderId', width: 100 },
        { field: 'timestamp', headerName: 'TimeStamp', width: 200 },
        { field: 'totalPrice', headerName: 'Total Price', width: 150 },
        { field: 'ingredientList', headerName: 'Ingredients', width: 300, sortable: false }
    ];

    const rows = [];

    const getList = (data) => {
        const text = [];
        Object.keys(data).map((key, idx) => {
            text.push(`${key} : ${data[key]}`);
            return null;
        })
        return text.join(" / ");
    }

    orders.forEach(order => {
        rows.push({id: order.orderId,
            timestamp: moment(order.timestamp).format("DD-MM-YYYY h:mm:ss A"),
            totalPrice: `USD ${order.price}`,
            ingredientList: getList(order.ingredients)
        })
    });

    //console.log(rows)

    const DataTable = () => {
        return (
            <div data-testid="datatable" style={{ height: "80vh", width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={20} />
            </div>
        );
    }


    const renderOrdersLoader = () => {
        return (
            <div className={styles.centered}>
                <CircularProgress size={64} />
            </div>
        );
    }

    return (
        <div className={styles.OrderHistory}>
            <h1>Order History</h1>
            <Button className={styles.buttonClass} data-testid="fetchButton" disabled={loading} size="large" variant="contained" color="primary" onClick={fetchOrders}>Fetch Orders</Button>
            {showAlert && <Alert severity={rows.length ? "success" : "error"}>{`Found ${rows.length || "No"} order(s).`}</Alert>}
            {!isEmpty(orders) && <DataTable />}
            {loading && renderOrdersLoader()}
        </div>
    )
}

export default OrderHistory;
