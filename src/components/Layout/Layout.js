import { Container } from 'react-bootstrap'
import Footer from 'components/Layout/Footer';
import Header from 'components/Layout/Header';
import ContactPop from 'components/ContactPop';
import { useState } from 'react';
import { getListCategory } from 'constants/productPath';
import { useEffect } from 'react';
function Layout(props) {
    const { children } = props;
    const [menu, setMenu] = useState([])

    useEffect(() => {
        (async function () {
            let result = await getListCategory();
            setMenu([...result[1].childs])
        })();
    }, [])
    return (
        <div className="layout">
            <ContactPop />
            <div className="layout__header" >
                <Header menu={menu} />
            </div>
            <div className="layout__content" >
                <Container>
                    {children}
                </Container>
                <Container>
                    <div style={{ marginTop: '40px', padding: '0px 30px' }}>
                        <h3 style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: '500' }}>Rèm Vương Hồng BẮC NINH</h3>
                        <h4 style={{ textAlign: 'center', fontWeight: '500' }}>Sang trọng và đẳng cấp, hoàn hảo cho mọi không gian.</h4>

                        <p><b>Rèm Vương Hồng BẮC NINH</b> địa chỉ số 1 về phân phối <a href="https://rembacninh.vn/">https://rembacninh.vn/</a>. Với 20 năm kinh nghiệp sản xuất và kinh doanh các loại rèm cửa - màn cửa. Rèm Vương Hồng là nhà cung cấp cho nhiều công trình như các văn phòng cao cấp, chung cư cao cấp, khu chế xuất, khu công nghiệp, nhà phố, biệt thự, và trụ sở các cơ quan nhà nước.</p>

                        <p style={{ textIndent: '30px' }}>Đến với Rèm Vương Hồng quý khách sẽ cảm nhận được những bộ rèm cửa, rèm vải, rèm sáo,thảm trải sàn, giấy dán tường cao cấp.https://rembacninh.vn/. được thiết kế một cách độc đáo, chuyên nghiệp mang phong cách hiện đại, sang trọng, bên cạnh đó là sự đa dạng về chất liệu, màu sắc, kích thước với nhiều kiểu mẫu phù hợp với nhu cầu trang trí cho mọi không gian. Chúng tôi có đội ngũ kiến trúc sư hàng đầu.</p>
                        <br />
                        <p><b>Chất Lượng Sản Phẩm</b></p>
                        <p style={{ textIndent: '30px' }}>Chất lượng sản phẩm luôn là vấn đề được Rèm Vương Hồng Bắc Ninh quan tâm hàng đầu, vì vậy tất cả linh kiện và nguyên liệu nhập từ nước ngoài hoặc trong nước đều được chúng tôi chọn lọc kỹ.Sản phẩm sau khi sản xuất đều thông qua bộ phận kiểm đinh.Kiểm tra chất lượng trước khi xuất hàng.</p>
                        <p style={{ textIndent: '30px' }}>Rèm Vương Hồng Bắc Ninh đã không ngừng câp nhật những kỹ thuật mới trong sản xuất cũng như đầu tư mới các trang thiết bị sản xuất tiên tiến để tạo ra các sản phẩm mang phong cách hiện đại và thẩm mỹ đáp ứng nhu cầu đòi hỏi ngày càng cao của người tiêu dùng.</p>
                        <p>Tất cả các sản phẩm tại rèm Vương Hồng Bắc Ninh đều phải có tất cả các tiêu chí: </p>
                        <ul>
                            <li>+ UY TÍN - CHẤT LƯỢNG - SANG TRỌNG.</li>
                            <li>+ Linh phụ kiện tốt nhất</li>
                            <li>+ Giá thành cạnh tranh nhất</li>
                            <li>+ Bảo hành dài hạn</li>
                        </ul>

                        <p >Tại rèm Vương Hồng luôn luôn cập nhật  <a href="https://rembacninh.vn/">https://rembacninh.vn/</a> mang phong cách hiện đại, cổ điển thích hợp với mọi không gian của gia đình, văn phòng, nhà hàng, khách sạn</p>
                        <p>Rèm Vương Hồng BẮC NINH sự lựa chọn hoàn hảo của bạn!</p>

                        <p>Quan Điểm Kinh Doanh.</p>
                        <ul>
                            <li>
                                - Cung cấp những sản phẩm tốt với giá cả cạnh tranh nhất đi kèm với dịch vụ hoàn hảo là những gì rèm Vương Hồng Bắc Ninh sẽ đem đến cho khách hàng.
                            </li>
                            <li>
                                - Luôn đặt chữ “TÍN” lên hàng đầu.
                            </li>
                            <li>
                                - Tâm niệm làm hài lòng cho mọi khách hàng là tiêu chí hàng đầu Rèm Vương Hồng Bắc Ninh luôn đặt phương châm và tôn chỉ: &quot;khách hàng là trên hết - chất lượng mãi là hàng đầu&quot;
                            </li>
                            <li>
                                - Sự hài lòng của khách hàng là thành công của chúng tôi.
                            </li>
                            <li>
                                - Rèm Vương Hồng Bắc Ninh luôn hoán vị mình vào địa vị của khách hàng để có những chính sách tốt nhất.
                            </li>
                        </ul>


                        <p>XÍ NGHIỆP, PHÂN XƯỞNG:</p>
                        <ul>
                            <li>
                                - Phân xưởng thiết kế
                            </li>
                            <li>
                                - Phân xưởng may
                            </li>
                            <li>
                                - Phân hưởng hoàn thành
                            </li>
                        </ul>
                        <p style={{ textTransform: 'uppercase' }}>CÔNG TY TNHH NỘI THẤT Vương Hồng BẮC NINH</p>
                        <p>VP: xxxx</p>
                        <p>Hotline: 0123456778</p>
                        <p>Website: <a href="https://rembacninh.vn/">https://rembacninh.vn/</a></p>
                    </div>
                </Container>
            </div>
            <div className="layout__footer">
                <Footer listCategory={menu} />
            </div>
        </div>
    )
}
export default Layout;