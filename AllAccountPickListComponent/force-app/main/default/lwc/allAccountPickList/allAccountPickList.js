import { LightningElement,wire } from 'lwc';
import getAllAccount from '@salesforce/apex/getAllAcount.getAllAccount';


export default class AllAccountPickList extends LightningElement {
    AccountOptionsList;
    selectedAccount;
    @wire(getAllAccount) 
    retrieveAccount({data}){
        let tempArray = [];
        if(data){
            for(let key in data){
                tempArray.push({label:data[key],value:key});
            }
        }
        this.AccountOptionsList=tempArray;
    }

    handleAcountChange(event){
        
        this.selectedAccount = event.detail.value;
      
    }


}