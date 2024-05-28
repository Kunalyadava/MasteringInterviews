function createAccount(accountName, accountType, accountBalance, isActive) {
return{
    name: accountName,
    type: accountType,
    balance: accountBalance,
    active: isActive,
    print: function () {
      console.log('Name: ', this.name, 'Type: ', this.type, 'Active: ', this.active, 'Bal: ', this.balance);
    }
  };
}
const acc1 = createAccount('Vivek', 'Saving', 100000, true);
acc1.print();
const acc2 = createAccount('Akash', 'Premium', 200000, true);
acc2.print();