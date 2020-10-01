show databases;
create database memelation;
use memelation;

create table tb_memelation(
id_meme			int primary key auto_increment not null,
nm_autor 		varchar(100) not null,
ds_categoria 	varchar(255)not null,
ds_hashtags 	varchar(255) not null,
bt_maior 		bool not null,
ds_imagem 		varchar(255) not null default 'user.jpg',
qtd_curtidas	int not null,
dt_inclusao		datetime
);

create table tb_comentario(
id_comentario		int primary key auto_increment not null,
id_meme				int not null,
ds_comentario		varchar(255) not null,
FOREIGN KEY(id_meme) REFERENCES tb_memelation(id_meme) on delete cascade
);
