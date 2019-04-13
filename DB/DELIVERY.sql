CREATE DATABASE DELIVERY
GO

USE DELIVERY

CREATE TABLE EMPRESA (IdEmpresa		INT PRIMARY KEY,
                      Nome_Fantasia VARCHAR(100),
					  Razao_Social  VARCHAR(100),
					  CNPJ			VARCHAR(18),
					  email			VARCHAR(50),
					  Telefone		VARCHAR(11),
					  CEP			VARCHAR(9),
					  Endereco		VARCHAR(255),
					  UF			VARCHAR(2),
					  Num_Endereco  INT,
					  Bairro		VARCHAR(50),
					  Cidade		VARCHAR(50),
					  Complemento	VARCHAR(255))

CREATE TABLE FUNCIONARIO (IdFuncionario	INT PRIMARY KEY,
                          CPF			VARCHAR(14),
						  RG			VARCHAR(12),
						  Bairro		VARCHAR(50),
						  Telefone		VARCHAR(11),
						  Data_Nasc		VARCHAR(8),
						  CEP		    VARCHAR(9),
						  Endereco	    VARCHAR(255),
						  Num_Endereco  INT,
						  Cidade		VARCHAR(50),
						  UF			VARCHAR(2),
						  Complemento	VARCHAR(255),
						  Nome			VARCHAR(50),
						  Email			VARCHAR(50),
						  Ativo			VARCHAR(1),
						  IdEmpresa     INT FOREIGN KEY REFERENCES EMPRESA(IdEmpresa) NOT NULL)

CREATE TABLE USUARIO (IdUsuario     INT PRIMARY KEY,
                      IdFuncionario INT FOREIGN KEY REFERENCES FUNCIONARIO(IdFuncionario),
					  Usuario       VARCHAR(16),
					  Senha         VARCHAR(16))

CREATE TABLE CLIENTE (IdCliente		INT PRIMARY KEY,
                      CPF			VARCHAR(14),
					  RG			VARCHAR(12),
					  Bairro		VARCHAR(50),
					  Telefone		VARCHAR(11),
					  Data_Nasc		VARCHAR(8),
					  CEP		    VARCHAR(9),
					  Endereco	    VARCHAR(255),
					  Num_Endereco  INT,
					  Cidade		VARCHAR(50),
					  UF			VARCHAR(2),
					  Complemento	VARCHAR(255),
					  Nome			VARCHAR(50),
					  Email			VARCHAR(50),
					  bloqueado		VARCHAR(1))


CREATE TABLE PEDIDO (IdPedido      INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
					 IdUsuario     INT FOREIGN KEY REFERENCES USUARIO(IdUsuario) NOT NULL,
					 Num_Pedido    INT,
					 IdCliente     INT FOREIGN KEY REFERENCES CLIENTE(IdCliente) NOT NULL)

CREATE TABLE STATUSPEDIDO (IdSatusPedido VARCHAR(10) PRIMARY KEY,
						   IdPedido      INT FOREIGN KEY REFERENCES PEDIDO(IdPedido) NOT NULL,
						   Status_Pedido INT,
						   Data_Pedido   INT,
						   Data_Entrega  DATETIME);

