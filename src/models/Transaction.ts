import { uuid } from 'uuidv4';

class Transaction {
    public id: string = '';
    public title: string = '';
    public value: number = 0;
    public type: string = ''; 

    constructor(title: string, value: number, type: string) {
      this.id = uuid();
      this.title = title;
      this.value = value;
      this.type = type;
    }
}

export default Transaction;