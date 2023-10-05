export async function getPeopleAll() {
  const response = await fetch("http://localhost:3000/userProfiles/");

  if (response.status !== 200) {
    console.log(response);
    throw Error("Something went wrong");
  }

  const data = await response.json();
  return data;
}
