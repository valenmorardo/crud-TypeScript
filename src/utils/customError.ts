export class CustomError {
    message!: string;
    status!: number;
    data?: Object;
   

    constructor(message: string,  status: number, data?: Object, ) {
      this.message = message;
      this.data = data
      this.status = status? status : 500;
    }
  }