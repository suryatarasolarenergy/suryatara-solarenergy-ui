// Base API URL

export const BASE_URL =
  "http://localhost:8080/api";

/* =========================
   COMMON API FUNCTION
========================= */

export const apiRequest = async (
  endpoint,
  method = "GET",
  body = null,
  headers = {}
) => {

  try{

    const response = await fetch(
      `${BASE_URL}${endpoint}`,
      {
        method,

        headers:{
          "Content-Type":"application/json",
          ...headers
        },

        body:
          body
          ?
          JSON.stringify(body)
          :
          null
      }
    );

    const data = await response.json();

    return {
      success:true,
      data
    };

  }
  catch(error){

    console.error(
      "API Error :",
      error
    );

    return {
      success:false,
      message:error.message
    };
  }

};

/* =========================
   PROJECT APIs
========================= */

export const getProjects = () => {

  return apiRequest(
    "/projects"
  );
};

export const addProject = (payload) => {

  return apiRequest(
    "/projects",
    "POST",
    payload
  );
};

export const updateProject = (
  id,
  payload
) => {

  return apiRequest(
    `/projects/${id}`,
    "PUT",
    payload
  );
};

export const deleteProject = (id) => {

  return apiRequest(
    `/projects/${id}`,
    "DELETE"
  );
};

/* =========================
   CUSTOMER APIs
========================= */

export const getCustomers = () => {

  return apiRequest(
    "/customers"
  );
};

export const addCustomer = (payload) => {

  return apiRequest(
    "/customers",
    "POST",
    payload
  );
};

/* =========================
   DOCUMENT APIs
========================= */

export const uploadDocument = (
  payload
) => {

  return apiRequest(
    "/documents/upload",
    "POST",
    payload
  );
};

export const getDocuments = () => {

  return apiRequest(
    "/documents"
  );
};