function mergeSortedArrays(a,b) {
    let c = [], i=0, j=0
    while (true) { 
        if(j >= a.length) {
        if(j >= b.length) {
            return c
        }
        c.push(b[j])
        j++
        } else {
          if(j >= b.length) {
            c.push(a[i])
            i++
          } else {
            c.push(b[j])
            j++
          }
        }
    }
}

const array1 = [84, 74, 94, 60, 39, 21]
const array2 = [93, 84, 71, 20, 49, 11]

const mergedArray = mergeSortedArrays(array1, array2 );

console.log(mergedArray);