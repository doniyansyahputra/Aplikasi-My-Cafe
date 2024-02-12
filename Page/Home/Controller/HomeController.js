import * as globalConstant from "../../../config/globalConstant/index";

export const callApiGetListMenu = (viewState) => {
    const url = globalConstant.baseUrl + globalConstant.MENU_LIST;
    viewState.getRestClient().get(url).then(
      (response) => {
        const dataResponse = response.data.data
        viewState.setDataMenu(dataResponse)
       
      },
      (error) => {
        console.log(error)
       
      }
    );
  }

export const handleAddOrder = (viewState, data) => {

    let dataTmpt = viewState.dataOrderlist

    if (viewState.dataOrderlist.length > 0) {
        let checkData = viewState.dataOrderlist.find(x=>x.nameOrder === data.nameOrder)
        if(checkData && checkData.nameOrder !== undefined){
            let objIndex = viewState.dataOrderlist.findIndex(x=>x.nameOrder === data.nameOrder);
            dataTmpt = viewState.dataOrderlist[objIndex].qty = data.qty

        } else{
            dataTmpt.push(data)
        }
    } else {
        dataTmpt.push(data)
    }
  
}
