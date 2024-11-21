export const sliceString = ( str, limit = 100 ) => {

    if( str == null ) return '';
    
    if(str.length < limit ) return str;

    return str.slice(0,limit) + ' ...' ;
}


export function classNames(...classes) {
    return classes.filter((v) => Boolean(v)).join(' ')
  }