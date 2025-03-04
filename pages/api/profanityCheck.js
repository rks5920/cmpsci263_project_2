// export default async function profanityCheck(text){
//   const response = await fetch("https://www.purgomalum.com/service/json?text=" + encodeURIComponent(text));
//   console.log(response);
//   return response.json;
// };

export default async function profanityCheck(str) {
  const url = `https://www.purgomalum.com/service/containsprofanity?text=${str}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}