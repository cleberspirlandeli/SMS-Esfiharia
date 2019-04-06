--CREATE DATABASE RZN
--GO
USE RZN
GO
CREATE TABLE EMPRESA(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	nomefantasia		VARCHAR(50)  NOT NULL,
	razaosocial			VARCHAR(100) NOT NULL,
	cnpj				VARCHAR(20)  NOT NULL,
	iscricaoestadual	VARCHAR(20)  NULL,
	ativo				VARCHAR(1)   NOT NULL, -- CHECK
	bloqueado			VARCHAR(1)	 NOT NULL  -- CHECK
)
GO
CREATE TABLE CLIENTE(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idempresa			INT FOREIGN KEY REFERENCES EMPRESA(id) NOT NULL,
	nomecliente			VARCHAR(50)  NOT NULL,
	sexo				VARCHAR(1)   NOT NULL,
	datanascimento		DATETIME	 NULL,
	cpf					VARCHAR(20)  NULL,
	bloqueado			VARCHAR(1)	 NOT NULL  -- CHECK
)
GO
CREATE TABLE TELEFONE(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idcliente			INT FOREIGN KEY REFERENCES CLIENTE(id) NOT NULL,
	telefone			VARCHAR(20)  NOT NULL,
	ddd					INT NULL,
	whatsapp			VARCHAR(1)	 NOT NULL  -- CHECK
)
GO
CREATE TABLE ENDERECO(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idcliente			INT FOREIGN KEY REFERENCES CLIENTE(id) NOT NULL,
	cep					VARCHAR(10)  NOT NULL,
	logradouro			VARCHAR(50)  NOT NULL,
	numero				VARCHAR(20)  NOT NULL,
	bairro				VARCHAR(40)  NOT NULL,
	complemento			VARCHAR(100) NULL,
)
GO
CREATE TABLE STATUSPEDIDO(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idempresa			INT FOREIGN KEY REFERENCES EMPRESA(id) NOT NULL,
	nomestatuspedido	VARCHAR(30) NOT NULL
)
GO
CREATE TABLE PEDIDO(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idempresa			INT FOREIGN KEY REFERENCES EMPRESA(id) NOT NULL,
	idcliente			INT FOREIGN KEY REFERENCES CLIENTE(id) NOT NULL,
	idstatuspedido		INT FOREIGN KEY REFERENCES STATUSPEDIDO(id) NOT NULL,
	datapedido			DATETIME NOT NULL,
	codigopedidoempr	INT NULL,
	valortotal			DECIMAL(9,2) NOT NULL
)
GO
CREATE TABLE PRODUTO(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idempresa			INT FOREIGN KEY REFERENCES EMPRESA(id) NOT NULL,
	nomeproduto			VARCHAR(50)  NOT NULL,
	descricao			VARCHAR(200) NOT NULL,
		
)
GO
CREATE TABLE PRODUTOITEM(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idempresa			INT FOREIGN KEY REFERENCES EMPRESA(id) NOT NULL,

)
GO
CREATE TABLE PEDIDOITEM(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idcliente			INT FOREIGN KEY REFERENCES CLIENTE(id) NOT NULL,
	idproduto			INT FOREIGN KEY REFERENCES PRODUTO(id) NOT NULL,
	valorunitario		DECIMAL(9,2) NOT NULL,
	quantidade			INT NOT NULL,
	observacao			VARCHAR(50) NULL
)
GO
CREATE TABLE TIPOPAGAMENTO(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idempresa			INT FOREIGN KEY REFERENCES EMPRESA(id) NOT NULL,
	nometipopagamento	VARCHAR(30)  NOT NULL
)
GO
CREATE TABLE PAGAMENTO(
	id					INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
	idempresa			INT FOREIGN KEY REFERENCES EMPRESA(id) NOT NULL,
	idcliente			INT FOREIGN KEY REFERENCES CLIENTE(id) NOT NULL,
	idtipopagamento		INT FOREIGN KEY REFERENCES TIPOPAGAMENTO(id) NOT NULL,
	valortotal			DECIMAL(9,2) NOT NULL,
	troco				VARCHAR(50)  NULL,
	observacao			VARCHAR(50)  NULL
)
GO









