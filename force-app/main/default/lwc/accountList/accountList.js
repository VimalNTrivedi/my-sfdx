// accountList.js
import { LightningElement, wire, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

const columns = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Phone', fieldName: 'Phone', type: 'phone' },
    { label: 'Industry', fieldName: 'Industry' },
];

export default class AccountList extends LightningElement {
    @track accounts;
    @track error;
    @track columns = columns;
    @track accountsLoaded = false;

    @wire(getAccounts)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
            this.accountsLoaded = true;
        } else if (error) {
            this.error = error.body.message;
            this.accounts = undefined;
            this.accountsLoaded = true;
        }
    }
}
