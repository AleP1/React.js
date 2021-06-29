import "./ItemList.css"
import {Item} from "../item/Item"

export const ItemList =({items})=>{

    return(
        <div className="itemList">
            {items.map(item=> <Item   item={item}/>)   }
        </div>
    )

}