export default async () => {
  const res = await fetch('/api/user/logged-in-cookies/update', {
    method: 'POST',
  });
  if (!res.ok) {
    const serverErrorMessage = await res.json();
    throw new Error(serverErrorMessage);
  }
};
