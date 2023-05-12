-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: mysql
-- Thời gian đã tạo: Th5 06, 2023 lúc 07:07 AM
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
-- Đang đổ dữ liệu cho bảng `advertisements`
--

INSERT INTO `advertisements` (`id`, `name`, `image`, `location`, `url`, `status`, `order`, `created_at`, `updated_at`) VALUES
(1, 'Quảng cáo shop IT', 'advertisements/April2023/B6hVgUFnA4hqY2KMfCQe.jpeg', 'carousel_banner_right', '/', 1, NULL, '2023-05-06 07:06:30', '2023-05-06 07:06:30'),
(2, 'Quảng cáo 2', 'advertisements/April2023/jL6HHP2eerlqzHTg1gix.jpeg', 'carousel_banner_right', '/', 1, NULL, '2023-05-06 07:06:30', '2023-05-06 07:06:30'),
(3, 'Quảng cáo 3', 'advertisements/April2023/l5LpY3lfBFVrX2Npq6M0.jpeg', 'carousel_banner_right', '/', 1, NULL, '2023-05-06 07:06:30', '2023-05-06 07:06:30'),
(4, 'Quảng cáo 4', 'advertisements/April2023/LySpP2XAcMFoD6ISCrwH.jpeg', 'carousel_banner_right', '/', 1, NULL, '2023-05-06 07:06:30', '2023-05-06 07:06:30'),
(5, 'Quảng cáo 2', 'advertisements/April2023/zkRJxX8t2XablXZfEVxq.jpeg', 'banner_left', '/', 1, NULL, '2023-05-06 07:06:30', '2023-05-06 07:06:30'),
(6, 'Quảng cáo 2', 'advertisements/April2023/2l7jgeW38zAbmSn6D7Qu.jpeg', 'banner_left', '/', 1, NULL, '2023-05-06 07:06:30', '2023-05-06 07:06:30');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
