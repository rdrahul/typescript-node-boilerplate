import { IMessage } from "../interfaces/message.interface";

export const SuccessMessages = {
    MESSAGE_OK: { msg: "ok", code: 200 },

};
export const ErrorMessages = {
    INTERNAL_SERVER_ERROR: { msg: "Internal Server Error", code: 500 },
};

export class ResponseHandler {

    static Success(res, type: IMessage, data: any = [], desc: string = "") {
        res.status(type.code).json({
            success: true,
            message: type.msg,
            data: data,
            status: {
                code: type.code,
                description: desc || ""
            }
        })

    }

    static Error(res, type: IMessage, desc: string = "") {
        res.status(type.code).json({
            success: false,
            message: type.msg,
            data: [],
            status: {
                code: type.extraCode || type.code,
                description: desc || ""
            }
        })
    };
}