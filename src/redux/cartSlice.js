import {createSlice} from '@reduxjs/toolkit'

const initState={
    listProduct:[],
    total:0,
    hidden:true
}

const voitureSlice=createSlice({
    name:'listProduct',
    initialState:initState,
    reducers:{
        addProduct:(state,action)=>{
        console.log("s")},
        setHideCart:(state,action)=>{state.hidden=!state.hidden;console.log(state.hidden)},
        modifier:(state,action)=>{state.db.map(v=>{if(v.id===action.payload.id) v.marque=action.payload.marque })},
        removeProduct:(state,action)=>{
            const itemPro=state.listProduct.find(item=>item.id===action.payload.id)
            state.total-=action.payload.price;
            if(itemPro.quantity>1){
                state.listProduct=state.listProduct.map(item=>item.id===action.payload.id ? {...item,quantity:item.quantity-1}:item)
            }else
            state.listProduct=state.listProduct.filter(item=> item.id!==action.payload.id)
        },
        clearProduct:(state,action)=>{
            const itemPro=state.listProduct.find(item=>item.id===action.payload.id)
            state.total-=itemPro.quantity*itemPro.price;
            state.listProduct=state.listProduct.filter(v=>v.id!==action.payload.id)}
    }

});
export default voitureSlice.reducer;
export const {addProduct,modifier,removeProduct,setHideCart,clearProduct}=voitureSlice.actions;