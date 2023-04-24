-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 23-04-2023 a las 23:30:36
-- Versión del servidor: 5.7.41-log-cll-lve
-- Versión de PHP: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `abigail2_geniat_node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Publicaciones`
--

CREATE TABLE `Publicaciones` (
  `id` int(11) NOT NULL COMMENT 'Identificador de la publicación',
  `titulo` varchar(255) NOT NULL COMMENT 'Titulo de la publicación',
  `descripcion` varchar(255) NOT NULL,
  `estado` int(11) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id_usuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Publicaciones`
--

INSERT INTO `Publicaciones` (`id`, `titulo`, `descripcion`, `estado`, `createdAt`, `updatedAt`, `id_usuario`) VALUES
(1, 'publicacción 1 actualizada', 'Descripción de publicación 1 actualizada', 1, '2023-04-24 05:21:37', '2023-04-24 05:22:35', 3),
(2, 'publicacción 2', 'Descripción de publicación 2', 0, '2023-04-24 05:23:08', '2023-04-24 05:23:34', 3),
(3, 'publicacción 3', 'Descripción de publicación 3', 1, '2023-04-24 05:23:12', '2023-04-24 05:23:12', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Roles`
--

CREATE TABLE `Roles` (
  `id` int(11) NOT NULL COMMENT 'Identificador del rol',
  `rol` varchar(50) NOT NULL COMMENT 'Nombre del rol',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Roles`
--

INSERT INTO `Roles` (`id`, `rol`, `createdAt`, `updatedAt`) VALUES
(1, 'basico', '2023-04-23 22:58:45', '2023-04-24 22:53:06'),
(2, 'medio', '2023-04-23 22:58:20', '2023-04-23 22:53:16'),
(3, 'medio-alto', '2023-04-23 22:57:56', '2023-04-24 22:53:23'),
(4, 'alto-medio', '2023-04-23 23:45:43', '2023-04-23 22:53:30'),
(5, 'alto', '2023-04-23 22:56:59', '2023-04-24 22:53:36');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Usuarios`
--

CREATE TABLE `Usuarios` (
  `id` int(11) NOT NULL COMMENT 'Identificador del usuario',
  `nombre` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_rol` int(11) NOT NULL COMMENT 'Identificador del rol asignado',
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT NULL,
  `estado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `Usuarios`
--

INSERT INTO `Usuarios` (`id`, `nombre`, `apellidos`, `correo`, `password`, `id_rol`, `createdAt`, `updatedAt`, `estado`) VALUES
(3, 'abigail', 'salazar', 'abigail.slzv@gmail.com', '$2a$10$VN7US1jEGNigfbvM/5hYfurlebPjaM7yIWSkYIsPoTrcSKVNqrY8.', 5, '2023-04-24 05:17:56', '2023-04-23 22:16:29', 1),
(4, 'prueba', 'rol', 'prueba@gmail.com', '$2a$10$VN7US1jEGNigfbvM/5hYfurlebPjaM7yIWSkYIsPoTrcSKVNqrY8.', 1, '2023-04-24 05:18:02', '2023-04-24 01:34:29', 1),
(5, 'prueba', 'rol', 'pruebas@gmail.com', '$2a$10$ufEY0KadiosgRcDMZvAM3.N.QcArdwvbL.NP.zXTGHuZ8jnMp81uy', 5, '2023-04-24 05:19:58', '2023-04-24 05:19:58', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Publicaciones`
--
ALTER TABLE `Publicaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Publicaciones`
--
ALTER TABLE `Publicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador de la publicación', AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `Roles`
--
ALTER TABLE `Roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del rol', AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `Usuarios`
--
ALTER TABLE `Usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Identificador del usuario', AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
