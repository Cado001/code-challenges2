function mergeSortedArrays(a,b) {
    let c = [], i=0, j=0
    while (true) {
        if(j >= a.length) {
        if(j >= b.length) {
            return c
        }
        c.push(b[j])
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

const array1 = [93, 25, 33, 74, 22, 46]
const array2 = [79, 29, 30, 28, 16, 88]

const mergedArray = mergeSortedArrays(array1, array2);

console.log(mergedArray);
