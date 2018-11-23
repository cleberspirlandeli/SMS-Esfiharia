CREATE OR REPLACE FUNCTION public.criptografar(texto INTEGER)
  RETURNS VARCHAR AS $$

/*
Documentação
Arquivo Fonte.....: criptografia.sql
Objetivo..........: Criptografar um número em um texto
Autor.............: Cleber Spirlandeli
Data..............: 22/11/2018
Ex................:
  SELECT * FROM Public.criptografar(5); -- MTA=
*/

DECLARE
        criptografado        VARCHAR;

BEGIN



  --RAISE NOTICE 'var %', concatenar;

  -- Criptografando
  criptografado = encode((texto :: VARCHAR) :: BYTEA, 'base64') :: VARCHAR;

  RETURN criptografado :: VARCHAR;
END;
$$ LANGUAGE plpgsql;






CREATE OR REPLACE FUNCTION public.descriptografar(texto VARCHAR)
  RETURNS INTEGER AS $$

/*
Documentação
Arquivo Fonte.....: criptografia.sql
Objetivo..........: Descriptografar um texto em número
Autor.............: Cleber Spirlandeli
Data..............: 22/11/2018
Ex................:
    SELECT * FROM Public.descriptografar('NQ=='); -- 10
*/

DECLARE 
        descriptografar   TEXT;

BEGIN
  
  descriptografar = DECODE(texto, 'base64');
    
  --RAISE NOTICE 'var %', descriptografar;

    RETURN descriptografar :: INTEGER;


   EXCEPTION WHEN OTHERS
   THEN
     RETURN 0 :: INTEGER;

END;
$$ LANGUAGE plpgsql;