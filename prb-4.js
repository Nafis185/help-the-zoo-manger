
function password(inputs) {
  const { name, birthYear, siteName } = inputs;
  return `${siteName}#${name}@${birthYear}`;
}


const inputsData = { name: "nusrat", birthYear: 2000, siteName: "flex" };
const remakePassword = password(inputsData);
console.log(remakePassword);