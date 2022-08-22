import "./style.css"
const Popup=(props)=>{
    return (
        <>
        <div className="pop" >
        <div >
            <h3>{props.product.category}</h3>
            <button>Close</button>
        </div>
        <div>
            <img src={props.product.image} alt='' />
            <h3>{props.product.description}</h3>
        </div>
        </div>
        </>
    )
}
export default Popup