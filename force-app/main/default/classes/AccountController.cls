// accountController.apxc
public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [SELECT Id, Name, Phone, Industry FROM Account WITH SECURITY_ENFORCED LIMIT 10];
    }
}
