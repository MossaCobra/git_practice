function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

  const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  
  let personalWisdom = [];

  for(let prop in collectiveWisdom){
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);

    switch(prop){
        case 'signInfo':
            personalWisdom.push(generateSignInfo(collectiveWisdom[prop]));
            break;
        case 'fortuneOutput':
            personalWisdom.push(generateFortuneOutput(collectiveWisdom[prop]));
            break;
        case 'advice':
            personalWisdom.push(generateRandomNumber(collectiveWisdom[prop])); 
    }
  }