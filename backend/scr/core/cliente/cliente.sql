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
        'message', 'Produto cadastrado com sucesso.',
        'idProduto', public.criptografar(vReturningId)
    );

  EXCEPTION WHEN OTHERS
  THEN
    GET STACKED DIAGNOSTICS vErrorProcedure = MESSAGE_TEXT;
    GET STACKED DIAGNOSTICS vErrorMessage = PG_EXCEPTION_CONTEXT;
    RAISE EXCEPTION 'Internal Error: (%) %', vErrorProcedure, vErrorMessage;
    
    
END;
$$
LANGUAGE plpgsql;
