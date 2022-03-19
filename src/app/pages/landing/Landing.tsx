import LayoutLeft from "./components/LayoutLeft";
import LayoutMid from "./components/LayoutMid";

const Landing = () => {
    return (
        <div className="l">
            <div className="l--left">
                <LayoutLeft />
            </div>
            <div className="l--mid">
                <div className="l__wrapper">
                    <LayoutMid />
                    <div className="line line--left"></div>
                    <div className="line line--right"></div>

                </div>
            </div>
            <div className="l--right"></div>
        </div>
    )
}

export default Landing;