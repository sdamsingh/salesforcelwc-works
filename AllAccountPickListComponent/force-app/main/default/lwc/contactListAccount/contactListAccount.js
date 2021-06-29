import { LightningElement,api,wire } from 'lwc';
import getAllRelatedContact from '@salesforce/apex/getcontactlist.getAllRelatedContact';

export default class ContactListAccount extends LightningElement {
    columns = [
        { label: 'Name', fieldName: 'Name' },
        { label: 'Account Name', fieldName: 'AccountId'},   
    ];
    @api accountId;
    @wire(getAllRelatedContact , {accountId : '$accountId'}) contacts;
}