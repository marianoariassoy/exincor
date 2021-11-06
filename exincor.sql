-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 06, 2021 at 03:08 PM
-- Server version: 8.0.17
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `exincor`
--

-- --------------------------------------------------------

--
-- Table structure for table `servicios`
--

CREATE TABLE `servicios` (
  `id` int(10) NOT NULL,
  `nombre` varchar(120) NOT NULL,
  `texto` text NOT NULL,
  `imagen` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `servicios`
--

INSERT INTO `servicios` (`id`, `nombre`, `texto`, `imagen`) VALUES
(1, 'Diseño e Impresión', 'Somos una empresa con experiencia y compromiso que promueve el progreso integral de la región y del país, convencidos de que trabajando y originando trabajo lograremos nuestros objetivos.', 'icono1.svg'),
(2, 'Desarrollo de Producto', 'Somos una empresa con experiencia y compromiso que promueve el progreso integral de la región y del país, convencidos de que trabajando y originando trabajo lograremos nuestros objetivos.', 'icono2.svg'),
(3, 'Transporte', 'Somos una empresa con experiencia y compromiso que promueve el progreso integral de la región y del país, convencidos de que trabajando y originando trabajo lograremos nuestros objetivos.', 'icono3.svg'),
(4, 'Asistencia Técnica', 'Somos una empresa con experiencia y compromiso que promueve el progreso integral de la región y del país, convencidos de que trabajando y originando trabajo lograremos nuestros objetivos.', 'icono4.svg'),
(5, 'Laboratorio', 'Somos una empresa con experiencia y compromiso que promueve el progreso integral de la región y del país, convencidos de que trabajando y originando trabajo lograremos nuestros objetivos.', 'icono5.svg');

-- --------------------------------------------------------

--
-- Table structure for table `textos`
--

CREATE TABLE `textos` (
  `id` int(10) NOT NULL,
  `texto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `textos`
--

INSERT INTO `textos` (`id`, `texto`) VALUES
(1, 'Somos una empresa con experiencia y compromiso que promueve el progreso integral de la región y del país, convencidos de que trabajando y originando trabajo lograremos nuestros objetivos. \r\nUbicada en la localidad de Rio Blanco en la provincia de Jujuy, nuestra empresa se vuelve estratégicamente una importante competencia en materia de provisión de soluciones de embalajes para toda la región sudamericana.\r\nCreemos y confiamos en la calidad, diseño y tecnología que ofrecemos en cada uno los servicios que brindamos, como así también en el equipo de profesionales que conseguimos vincular.'),
(2, 'Somos una industria limpia que recicla el 95% de los residuos que genera y estamos conformando redes para gestionar la disposición final de los residuos restantes. \r\n\r\nYa estamos trabajando para hacer un uso eficiente de la energía. \r\n\r\nTrabajamos en forma permanente en la conformación de redes de interacción tendientes a desarrollar el potencial de la comunidad en la que nos desenvolvemos.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `textos`
--
ALTER TABLE `textos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `textos`
--
ALTER TABLE `textos`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
