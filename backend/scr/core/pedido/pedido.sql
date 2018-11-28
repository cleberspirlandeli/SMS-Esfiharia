
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
CREATE OR REPLACE FUNCTION PUBLIC.LISTARPEDIDO(
    pIdCliente INTEGER,
    pIdPedido  INTEGER
)
  RETURNS TABLE(
    "idcliente"    	            PUBLIC.CLIENTE.idcliente%TYPE,
    "nome"  	                PUBLIC.CLIENTE.nome%TYPE,
    "cpf"   	                PUBLIC.CLIENTE.cpf%TYPE,
    "nomestatuspedido"  	    PUBLIC.TIPOSTATUSPEDIDO.nomestatuspedido%TYPE,
    "telefone"  	            PUBLIC.TELEFONE.telefone%TYPE,
    "tipotelefone"              PUBLIC.TIPOTELEFONE.nometipotelefone%TYPE
  ) AS $$

/*
Documentação
Arquivo Fonte.....: pedido.sql
Objetivo..........: Listar todos os pedidos ou um especifico
Autor.............: Cleber Rezende Spirlandeli
Data..............: 24/11/2018
Ex................:
                    SELECT * FROM PUBLIC.LISTARPEDIDO(null, null);
                    SELECT * FROM PUBLIC.LISTARPEDIDO(14, null);
                    SELECT * FROM PUBLIC.LISTARPEDIDO(null, 2);
*/
--DECLARE vIdCliente  INTEGER = public.descriptografar(pIdCliente);

BEGIN

  RETURN QUERY
    SELECT  CLI.idcliente           AS idcliente,
            CLI.nome                AS nome,
            CLI.cpf                 AS cpf,
            TSP.nomestatuspedido    AS nomestatuspedido,
            TEL.telefone            AS telefone,
            TTE.nometipotelefone    AS tipotelefone    
    FROM PUBLIC.CLIENTE CLI
    INNER JOIN PUBLIC.PEDIDO PED ON PED.idcliente = CLI.idcliente
    INNER JOIN PUBLIC.TIPOSTATUSPEDIDO TSP ON TSP.idstatuspedido = PED.idstatuspedido
    LEFT JOIN PUBLIC.TELEFONE TEL ON TEL.idcliente = CLI.idcliente
    LEFT JOIN PUBLIC.TIPOTELEFONE TTE ON TTE.idtipotelefone = TEL.idtipotelefone
    WHERE TSP.idstatuspedido <> 8 
        AND
        CASE 
            WHEN pIdCliente IS NOT NULL THEN
                CLI.idcliente = pIdCliente       
            ELSE
                TRUE
            END 
        AND 
        CASE 
            WHEN pIdPedido IS NOT NULL THEN
                PED.idpedido = pIdPedido       
            ELSE
                TRUE
            END ;
END;
$$
LANGUAGE plpgsql;





-- ----------------------------------------------------------
CREATE OR REPLACE FUNCTION PUBLIC.EXCLUIRCLIENTE(pIdCliente INTEGER)
RETURNS JSON AS $$

/*
Documentação
Arquivo Fonte.....: pedido.sql
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
CREATE OR REPLACE FUNCTION PUBLIC.ALTERARPEDIDO(
    -- CLIENTE
    pIdPedido           INTEGER,
    pIdStatusPedido     INTEGER
)
RETURNS JSON AS $$
/*
Documentação
Arquivo Fonte.....: pedido.sql
Objetivo..........: Alterar Status do pedido
Autor.............: Cleber Rezende Spirlandeli
Data..............: 27/11/2018
Ex................:
                    SELECT * FROM PUBLIC.ALTERARCLIENTE(15,3);
*/
DECLARE --vIdCliente  INTEGER = public.descriptografar(pIdCliente);
        vErrorProcedure             TEXT;
        vErrorMessage               TEXT;

BEGIN

    IF EXISTS (SELECT 1 FROM PUBLIC.PEDIDO WHERE IDPEDIDO = pIdPedido) THEN

        UPDATE  PUBLIC.PEDIDO
        SET     idstatuspedido = pIdStatusPedido
        WHERE   idpedido = pIdPedido;

        RETURN
        json_build_object(
            'success', true,
            'message', 'Pedido alterado com sucesso.',
            'idPedido', pIdPedido
        );
    ELSE
        RETURN
        json_build_object(
            'success', false,
            'message', 'Pedido não encontrado.',
            'idPedido', pIdPedido
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





/***********************************************************/

SELECT  CLI.idcliente,
            CLI.nome,
            CLI.cpf,
            TEL.telefone,
            TSP.nomestatuspedido,
            TEL.telefone,
            TTE.nometipotelefone
    FROM PUBLIC.CLIENTE CLI
    INNER JOIN PUBLIC.PEDIDO PED ON PED.idcliente = CLI.idcliente
    INNER JOIN PUBLIC.TIPOSTATUSPEDIDO TSP ON TSP.idstatuspedido = PED.idstatuspedido
    LEFT JOIN PUBLIC.TELEFONE TEL ON TEL.idcliente = CLI.idcliente
    LEFT JOIN PUBLIC.TIPOTELEFONE TTE ON TTE.idtipotelefone = TEL.idtipotelefone
    WHERE TSP.idstatuspedido <> 8 AND
        CASE 
            WHEN pIdCliente IS NOT NULL THEN
                CLI.idcliente = pIdCliente       
            ELSE
                TRUE
            END 
        AND 
        CASE 
            WHEN pIdPedido IS NOT NULL THEN
                PED.idpedido = pIdPedido       
            ELSE
                TRUE
            END ;