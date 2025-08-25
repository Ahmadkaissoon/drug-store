import { useParams } from "react-router"
import OrderForm from "../../../../components/common/OrderForm"

const EditOrder = () => {
  const {id} = useParams()
  const numberId = Number(id)
  const orders = [] // Here get the orders from back-end

  const data = orders.filter((order)=>order.id === numberId)
  return <OrderForm data={data} edit={true} id={numberId}/>
}
 
export default EditOrder;