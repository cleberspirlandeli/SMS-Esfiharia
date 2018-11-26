CREATE OR REPLACE FUNCTION PUBLIC.LISTARCOLABORADOR(
    pIdColaborador 	VARCHAR,
	pPesquisar		VARCHAR
)
  RETURNS TABLE(
    "id"    	VARCHAR(200),
    "nome"  	PUBLIC.COLABORADOR.NOME%TYPE,
    "tipo"   	PUBLIC.COLABORADOR.TIPO%TYPE,
    "ativo"  	PUBLIC.COLABORADOR.ATIVO%TYPE,
    "senha"  	PUBLIC.COLABORADOR.SENHA%TYPE
  ) AS $$

/*
Documentação
Arquivo Fonte.....: laboratorio.sql
Objetivo..........: Listar todos os colaboradores ou um especifico
Autor.............: Cleber Spirlandeli
Data..............: 22/11/2017
Ex................:
                    SELECT * FROM PUBLIC.LISTARCOLABORADOR(null, null);
                    SELECT * FROM PUBLIC.LISTARCOLABORADOR('MjAxNy0xMS0yOCAxN14qXzE1Ml8kJQ==', null);
                    SELECT * FROM PUBLIC.LISTARCOLABORADOR(null, 'TeSt');
*/

DECLARE     vIdColaborador                 INTEGER = public.dekryptosgraphein(pIdColaborador);

BEGIN

  RETURN QUERY
  	SELECT 
        public.kryptosgraphein(c.id) 	AS id,
        c.nome 							AS nome,
        c.tipo 							AS tipo,
        c.ativo 						AS ativo,
        c.senha                         AS senha
    FROM Colaborador c
	WHERE
    	c.ativo = 'S'
    AND
        CASE 
            WHEN pIdColaborador IS NOT NULL THEN
                c.id = vIdColaborador
            ELSE
                TRUE
            END
    AND
        CASE 
            WHEN pPesquisar IS NOT NULL THEN
                UPPER(c.nome) LIKE UPPER('%' || pPesquisar || '%')
                OR
                UPPER(c.tipo) LIKE UPPER('%' || pPesquisar || '%')
            ELSE
                TRUE
            END;
END;
$$
LANGUAGE plpgsql;
