import CardFull from "./CardFull"
import CardMain from "./CardMain"

const Catogery = () => {
    return (
        <div className="category">
            <div className="cardHorizontal">
                <CardMain />
                <CardMain />
            </div>
            <CardFull/>
        </div>

    )
}
export default Catogery