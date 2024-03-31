export async function fetchAvailablePlaces() {
  const respnse = await fetch("http://localhost:3000/places");
  const resData = await respnse.json();
  if (!respnse.ok) {
    // 200 ~ 300 : ok, 400 ~ 500 : bad
    throw new Error("failed to fetch places");
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed To update User Data");
  }

  return resData.message;
}

export async function getUserPlaces() {
  const response = await fetch("http://localhost:3000/user-places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("faild to Get User places");
  }

  return resData.places;
}
