---
sidebar_position: 8
---

# Comandos avanzados
Estos comandos te permiten manipular el historial, depurar errores y mejorar el flujo de trabajo en equipos grandes o proyectos complejos.

## `git cherry-pick`

Aplica un commit específico de otra rama en tu rama actual.

```bash
git cherry-pick <hash-del-commit>
```
> 💡 Ideal para aplicar correcciones sin fusionar ramas completas.


## `git bisect`

Permite encontrar qué commit introdujo un bug usando búsqueda binaria. Es ideal cuando:

  - Un bug aparece pero no sabes cuándo surgió.

  - Tienes muchos commits entre el estado bueno y el defectuoso.

  - Quieres evitar revisar el historial manualmente.
```bash
git bisect start
git bisect bad              # el commit actual tiene el bug
git bisect good <hash>      # este commit funciona correctamente
```
Git irá saltando entre versiones hasta hallar el commit exacto que rompió el código.

## `git rebase`

Sirve para reescribir el historial y aplicar commits como si vinieran de otra rama, manteniendo un historial limpio y lineal. En lugar de crear un `commit` de fusión (como `git merge`), rebase "reaplica" tus commits sobre otra rama, como si los hubieras creado después de ella.
```bash
git rebase <rama-base>
```
Ejemplo:
```bash
git rebase main
```
También puedes usar:
```bash
git rebase -i HEAD~3
```
Para editar o combinar los últimos 3 commits interactivamente.
> ⚠️ Evita rebase en ramas compartidas públicamente.

\
## `git commit --amend`

Corrige el último commit, ya sea para cambiar el mensaje o añadir archivos olvidados.
```bash
git add archivo-olvidado
git commit --amend
```
\

## `git clean`

`git clean` es un comando que se usa para eliminar archivos que no están siendo rastreados por Git, es decir, archivos que no han sido añadidos con git add.

Esto incluye:

  - Archivos nuevos que nunca se han añadido al repositorio.

  - Archivos generados automáticamente (por ejemplo, binarios, logs, temporales).

  - También puede eliminar directorios y archivos ignorados, si se especifica.

**`⚠️ Advertencia importante: git clean elimina archivos físicamente del disco. No se pueden recuperar a menos que tengas una copia. ¡Usa -n primero para ver qué se va a borrar!`**
```bash
git clean -n    # Muestra qué se eliminaría
git clean -f    # Elimina archivos no rastreados
git clean -fd   # Elimina archivos y carpetas
```
