
CREATE OR REPLACE FUNCTION PUBLIC.INSERIRPEDIDO(
    pIdCliente      INTEGER,
    pIdStatusPedido INTEGER
)
  RETURNS JSON AS $$

/*
Documentação
Arquivo Fonte.....: pedido.sql
Objetivo..........: Inserir um novo pedido
Autor.............: Cleber Spirlandeli
Data..............: 25/11/2018
Ex................:
                    SELECT * FROM PUBLIC.INSERIRPEDIDO(
                                                1,
                                                1
                                                );
*/

DECLARE vErrorProcedure             TEXT;
        vErrorMessage               TEXT;
        vReturningIdPedido          INTEGER;
        --vIdInsercao                 INTEGER = public.dekryptosgraphein(pIdInsercao);
        
BEGIN

	IF EXISTS (SELECT 1 FROM PUBLIC.CLIENTE WHERE idcliente = pIdCliente) THEN
        
        INSERT INTO Public.Pedido (
           idCliente,
           idStatusPedido
        ) VALUES (
            pIdCliente,
            pIdStatusPedido
        )
        RETURNING idPedido
        INTO vReturningIdPedido;

        RETURN
        json_build_object(
            'success', true,
            'message', 'Pedido cadastrado com sucesso.',
            'idPedido', vReturningIdPedido
        );
	ELSE 
    	RETURN
        json_build_object(
            'success', false,
            'message', 'Erro ao cadastrar pedido.',
            'idPedido', 0
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
CREATE OR REPLACE FUNCTION PUBLIC.LISTARCLIENTE(pIdCliente INTEGER)
  RETURNS TABLE(
    "idcliente"    	            PUBLIC.CLIENTE.idcliente%TYPE,
    "nome"  	                PUBLIC.CLIENTE.nome%TYPE,
    "cpf"   	                PUBLIC.CLIENTE.cpf%TYPE,
    "datanascimento"  	        PUBLIC.CLIENTE.datanascimento%TYPE,
    "sexo"  	                VARCHAR,
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
                    SELECT * FROM PUBLIC.LISTARCLIENTE(14);
*/
--DECLARE vIdCliente  INTEGER = public.descriptografar(pIdCliente);

BEGIN

  RETURN QUERY
  	SELECT 
        c.idCliente 	                    AS idcliente,
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
            WHEN pIdCliente IS NOT NULL THEN
                c.idcliente = pIdCliente
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
CREATE OR REPLACE FUNCTION PUBLIC.ALTERARCLIENTE(
    -- CLIENTE
    pIdCliente          INTEGER,
    pNomeCliente        PUBLIC.CLIENTE.nome%TYPE,
    pCpfCliente         PUBLIC.CLIENTE.cpf%TYPE,
    pDataNascimento     PUBLIC.CLIENTE.datanascimento%TYPE,
    pSexo               VARCHAR,
    --ENDERECO
    pCep                PUBLIC.ENDERECO.cep%TYPE,
    pRua                PUBLIC.ENDERECO.rua%TYPE,
    pNumero             PUBLIC.ENDERECO.numero%TYPE, 
    pBairro             PUBLIC.ENDERECO.bairro%TYPE,
    pComplemento        PUBLIC.ENDERECO.complemento%TYPE,        
    pCidade             PUBLIC.ENDERECO.cidade%TYPE,
    --TELEFONE
    pIdTipoTelefone     INTEGER,
    pTelefone           PUBLIC.TELEFONE.telefone%TYPE   
)
RETURNS JSON AS $$
/*
Documentação
Arquivo Fonte.....: cliente.sql
Objetivo..........: Alterar dados do cliente
Autor.............: Cleber Rezende Spirlandeli
Data..............: 24/11/2018
Ex................:
                    SELECT * FROM PUBLIC.ALTERARCLIENTE();
*/
DECLARE --vIdCliente  INTEGER = public.descriptografar(pIdCliente);
        vErrorProcedure             TEXT;
        vErrorMessage               TEXT;

BEGIN

    IF EXISTS (SELECT 1 FROM PUBLIC.CLIENTE WHERE IDCLIENTE = pIdCliente) THEN
        IF pSexo = 'Feminino' AND pSexo IS NOT NULL THEN
            pSexo := 'F';
        ELSE
            pSexo := 'M';
        END IF;

        UPDATE PUBLIC.CLIENTE
        SET     nome = pNomeCliente,
                cpf  = pCpfCliente,
                dataNascimento = pDataNascimento,
                sexo = pSexo
        WHERE   idCliente = pIdCliente;

        UPDATE  PUBLIC.ENDERECO
        SET     cep = pCep,
                rua = pRua,
                numero = pNumero,
                bairro = pBairro,
                complemento = pComplemento,
                cidade = pCidade
        WHERE   idCliente = pIdCliente;

        UPDATE  PUBLIC.TELEFONE
        SET     idtipotelefone = pIdTipoTelefone :: BIGINT,
                telefone  = pTelefone    
        WHERE   idCliente = pIdCliente;

        RETURN
        json_build_object(
            'success', true,
            'message', 'Cliente alterado com sucesso.',
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