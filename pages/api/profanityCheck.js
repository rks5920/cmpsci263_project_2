export default async function profanityCheck(text){
  const response = await fetch("https://www.purgomalum.com/service/containsprofanity?text=" + encodeURIComponent(text));
  return response.ok;
};