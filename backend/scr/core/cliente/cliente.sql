-- select * FROM cliente

--  drop FUNCTION PUBLIC.INSERIRCLIENTE
CREATE OR REPLACE FUNCTION PUBLIC.INSERIRCLIENTE(
    pNOMECLIENTE          PUBLIC.cliente.nome%TYPE,  
    pCPFCLIENTE           BIGINT,
    pDATANASCIMENTO		  PUBLIC.cliente.datanascimento%TYPE,
    pSEXO                 PUBLIC.cliente.sexo%TYPE
)
  RETURNS JSON AS $$

/*
Documentação
Arquivo Fonte.....: cliente.sql
Objetivo..........: Inserir um novo cliente
Autor.............: Cleber Spirlandeli
Data..............: 22/11/2018
Ex................:
                    SELECT * FROM PUBLIC.INSERIRCLIENTE(
                                                'Nome Teste',
                                                37253702816,
                                                '18/12/1992',
                                                'M'
                                                );
*/

DECLARE vErrorProcedure             TEXT;
        vErrorMessage               TEXT;
        vReturningId                INTEGER;
        --vIdInsercao                 INTEGER = public.dekryptosgraphein(pIdInsercao);
        
BEGIN

    INSERT INTO Public.cliente (
        nome,
        cpf,
        datanascimento,
        sexo,
        datacadastro
    )
    VALUES (
        pNOMECLIENTE,
        pCPFCLIENTE,
        pDATANASCIMENTO,
        pSEXO,
        CURRENT_TIMESTAMP
    )
    RETURNING idcliente
    INTO vReturningId;

    RETURN
    json_build_object(
        'success', true,
        'message', 'Cliente cadastrado com sucesso.',
        'idCliente', public.criptografar(vReturningId)
    );

  EXCEPTION WHEN OTHERS
  THEN
    GET STACKED DIAGNOSTICS vErrorProcedure = MESSAGE_TEXT;
    GET STACKED DIAGNOSTICS vErrorMessage = PG_EXCEPTION_CONTEXT;
    RAISE EXCEPTION 'Internal Error: (%) %', vErrorProcedure, vErrorMessage;
    
    
END;
$$
LANGUAGE plpgsql;



-- ----------------------------------------------------------
CREATE OR REPLACE FUNCTION PUBLIC.LISTARCLIENTE(pIdCliente VARCHAR)
  RETURNS TABLE(
    "idcliente"    	            VARCHAR(200),
    "nome"  	                PUBLIC.CLIENTE.nome%TYPE,
    "cpf"   	                PUBLIC.CLIENTE.cpf%TYPE,
    "datanascimento"  	        PUBLIC.CLIENTE.datanascimento%TYPE,
    "sexo"  	                PUBLIC.CLIENTE.sexo%TYPE,
    "datacadastro"              PUBLIC.CLIENTE.datacadastro%TYPE
  ) AS $$

/*
Documentação
Arquivo Fonte.....: cliente.sql
Objetivo..........: Listar todos os clientes ou um especifico
Autor.............: Cleber Rezende Spirlandeli
Data..............: 24/11/2018
Ex................:
                    SELECT * FROM PUBLIC.LISTARCLIENTE(null);
                    SELECT * FROM PUBLIC.LISTARCLIENTE('MjAxNy0xMS0yNSAwMF4qXzRfJCU=');
*/
DECLARE vIdCliente  INTEGER = public.descriptografar(pIdCliente);

BEGIN

  RETURN QUERY
  	SELECT 
        public.criptografar(c.idCliente) 	AS idcliente,
        c.nome 					            AS nome,
        c.cpf            				    AS cpf,
        c.datanascimento                    AS datanascimento,
        (
            CASE 
                WHEN C.sexo = 'F' THEN
                    'Feminino' ::VARCHAR
                ELSE
                    'Masculino' ::VARCHAR
            END
        )                                   AS sexo,
        c.datacadastro                      AS datacadastro
    FROM Public.Cliente c
	WHERE
        CASE 
            WHEN pIdProduto IS NOT NULL THEN
                c.idcliente = vIdCliente
            ELSE
                TRUE
            END;
END;
$$
LANGUAGE plpgsql;




-- ----------------------------------------------------------

CREATE OR REPLACE FUNCTION PUBLIC.EXCLUIRCLIENTE(pIdCliente INTEGER)
RETURNS JSON AS $$

/*
Documentação
Arquivo Fonte.....: cliente.sql
Objetivo..........: Excluir cliente
Autor.............: Cleber Rezende Spirlandeli
Data..............: 24/11/2018
Ex................:
                    SELECT * FROM PUBLIC.EXCLUIRCLIENTE('MQ==');
*/
DECLARE --vIdCliente  INTEGER = public.descriptografar(pIdCliente);
        vErrorProcedure             TEXT;
        vErrorMessage               TEXT;
BEGIN

    IF EXISTS (SELECT 1 FROM PUBLIC.CLIENTE WHERE IDCLIENTE = pIdCliente) THEN
        DELETE FROM PUBLIC.CLIENTE 
         WHERE IDCLIENTE = pIdCliente;

        RETURN
        json_build_object(
            'success', true,
            'message', 'Cliente excluido com sucesso.',
            'idCliente', pIdCliente
        );
    ELSE
        RETURN
        json_build_object(
            'success', false,
            'message', 'Cliente não encontrado.',
            'idCliente', pIdCliente
        );
	END IF;

    EXCEPTION WHEN OTHERS
    THEN
        GET STACKED DIAGNOSTICS vErrorProcedure = MESSAGE_TEXT;
        GET STACKED DIAGNOSTICS vErrorMessage = PG_EXCEPTION_CONTEXT;
        RAISE EXCEPTION 'Internal Error: (%) %', vErrorProcedure, vErrorMessage;

END;
$$
LANGUAGE plpgsql;





-- ----------------------------------------------------------
CREATE OR REPLACE FUNCTION PUBLIC.EXCLUIRCLIENTE(pIdCliente INTEGER)
RETURNS JSON AS $$

/*
Documentação
Arquivo Fonte.....: cliente.sql
Objetivo..........: Excluir cliente
Autor.............: Cleber Rezende Spirlandeli
Data..............: 24/11/2018
Ex................:
                    SELECT * FROM PUBLIC.EXCLUIRCLIENTE('MQ==');
*/
DECLARE --vIdCliente  INTEGER = public.descriptografar(pIdCliente);
        vErrorProcedure             TEXT;
        vErrorMessage               TEXT;
BEGIN

    IF EXISTS (SELECT 1 FROM PUBLIC.CLIENTE WHERE IDCLIENTE = pIdCliente) THEN
        DELETE FROM PUBLIC.CLIENTE 
         WHERE IDCLIENTE = pIdCliente;

        RETURN
        json_build_object(
            'success', true,
            'message', 'Cliente excluido com sucesso.',
            'idCliente', pIdCliente
        );
    ELSE
        RETURN
        json_build_object(
            'success', false,
            'message', 'Cliente não encontrado.',
            'idCliente', pIdCliente
        );
	END IF;

    EXCEPTION WHEN OTHERS
    THEN
        GET STACKED DIAGNOSTICS vErrorProcedure = MESSAGE_TEXT;
        GET STACKED DIAGNOSTICS vErrorMessage = PG_EXCEPTION_CONTEXT;
        RAISE EXCEPTION 'Internal Error: (%) %', vErrorProcedure, vErrorMessage;

END;
$$
LANGUAGE plpgsql;