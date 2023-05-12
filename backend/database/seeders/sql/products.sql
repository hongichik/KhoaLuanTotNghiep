-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: mysql
-- Thời gian đã tạo: Th5 06, 2023 lúc 12:05 PM
-- Phiên bản máy phục vụ: 5.7.41
-- Phiên bản PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `myweb`
--

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `title`, `slug`, `main_image`, `images`, `price`, `discount`, `qty`, `status`, `category_id`, `order`, `short_description`, `detail_description`, `detail`, `created_at`, `updated_at`) VALUES
(2, 'Kính chống ánh sáng xanh chống bức xạ thời trang trẻ trung', 'kinh-chong-anh-sang-xanh-chong-buc-xa-thoi-trang-tre-trung', 'products/May2023/IwkurUcXFcnCxGEeKqq8.jpeg', '[\"products\\/May2023\\/1LobM3xLNViFkTIqvULk.jpeg\",\"products\\/May2023\\/IF8er8HmeQrbmIZpd4oM.jpeg\"]', 300000, 10, 200, 1, 2, NULL, 'Không có kính chặn ánh sáng xanh theo toa.', '<p class=\"irIKAp\">Kh&ocirc;ng c&oacute; k&iacute;nh chặn &aacute;nh s&aacute;ng xanh theo toa</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Sử dụng cho văn ph&ograve;ng 、 h&agrave;ng ng&agrave;y 、 thời trang dạo phố</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">G&oacute;i bao gồm: 1 miếng k&iacute;nh r&acirc;m nữ</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Ghi ch&uacute;:</p>\r\n<p class=\"irIKAp\">1. N&oacute; l&agrave; thủ c&ocirc;ng đo lường. C&oacute; thể c&oacute; 0-3 cm lỗi. Cảm ơn sự hiểu biết của bạn.</p>\r\n<p class=\"irIKAp\">2. Vui l&ograve;ng kiểm traBảng Size cẩn thận trước khi bạn mua h&agrave;ng.</p>\r\n<p class=\"irIKAp\">3. 1 cm = 0,3937 inch.</p>\r\n<p class=\"irIKAp\">4. Xin lưu &yacute; rằng sự kh&aacute;c biệt m&agrave;u sắc nhỏ n&ecirc;n được chấp nhận do &aacute;nh s&aacute;ng v&agrave; m&agrave;n h&igrave;nh.</p>', '[\r\n    {\r\n        \"key\": \"M\\u00e0u s\\u1eafc\",\r\n        \"value\": [\r\n            \"Xanh\",\r\n            \"\\u0110\\u1ecf\",\r\n            \"\\u0110en\"\r\n        ]\r\n    }\r\n]', '2023-05-06 07:36:00', '2023-05-06 07:44:09'),
(3, '✨✨Kẹp tóc kiểu hoạt hình xinh xắn đáng yêu dành cho nữ', 'kep-toc-kieu-hoat-hinh-xinh-xan-dang-yeu-danh-cho-nu', 'products/May2023/gCMUMIiD51JtI0OHgRcD.jpeg', '[\"products\\/May2023\\/07tTvJBxFwit00n2Ac6B.jpeg\",\"products\\/May2023\\/Vqy5g8IDr1kZH8e0piRC.jpeg\"]', 30000, 5, 200, 1, 2, NULL, 'Loại sản phẩm: Kẹp tóc Chất liệu sản phẩm: Acrylic Phù hợp với đám đông: mọi người', '<p>Thời gian giao h&agrave;ng dự kiến cho sản phẩm n&agrave;y l&agrave; 7-9 ng&agrave;y</p>\r\n<p>✨✨Ch&uacute;c một ng&agrave;y tốt l&agrave;nh ở Amigoa ~</p>\r\n<p>🔅Sản phẩm c&oacute; sẵn!</p>\r\n<p>🔅Bạn sẽ nhận được sản phẩm nhanh nhất c&oacute; thể!</p>\r\n<p>🔅H&agrave;ng mới 100%!Kẹp t&oacute;c kẹp mồ h&ocirc;i đậu n&agrave;nh emoji b&ecirc;n kẹp mũ</p>\r\n<p>Loại sản phẩm: Kẹp t&oacute;c</p>\r\n<p>Chất liệu sản phẩm: Acrylic</p>\r\n<p>Ph&ugrave; hợp với đ&aacute;m đ&ocirc;ng: mọi người</p>\r\n<p>Nh&acirc;n dịp: Qu&agrave; sinh nhật, ăn uống, vui chơi, giải tr&iacute;, đi học, l&agrave;m việc, học tập, cuộc sống h&agrave;ng ng&agrave;y sẽ l&agrave;m cho cuộc sống của bạn tốt đẹp hơn.</p>\r\n<p>G&oacute;i h&agrave;ng bao gồm: 1 x Kẹp t&oacute;c Kh&ocirc;ng c&oacute; hộp b&aacute;n lẻ.</p>\r\n<p>Được đ&oacute;ng g&oacute;i an to&agrave;n trong t&uacute;i. [hint]: Sản phẩm n&agrave;y l&agrave; hiện vật. M&agrave;u sắc thực tế c&oacute; thể hơi kh&aacute;c so với h&igrave;nh ảnh hiển thị tr&ecirc;n trang web, chẳng hạn như độ s&aacute;ng của m&agrave;n h&igrave;nh v&agrave; độ s&aacute;ng của đ&egrave;n. Tất cả c&aacute;c k&iacute;ch thước được đo bằng tay, với sai số 0,5cm l&agrave; phạm vi b&igrave;nh thường. Sản phẩm được l&agrave;m bằng tay, c&oacute; thể c&oacute; sự kh&aacute;c biệt nhỏ.</p>\r\n<p>Nếu bạn tham gia c&aacute;c hoạt động thể thao ngo&agrave;i trời, tắm, ngủ v&agrave; n&acirc;ng vật nặng, n&ecirc;n th&aacute;o trang sức trước, điều n&agrave;y c&oacute; thể giảm thiệt hại do v&ocirc; t&igrave;nh b&oacute;p bằng lực b&ecirc;n ngo&agrave;i. Nếu bạn c&oacute; bất kỳ c&acirc;u hỏi n&agrave;o, vui l&ograve;ng th&ocirc;ng b&aacute;o cho ch&uacute;ng t&ocirc;i kịp thời để gi&uacute;p bạn giải quyết g&oacute;i h&agrave;ng.</p>', '[]', '2023-05-06 07:46:00', '2023-05-06 07:47:19'),
(4, 'Vòng Tay Bạc Mặt Vuông Rỗng Họa Tiết Ngôi Sao Rỗng Thời Trang Hàn Quốc Cho Nữ', 'vong-tay-bac-mat-vuong-rong-hoa-tiet-ngoi-sao-rong-thoi-trang-han-quoc-cho-nu', 'products/May2023/8alMfGQCmtlNcYRvbeBG.jpeg', '[\"products\\/May2023\\/htWodIHYikhmZUlsAaix.jpeg\",\"products\\/May2023\\/z6mk3BcpoxjJDGxOOnC4.jpeg\",\"products\\/May2023\\/lKcEqxLDJn9y3JEaEQze.jpeg\"]', 450000, 25, 233, 1, 2, NULL, 'Một công cụ cần có để chụp ảnh và đi chơi trên đường phố', '<p class=\"irIKAp\">Ch&agrave;o mừng bạn đến với cửa h&agrave;ng phụ kiện thời trang của ch&uacute;ng t&ocirc;i!!!</p>\r\n<p class=\"irIKAp\">100% h&agrave;ng mới v&agrave; chất lượng cao.</p>\r\n<p class=\"irIKAp\">Th&ocirc;ng tin sản phẩm:</p>\r\n<p class=\"irIKAp\">1. M&agrave;u sắc: bạc</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">2. K&iacute;ch thước: Như trong h&igrave;nh</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">3. Khối lượng: 10g</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">4. Chất liệu: hợp kim</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Một c&ocirc;ng cụ cần c&oacute; để chụp ảnh v&agrave; đi chơi tr&ecirc;n đường phố</p>', '[]', '2023-05-06 07:51:03', '2023-05-06 07:51:03'),
(5, 'Tất cổ cao, tất vớ cao cổ nữ trắng hình thú dễ thương vải cotton co giãn thời trang Hàn Quốc M04', 'tat-co-cao-tat-vo-cao-co-nu-trang-hinh-thu-de-thuong-vai-cotton-co-gian-thoi-trang-han-quoc-m04', 'products/May2023/XVyt0EtxKRMU3SDgyGdj.jpeg', '[\"products\\/May2023\\/iCHr7BYVODtEnyGvQWee.jpeg\",\"products\\/May2023\\/HoYwgLORBFL6cZMuXI87.jpeg\"]', 34000, 10, 335, 1, 2, NULL, 'Tất cổ cao, tất vớ cao cổ nữ trắng hình thú dễ thương vải cotton co giãn thời trang Hàn Quốc M04', '<p>GIỚI THIỆU SẢN PHẨM: Tất cổ cao, tất vớ cao cổ nữ trắng h&igrave;nh th&uacute; dễ thương vải cotton co gi&atilde;n thời trang H&agrave;n Quốc M04</p>\r\n<p style=\"padding-left: 40px;\">Tất hay c&ograve;n được gọi l&agrave; vớ ch&acirc;n, b&iacute;t tất l&agrave; phụ kiện thời trang c&oacute; mặt trong tủ đồ của mọi người ti&ecirc;u d&ugrave;ng.</p>\r\n<p style=\"padding-left: 40px;\">&nbsp;Tất ch&acirc;n thường được sử dụng với mục đ&iacute;ch giữ ấm b&agrave;n ch&acirc;n, bảo vệ sức khỏe hoặc đơn giản l&agrave; thấm h&uacute;t mồ h&ocirc;i trong qu&aacute; tr&igrave;nh bạn đi gi&agrave;y.&nbsp;</p>\r\n<p style=\"padding-left: 40px;\">&nbsp;Tất vớ đi k&egrave;m với c&aacute;c loại gi&agrave;y tr&aacute;nh đau ch&acirc;n, hạn chế h&ocirc;i ch&acirc;n v&agrave; l&agrave;m thoải m&aacute;i ch&acirc;n.&nbsp;</p>\r\n<p style=\"padding-left: 40px;\">Thời trang, c&aacute;c loại tất vớ thời trang l&agrave;m t&ocirc;n l&ecirc;n vẻ đẹp của người đi.</p>\r\n<p style=\"padding-left: 40px;\">&nbsp;</p>\r\n<p>ƯU ĐIỂM CỦA SẢN PHẨM: Tất cổ cao, tất vớ cao cổ nữ trắng h&igrave;nh th&uacute; dễ thương vải cotton co gi&atilde;n thời trang H&agrave;n Quốc M04</p>\r\n<p style=\"padding-left: 40px;\">Thiết kế tinh tế cực kỳ đ&aacute;ng y&ecirc;u, trẻ trung, năng động v&agrave; đặc biệt rất thời trang</p>\r\n<p style=\"padding-left: 40px;\">&nbsp;Tất vớ mỏng tho&aacute;ng, phần chun mảnh kh&ocirc;ng g&acirc;y hằn, đau khi sử dụng&nbsp;</p>\r\n<p style=\"padding-left: 40px;\">&nbsp;Tất vớ được l&agrave;m từ chất liệu 100% cotton gi&uacute;p khử m&ugrave;i kh&aacute;ng khuẩn rất tốt</p>\r\n<p style=\"padding-left: 40px;\">Chất liệu vải mềm, nhẹ, co gi&atilde;n 4 chiều, thấm h&uacute;t mồ hơi cực tốt - Tất - vớ mềm mại, thấm h&uacute;t mồ h&ocirc;i mang lại cảm gi&aacute;c m&aacute;t mẻ kh&ocirc; tho&aacute;ng suốt 4 m&ugrave;a</p>\r\n<p style=\"padding-left: 40px;\">Chất vải mịn m&agrave;ng, kh&ocirc;ng bị x&ugrave; l&ocirc;ng khi sử dụng - Đặc biệt sản phẩm tất vớ rất dề phối đồ cho c&aacute;c bạn nữ.</p>\r\n<p style=\"padding-left: 40px;\">&nbsp;</p>\r\n<p>TH&Ocirc;NG TIN CHI TIẾT SẢN PHẨM: Tất cổ cao, vớ cổ cao nữ trắng h&igrave;nh th&uacute; dễ thương vải cotton co gi&atilde;n thời trang H&agrave;n Quốc - M&agrave;u sắc: Nhiều m&agrave;u hợp thời trang - K&iacute;ch thước: Freesize</p>', '[\r\n    {\r\n        \"key\": \"Size\",\r\n        \"value\": [\r\n            \"M\",\r\n            \"L\",\r\n            \"XL\",\r\n            \"XXL\"\r\n        ]\r\n    },\r\n    {\r\n        \"key\": \"Color\",\r\n        \"value\": [\r\n            \"Back\",\r\n            \"Blue\",\r\n            \"Red\"\r\n        ]\r\n    }\r\n]', '2023-05-06 07:55:00', '2023-05-06 07:56:23'),
(6, 'Gương Mini Cầm Tay(Tròn)', 'guong-mini-cam-tay-tron', 'products/May2023/EO8pV1SOxYKmObuPFsgx.jpeg', '[\"products\\/May2023\\/vgq5APlS9eUXop7G3YMV.jpeg\",\"products\\/May2023\\/s0HVuIV06toYA1sC4m0n.jpeg\"]', 10000, 10, 1000, 1, 2, NULL, 'Gương tròn dễ thương cho bạn gái', '<p>Gương tr&ograve;n dễ thương cho bạn g&aacute;i k&iacute;ch thước nhỏ gọn tiện lợi để t&uacute;i x&aacute;ch cặp v&iacute; Rẻ nữa chứ qu&aacute; hợp cho bạn g&aacute;i soi gương t&uacute;t t&aacute;t lại bất cứ nơi đ&acirc;u :D.</p>', '[]', '2023-05-06 07:59:28', '2023-05-06 07:59:28'),
(7, 'Ốp Điện Thoại TPU Mềm Trong Suốt Họa Tiết Hoa Cho iPhone 6 6s 7 8 Plus 14 11 12 13 Pro MAX X XR XS MAX SE 2020', 'op-dien-thoai-tpu-mem-trong-suot-hoa-tiet-hoa-cho-iphone-6-6s-7-8-plus-14-11-12-13-pro-max-x-xr-xs-max-se-2020', 'products/May2023/nCa4KlFj1wtADsZUPOM7.jpeg', '[\"products\\/May2023\\/EiZg2grEncv3lLKTxPa1.jpeg\",\"products\\/May2023\\/fXS43M8jfwUGDLhHEFEb.jpeg\"]', 50000, 15, 3221, 1, 10, NULL, 'Tính năng vỏ, ốp chống bẩn, chống bụi, chống sốc, chống nước', '<p class=\"irIKAp\">👏👏Ch&agrave;o mừng bạn đến với cửa h&agrave;ng caseunicorn💗💗</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">👉 Ch&uacute;ng t&ocirc;i l&agrave; nh&agrave; cung cấp phụ kiện điện thoại 3C chuy&ecirc;n nghiệp.</p>\r\n<p class=\"irIKAp\">👉 Cửa h&agrave;ng của Nh&agrave; m&aacute;y. Mới 100!</p>\r\n<p class=\"irIKAp\">👉Gi&aacute; của ch&uacute;ng t&ocirc;i l&agrave; thấp nhất, với chất lượng v&agrave; dịch vụ h&agrave;ng đầu.</p>\r\n<p class=\"irIKAp\">👉 Hỗ trợ dropshipping! Hỗ trợ chọn m&agrave;u hỗn hợp! Hỗ trợ b&aacute;n sỉ!</p>\r\n<p class=\"irIKAp\">👉 Vui l&ograve;ng kiểm tra số m&atilde; tr&ecirc;n đầu h&igrave;nh ảnh.</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">🚩 Chất liệu: tpu mềm</p>\r\n<p class=\"irIKAp\">🚩G&oacute;i bao gồm: 1pc trường hợp</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Mẫu điện thoại tương th&iacute;ch:</p>\r\n<p class=\"irIKAp\">Iphone</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 6 / 6s</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 6plus / 6splus</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone: 7/8 / SE 2020</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone: 7plus / 8plus</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone: x / xs</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone: xr</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone: xs max</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 11</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 11pro max</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone SE 2020</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 12</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 12pro</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 12pro max</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 13</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 13pro</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 13pro max</p>', '[\r\n    {\r\n        \"key\": \"Size\",\r\n        \"value\": [\r\n            \"M\",\r\n            \"L\",\r\n            \"XL\",\r\n            \"XXL\"\r\n        ]\r\n    },\r\n    {\r\n        \"key\": \"Color\",\r\n        \"value\": [\r\n            \"Back\",\r\n            \"Blue\",\r\n            \"Red\"\r\n        ]\r\n    }\r\n]', '2023-05-06 08:02:00', '2023-05-06 08:04:05'),
(8, 'Điện Thoại Nokia 101,Nokia 100, Nokia 105 Zin Chính Hãng, Được Chọn Kèm Phụ Kiện', 'dien-thoai-nokia-101-nokia-100-nokia-105-zin-chinh-hang-duoc-chon-kem-phu-kien', 'products/May2023/LEztao151mOQAdrPbjmt.jpeg', '[\"products\\/May2023\\/zARCL0t4VYvSSUqAlvtB.jpeg\",\"products\\/May2023\\/tOBPF4PsSC2A7kFF7yYs.jpeg\",\"products\\/May2023\\/B83MiZ0gSdoMw1LhvP4p.jpeg\"]', 1000000, 45, 54, 1, 10, NULL, 'điện thoại Nokia 100,101,105 giá rẻ vẫn được trang bị bàn phím T9 truyền thống.', '<p>Lưu &yacute;: Sản phẩm l&agrave; c&aacute;c d&ograve;ng m&aacute;y cũ ch&iacute;nh h&atilde;ng của Nokia được thay vỏ mới,pin sạc mới v&agrave; bảo h&agrave;nh đầy đủ 12 th&aacute;ng, qu&yacute; kh&aacute;ch mua sp rồi lưu &yacute; xem video gi&uacute;p shop ạ! - Nokia 100 hỗ trợ 1 sim- sạc ch&acirc;n kim - Nokia 101 hỗ trợ 2 sim v&agrave; hỗ trợ lắp thẻ nhớ nghe nhạc, sạc ch&acirc;n kim - Nokia 105 hỗ trợ 2 sim, sạc ch&acirc;n dẹt micro Tiếp nối truyền thống &ldquo;m&aacute;y bền, pin tr&acirc;u&rdquo; của những mẫu điện thoại &ldquo;trứ danh&rdquo; như&nbsp;Nokia 1200,&nbsp;Nokia 1280,&hellip;H&atilde;ng điện thoại đến từ Phần Lan tiếp tục tung ra mẫu điện thoại&nbsp;Nokia 100,101,105 vẫn &ldquo;bền&rdquo; v&agrave; &ldquo;tr&acirc;u&rdquo; nhưng được cải tiến nhiều hơn. Điện thoại Nokia 100,101,105 gi&aacute; rẻ&nbsp;vẫn được trang bị b&agrave;n ph&iacute;m T9 truyền thống. Ưu điểm r&otilde; r&agrave;ng của kiểu b&agrave;n ph&iacute;m n&agrave;y l&agrave; dễ sử dụng, tốc độ bấm ph&iacute;m nhanh. Đặc biệt, c&aacute;c ph&iacute;m bấm tr&ecirc;n m&aacute;y được l&agrave;m bằng vật liệu cao su mềm, kh&ocirc;ng g&acirc;y đau tay khi sử dụng trong thời gian d&agrave;i. Điện thoại Nokia 100 được t&iacute;ch hợp sẵn 20 giao diện người d&ugrave;ng c&oacute; thể thay đổi t&ugrave;y &yacute; theo sở th&iacute;ch &nbsp;v&agrave; c&aacute; t&iacute;nh của m&igrave;nh &nbsp;Điện thoại Nokia ch&iacute;nh h&atilde;ng gi&aacute; rẻ&nbsp;thiết kế bền, đẹp, gọn nhẹ ph&ugrave; hợp với mọi lứa tuổi - Năm sx : 2011- 2016 - Th&ocirc;ng số kĩ thuật : -C&ocirc;ng nghệ m&agrave;n h&igrave;nh: LCD -Độ ph&acirc;n giải: QQVGA (120 x 160 Pixels) -M&agrave;n h&igrave;nh rộng: 1.8\" -Mặt k&iacute;nh cảm ứng: -Mặt k&iacute;nh cong 2.5D -RAM: 512 MB -Danh bạ: 500 số -Mạng di động: Hỗ trợ 2G &ndash; Thời gian chờ l&acirc;u &ndash; M&agrave;n h&igrave;nh TFT, 65.536 m&agrave;u -Thiết kế: Pin rời &ndash; Điện thoại với nhiều chức năng: đ&egrave;n pin, b&aacute;o thức, đ&agrave;i FM&hellip;.. &ndash; M&agrave;u sắc:&nbsp;Đen, Xanh dương, X&aacute;m - Th&ocirc;ng tin cảnh b&aacute;o : kh&ocirc;ng để pin kiệt hết trong m&aacute;y qu&aacute; 5 ng&agrave;y dễ dẫn tới chai hỏng pin -T&igrave;nh Trạng : H&agrave;ng T&acirc;n Trang- Điện thoại Nokia cũ thay lại sườn vỏ v&agrave; pin sạc mới -Xuất Xứ L&otilde;i M&aacute;y: Main Nokia Cũ Ch&iacute;nh H&atilde;ng Sản Xuất Tại Phần Lan -Sườn, Vỏ, Pin, Sạc Xuất Xứ : Trung Quốc -Ph&acirc;n phối v&agrave; bảo h&agrave;nh tại H&agrave; Bắc Store -Địa Chỉ : Y&ecirc;n Nghĩa- H&agrave; Đ&ocirc;ng- H&agrave; Nội</p>', NULL, '2023-05-06 08:07:10', '2023-05-06 08:07:10'),
(9, 'Ốp Điện Thoại Họa Tiết Hoạt Hình Cho IPhone 11 13 12 14 Pro MAX XR 6 6S 7 8 14 Plus X XS MAX SE 2020', 'op-dien-thoai-hoa-tiet-hoat-hinh-cho-iphone-11-13-12-14-pro-max-xr-6-6s-7-8-14-plus-x-xs-max-se-2020', 'products/May2023/qyLfPLwa5M9I5eeJMgQm.jpeg', '[\"products\\/May2023\\/zUc0mh6X66xguoUl7r6K.jpeg\",\"products\\/May2023\\/pXxWPYvCpFCjsMqspq1E.jpeg\"]', 30000, 65, 543, 1, 10, NULL, 'Chất liệu: tpu mềm', '<div class=\"product-detail page-product__detail\">\r\n<div class=\"U9rGd1\">\r\n<div class=\"MCCLkq\">\r\n<div class=\"f7AU53\">\r\n<p class=\"irIKAp\">Ch&agrave;o mừng bạn đến với cửa h&agrave;ng caseunicorn</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Ch&uacute;ng t&ocirc;i l&agrave; nh&agrave; cung cấp phụ kiện điện thoại 3C chuy&ecirc;n nghiệp.</p>\r\n<p class=\"irIKAp\">Cửa h&agrave;ng của Nh&agrave; m&aacute;y. Mới 100!</p>\r\n<p class=\"irIKAp\">Gi&aacute; của ch&uacute;ng t&ocirc;i l&agrave; thấp nhất, với chất lượng v&agrave; dịch vụ h&agrave;ng đầu.</p>\r\n<p class=\"irIKAp\">Hỗ trợ dropshipping! Hỗ trợ chọn m&agrave;u hỗn hợp! Hỗ trợ b&aacute;n sỉ!</p>\r\n<p class=\"irIKAp\">Vui l&ograve;ng kiểm tra số m&atilde; tr&ecirc;n đầu h&igrave;nh ảnh.</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Chất liệu: tpu mềm</p>\r\n<p class=\"irIKAp\">G&oacute;i bao gồm: 1pc trường hợp</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Mẫu điện thoại tương th&iacute;ch:</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 6 = 6s = 7 = 8 = SE 2020</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch với iPhone 6plus = 6splus = 7Plus = 8Plus</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone X = XS</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone XR</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone xs max</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 11</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 11pro max</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 12</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 12pro</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 12pro max</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 13</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 13pro</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 13pro max</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 14</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 14pro</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 14pro max</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch cho iPhone 14 Plus</p>\r\n</div>\r\n</div>\r\n</div>\r\n</div>\r\n<div>\r\n<div>\r\n<div class=\"product-ratings\" data-nosnippet=\"true\">\r\n<div class=\"product-ratings__header\">&nbsp;</div>\r\n</div>\r\n</div>\r\n</div>', NULL, '2023-05-06 08:09:52', '2023-05-06 08:09:52'),
(10, 'Ốp Điện Thoại TPU Dẻo Họa Tiết Cô Gái Mập Mạp Nhiều Màu Cho Iphone 14 13 12 11 Pro Promax 6 6S 7 8 Plus X XR XSMax', 'op-dien-thoai-tpu-deo-hoa-tiet-co-gai-map-map-nhieu-mau-cho-iphone-14-13-12-11-pro-promax-6-6s-7-8-plus-x-xr-xsmax', 'products/May2023/j9DdItuS8jiinwePem0u.jpeg', '[\"products\\/May2023\\/7Tc8a05JWoLYbu4Dbn7X.jpeg\",\"products\\/May2023\\/XDhN6v1Dq54BfX3HveKf.jpeg\"]', 99999, 50, NULL, 1, 10, NULL, '🙋🏻‍♀️🙋🏻‍♀️🙋🏻‍♀️Khai trương cửa hàng mới, không vì lợi nhuận, bán theo đuổi, tất cả các sản phẩm đều có trong kho, chương trình khuyến mãi chỉ còn 15 ngày, và giá gốc sẽ được khôi phục sau 15 ngày.', '<p class=\"irIKAp\">【Ghi Ch&uacute;!!!】🥰 Do số lượng SKU c&oacute; hạn, kh&ocirc;ng thể liệt k&ecirc; tất cả c&aacute;c m&agrave;u hoặc mẫu m&atilde;, Nếu bạn cần đặt mẫu hoặc m&agrave;u kh&aacute;c ngo&agrave;i số n&agrave;y, bạn c&oacute; thể li&ecirc;n hệ với bộ phận chăm s&oacute;c kh&aacute;ch h&agrave;ng trực tuyến của ch&uacute;ng t&ocirc;i.🥰</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">🙋🏻&zwj;♀️🙋🏻&zwj;♀️🙋🏻&zwj;♀️Khai trương cửa h&agrave;ng mới, kh&ocirc;ng v&igrave; lợi nhuận, b&aacute;n theo đuổi, tất cả c&aacute;c sản phẩm đều c&oacute; trong kho, chương tr&igrave;nh khuyến m&atilde;i chỉ c&ograve;n 15 ng&agrave;y, v&agrave; gi&aacute; gốc sẽ được kh&ocirc;i phục sau 15 ng&agrave;y.</p>\r\n<p class=\"irIKAp\">🙋🏻&zwj;♀️🙋🏻&zwj;♀️🙋🏻&zwj;♀️Ch&uacute; &yacute; đến bộ sưu tập cửa h&agrave;ng, Th&ecirc;m v&agrave;o giỏ h&agrave;ng c&aacute;c sản phẩm y&ecirc;u th&iacute;ch, giao h&agrave;ng ưu ti&ecirc;n</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">💕💕💕Ch&agrave;o mừng bạn đến với Cửa h&agrave;ng JODO!💕💕💕</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">-&amp;gt;💖Lưu &yacute; th&acirc;n thiện💖:&amp;lt;-</p>\r\n<p class=\"irIKAp\">🥰 Nếu bạn cần đặt nhiều mặt h&agrave;ng c&oacute; nhiều m&agrave;u sắc v&agrave; mẫu m&atilde; kh&aacute;c nhau, bạn chỉ cần th&ecirc;m v&agrave;o giỏ h&agrave;ng trước, sau đ&oacute; thanh to&aacute;n v&agrave;o giỏ h&agrave;ng để ho&agrave;n tất.🥰</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">-&amp;gt; 🥝Th&ocirc;ng tin sản phẩm🥝 &amp;lt;-</p>\r\n<p class=\"irIKAp\">M&ocirc; h&igrave;nh m&agrave;u Fat Girl</p>\r\n<p class=\"irIKAp\">🌟B&aacute;n h&agrave;ng trực tiếp tại nh&agrave; m&aacute;y, Gi&aacute; thấp nhất, Giao h&agrave;ng nhanh, C&aacute;c kiểu d&aacute;ng đa dạng</p>\r\n<p class=\"irIKAp\">🌟Mực in cao cấp, sắc b&eacute;n, kh&ocirc;ng phai m&agrave;u, kh&ocirc;ng g&acirc;y hại cho da,</p>\r\n<p class=\"irIKAp\">🌟 H&igrave;nh ảnh thiết kế đẹp, phong c&aacute;ch, trẻ trung.</p>\r\n<p class=\"irIKAp\">🌟Dễ sử dụng, trọng lượng nhẹ, kết cấu v&agrave; đường kh&acirc;u trang nh&atilde;.</p>\r\n<p class=\"irIKAp\">🌟Vừa vặn với điện thoại của bạn, dễ d&agrave;ng th&aacute;o lắp.</p>\r\n<p class=\"irIKAp\">💯H&igrave;nh ảnh sản phẩm giống nhau 100%.</p>\r\n<p class=\"irIKAp\">💯Đảm bảo chất lượng 100% b&igrave;a.</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">-&amp;gt;🍍C&ocirc;ng dụng🍍 &amp;lt;-:</p>\r\n<p class=\"irIKAp\">Thay đổi m&agrave;u sắc của điện thoại, giữ điện thoại chắc chắn trong tay, an to&agrave;n kh&ocirc;ng bị trầy xước, bảo vệ ốp lưng khỏi va đập, bụi bẩn,</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">-&amp;gt; 🍉Dịch vụ của ch&uacute;ng t&ocirc;i🍉 &amp;lt;-</p>\r\n<p class=\"irIKAp\">👋Nếu bạn c&oacute; bất kỳ c&acirc;u hỏi n&agrave;o khi bạn nhận được g&oacute;i h&agrave;ng, vui l&ograve;ng li&ecirc;n hệ với bộ phận chăm s&oacute;c kh&aacute;ch h&agrave;ng của cửa h&agrave;ng, ch&uacute;ng t&ocirc;i sẽ giải quyết vấn đề một c&aacute;ch ho&agrave;n hảo cho bạn v&agrave; ch&uacute;ng t&ocirc;i sẽ cung cấp cho bạn dịch vụ tốt nhất.</p>\r\n<p class=\"irIKAp\">👋Nh&oacute;m dịch vụ chuy&ecirc;n nghiệp, giao h&agrave;ng nhanh ch&oacute;ng</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">⭐⭐⭐⭐⭐Ch&uacute;ng t&ocirc;i phụ thuộc v&agrave;o sự h&agrave;i l&ograve;ng của kh&aacute;ch h&agrave;ng để th&agrave;nh c&ocirc;ng. Nếu bạn h&agrave;i l&ograve;ng với sản phẩm v&agrave; dịch vụ của ch&uacute;ng t&ocirc;i, vui l&ograve;ng gi&uacute;p ch&uacute;ng t&ocirc;i đ&aacute;nh gi&aacute; năm sao. Vui l&ograve;ng d&agrave;nh một ph&uacute;t để lại phản hồi t&iacute;ch cực của bạn. Cảm ơn bạn!</p>\r\n<p class=\"irIKAp\">Khen ngợi năm sao li&ecirc;n hệ với ch&uacute;ng t&ocirc;i để nhận phiếu giảm gi&aacute;⭐⭐⭐⭐⭐</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">-&amp;gt;🍓Về b&aacute;n bu&ocirc;n🍓-&amp;gt;</p>\r\n<p class=\"irIKAp\">🍋1.Tất cả c&aacute;c sản phẩm đều được hỗ trợ b&aacute;n bu&ocirc;n, bạn c&oacute; thể nhận th&ecirc;m chiết khấu b&aacute;n bu&ocirc;n bằng c&aacute;ch li&ecirc;n hệ với ch&uacute;ng t&ocirc;i.</p>\r\n<p class=\"irIKAp\">🍋2.Ch&agrave;o mừng hợp t&aacute;c l&acirc;u d&agrave;i từ kh&aacute;ch h&agrave;ng mua sỉ</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Mẫu điện thoại tương th&iacute;ch: vỏ điện thoại ph&ugrave; hợp với iP 6; iP 6s; iP 6plus; iP 6Splus; iP 6; iP 7; iP 8; iP 7plus; iP 8plus; iP X; iP XS; iP XR; iP XSMAX; iP 11; iP 11Pro; Ip 11Promax; iP 12; iP 12Pro; iP 12Promax; iP 13; iP 13Pro; iP 13Promax</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">⚠️⚠️⚠️Cặp kiểu iphone sử dụng c&ugrave;ng một ốp lưng⚠️⚠️⚠️</p>\r\n<p class=\"irIKAp\">- Trường hợp cho iP 6 = iP 6S; (chọn: iP 6 / 6S)🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho iP 6plus = iP 6Splus; (chọn: iP 6plus / 6Splus)🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho iP 7 = iP 8; (chọn: iP 7/8)🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho iP 7plus = iP 8plus; (chọn: iP 7plus / 8plus)🌸</p>\r\n<p class=\"irIKAp\">- Vỏ cho ip X = ip XS; (chọn: ip X / XS)🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip XR🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip XSMAX🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip 11🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip 11 Promax 🌸;</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip 12🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip 12Pro 🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip 12Promax🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip 13 🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip 13Pro🌸</p>\r\n<p class=\"irIKAp\">- Trường hợp cho ip</p>', '[\r\n    {\r\n        \"key\": \"K\\u00edch th\\u01b0\\u1edbc\",\r\n        \"value\": [\r\n            \"M\",\r\n            \"L\",\r\n            \"XL\",\r\n            \"XXL\"\r\n        ]\r\n    },\r\n    {\r\n        \"key\": \"M\\u00e0u s\\u1eafc\",\r\n        \"value\": [\r\n            \"Tr\\u1eafng\",\r\n            \"Xanh\",\r\n            \"V\\u00e0ng\",\r\n            \"\\u0110en\"\r\n        ]\r\n    }\r\n]', '2023-05-06 08:12:00', '2023-05-06 08:14:10'),
(11, 'Ốp Điện Thoại Dẻo Hình Gấu 3D Cho iPhone 14 13 11 12 Pro MAX Mini 6 6s 7 8 Plus 7plus 8plus 6plus X XR XS MAX 14Pro', 'op-dien-thoai-deo-hinh-gau-3d-cho-iphone-14-13-11-12-pro-max-mini-6-6s-7-8-plus-7plus-8plus-6plus-x-xr-xs-max-14pro', 'products/May2023/uQmnOUkfJ5OWfZIz7mxk.jpeg', '[\"products\\/May2023\\/7Bm7htdOCQIeJ00JYoBz.jpeg\",\"products\\/May2023\\/wqKIyf48UfwhthNZJu7i.jpeg\",\"products\\/May2023\\/TScRRxBjFfvKCgNQu41L.jpeg\"]', 100000, 20, 745, 1, 10, NULL, 'Thiết kế mềm mại để thể hiện vẻ đẹp ban đầu của điện thoại của bạn.', '<p class=\"irIKAp\">Ch&agrave;o mừng bạn đến với cửa h&agrave;ng của ch&uacute;ng t&ocirc;i! Ch&uacute;ng t&ocirc;i kh&ocirc;ng chỉ rẻ m&agrave; c&ograve;n đẹp!</p>\r\n<p class=\"irIKAp\">Ch&uacute;ng t&ocirc;i cam kết: Nếu sản phẩm c&oacute; vấn đề về chất lượng, xin vui l&ograve;ng thay thế n&oacute;!</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">M&ocirc; tả sản phẩm</p>\r\n<p class=\"irIKAp\">Th&ocirc;ng tin chi tiết:</p>\r\n<p class=\"irIKAp\">Bảo vệ tuyệt vời khỏi bụi bẩn, trầy xước v&agrave; hư hỏng.</p>\r\n<p class=\"irIKAp\">Thiết kế mềm mại để thể hiện vẻ đẹp ban đầu của điện thoại của bạn.</p>\r\n<p class=\"irIKAp\">Được l&agrave;m từ chất liệu hấp thụ sốc, chống vỡ v&agrave; chống trầy xước.</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Xuất xứ: CN (Xuất xứ)</p>\r\n<p class=\"irIKAp\">T&ecirc;n sản phẩm: Ốp điện thoại</p>\r\n<p class=\"irIKAp\">Thương hiệu tương th&iacute;ch: d&agrave;nh cho iphone</p>\r\n<p class=\"irIKAp\">Chất liệu: Silicone mềm</p>\r\n<p class=\"irIKAp\">Thiết kế: Vỏ Silicone</p>\r\n<p class=\"irIKAp\">Đặc trưng 1: Ốp bảo vệ mặt sau</p>\r\n<p class=\"irIKAp\">T&iacute;nh năng 2: Dễ d&agrave;ng c&agrave;i đặt hoặc gỡ bỏ</p>\r\n<p class=\"irIKAp\">T&iacute;nh năng 3: Bảo hiểm to&agrave;n th&acirc;n</p>\r\n<p class=\"irIKAp\">T&iacute;nh năng 4: Tất cả c&aacute;c vết cắt ph&ugrave; hợp ho&agrave;n hảo</p>\r\n<p class=\"irIKAp\">T&iacute;nh năng 5: Cảm ứng mềm mại, kết cấu tốt</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Lưu &yacute;: Do hiệu ứng &aacute;nh s&aacute;ng m&agrave;n h&igrave;nh, m&agrave;u sắc thực tế của sản phẩm thật c&oacute; thể c&oacute; đ&ocirc;i ch&uacute;t ch&ecirc;nh lệch..</p>', NULL, '2023-05-06 08:16:39', '2023-05-06 08:16:39'),
(12, '(MIỄN SHIP TOÀN QUỐC) [XẢ HẾT KHO) micro cho mọi loại loa- MICRO CHO LOA KÉO BLUETOOTH P88 P89 - MICRO dàn', 'mien-ship-toan-quoc-xa-het-kho-micro-cho-moi-loai-loa-micro-cho-loa-keo-bluetooth-p88-p89-micro-dan', 'products/May2023/8T02Hmt6ypwz1uXJhxfn.jpeg', '[\"products\\/May2023\\/s7rP9J60hEAOV5EPG7Tk.jpeg\",\"products\\/May2023\\/5SRy1DBW6HU5zPzjdvIu.jpeg\",\"products\\/May2023\\/R3vaGtC6h86zw3UhITSB.jpeg\"]', 400000, 30, NULL, 1, 7, NULL, 'Với thiết kế khá nhỏ gọn, vỏn vẹn trong lòng bàn tay cho bạn dễ dàng sử dụng, với thiết kế này sản phẩm phù hợp với mọi lứa tuổi rất thuận tiện dễ dàng sử dụng.', '<p>Với thiết kế kh&aacute; nhỏ gọn, vỏn vẹn trong l&ograve;ng b&agrave;n tay cho bạn dễ d&agrave;ng sử dụng, với thiết kế n&agrave;y sản phẩm ph&ugrave; hợp với mọi lứa tuổi rất thuận tiện dễ d&agrave;ng sử dụng.</p>\r\n<p>Hệ thống tay Micro được l&agrave;m bằng hợp kim đặc biệt phủ nano chống xước, chống ẩm, chống thấm mồ h&ocirc;i đảm bảo cho người d&ugrave;ng lu&ocirc;n được thoải m&aacute;i nhất trong qu&aacute; tr&igrave;nh sử dụng.</p>\r\n<p>&nbsp;Hệ thống linh kiện được chọn lọc kỹ lưỡng với chụp Micro l&agrave;m bằng th&eacute;p chống gỉ cứng c&aacute;p, đảm bảo chống m&eacute;o nếu lỡ sản phẩm v&ocirc; t&igrave;nh bị rơi bảo vệ cho vỉ mạch được an to&agrave;n nhất. V&agrave; với lọc m&uacute;t &acirc;m được l&agrave;m chất liệu v&ocirc; c&ugrave;ng cao cấp gi&uacute;p sản phẩm dễ d&agrave;ng nhận t&iacute;n hiệu &acirc;m thanh đầu v&agrave;o v&agrave; qua lọc m&uacute;t cho &acirc;m thanh trong trẻo mềm mại nhất. Với khả năng chống r&uacute; r&iacute;t v&ocirc; c&ugrave;ng tốt sản phẩm mang đến cho bạn một giọng h&aacute;t v&ocirc; c&ugrave;ng trong trẻo mềm mại nhất</p>', NULL, '2023-05-06 08:23:14', '2023-05-06 08:23:14'),
(13, 'Găng tay chơi game Ghost 2022 cảm ứng , 1 cặp 2 cái , 1 cặp Shezi memo sẵn hàng (phutuan2410)', 'gang-tay-choi-game-ghost-2022-cam-ung-1-cap-2-cai-1-cap-shezi-memo-san-hang-phutuan2410', 'products/May2023/ibg82Cxkl6H5wee9iKk1.jpeg', '[\"products\\/May2023\\/Zwl69BugrWxaXP19IXFY.jpeg\",\"products\\/May2023\\/TY5qT6Ni69bDGmzSCtO7.jpeg\"]', 30000, 10, 86543, 1, 10, NULL, 'Găng tay chơi game độ nhạy cao', '<p>Găng tay chơi game độ nhạy cao sẵn h&agrave;ng tại hcm c&aacute;c ph&acirc;n loại h&agrave;ng shop c&oacute; :</p>\r\n<p style=\"padding-left: 40px;\">1 cặp ghost xanh mẫu cũ</p>\r\n<p style=\"padding-left: 40px;\">&nbsp;1 cặp memo&nbsp;</p>\r\n<p style=\"padding-left: 40px;\">&nbsp;1 cặp shezi ver1</p>\r\n<p style=\"padding-left: 40px;\">1 cặp shezi ver 2</p>\r\n<p style=\"padding-left: 40px;\">1 Cặp ghost trắng</p>\r\n<p>2022 mẫu mới bao tay chơi game bao test 3 ng&agrave;y qu&yacute; kh&aacute;ch mua ủng hộ shop nh&eacute; Địa chỉ mua trực tiếp 26/8 hồ biểu ch&aacute;nh p11 ph&uacute; nhuận inbox zalo 0396376775 (phutuan2410)</p>', NULL, '2023-05-06 08:25:00', '2023-05-06 08:26:18'),
(14, 'Đồng Hồ Thông Minh Y68 Kết Nối Điện Thoại,Phù Hợp Nam Nữ, Thay Được Hình Nền , Nhận Thông Báo Cuộc Gọi, Tin Nhắn', 'dong-ho-thong-minh-y68-ket-noi-dien-thoai-phu-hop-nam-nu-thay-duoc-hinh-nen-nhan-thong-bao-cuoc-goi-tin-nhan', 'products/May2023/kfYZqrHZ6IC3VDUgfkso.jpeg', '[\"products\\/May2023\\/mJyJYS4tvfogc0lQTBES.jpeg\",\"products\\/May2023\\/krSBQAiUMfRosu3qE3tD.jpeg\"]', 5874362, 23, 344, 1, 6, NULL, '💓💓Chào mừng bạn đến với cửa hàng của chúng tôi, nhận phiếu giảm giá và hưởng nhiều chiết khấu hơn.', '<p>💓💓Ch&agrave;o mừng bạn đến với cửa h&agrave;ng của ch&uacute;ng t&ocirc;i, nhận phiếu giảm gi&aacute; v&agrave; hưởng nhiều chiết khấu hơn.</p>\r\n<p>✅Chất liệu d&acirc;y đeo n&uacute;t chai: Silicone K&iacute;ch thước: 43,5 * 36 * 12,3mm Cơ thể: 258mb Bobola: V&ograve;ng tay Tấm che: 1.3 M&agrave;u m&agrave;n h&igrave;nh sạc M&agrave;n h&igrave;nh: Độ ph&acirc;n giải 240 * 240 Pin Bobora: pin 150mAh Đầu v&agrave;o: cổng USB Phương thức hoạt động: Cấu tr&uacute;c Giao diện: USB 3.0 Bluetooth Popola: 4.0 Kh&ocirc;ng d&acirc;y: 5m đến 10m (bao gồm) Lớp chống thấm nước: Cấp IP67 C&aacute;c t&iacute;nh năng của Bobora: In-ear Khả năng tương th&iacute;ch phi&ecirc;n bản: iOS8.0 v&agrave; Android 4.4 trở l&ecirc;n Chức năng: nhịp tim / đặc điểm vật l&yacute; / oxy m&aacute;u / khoảng c&aacute;ch / calo / &iacute;t vận động / đồng hồ b&aacute;o thức / đồng hồ / theo d&otilde;i giấc ngủ / điện thoại định vị / vị tr&iacute; đồng hồ / cử chỉ cảm x&uacute;c / rung động Ng&ocirc;n ngữ &aacute;p dụng: tiếng Trung, tiếng Anh, tiếng T&acirc;y Ban Nha, tiếng Ph&aacute;p, tiếng H&agrave; Lan, tiếng Bồ Đ&agrave;o Nha, tiếng Đức, tiếng Nga, tiếng Thổ Nhĩ Kỳ, tiếng Nhật, tiếng Ba Tư, tiếng Ả Rập, tiếng M&atilde; Lai, tiếng Th&aacute;i.</p>\r\n<p>✅Ghi ch&uacute;: 1. C&aacute;c bạn, sau một thời gian d&agrave;i vận chuyển, pin c&oacute; thể được sạc ho&agrave;n to&agrave;n v&agrave; kh&ocirc;ng thể bật. Đừng đổ mồ h&ocirc;i, đ&oacute; l&agrave; điều b&igrave;nh thường. Đưa đồng hồ v&agrave;o đ&uacute;ng vị tr&iacute; v&agrave; sạc trong 1 giờ trước khi sử dụng (ngay cả khi trạng th&aacute;i sạc kh&ocirc;ng c&ograve;n hoạt động, đồng hồ sẽ bật v&agrave; hiển thị trạng th&aacute;i sạc sau một thời gian Thời gian). 2. Đ&ocirc;i khi đồng hồ đ&atilde; tắt. Bạn cần nhấn v&agrave; giữ khu vực cảm ứng một l&uacute;c (khoảng 3 đến 5 gi&acirc;y) để bật. ✅ G&oacute;i h&agrave;ng bao gồm: 1x Đồng hồ th&ocirc;ng minh Bluetooth 1x V&ograve;ng đeo tay Để bạn nhận h&agrave;ng nhanh hơn, ch&uacute;ng t&ocirc;i kh&ocirc;ng đ&oacute;ng g&oacute;i. 💗💛🧡💜 Mua sắm vui vẻ</p>', NULL, '2023-05-06 08:29:44', '2023-05-06 08:29:44'),
(15, 'Tai nghe Bluetooth không dây 5.0 MINPRO - AMOI F9 PRO nút cảm biến vân tay chống nước kèm sạc 2.500mAh', 'tai-nghe-bluetooth-khong-day-5-0-minpro-amoi-f9-pro-nut-cam-bien-van-tay-chong-nuoc-kem-sac-2-500mah', 'products/May2023/FI82zzfos6mEAmwpZfUk.jpeg', '[\"products\\/May2023\\/smZId69EYSRmRwoQrhr6.jpeg\",\"products\\/May2023\\/JkmUWxrSop40ki1a5sv7.jpeg\"]', 52456783, 45, 4344, 1, 7, NULL, 'Tai nghe Bluetooth không dây 5.0 AMOI F9 PRO', '<p class=\"irIKAp\">TH&Ocirc;NG TIN CHI TIẾT : Tai nghe Bluetooth kh&ocirc;ng d&acirc;y 5.0 AMOI F9 PRO</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">- Phi&ecirc;n bản cải tiến của Amoi F9 PRO 5.0 huyền thoại Pin Tr&acirc;u.</p>\r\n<p class=\"irIKAp\">+ N&uacute;t cảm ứng đơn điểm giờ đ&acirc;y đ&atilde; bị loại bỏ thay v&agrave;o đ&oacute; H&atilde;ng đ&atilde; sử dụng C&Ocirc;NG NGHỆ CẢM ỨNG ĐA ĐIỂM &ecirc;m hơn, thực sự rất &ecirc;m, cho người dụng cảm gi&aacute;c sờ chạm như cảm ứng m&agrave; lại kh&ocirc;ng bị loan. (thiết kế b&ecirc;n ngo&agrave;i cũng rất đẹp v&agrave; thời thượng hơn rất nhiều)</p>\r\n<p class=\"irIKAp\">+ Chống Nước IPX7 gi&uacute;p chống mồ h&ocirc;i v&agrave; đi mưa thoải m&aacute;i.</p>\r\n<p class=\"irIKAp\">+ Thời lượng nghe nhạc li&ecirc;n tục 5-6 tiếng, dock sạc sạc đc ~ 20 lần cho tai nghe với dung lượng 2500mAh</p>\r\n<p class=\"irIKAp\">+ C&oacute; Micro đ&agrave;m thoại v&agrave; cổng sạc dự ph&ograve;ng khi cần thiết với dung lượng 2500mAh</p>\r\n<p class=\"irIKAp\">+ Với cải tiến kiểu d&aacute;ng, độ ho&agrave;n thiện cũng như chất liệu đc chau chuốt v&agrave; đẹp hơn phi&ecirc;n bản cũ, sử dụng c&ocirc;ng nghệ Bluetooth 5.0 ti&ecirc;n tiến đem lại hiệu quả &acirc;m thanh cực chất</p>\r\n<p class=\"irIKAp\">Amoi F9 c&oacute; rất nhiều h&agrave;ng nh&aacute;i, chất &acirc;m k&eacute;m, bass kh&ocirc;ng nảy, n&ecirc;n ace h&atilde;y l&agrave; người ti&ecirc;u d&ugrave;ng th&ocirc;ng th&aacute;i</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">- Phi&ecirc;n bản cảm ứng chất &acirc;m ngon hơn, bass s&acirc;u hơn, cảm ứng nhạy hơn</p>\r\n<p class=\"irIKAp\">Tương th&iacute;ch với tất cả c&aacute;c loại điện thoại v&agrave; m&aacute;y t&iacute;nh bảng</p>\r\n<p class=\"irIKAp\">+ Chạm 1 lần l&agrave; tạm dừng</p>\r\n<p class=\"irIKAp\">+ Chạm 2 lần l&agrave; next b&agrave;i</p>\r\n<p class=\"irIKAp\">+ Chạm 3 lần b&ecirc;n phải l&agrave; tăng &acirc;m, 3 lần b&ecirc;n tr&aacute;i l&agrave; giảm &acirc;m</p>\r\n<p class=\"irIKAp\">- Hỗ trợ đ&agrave;m thoại mượt hơn, ko bị delay như phi&ecirc;n bản cũ</p>\r\n<p class=\"irIKAp\">- Đặc biệt dock sạc l&agrave;m sạc dự ph&ograve;ng khi cấp b&aacute;ch lu&ocirc;n, c&oacute; thể sạc cho điện thoại</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">BH 6 th&aacute;ng lỗi đổi mới</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Hướng Dẫn Kết Nối : Tai nghe Bluetooth kh&ocirc;ng d&acirc;y 5.0 AMOI F9 PRO</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Bước 1: Đặt 2 tai nghe v&agrave;o trong hộp sạc khoảng 10 gi&acirc;y</p>\r\n<p class=\"irIKAp\">Bước 2: Lấy 2 tai nghe ra, khi thấy cả 2 đều nhấp nh&aacute;y xanh đỏ th&igrave; đ&atilde; sẵn s&agrave;ng kết nối</p>\r\n<p class=\"irIKAp\">Bước 3: Bật chế độ bluetooth ở điện thoại l&ecirc;n v&agrave; t&igrave;m t&ecirc;n tai nghe để kết nối (Kết nối với b&ecirc;n L trước th&igrave; 2 tai sẽ tự động kết nối với nhau</p>\r\n<p class=\"irIKAp\">để nghe 2 tai)</p>\r\n<p class=\"irIKAp\">Bước 4: Từ những lần kết nối sau chỉ cần bỏ tai nghe ra khỏi hộp v&agrave; bật bluetooth l&agrave; tự động kết nối</p>\r\n<p class=\"irIKAp\">----------------------------------------</p>\r\n<p class=\"irIKAp\">BỘ SẢN PHẨM BAO GỒM : Tai nghe Bluetooth kh&ocirc;ng d&acirc;y 5.0 AMOI F9 PRO</p>\r\n<p class=\"irIKAp\">- 01 x Dock sạc</p>\r\n<p class=\"irIKAp\">- 2 tai nghe</p>\r\n<p class=\"irIKAp\">- D&acirc;y sạc</p>\r\n<p class=\"irIKAp\">- 4 l&oacute;t tai dự ph&ograve;ng</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">MINPRO CAM KẾT:</p>\r\n<p class=\"irIKAp\">- Với đội ngũ hơn 100 nh&acirc;n vi&ecirc;n MINPRO sẽ mang lại cho qu&yacute; kh&aacute;ch những trải nghiệm v&agrave; dịch vụ tuyệt vời nhất!</p>\r\n<p class=\"irIKAp\">- Thương hiệu tạo niềm tin!</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">MINPRO ĐẢM BẢO:</p>\r\n<p class=\"irIKAp\">- Tai nghe Bluetooth kh&ocirc;ng d&acirc;y 5.0 AMOI F9 PRO cam kết giống 100% m&ocirc; tả</p>\r\n<p class=\"irIKAp\">- Ch&iacute;nh s&aacute;ch ho&agrave;n tiền - Đổi trả nếu sản phẩm kh&ocirc;ng giống với m&ocirc; tả.</p>\r\n<p class=\"irIKAp\">- Sản phẩm lu&ocirc;n c&oacute; sẵn trong kho h&agrave;ng.</p>\r\n<p class=\"irIKAp\">- Sản phẩm được kiểm tra kỹ c&agrave;ng trước khi giao h&agrave;ng.</p>\r\n<p class=\"irIKAp\">- Giao h&agrave;ng ngay khi nhận được đơn h&agrave;ng.</p>\r\n<p class=\"irIKAp\">- Giao h&agrave;ng to&agrave;n quốc, nhận h&agrave;ng thanh to&aacute;n.</p>\r\n<p class=\"irIKAp\">&nbsp;</p>\r\n<p class=\"irIKAp\">Ch&uacute;c qu&yacute; kh&aacute;ch lu&ocirc;n vui vẻ</p>', NULL, '2023-05-06 08:31:56', '2023-05-06 08:31:56');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;