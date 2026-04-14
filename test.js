const org = {
    name : "jaydeep",
    sex: "male"
}

const dup = org;

delete dup.sex

console.log(org);
console.log(dup);

