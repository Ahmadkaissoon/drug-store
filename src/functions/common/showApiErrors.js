let showFirstMessage = false;

// loop over object nest until get string message
// gets: message object
// return: string messages
function objectLoop(obj) {
  try {
    return Object.keys(obj).map((item, index) => {
      if (typeof obj?.[item] === "object") {
        return objectLoop(obj?.[item])?.[0];
      } else {
        if (index == 0 && !showFirstMessage) {
          showFirstMessage = true;
          return obj?.[item];
        } else {
          // Just return the message, don't call toast here
          return obj?.[item];
        }
      }
    });
  } catch (err) {
    console.log(err);
    return "عذرا, حدث خطأ ما";
  }
}

// handle error messages returned from backend, gets: error response, returns: errors messages notifications
function showApiErrors(error) {
  try {
    if (error?.code == "ERR_NETWORK" && error?.SHOW_NETWORK_ERROR)
      return "تأكد من جودة اتصالك بالإنترنت !";
    else if (error?.code == "ERR_NETWORK")
      return "عذرا , حدثت مشكلة في السيرفر !";
    else if (error?.code == "ECONNABORTED")
      return "استغرق الإرسال وقتا أكبر من اللازم , تأكد من جودة اتصالك بالإنترنت";
    else if (error?.response?.status == 500) {
      return "عذرا , حدثت مشكلة في السيرفر !";
    } else {
      const messagesKey = error?.response?.data?.error
        ? "error"
        : error?.response?.data?.message
        ? "message"
        : null;

      if (messagesKey == null) {
        if (typeof error?.response?.data == "string")
          return error?.response?.data;
        else if (typeof error?.response?.data == "object")
          return objectLoop(error?.response?.data)?.[0];
        else return "عذرا, حدث خطأ ما";
      } else {
        if (typeof error?.response?.data?.[messagesKey] == "string")
          return error?.response?.data?.[messagesKey];
        else if (typeof error?.response?.data?.[messagesKey] == "object")
          return objectLoop(error?.response?.data[messagesKey])?.[0];
        else return "عذرا, حدث خطأ ما";
      }
    }
  } catch (err) {
    console.log(err);
    return "عذرا, حدث خطأ ما";
  }
}

export default showApiErrors;
