CREATE DATABASE task_management;
use task_management;

CREATE TABLE `task` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `judul` varchar(45),
  `description` varchar(250),
  `is_done` boolean default false,
  PRIMARY KEY (`id`)
);