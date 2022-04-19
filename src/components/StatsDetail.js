import CardOne from "./CardOne"
import CardThree from "./CardThree"
import CardTwo from "./CardTwo"

const StatsDetail = () => {
    const style_1={
        
    }
    return (
        <div className="stats-detail">
            <div className="card-Section">
                <CardOne />
                <CardTwo />

            </div>
            <div className="boxCard">
                <CardThree style={style_1}/>
                <CardThree />
                <CardThree />
                <CardThree />
                <CardThree />
                <CardThree />
                <CardThree />
            </div>
        </div>
    )
}
export default StatsDetail