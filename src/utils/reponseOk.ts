export const responseOK = (data: any, message = '', meta = null, links = null) => {
    return {
      status: 'success',
      message,
      data,
      meta,
      links,
    };
  };
  