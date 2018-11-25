CREATE OR REPLACE FUNCTION PUBLIC.INSERIRCLIENTE(
    -- TABELA CLIENTE
    pNomeCliente        PUBLIC.cliente.nome%TYPE,  
    pCpfCliente         BIGINT,
    pDataNascimento		PUBLIC.cliente.datanascimento%TYPE,
    pSexo               PUBLIC.cliente.sexo%TYPE,
    -- TABELA ENDEREÇO
    pCep                PUBLIC.endereco.cep%TYPE,         
    pRua                PUBLIC.endereco.rua%TYPE,
    pNumero             PUBLIC.endereco.numero%TYPE,
    pBairro             PUBLIC.endereco.bairro%TYPE,
    pCidade             PUBLIC.endereco.cidade%TYPE,
    pComplemento        PUBLIC.endereco.complemento%TYPE,
    -- TABELA TELEFONE
    pIdTipoTelefone     PUBLIC.telefone.idtipotelefone%TYPE,
    pTelefone           PUBLIC.telefone.telefone%TYPE
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
                                                'Cleber Rezende',
                                                37253702816,
                                                '18/12/1992',
                                                'M',
                                                14406012,
                                                'Rio Solimoes',
                                                1500,
                                                'Res. Amazonas',
                                                'Franca',
                                                NULL,
                                                1,
                                                16991082771
                                                );
*/

DECLARE vErrorProcedure             TEXT;
        vErrorMessage               TEXT;
        vReturningIdCliente         INTEGER;
        vReturningIdEndereco        INTEGER;
        --vIdInsercao                 INTEGER = public.dekryptosgraphein(pIdInsercao);
        
BEGIN

	IF NOT EXISTS (SELECT 1 FROM PUBLIC.TELEFONE WHERE telefone = pTelefone) THEN
        INSERT INTO Public.cliente (
            nome,
            cpf,
            datanascimento,
            sexo,
            datacadastro
        ) VALUES (
            pNOmeCliente,
            pCpfCliente,
            pDataNascimento,
            pSexo,
            CURRENT_TIMESTAMP
        )
        RETURNING idcliente
        INTO vReturningIdCliente;

        INSERT INTO PUBLIC.ENDERECO (
            idcliente,
            cep,
            rua,
            numero,
            bairro,
            cidade,
            complemento
        ) VALUES (
            vReturningIdCliente,
            pCep,
            pRua,
            pNumero,
            pBairro,
            pCidade,
            pComplemento
        );

        INSERT INTO PUBLIC.TELEFONE (
            idcliente,
            idtipotelefone,
            telefone
        ) VALUES (
            vReturningIdCliente,
            pIdTipoTelefone,
            pTelefone
        );

        RETURN
        json_build_object(
            'success', true,
            'message', 'Cliente cadastrado com sucesso.',
            'idCliente', vReturningIdCliente
        );
	ELSE 
    	RETURN
        json_build_object(
            'success', false,
            'message', 'Telefone do Cliente já esta cadastrado no sistema.',
            'idCliente', 0
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