import { Card } from "antd";

const ProductItem = ({ item, ...props }) => {
    const { Meta } = Card;
    return (
        <div onClick={() => props.history.push(`/product/${item.sku}`)}>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt={item.sku}
                        src={item.image}
                    />
                }
            >
                <Meta title={item.name} />
            </Card>
        </div>
    );
}
export default ProductItem;
