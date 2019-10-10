export const apiDomain = "http://localhost:5000";

export const jsonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json"
};

export const handleJsonResponse = (res) => {
  if (res.ok) {
    return res.json()
  }

  return res.json().then(err => { 
    throw err
  })
}