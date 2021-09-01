import Layout from 'components/Layout/Layout'
import { ImagesPath } from 'constants/ImagesPath'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel'
import CardProduct from 'ui-source/Card/CardProduct'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import CardWithTitle from 'ui-source/Card/CardWithTitle'
import CardReview from 'ui-source/Card/CardReview'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { categoryService } from 'data-services/category'
import { productService } from 'data-services/product'

export default function Home(props) {
  const { listHotProduct, listCategoryWithProduct } = props;
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Layout>
        <div className="home">
          <Row className="home__carousel">
            <Col xs={12}>
              <Carousel
                autoPlay={true}
                interval={6000}
                showArrows={false}
                infiniteLoop={true}
                showThumbs={false}
                emulateTouch={true}
              >
                <div className="home__banner-img">
                  <Image layout="fill" objectFit="cover" src={ImagesPath.HOME_BANNER_1} alt="giang minh viet banner" />
                </div>
                <div className="home__banner-img">
                  <Image layout="fill" objectFit="cover" src={ImagesPath.HOME_BANNER_2} alt="giang minh viet banner handmade" />
                </div>
                <div className="home__banner-img">
                  <Image layout="fill" objectFit="cover" src={ImagesPath.HOME_BANNER_3} alt="giang minh viet banner handmade" />
                </div>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <div className="home__text ">
              {/* <p className="home__text-franco ">Siêu khuyến mại</p> */}
              <p className="home__text-feature ">Sản phẩm bán chạy</p>
              <div className="home__text -underline "></div>
            </div>
          </Row>
          <Row>
            {
              listHotProduct.map(hotProduct => {
                return (
                  <Col key={hotProduct.id} xs={12} sm={6} md={4} lg={3}>
                    <CardProduct product={hotProduct} />
                  </Col>
                )
              })
            }
          </Row>
          <Row>
            <Col>
              <div className="home__post">
                <h3 className="home__post-title">
                  Camera Wifi Không dây Chính Hãng 100%, Mới Full Box, Giảm đến 69%
                </h3>
                <div className="home__post-content">
                  <strong>Camera WiFi Không dây </strong> dễ sử dụng, <strong>CẮM LÀ CHẠY</strong> ai cũng có thể tự
                  cài đặt và lắp đặt được. <strong>Camera Wifi </strong> rất linh hoạt, tiện lợi
                  cho người dùng. Nếu sử dụng cho Gia đình, Cửa hàng, công ty vừa
                  và nhỏ thì <strong>Camera Wifi </strong> sẽ là lựa chọn hàng đầu bở nó rất tiết kiệm
                  chi phí so với camera giám sát có dây. Camera IP Giá Sỉ phân phối
                  và lắp đặt camera uy tín hàng đầu Việt Nam. Chúng tôi phân phối <strong> Camera
                    Wifi Reolink </strong> tại Việt Nam, là thương hiệu <strong>Camera Wifi Tốt Nhất</strong>,
                  hoạt động ổn định với kết nối mạng băng tần kép 2,4 GHz và 5 GHz
                  bắt tín hiệu cực mạnh.<strong>Camera Wifi </strong> nhưng có độ phân giải 5MP siêu
                  nét 2K,  Zoom quang học 30 mét và nhiều tính năng thông minh.Khi
                  chọn CAMERAIPGIASI bạn yên tâm 100% bởi chúng tôi chỉ Bán <strong>Camera Wifi
                    chính hãng </strong>, chất lượng, cam kết mang đến trải nghiệm tốt nhất cho khách
                  hàng.<strong>Camera Wifi </strong> siêu nét, đẳng cấp nhưng giá rất tốt và kèm nhiều
                  khuyến mãi.Hỗ trợ giao hàng siêu tốc 30 phút đến 4h, Lắp đặt tại nhà,
                  Bảo hành.Tư vấn miễn phí ngay bây giờ:
                  <Link href="tel:0923444555"><a style={{ color: "#e14d43" }}><strong> 0923.444.555 – 0932.123.654</strong></a></Link>
                </div>
              </div>
            </Col>
          </Row>

          {listCategoryWithProduct.map(categoryWithProduct => {
            return (
              categoryWithProduct.listProduct &&
              <CardWithTitle key={categoryWithProduct.id}
                title={categoryWithProduct.name}
                link={categoryWithProduct.slug}
              >
                <Row>
                  {
                    categoryWithProduct.listProduct.map(product => {
                      return (
                        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                          <CardProduct product={product} />
                        </Col>
                      )
                    })
                  }

                </Row>
              </CardWithTitle>
            )
          })}


          <CardWithTitle title="Cảm nhận của khách hàng">
            <Carousel
              showThumbs={false}
              centerMode={true}
              centerSlidePercentage={50}
              selectedItem={1}
              showIndicators={false}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <div onClick={onClickHandler} title={label} className="home__carousel-arrow-left">
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </div>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <div onClick={onClickHandler} title={label} className="home__carousel-arrow-right">
                    <FontAwesomeIcon icon={faChevronRight} />
                  </div>
                )
              }
            >
              <CardReview />
              <CardReview />
              <CardReview />
            </Carousel>
          </CardWithTitle>
        </div>
      </Layout>
    </>


  )
}

export async function getServerSideProps() {
  let listCategoryWithProduct = [];
  let listHotProduct = [];
  try {
    listCategoryWithProduct = await categoryService.listCategoryWithProduct(
      {}, { productsPerPage: 8, pageNumber: 1 }
    );
    listHotProduct = await productService.listHotProduct();
    return {
      props: {
        listHotProduct: listHotProduct.data,
        listCategoryWithProduct: listCategoryWithProduct.data,
      },
    };
  } catch (error) {
    return {
      notFound: true
    };
  }

}

