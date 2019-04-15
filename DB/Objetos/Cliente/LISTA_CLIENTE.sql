CREATE VIEW dbo.LISTA_CLIENTE
AS  
SELECT Id = IdCliente,
       Nome,
	   CPF,
	   RG,
	   Data_Nasc,
	   Telefone,
	   Email
	   Endereco,
	   Num_Endereco,
	   Bairro,
	   Cidade,
	   UF,
	   CEP,
	   Complemento
FROM   dbo.CLIENTE
WHERE  bloqueado = 'N'  
GO 