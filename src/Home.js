import React ,{Component} from "react";
import Header from "./Header";
import Property from "./Pricing";
import Footer from "./Footer";
import JSON from "./db.json"
class Home extends Component {
constructor(){
super()
this.state={
    listData:JSON
}

}
render(){
return(
<div>

<Property dataList={this.state.listData}/>
<Footer year={2022}/> 

</div>


)

}

}
export default Home