---
sidebar_position: 3
---

# Archivo `.gitignore`

El archivo `.gitignore` sirve para indicarle a Git qué archivos o carpetas **no deben incluirse** en el control de versiones. Esto es especialmente útil para ignorar archivos temporales, configuraciones locales o compilaciones automáticas.

 
## 📁 **¿Qué se puede ignorar?**

Puedes usar diferentes mecanismos para especificar qué ignorar:

- **Archivos por nombre exacto**
  ```plaintext
  archivo.txt

- **Carpetas completas**
  ```plaintext
  carpeta/

- **Patrones habituales**
    - *.log: Ignora todos los archivos que terminen en .log.
    - **/temp/: Ignora cualquier carpeta temp en cualquier subdirectorio.

## **Caracteres especiales que puedes usar**
| Patrón | Significado                   | Ejemplo                                                              |
|--------|-------------------------------|----------------------------------------------------------------------|
| `*`    | Cero o más caracteres         | `*.tmp` ignora todos los archivos que terminan en `.tmp`            |
| `?`    | Un solo carácter              | `config?.json` ignora `config1.json`, `configA.json`, etc.          |
| `!`    | Negación, para no ignorar     | `!important.log` mantiene este archivo aunque `*.log` esté ignorado |
| `[]`   | Lista de caracteres permitidos| `file[1-3].txt` ignora `file1.txt`, `file2.txt`, `file3.txt`         |

> 💡 Puedes combinar reglas en el archivo `.gitignore`, separándolas por líneas.  
> Las líneas en blanco se ignoran y las que comienzan con `#` son comentarios.