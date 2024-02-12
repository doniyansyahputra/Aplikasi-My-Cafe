import * as globalConstant from "../../../config/globalConstant/index";

export const callApiProsesOrder = (viewState, bodyRequest) => {

    const url = globalConstant.baseUrl + globalConstant.MENU_PROSES;
    viewState.getRestClient().post(url, bodyRequest).then(
      (response) => {
   
        viewState.setDataOrderlist([])
        viewState.setNumber(0)
    
        alert('Proses Order Success')
        viewState.nav.navigate('Home')
       
      },
      (error) => {
        console.log(error)
        alert('Proses Order Gagal')
       
      }
    );
  }

export const handleProsesOrder = (viewState) => {

    let tmptListOder = []

    if(!viewState.number){
        alert('Table Number Mandatory Field !')

        return
    }

    viewState.dataOrderlist.forEach(data => {
        let dataTmp ={
            nameMenu : data.nameOrder,
            qty: data.qty,
            totalItem: data.harga * data.qty
        }

        tmptListOder.push(dataTmp)
    });


    let bodyRequest = {
        tableNumber : viewState.number,
        listOrder : tmptListOder,
        total: viewState.totalOrder
    }

    callApiProsesOrder(viewState, bodyRequest)

  
}