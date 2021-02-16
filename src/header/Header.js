import './Header.css'

function Header() {
    return ( 
        <header>
            <h1>Rostov on Don</h1>
            <div className="wrapper">
                <input type="radio" name="point" id="slide1" checked/>
                <input type="radio" name="point" id="slide2"/>
                <input type="radio" name="point" id="slide3"/>
                <input type="radio" name="point" id="slide4"/>
                <input type="radio" name="point" id="slide5"/>
                <div className="slider">
                    <div className="slides slide1"></div>
                    <div className="slides slide2"></div>
                    <div className="slides slide3"></div>
                    <div className="slides slide4"></div>
                    <div className="slides slide5"></div>
                </div>	
                <div className="controls">
                    <label for="slide1"></label>
                    <label for="slide2"></label>
                    <label for="slide3"></label>
                    <label for="slide4"></label>
                    <label for="slide5"></label>
                </div>
            </div>
        </header>
    )
    
}
export default Header

