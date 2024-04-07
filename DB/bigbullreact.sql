-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 03, 2024 at 12:34 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bigbullreact`
--

-- --------------------------------------------------------

--
-- Table structure for table `account_delete_reason`
--

CREATE TABLE `account_delete_reason` (
  `del_id` int(255) NOT NULL,
  `user_id` int(255) DEFAULT NULL,
  `reason` varchar(1000) DEFAULT NULL,
  `time` timestamp(6) NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account_delete_reason`
--

INSERT INTO `account_delete_reason` (`del_id`, `user_id`, `reason`, `time`) VALUES
(1, 7, 'I do not want to continue..', '2024-02-06 06:19:19.789084'),
(2, 7, NULL, '2024-02-06 06:42:43.868312'),
(3, 7, 'I do not want', '2024-02-06 06:44:18.048215'),
(4, 7, 'i do not want ', '2024-02-06 06:45:23.427062');

-- --------------------------------------------------------

--
-- Table structure for table `admin_register`
--

CREATE TABLE `admin_register` (
  `admin_id` int(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_register`
--

INSERT INTO `admin_register` (`admin_id`, `email`, `password`, `status`) VALUES
(1, 'ritin@gmail.com', '$2b$10$I1ulNI5RooUW3JSeCIbYL.mG8RMwm5X0soEJ5kiqFIra8RuXr/LI2', 'notactive'),
(2, 'kuldeepdoauruinfosystems@gmail.com', '$2b$10$XLdESgX28WSXtntVABCUbuC09hX1X2D0yRUkocDa3bQ2//ok1sBp6', 'active'),
(3, 'bigbulleducation0@gmail.com', '$2b$10$ala2ynkOMHkTTg2k8tm0pehwE9YOULhPJb0dVo2cm.kHPbPSSymc6', 'notactive'),
(4, 'shubham@gmail.com', '$2b$10$4cMhywbA71r90foAUoZ0COGdfKE26MNWRFFyaHDCg5I3nZdXO6kVG', 'notactive');

-- --------------------------------------------------------

--
-- Table structure for table `answer_table`
--

CREATE TABLE `answer_table` (
  `id` int(255) NOT NULL,
  `student_id` int(255) DEFAULT NULL,
  `course_id` int(255) DEFAULT NULL,
  `ch_id` int(255) DEFAULT NULL,
  `answer_sheet` varchar(255) DEFAULT NULL,
  `time` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `answer_table`
--

INSERT INTO `answer_table` (`id`, `student_id`, `course_id`, `ch_id`, `answer_sheet`, `time`) VALUES
(1, 26, 4, 1, 'http://localhost:8080/answerFolder/ansFile-1705236399164.pdf', '2024-01-14 12:46:39.180913');

-- --------------------------------------------------------

--
-- Table structure for table `bought_courses`
--

CREATE TABLE `bought_courses` (
  `buy_id` varchar(255) NOT NULL,
  `rzrpay_id` varchar(255) DEFAULT NULL,
  `student_id` int(255) DEFAULT NULL,
  `student_name` varchar(255) DEFAULT NULL,
  `course_id` varchar(255) DEFAULT NULL,
  `student_email` varchar(255) DEFAULT NULL,
  `receipt` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `purchase_time` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `bought_courses`
--

INSERT INTO `bought_courses` (`buy_id`, `rzrpay_id`, `student_id`, `student_name`, `course_id`, `student_email`, `receipt`, `amount`, `status`, `purchase_time`) VALUES
('FRM/2024-25/1', 'pay_NTadz1U2sMnpvy', 26, 'mohit', '[4,5]', NULL, 'FRCP/2024-25/1', '18000', 'success', '2024-01-27 09:38:12.136030'),
('FRM/2024-25/2', 'pay_NTcOTYzLtLBe0Q', 26, 'mohit', '[9]', NULL, 'FRCP/2024-25/2', '8000', 'success', '2024-01-27 11:20:51.075913'),
('FRM/2024-25/3', 'pay_NTcuVlhnGibbpV', 26, 'mohit', '[8]', NULL, 'FRCP/2024-25/3', '8000', 'success', '2024-01-27 11:51:07.731587');

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(100) NOT NULL,
  `user_id` int(100) DEFAULT NULL,
  `item_id` int(100) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`cart_id`, `user_id`, `item_id`, `created_at`) VALUES
(9, 5, 4, '2024-02-02 14:14:23.468306'),
(10, 5, 5, '2024-02-02 14:14:26.328322'),
(11, 5, 6, '2024-02-03 06:15:38.105705'),
(12, NULL, 5, '2024-02-06 11:01:22.898145'),
(13, NULL, 7, '2024-02-06 11:01:28.552030'),
(14, NULL, 5, '2024-02-06 11:03:11.166867'),
(15, NULL, 5, '2024-02-06 11:04:07.771655'),
(16, NULL, 5, '2024-02-06 11:04:54.631052'),
(17, NULL, 5, '2024-02-06 11:05:19.526030');

-- --------------------------------------------------------

--
-- Table structure for table `chapters`
--

CREATE TABLE `chapters` (
  `ch_id` int(255) NOT NULL,
  `course_id` int(255) DEFAULT NULL,
  `ch_name` varchar(255) DEFAULT NULL,
  `question_sheet` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `chapters`
--

INSERT INTO `chapters` (`ch_id`, `course_id`, `ch_name`, `question_sheet`) VALUES
(1, 4, 'financial literacy ch - 1', 'http://localhost:8080/videoCourse/wordFile-1705164190743.pdf'),
(2, 4, 'financial literacy ch - 2', 'http://localhost:8080/videoCourse/wordFile-1705164203176.pdf'),
(3, 4, 'financial literacy ch - 3', 'http://localhost:8080/videoCourse/wordFile-1705164207515.pdf'),
(4, 4, 'financial literacy ch - 4', 'http://localhost:8080/videoCourse/wordFile-1705164211328.pdf'),
(5, 6, 'Learn Compound Effect ch -1', 'http://localhost:8080/videoCourse/wordFile-1705164251070.pdf'),
(6, 6, 'Learn Compound Effect ch -2', 'http://localhost:8080/videoCourse/wordFile-1705164256122.pdf'),
(7, 6, 'Learn Compound Effect ch -3', 'http://localhost:8080/videoCourse/wordFile-1705164259662.pdf'),
(8, 6, 'Learn Compound Effect ch -4', 'http://localhost:8080/videoCourse/wordFile-1705164263252.pdf'),
(9, 11, 'test-chapter-1', 'http://localhost:6060/questionSheet/questionSheet-1706685938171.docx'),
(13, 11, 'dummy-chapter-2', 'http://localhost:6060/questionSheet/questionSheet-1706686508207.png'),
(14, 11, 'test-chapter-2', 'http://localhost:6060/questionSheet/questionSheet-1706686601385.png'),
(15, 11, 'test-chapter-3', 'http://localhost:6060/questionSheet/questionSheet-1706686698712.png'),
(16, 11, 'update-chapter-test-3', 'http://localhost:6060/questionSheet/questionSheet-1706713271039.png');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(100) NOT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `thumbnails` varchar(255) DEFAULT NULL,
  `created_at` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `course_name`, `description`, `price`, `category`, `thumbnails`, `created_at`) VALUES
(8, 'Fired - Financial independence and retire early with dividend', 'Financial independence and retire early with dividend', '8000', 'Financial education', 'http://localhost:8080/thumbnails/1704634775629BIGBULL LOGO.jpeg', '2024-01-07 13:39:35.635726'),
(9, 'Learn About Assets and Liabilities', 'Learn About Assets and Liabilities', '8000', 'Financial education', 'http://localhost:6060/thumbnails/1704634914831BIGBULL LOGO.jpeg', '2024-01-07 13:41:54.836623');

-- --------------------------------------------------------

--
-- Table structure for table `course_videos`
--

CREATE TABLE `course_videos` (
  `coursevideo_id` int(100) NOT NULL,
  `course_id` int(100) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `chapter_id` int(255) DEFAULT NULL,
  `video_url` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp(6) NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course_videos`
--

INSERT INTO `course_videos` (`coursevideo_id`, `course_id`, `title`, `chapter_id`, `video_url`, `duration`, `description`, `created_at`) VALUES
(1, 4, 'become financially stable vid-1', 1, 'http://localhost:8080/videoCourse/videoFile-1705164695862.mp4', '5 min', 'become financially stable', NULL),
(2, 4, 'become financially stable vid-2', 1, 'http://localhost:8080/videoCourse/videoFile-1705164730014.mp4', '5 min', 'become financially stable', NULL),
(3, 4, 'become financially stable vid-3', 1, 'http://localhost:8080/videoCourse/videoFile-1705164751745.mp4', '5 min', 'become financially stable', NULL),
(4, 4, 'become financially stable vid-4', 1, 'http://localhost:8080/videoCourse/videoFile-1705164768370.mp4', '5 min', 'become financially stable', NULL),
(5, 4, 'become financially stable ch-2 vid-1', 2, 'http://localhost:8080/videoCourse/videoFile-1705164806732.mp4', '5 min', 'become financially stable', NULL),
(6, 4, 'become financially stable ch-2 vid-2', 2, 'http://localhost:8080/videoCourse/videoFile-1705164821618.mp4', '5 min', 'become financially stable', NULL),
(7, 4, 'become financially stable ch-2 vid-3', 2, 'http://localhost:8080/videoCourse/videoFile-1705164835071.mp4', '5 min', 'become financially stable', NULL),
(8, 4, 'become financially stable ch-2 vid-4', 2, 'http://localhost:8080/videoCourse/videoFile-1705164847138.mp4', '5 min', 'become financially stable', NULL),
(9, 4, 'become financially stable ch-3 vid-1', 3, 'http://localhost:8080/videoCourse/videoFile-1705164913198.mp4', '5 min', 'become financially stable', NULL),
(10, 4, 'become financially stable ch-3 vid-2', 3, 'http://localhost:8080/videoCourse/videoFile-1705164922536.mp4', '5 min', 'become financially stable', NULL),
(11, 4, 'become financially stable ch-3 vid-3', 3, 'http://localhost:8080/videoCourse/videoFile-1705164935906.mp4', '5 min', 'become financially stable', NULL),
(12, 4, 'become financially stable ch-3 vid-4', 3, 'http://localhost:8080/videoCourse/videoFile-1705164946139.mp4', '5 min', 'become financially stable', NULL),
(13, 4, 'become financially stable ch-4 vid-1', 4, 'http://localhost:8080/videoCourse/videoFile-1705164970365.mp4', '5 min', 'become financially stable', NULL),
(14, 4, 'become financially stable ch-4 vid-2', 4, 'http://localhost:8080/videoCourse/videoFile-1705164982312.mp4', '5 min', 'become financially stable', NULL),
(15, 4, 'become financially stable ch-4 vid-3', 4, 'http://localhost:8080/videoCourse/videoFile-1705164992891.mp4', '5 min', 'become financially stable', NULL),
(16, 4, 'become financially stable ch-4 vid-4', 4, 'http://localhost:8080/videoCourse/videoFile-1705165001799.mp4', '5 min', 'become financially stable', NULL),
(17, 11, 'test-3', 9, 'http://localhost:6060/videoCourse/videoFile-1706800537082.mp4', '2 min', 'test-2', NULL),
(18, 11, 'test-video-1', 9, 'http://localhost:6060/videoCourse/first-video.mp4', 'test-video-1', 'test-video-1', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `inquiry_mail`
--

CREATE TABLE `inquiry_mail` (
  `id` int(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  `time` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `inquiry_mail`
--

INSERT INTO `inquiry_mail` (`id`, `name`, `email`, `mobile`, `message`, `time`) VALUES
(1, 'John Doe', 'bigbulleducation0@gmail.com', '1234567890', 'This is a test message.This is a test message.This is a test message.This is a test message.', '2024-01-13 07:31:52.078727'),
(2, 'Mahesh', 'mahesh@gmail.com', '8602161019', 'mahesh', '2024-02-06 10:12:45.163186'),
(3, 'mahesh', 'mahesh@gmail.com', '8602161019', 'Mahesh', '2024-02-06 10:14:28.273556');

-- --------------------------------------------------------

--
-- Table structure for table `otpcollections`
--

CREATE TABLE `otpcollections` (
  `otp_id` int(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `code` int(10) DEFAULT NULL,
  `expiresIn` int(20) DEFAULT NULL,
  `createdAt` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `otpcollections`
--

INSERT INTO `otpcollections` (`otp_id`, `email`, `code`, `expiresIn`, `createdAt`) VALUES
(43, 'kuldeepdoauruinfosystems@gmail.com', 10878, NULL, '2024-02-05 10:19:18.987942'),
(44, 'kuldeepdoauruinfosystems@gmail.com', 329241, NULL, '2024-02-05 10:19:30.067657'),
(45, 'kuldeepdoauruinfosystems@gmail.com', 610453, NULL, '2024-02-05 10:41:19.997965'),
(46, 'bigbulleducation0@gmail.com', 330439, NULL, '2024-02-05 10:42:27.792145'),
(47, 'kuldeepdoauruinfosystems@gmail.com', 625726, NULL, '2024-02-05 10:47:17.511425'),
(48, 'kuldeepdoauruinfosystems@gmail.com', 732764, NULL, '2024-02-05 11:38:34.411977'),
(49, 'kuldeepdoauruinfosystems@gmail.com', 178963, NULL, '2024-02-05 11:38:55.128780'),
(50, 'kuldeepdoauruinfosystems@gmail.com', 684124, NULL, '2024-02-05 11:40:06.539669');

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(100) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `cpassword` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `profile_picture` varchar(255) DEFAULT NULL,
  `refferel_code` varchar(255) DEFAULT NULL,
  `time` timestamp(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `name`, `email`, `phone`, `gender`, `password`, `cpassword`, `country`, `state`, `city`, `address`, `dob`, `profile_picture`, `refferel_code`, `time`) VALUES
(4, 'shubham', 'shubham@gmail.com', '8602161019', 'Male', '$2b$10$0Cf3L/twg.YIa/BGO/ed3.l8PK25fuTumndqW64DjXlAITdvFLfSi', '$2b$10$v5NZ.fkuE/KSSZoV9w98tee6fjD44uTt9LobAUOYp1C8TIMj0AZdq', 'India', 'Madhya Pradesh', 'Jabalpur', 'Jabalpur', '1994-12-12', 'http://localhost:8080/profilePicture/undefined', '0', '2024-01-25 11:38:48.794134'),
(7, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$erHVbXpCtgQaMPoBFPETLuacgAjSt0OPZvHLbTvg3pZ82dSzAv3F6', '$2b$10$GS0QiWzfV4.KNXdC1tjlueM7XD1VObdOLD16eG2ia8rr5hV8x8qbu', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', '0', '2024-01-30 11:38:48.794134'),
(8, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$4imd9mV1WU5X/cYGju07vOMywtFmVwKJnASTjP5lQYv99UPQihp/q', '$2b$10$r7MhyLDFmEM/goNJ7US73eT.kMw82ofxkJQlAjcYpw2mDYiN6OiN.', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', '0', '2024-01-30 11:38:48.794134'),
(9, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$kz71WdUB/9G..ZPjeIw7C.xbwftiqI/dCrfQ7alwf/FSA9jpGYKbu', '$2b$10$uDboKqrzZsY..XvSIJdUFeWJLjhn2vD5oLxsib2ZVR6Wnujt8eqwu', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', '0', '2024-01-30 11:38:48.794134'),
(10, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$UAYl2XxvZnfV0nxl9XSSzeXecDB43crO6.anbi7vJ1RvdulVsgzoS', '$2b$10$9IiSygNx0uPu3j04b9CHvufU2neaLPxvxNz2ap61k/9bBhqfRAYGW', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', '0', '2024-01-30 11:38:48.794134'),
(11, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$trOca74WGELqJeVF7YmK.eDQxlsoCsvBcgx.Oxy8IrIeAxbdv5l42', '$2b$10$QXaDso3A7AIPz8TOBWGVeOL6ugnCt6FeeSgshkDDkCGU//8zP5Jzm', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', '0', '2024-01-30 11:38:48.794134'),
(12, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$q70tDZuiGtrliPrDAW/Ize4ij6eT2ArjFe12JrkFiJJFeshgj6IvC', '$2b$10$dpRb7Uo10VA0aCIQ5WOxiuE1yx0eG7M2mv8hXOKF8VRI6zjWQ3Osy', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', '0', '2024-01-30 11:38:48.794134'),
(13, 'ritin sharma', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$s/jzRB6Zd9l2h1NdWH6mNe7A75yXPgKVAASaJi.dtKqEb3UDZ8aC2', '$2b$10$LHbRIAsgBPrAFhujLSiYN.LTUUEaJx5a/w0dTJTgbqocy8ViiwGJm', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18-12-1994', 'headhome.png', '0', '2024-01-30 11:38:48.794134'),
(14, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$NTx1cPVxqQAzhA6UQT3rTub0ax3GBoOCY/3lwBkR27D5q1TZHfntG', '$2b$10$pkfPLgeqFC4wiPfiVml3WOU4k2zyHDs1SbO6x0zv/A1Z2hq3gN2lu', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', 'developer', '2024-01-30 11:38:48.794134'),
(15, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$SmWzZShhBlQ3N/9ppj.2LOm1BeiJsQ9UEU/lBWgo/HmcWPi3b/lba', '$2b$10$yAlGFKt9lTrh82OJW2NFxOUymVLxwMAO52MCZzWAkdRnKbyVhapiS', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', 'developer', '2024-01-30 11:38:48.794134'),
(16, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$YIeGwk3Ld0WlKKDHRziPpe.jvaMemFPoAz1trrU3zBYLotzJT2xBu', '$2b$10$ad8.VrTJxpOskPfhtiO9X.4t3Sbjg9S0uoidCnMLZJFBUt4jjd54e', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', 'developer', '2024-01-30 11:38:48.794134'),
(17, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$Gi0Ma0T6nPzE.QhCMxnMsOeWsPCjs1rktIzcDGzxhUQLyhIyKyAWS', '$2b$10$IZBzs6X8eHMd8P1ED40y4uc/smb1HReA2OhaZQK46PSIep8obwl9C', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', 'developer', '2024-01-30 11:38:48.794134'),
(18, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$ZYPmfa8Iv.0crnj6h6OTHe0ewYEakj.OwDQTd3cgL1teLuyKWixdq', '$2b$10$kfNkG4r8lzMqUX4CKMYG8.JfQdq19DOfoXfQ8Fto3sqeldZboCyha', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', 'developer', '2024-01-30 11:38:48.794134'),
(19, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$x1POJ2DZiwORfUu2NjPiTeCZ2ynVHXJjT/qB3FwzGWL1Ulsw57jvu', '$2b$10$Fr.HRHURI2UgEbiBJHccPeNB0ezvOKFLy9oVigGdZLhkaFiAsxqtW', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', 'developer', '2024-01-30 11:38:48.794134'),
(20, 'kuldeep', 'kuldeep@gmail.com', '8602161019', 'male', '$2b$10$xT/v.RGEmEsSy6ARlHDfW.FMR5TAYUiD1fVQRRItVdhg6BctY3xfK', '$2b$10$vEvodENg0xSJpISWB28XQuGkIRPPm16Mcdk23Ww4dcnfSdJzRYrqi', 'India', 'Madhya Pradesh', NULL, 'Jabalpur', '18/12/1994', 'http://localhost:8080/profilePicture/avatar.png', 'developer', '2024-01-30 11:38:48.794134'),
(26, 'dola singh', 'kuldeepdoauruinfosystems@gmail.com', '8602161019', 'male', '$2b$10$DrCEny9S3c/x1JUf80Y9eOYNMyJvq.Fq22A2Aevn5b0WJt4sQg3N6', '$2b$10$bAdniYP5kjMk3H25Khwmn.sXqkc6ITgnXth/tAZsHOZqxpRv9Igve', 'India', 'Madhya Pradesh', 'Jabalpur', 'Jabalpur', '18-12-1994', 'http://localhost:8080/profilePicture/profilePicture-1707125590459.png', 'wewon', '2024-01-30 11:38:48.794134');

-- --------------------------------------------------------

--
-- Table structure for table `user_bio`
--

CREATE TABLE `user_bio` (
  `bio_id` int(255) NOT NULL,
  `user_id` int(11) NOT NULL,
  `bio` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_bio`
--

INSERT INTO `user_bio` (`bio_id`, `user_id`, `bio`) VALUES
(1, 26, 'Kuldeep is a Full stack developer. It excels in handling real-time updates, dynamic content, and single-page applications (SPAs). Devansh is a Full stack developer. It excels in handling real-time updates, dynamic content, and single-page applications (SPAs). Devansh is a Full stack developer. It excels in handling real-time updates, dynamic content, and single-page applications (SPAs).');

-- --------------------------------------------------------

--
-- Table structure for table `wishlists`
--

CREATE TABLE `wishlists` (
  `wishlists_id` int(100) NOT NULL,
  `user_id` int(100) DEFAULT NULL,
  `item_id` int(100) DEFAULT NULL,
  `createdAt` timestamp(6) NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wishlists`
--

INSERT INTO `wishlists` (`wishlists_id`, `user_id`, `item_id`, `createdAt`) VALUES
(1, 6523, 65354, '2023-11-18 13:32:56.441876'),
(2, 13, 3, '2023-11-18 13:34:50.494568'),
(8, 25, 3, '2023-11-19 15:10:44.255593'),
(9, 26, 4, '2024-01-13 07:54:46.428149'),
(10, 5, 5, '2024-02-02 14:37:44.118917'),
(11, 5, 6, '2024-02-02 14:59:53.466960'),
(13, 5, 8, '2024-02-02 15:02:04.119906'),
(14, 5, 9, '2024-02-02 15:03:38.241304'),
(15, 5, 11, '2024-02-02 15:04:45.723172'),
(16, 5, 7, '2024-02-03 06:25:38.165268');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_delete_reason`
--
ALTER TABLE `account_delete_reason`
  ADD PRIMARY KEY (`del_id`);

--
-- Indexes for table `admin_register`
--
ALTER TABLE `admin_register`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `answer_table`
--
ALTER TABLE `answer_table`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bought_courses`
--
ALTER TABLE `bought_courses`
  ADD PRIMARY KEY (`buy_id`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `chapters`
--
ALTER TABLE `chapters`
  ADD PRIMARY KEY (`ch_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `course_videos`
--
ALTER TABLE `course_videos`
  ADD PRIMARY KEY (`coursevideo_id`);

--
-- Indexes for table `inquiry_mail`
--
ALTER TABLE `inquiry_mail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `otpcollections`
--
ALTER TABLE `otpcollections`
  ADD PRIMARY KEY (`otp_id`);

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`,`name`);

--
-- Indexes for table `user_bio`
--
ALTER TABLE `user_bio`
  ADD PRIMARY KEY (`bio_id`);

--
-- Indexes for table `wishlists`
--
ALTER TABLE `wishlists`
  ADD PRIMARY KEY (`wishlists_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_delete_reason`
--
ALTER TABLE `account_delete_reason`
  MODIFY `del_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `admin_register`
--
ALTER TABLE `admin_register`
  MODIFY `admin_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `answer_table`
--
ALTER TABLE `answer_table`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `chapters`
--
ALTER TABLE `chapters`
  MODIFY `ch_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `course_videos`
--
ALTER TABLE `course_videos`
  MODIFY `coursevideo_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `inquiry_mail`
--
ALTER TABLE `inquiry_mail`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `otpcollections`
--
ALTER TABLE `otpcollections`
  MODIFY `otp_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `user_bio`
--
ALTER TABLE `user_bio`
  MODIFY `bio_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `wishlists`
--
ALTER TABLE `wishlists`
  MODIFY `wishlists_id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
