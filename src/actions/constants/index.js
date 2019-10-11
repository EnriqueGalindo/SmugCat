export const apiDomain = "http://localhost:5000";
export const cardDomain = "http://localhost:5000/user"
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

export const FETCH = "FETCH"
export const FETCH_SUCCESS = "FETCH_SUCCESS"
export const FETCH_FAIL = "FETCH_FAIL"

export const GET_CARDS = "GET_CARDS"
export const GET_CARDS_SUCCESS = "GET_CARDS_SUCCESS"
export const GET_CARDS_FAIL = "GET_CARDS_FAIL"



