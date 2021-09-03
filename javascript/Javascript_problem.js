var arr1 = [  ["id","name","sex"],
                ["1","John","M"],
                ["2","Boby","M"],
                ["3","Doe","M"],
            ]  

var arr2 = [    ["id","age"],
                ["1","15"],
                ["2","22"],
                ["3","33"],
            ]

const [keyArr1, ...valArr1] = arr1;
const [keyArr2, ...valArr2] = arr2;

const newArr1 = valArr1.map((values) => {
  let obj = {};

  values.forEach((val, i) => {
    obj[keyArr1[i]] = val;
  });

  return obj;
});

const newArr2 = valArr2.map((values) => {
  let obj = {};

  values.forEach((val, i) => {
    obj[keyArr2[i]] = val;
  });

  return obj;
});

const mergedArray = newArr1.map((item) => {
  const obj = newArr2.find((ob) => ob.id === item.id);
  return { ...item, ...obj };
});

var ans = JSON.stringify(mergedArray);
console.log(ans);
