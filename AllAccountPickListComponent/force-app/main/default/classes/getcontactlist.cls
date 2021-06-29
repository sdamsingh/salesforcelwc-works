public with sharing class getcontactlist {
    public getcontactlist() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> getAllRelatedContact(string accountId){
        return  [SELECT Id, Name ,AccountId FROM Contact WHERE AccountId =: accountId];
    }
}
