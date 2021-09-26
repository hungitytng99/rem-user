// config for dev;
export const Configs = {
    BASE_API: "https://api.rembacninh.vn/api",
    DOMAIN: "https://rembacninh.vn/san-pham",

    CURRENT_PAGE: 1,
    FILE_MAXIMUM: 2, //MB
    PAGE_SIZE_20: 20,
    PAGE_SIZE_4: 4,
};

export const REQUEST_STATE = {
    ERROR: "ERROR",
    REQUEST: "REQUEST",
    SUCCESS: "SUCCESS",
};

export const ACTION_TYPE = {
    CREATE: "CREATE",
    LIST: "LIST",
    VIEW: "VIEW",
    DELETE: "DELETE",
    UPDATE: "UPDATE",
    UNMOUNT: "UNMOUNT"
};