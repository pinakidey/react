import React, {useState, useEffect} from 'react'
import axios from './../../AxiosClient'
import styles from './OrderHistory.css'
import moment from 'moment';
import { DataGrid } from '@material-ui/data-grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const OrderHistory = () => {

    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);

    // Fetch all orders
    const fetchOrders = () => {
        setLoading(true);
        axios.get('https://udemy-react-94dcc-default-rtdb.firebaseio.com/orders.json')
        .then(response => {
            setOrders(Object.values(response.data));
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            setLoading(false)
        });
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    const renderOrdersLoader = () => {
        return (
            <div className={styles.centered}>
                <CircularProgress size={64} />
            </div>
        );
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

    const DataTable = () => {
        return (
            <div style={{ height: "80vh", width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={20} />
            </div>
        );
    }

    return (
        <div className={styles.OrderHistory}>
            <h1>Order History</h1>
            {loading && renderOrdersLoader()}
            <DataTable/>
        </div>
    )
}

export default OrderHistory;
