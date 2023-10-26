function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].time < right[rightIndex].time) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
  
  // สร้างอาเรย์ A ที่มีขนาดใหญ่ 10,000,000 และเติมข้อมูลลงไปให้สุ่มตาม format ISODate
  const A = [];
  for (let i = 0; i < 10000000; i++) {
    const randomDate = new Date(+(new Date()) - Math.floor(Math.random() * 31536000000));
    A.push({ time: randomDate });
  }
  
  // เรียกใช้ Merge Sort เพื่อเรียงลำดับอาเรย์ A
  const sortedA = mergeSort(A);
  
  // ตรวจสอบผลลัพธ์
  console.log(sortedA);
  