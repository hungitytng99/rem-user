import { GET, PUT, POST, DELETE } from "data-source/fetch.js";
import { REQUEST_STATE } from "app-configs/index.js";
// Data Flow: Step 1

//  SEND CUSTOMER INQUIRY
//  {
//     "customer_name": "string",
//     "email": "string",
//     "phone": "string",
//     "message": "string",
//     "product_id": 0,
//     "quantity": 0
//   }

export const apiSendCustomerInquiry = async (params) => {
    try {
        const response = await POST("/inquiry", params, { isFullPath: false });
        return {
            state: REQUEST_STATE.SUCCESS,
            message: "Cảm ơn bạn đã để lại lời nhắn. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể."
        };

    } catch (error) {
        console.log("error", error);
        return {
            state: REQUEST_STATE.ERROR,
            message: "Một lỗi đã xảy ra. Vui lòng gọi cho chúng tôi để được tư vấn."
        };
    }
};
