//descobrir o dia do programador a partir do ano q o usuario coloque
//levando em conta ano bisexto,calemdario gregoriano e calendario juliano,  o dia e sempre o dia  256

function dayOfProgrammer(year) {
  console.log();
  if (year >= 1700 && year <= 2700) {
    //calendario juliano
    if (year >= 1700 && year <= 1917) {
      if (year % 4 === 0) {
        return ` 12.09.${year}`;
      } else {
        return ` 13.09.${year}`;
      }
    } //1918
    if (year === 1918) {
      return `26.09.${year}`;
    }

    //calendario gregoriano

    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
      return ` 12.09.${year}`;
    } else {
      return ` 13.09.${year}`;
    }
  } else {
    return ` por favor coloque um numero entre 1700 e 2700`;
  }
  console.log(dayOfProgrammer("1700"));
}
//12.09.1700
