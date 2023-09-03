export class CustomError {
    message!: string;
    status!: number;
    data?: Object;
   

    constructor(message: string, data?: Object, status: number = 500 ) {
      this.message = message;
      this.data = data
      this.status = status;
    }
  }