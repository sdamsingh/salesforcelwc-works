public with sharing class getAllAcount {
    public getAllAcount(){

    }
    @AuraEnabled(cacheable = true)  
    public static Map<String , String> getAllAccount(){
        Map<String ,String> myAccountMap = new Map<String, String>();
        for(Account acc : [SELECT Id , Name FROM Account ]){
            myAccountMap.put(acc.Id, acc.Name);
        }
        return myAccountMap;
       
    }
}
