export function responseCreated(data: any, message: string = 'Success'): any {
    return {
      statusCode: 201,
      message,
      data,
    };
  }