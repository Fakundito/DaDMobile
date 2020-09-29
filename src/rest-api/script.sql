create table UsersAdmin(
UserID int primary key,
LoginName varchar (100) unique not null,
Password varchar (100) not null,
FirstName varchar(100) not null,
LastName varchar(100) not null,
Position varchar (100) not null,
Email varchar(150)not null
) 
create table UsersClient(
UserID int primary key,
LoginName varchar (100) unique not null,
Password varchar (100) not null,
FirstName varchar(100) not null,
LastName varchar(100) not null,
Position varchar (100) not null,
Email varchar(150)not null
) 

create table registerUser (
    id serial,
    username varchar(100),
    email varchar(100),
    contraseña varchar(100)
)

insert into UsersAdmin values ('Pablo Mendez','Pmendez','Pablo','Mendez','Desarrollador Desktop','pablo.mendez@anima.edu.uy')
insert into UsersAdmin values ('Nadia Iraola','niraola','Nadia','Iraola','Desarrollador Desktop','nadia.iraola@anima.edu.uy')                                                         
insert into UsersAdmin values ('Facundo Centurion','fcenturion','Facundo','Centurion','Desarrollador Mobile', 'facundo.centurion@anima.edu.uy')
insert into UsersAdmin values ('Santiago Mundo','smundo','Santiago','Mundo','Desarrollador BBDD','santiago.mundo@anima.edu.uy')
insert into UsersAdmin values ('Santiago Urbina','surbina','Santiago','Urbina','Desarrollador BBD','santiago.urbina@anima.edu.uy')                                                         
insert into UsersAdmin values ('Mauricio Varela','mvarela','Mauricio','Varela','Desarrollador Mobile', 'mauricio.varela@anima.edu.uy')
insert into UsersClient values ('4','La Taberna del Diablo','Diablo123','Pedro','Collins','Cuenta Verificada','latabernadeldiablo@gmail.com')
insert into UsersClient values ('5','Ironman','yosoyironman','Robert','Dawney Jr.','Cuenta Normal','robrtdawneyjr@gmail.com')                                                         
insert into UsersClient values ('6','McDonalds','BurgerKingFeo','Gabriele','Smith','Cuenta Verificada','mcdonalds@gmail.com')
insert into UsersClient values ('7','Flako2001','buenardo','Martin','Cho','Cuenta Normal','martincho@gmail.com')
insert into UsersClient values ('8','Antel Arena','uruguay','Ricardo','Darin','Cuenta Verificada','antelarenauy@gmail.com')                                                         
insert into UsersClient values ('9','Presidente','presidente','Luis','Lacalle','Cuenta Verificada','luislacallepou@gmail.com')