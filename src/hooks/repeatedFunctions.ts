
export function repeatedFunctions() {
    const dateGen = (net: any, precision: any, includeTime: boolean) => {
        if (!(net && precision)) return "Error";
    
        let date = new Date(net);
        let months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
    
        if (precision.id >= 14) {
          return `${date.getUTCFullYear()}`;
        }
    
        if (precision.id == 7) {
          return `${months[date.getMonth()]} ${date.getUTCFullYear()}`;
        }
    
        if (precision.id > 7) {
          return `${precision.name} ${date.getUTCFullYear()}`;
        }
    
        if (precision.id >= 5) {
          return `${
            months[date.getMonth()]
          } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
        }
    
        if (precision.id >= 1) {
          return `~${net.substring(net.indexOf("T") + 1, net.length - 4)}, ${
            months[date.getMonth()]
          } ${date.getUTCDate()}, ${date.getUTCFullYear()}`
        }
    
        if (includeTime)
          return `${net.substring(net.indexOf("T") + 1, net.length - 1)}, ${
            months[date.getMonth()]
          } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
        else
          return `${
            months[date.getMonth()]
          } ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
      };

  return {
    dateGen
  };
}


