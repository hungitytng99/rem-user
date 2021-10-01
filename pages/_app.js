import 'bootstrap/dist/css/bootstrap.css'
import 'assets/css/globals.sass'
import "nprogress/nprogress.css";
import Head from 'next/head'
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => {
    return import("components/TopProgressBar");
  },
  { ssr: false },
);
export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="viewport-fit=cover" />
      <title>Rèm Vương Hồng - Rèm cửa chất lượng số 1 Bắc Ninh</title>
      <meta name="description" content="Rèm Vương Hồng BẮC NINH địa chỉ số 1 về phân phối. Với 20 năm kinh nghiệp sản xuất và kinh doanh các loại rèm cửa - màn cửa. Rèm Vương Hồng là nhà cung cấp cho nhiều công trình như các văn phòng cao cấp, chung cư cao cấp, khu chế xuất, khu công nghiệp, nhà phố, biệt thự, và trụ sở các cơ quan nhà nước.
Đến với Rèm Vương Hồng quý khách sẽ cảm nhận được những bộ rèm cửa, rèm vải, rèm sáo,thảm trải sàn, giấy dán tường cao cấp. được thiết kế một cách độc đáo, chuyên nghiệp mang phong cách hiện đại, sang trọng, bên cạnh đó là sự đa dạng về chất liệu, màu sắc, kích thước với nhiều kiểu mẫu phù hợp với nhu cầu trang trí cho mọi không gian. Chúng tôi có đội ngũ kiến trúc sư hàng đầu."></meta>
        <meta name="keywords" content="rem cua, rem bac ninh, rem chat luong cao, rem van phong, bac ninh, rem uy tin, rem gia re, rem cho nha o, rem van phong, rem nhung, rem cua,rem vai, rem go, rem cua bac ninh, rem cua cao cap, rem cua gia re, rem cuon, rem la doc, rem cua van phong"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <TopProgressBar />
    <Component {...pageProps} />
  </>
}
