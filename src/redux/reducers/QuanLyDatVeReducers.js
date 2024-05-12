import { data } from "../../data";
import { DAT_VE } from "../actions/types/QuanLyDatVeType";

const stateDefault = {
    chiTietPhongVe: {
        data,
    },
    danhSachGheDangDat: [{ "soGhe": "A6", "gia": 75000, "daDat": false },
    ],

}

export const QuanLyDatVeReducers = (state = stateDefault, action) => {
    switch (action.type) {

        case DAT_VE: {
            // console.log("test", action)
            //cập nhật danh sách ghế đang đặt

            let danhSachCapNhat = { ...state.danhSachGheDangDat };

            let index = danhSachCapNhat.findIndex(gheDD => gheDD.soGhe === action.gheDuocChon.soGhe);
            if (index != -1) {
                //nếu tìm thấy ghế được chọn trong mảng có nghia là truocs đó đá có click vào => xóa đi
                danhSachCapNhat.splice(index, 1);
            } else {
                danhSachCapNhat.push(action.gheDuocChon);
            }
            return { ...state, danhSachGheDangDat: danhSachCapNhat };
        }
        default: return { ...state };
    }
}