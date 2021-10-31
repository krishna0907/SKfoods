
import "./body13pro.css"

function bodypro(props) {




    return (

        <div className="bodyiphonepro">
            <div className="contentholder">
                <div><h2 className="text1" align="middle">{props.mainBody.title}</h2></div>

                <div><p className="text1" align="middle">{props.mainBody.subTitle}</p></div>

                <div>
                    <a className="text1" href="" align="middle">{props.mainBody.link}</a>

                    <a className="text2" href="" align="middle">{props.mainBody.link2}</a>
                </div>

            </div>

            <div className="piconeholder">
                <img className="picture" src={props.mainBody.imageURL}></img>
            </div>

        </div>



    );

}




export default bodypro;