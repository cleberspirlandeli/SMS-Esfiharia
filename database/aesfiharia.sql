-- Database: esfiharia-desenv

-- DROP DATABASE "esfiharia-desenv";
-- postgresql
-- 12345678

CREATE DATABASE "esfiharia-desenv"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE "esfiharia-desenv"
    IS 'Base de dados para desenvolvimento e testes para empresa A Esfiharia. Projeto SMS Esfiharia.';
	

CREATE TABLE USUARIOSISTEMA (
	idUsuarioSistema    BIGSERIAL PRIMARY KEY,
	usuario			    VARCHAR(100) NOT NULL UNIQUE,
	senha				VARCHAR(100) NOT NULL,
	tipoUsuario 	    VARCHAR(30)  NOT NULL
)



CREATE TABLE CLIENTE (
	idCliente 		BIGSERIAL PRIMARY KEY,
	nome 			VARCHAR(150) NOT NULL,
	cpf				INT NOT NULL,
	dataNascimento	TIMESTAMP,
	sexo			CHAR(1),
	datacadastro	TIMESTAMP
)

CREATE TABLE ENDERECO (
	idEndereco 		BIGSERIAL PRIMARY KEY,
	idCliente       BIGINT REFERENCES CLIENTE(idcliente) NOT NULL,
    cep			    INT,
	rua				VARCHAR(150),
    numero          INT,
    bairro          VARCHAR(100),
    complemento     VARCHAR(100)
)

CREATE TABLE TIPOTELEFONE (
    idTipoTelefone      BIGSERIAL PRIMARY KEY,
    nomeTipoTelefone    VARCHAR(50) NOT NULL
)

CREATE TABLE TELEFONE (
    idTelefone      BIGSERIAL PRIMARY KEY,
    idCliente       BIGINT REFERENCES CLIENTE(idcliente) NOT NULL,
    idTipoTelefone  BIGINT REFERENCES TIPOTELEFONE(idtipotelefone) NOT NULL,
    telefone        BIGINT NOT NULL UNIQUE
)

CREATE TABLE TIPOSTATUSPEDIDO (
    idStatusPedido      BIGSERIAL PRIMARY KEY,
    nomeStatusPedido    VARCHAR(50) NOT NULL
)

CREATE TABLE PEDIDO (
    idPedido        BIGSERIAL PRIMARY KEY,
    idCliente       BIGINT REFERENCES CLIENTE(idcliente) NOT NULL,    
    idStatusPedido  BIGINT REFERENCES TIPOSTATUSPEDIDO(idStatusPedido) NOT NULL   
)


INSERT INTO TIPOSTATUSPEDIDO (nomeStatusPedido)
VALUES 
('PEDIDO RECEBIDO'), 
('PEDIDO EM PREPARAÇÃO'), 
('PEDIDO ESTA NO FORNO'), 
('PEDIDO SAIU PARA ENTREGA')


INSERT INTO TIPOTELEFONE (nomeTipoTelefone)
VALUES 
('FIXO'), 
('CELULAR WHATSAPP'),
('RECADO'), 
('VIZINHO')

ALTER TABLE PUBLIC.ENDERECO
ADD COLUMN CIDADE VARCHAR(100);

INSERT INTO USUARIOSISTEMA (usuario, senha, tipoUsuario)
VALUES ('admin', MD5('12345'), 'ADMIN')