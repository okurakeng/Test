function monthAsWordUTC(date: any) {
  return new Date(date).toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  })
}

function monthAsWord(date: any) {
  return new Date(date).toLocaleString("en-US", {
    month: "long"
  })
}

export function repeatedFunctions() {
  const dateGenUTC = (net: any, precision: any, includeTime: boolean) => {
    if (!net)
      return "Error";
    
    let date = new Date(net);

    if (!precision) {
      return `${net.substring(net.indexOf("T") + 1, net.length - 4)}, ${monthAsWordUTC(date)
      } ${date.getUTCDate()}, ${date.getUTCFullYear()} UTC Unclear`;
    }

    if (precision.id >= 14) {
      return `${date.getUTCFullYear()}`;
    }

    if (precision.id == 7) {
      return `${monthAsWordUTC(date)} ${date.getUTCFullYear()}`;
    }

    if (precision.id > 7) {
      return `${precision.name} ${date.getUTCFullYear()}`;
    }

    if (precision.id >= 5) {
      return `${monthAsWordUTC(date)
        } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
    }

    if (precision.id >= 1) {
      if (includeTime)
        return `~${net.substring(net.indexOf("T") + 1, net.length - 4)}, ${monthAsWordUTC(date)
          } ${date.getUTCDate()}, ${date.getUTCFullYear()} UTC`
      else
        return `${monthAsWordUTC(date)
          } ${date.getUTCDate()}, ${date.getUTCFullYear()} UTC`;
    }

    if (includeTime)
      return `${net.substring(net.indexOf("T") + 1, net.length - 1)}, ${monthAsWordUTC(date)
        } ${date.getUTCDate()}, ${date.getUTCFullYear()} UTC`;
    else
      return `${monthAsWordUTC(date)
        } ${date.getUTCDate()}, ${date.getUTCFullYear()} UTC`;
  };

  const dateGen = (net: any, precision: any, includeTime: boolean) => {
    if (!net)
      return "Error";
    
    let date = new Date(net);

    if (!precision) {
      
    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');

      return `~${hour}:${minute}, ${monthAsWord(date)
      } ${date.getDate()}, ${date.getFullYear()} Unclear`;
    }


    if (precision.id >= 14) {
      return `${date.getFullYear()}`;
    }

    if (precision.id == 7) {
      return `${monthAsWord(date)} ${date.getFullYear()}`;
    }

    if (precision.id > 7) {
      return `${precision.name} ${date.getFullYear()}`;
    }

    if (precision.id >= 5) {
      return `${monthAsWord(date)
        } ${date.getDate()}, ${date.getFullYear()}`;
    }

    const hour = date.getHours().toString().padStart(2, '0');
    const minute = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2, '0');



    if (precision.id >= 1) {
      if (includeTime)
        return `~${hour}:${minute}, ${monthAsWord(date)
          } ${date.getDate()}, ${date.getFullYear()}`
      else
        return `${monthAsWord(date)
          } ${date.getDate()}, ${date.getFullYear()}`

    }

    if (includeTime)
      return `${hour}:${minute}:${second}, ${monthAsWord(date)
        } ${date.getDate()}, ${date.getFullYear()}`
    else
      return `${monthAsWord(date)
        } ${date.getDate()}, ${date.getFullYear()}`
  };


  return {
    dateGenUTC, dateGen, monthAsWordUTC
  };
}


