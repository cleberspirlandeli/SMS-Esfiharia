    
CREATE OR REPLACE FUNCTION PUBLIC.LISTARUSUARIOSISTEMA(
        pUsuario    VARCHAR,
        pSenha      VARCHAR
)
  RETURNS TABLE(
    "usuario"    	            PUBLIC.USUARIOSISTEMA.usuario%TYPE,
    "tipoUsuario"  	            PUBLIC.USUARIOSISTEMA.tipoUsuario%TYPE
  ) AS $$

/*
Documentação
Arquivo Fonte.....: auth.sql
Objetivo..........: Listar usuário do sistema
Autor.............: Cleber Rezende Spirlandeli
Data..............: 03/12/2018
Ex................:
                    SELECT * FROM PUBLIC.LISTARUSUARIOSISTEMA('admin','12345');
                    SELECT * FROM PUBLIC.LISTARUSUARIOSISTEMA('admin','12345');
*/

BEGIN

  RETURN QUERY
  	SELECT 
        U.usuario 	                    AS usuario,
        U.tipoUsuario            		AS tipoUsuario
    FROM Public.UsuarioSistema U
	WHERE
        U.usuario   = pUsuario AND
        U.senha     = MD5(pSenha);
END;
$$
LANGUAGE plpgsql;