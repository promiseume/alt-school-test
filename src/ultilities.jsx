/////////////////// Fetch Users /////////

export async function FetchAllUser(page, pageSize) {
  const res = await fetch(
    "https://randomuser.me/api/?page=" +
      page +
      "&results=" +
      pageSize +
      "&seed=abc"
  );
  const data = await res.json();
  return data;
}

