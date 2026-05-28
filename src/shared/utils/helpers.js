/* =========================
   DATE FORMATTER
========================= */

export const formatDate = (
  dateString
) => {

  const date =
    new Date(dateString);

  return date.toLocaleDateString(
    "en-IN",
    {
      day:"2-digit",
      month:"long",
      year:"numeric"
    }
  );
};

/* =========================
   FILE SIZE FORMATTER
========================= */

export const formatFileSize = (
  bytes
) => {

  if(bytes === 0){
    return "0 Bytes";
  }

  const sizes = [
    "Bytes",
    "KB",
    "MB",
    "GB"
  ];

  const i = parseInt(
    Math.floor(
      Math.log(bytes) /
      Math.log(1024)
    )
  );

  return (
    Math.round(
      bytes / Math.pow(1024,i)
    ) +
    " " +
    sizes[i]
  );
};

/* =========================
   GENERATE RANDOM ID
========================= */

export const generateId = () => {

  return Math.floor(
    Math.random() * 1000000
  );
};

/* =========================
   STATUS COLOR
========================= */

export const getStatusColor = (
  status
) => {

  switch(status){

    case "Completed":
    case "Active":
    case "Generated":
      return "#16a34a";

    case "Pending":
      return "#f59e0b";

    case "Offline":
    case "Inactive":
      return "#dc2626";

    case "In Progress":
      return "#2563eb";

    default:
      return "#64748b";
  }

};

/* =========================
   DOWNLOAD FILE
========================= */

export const downloadFile = (
  fileContent,
  fileName,
  fileType = "text/plain"
) => {

  const blob =
    new Blob(
      [fileContent],
      {
        type:fileType
      }
    );

  const url =
    window.URL.createObjectURL(blob);

  const link =
    document.createElement("a");

  link.href = url;

  link.download = fileName;

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);

  window.URL.revokeObjectURL(url);
};

/* =========================
   SEARCH FILTER
========================= */

export const searchFilter = (
  data,
  searchText,
  keys = []
) => {

  return data.filter((item)=>
    keys.some((key)=>
      item[key]
        ?.toString()
        .toLowerCase()
        .includes(
          searchText.toLowerCase()
        )
    )
  );
};

/* =========================
   CAPITALIZE TEXT
========================= */

export const capitalize = (
  text
) => {

  if(!text){
    return "";
  }

  return (
    text.charAt(0).toUpperCase() +
    text.slice(1)
  );
};