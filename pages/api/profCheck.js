export default async function profCheck(text){
  const response = await fetch("https://www.purgomalum.com/service/containsprofanity?text=" + encodeURIComponent(text));
  return response.ok;
};