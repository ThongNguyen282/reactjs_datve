import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DAT_VE } from '../redux/actions/types/QuanLyDatVeType';

const Checkout = (props) => {
    const { chiTietPhongVe, danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducers);
    const dispatch = useDispatch();

    // console.log({ chiTietPhongVe })
    const { data, } = chiTietPhongVe;
    // console.log("check", { data })
    // console.log(data)


    // const { danhSachGhe } = data;
    // console.log({ danhSachGhe })
    const renderSeats = () => {
        return data?.map((hang, index) => {
            // console.log("hang", hang);

            return (

                <div className="hang" key={index}>

                    {hang.danhSachGhe.map((ghe, index) => {
                        //kiểm tra từng ghế render
                        let classGheDangDat = '';
                        let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.soGhe === ghe.soGhe);
                        if (indexGheDD != -1) {
                            classGheDangDat = 'gheDangDat'
                        }
                        return (
                            <button onClick={() => {
                                dispatch({
                                    type: DAT_VE,
                                    gheDuocChon: ghe
                                })
                            }} disabled={ghe.daDat} className={`ghe ${classGheDangDat}  ${!ghe.daDat ? 'da-dat' : ''}`} key={index}>{ghe.soGhe}</button>)

                    })}
                </div>
            );
        });
    };



    return (
        <div className='row'>
            <div className="col-8">
                <div className="d-flex justify-content-center mt-3 row">
                    <div className=""></div>
                    <div className="trapezoid text-center ">
                        <h3>Màn hình</h3>
                    </div>
                    <div style={{ width: '100%' }} className='mt-3'>
                        {renderSeats()}
                    </div>
                </div>
            </div>
            <div className='col-4'>
                <h2>DANH SÁCH GHẾ CỦA BẠN </h2>
                <div>
                    <div>Ghế đã đặt</div>
                    <div>Ghế đang chọn</div>
                    <div>Ghế chưa đặt</div>
                </div>
                <table>
                    <tr>
                        <th>Số ghế </th>
                        <th>Giá </th>
                        <th>Hủy</th>
                    </tr>
                    {danhSachGheDangDat.map((gheDD, index) => {
                        return (
                            <tr key={index}>
                                <td>{gheDD.soGhe}</td>
                                <td>{gheDD.gia}</td>
                                <td>X</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Tổng tiền</td>
                        <td colSpan={2}>{danhSachGheDangDat.reduce((tongTien, ghe, index) => {
                            return tongTien += ghe.gia;

                        }, 0).toLocaleString()}</td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default Checkout;