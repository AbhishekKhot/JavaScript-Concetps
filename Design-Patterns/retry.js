// Retry pattern
// retry in cases of external API calls or Authentication journey

// Retry startgies
// 1. Don't retry at all (in case of authentication)
// 2. Retry immediately
// 3. Retry after delay or exponential backoff delay

async function retryOpetaion() {
    let retryCount = 0;
    while (true) {
      try {
        externalServiceCall();
        console.log("Success");
        break;
      } catch (error) {
        retryCount++;
        console.log(`Failed attempt ${retryCount}`);
        if (retryCount == 5) {
          console.log("Retry count reached maximum limit");
          break;
        }
      }
      //retry after 3000ms
      await sleep(3000);
    }
  }
  
  function externalServiceCall() {
    console.log("Calling external service");
    const shouldPass = Math.random() < 0.2;
    if (shouldPass) {
      return true;
    } else {
      throw "Failure";
    }
  }
  
//   retry after some time delay
  async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
  
  retryOpetaion();
  