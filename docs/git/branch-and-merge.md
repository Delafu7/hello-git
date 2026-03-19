---
sidebar_position: 6
---

# Ramas y fusión


Crear y cambiar de rama:

```bash
git branch <nombre-rama>
git switch <nombre-rama>  # o git checkout <nombre-rama>
```

Crear y cambiar en un solo paso:

```bash
git checkout -b <nombre-rama> # o git switch -c <nombre-rama>
```
Según la propia documentación de git es más recomendable usar el comando switch para cambiar entre ramas. Sin embargo, tanto checkout como switch son válidos.

Fusionar ramas:

```bash
git merge <nombre-rama>
```

Eliminar ramas:

```bash
git branch -d <nombre-rama>
```
---

## Resolución de conflictos durante un merge

Cuando se produce un conflicto al hacer git merge, Git te pedirá que lo resuelvas manualmente. Sin embargo, puedes usar opciones automáticas para quedarte con una versión específica:
- Quedarse con los cambios de la rama actual (descartar los de la rama fusionada):
```bash
git merge -X ours <nombre-rama>
```
-Quedarse con los cambios de la rama que estás fusionando (descartar los de la rama actual):
```bash
git merge -X theirs <nombre-rama>
```
**`⚠️ Estas opciones solo funcionan si hay un conflicto en el mismo archivo. Se deben usar con precaución, ya que descartan cambios de una de las ramas.`**

--- 
## Comando `git diff`

El comando `git diff` se utiliza para **ver las diferencias** entre:

- Archivos modificados y el último commit
- Dos commits específicos
- Dos ramas
- Staging area y el directorio de trabajo

### 🧪 **Usos comunes:**

| Comando | Qué muestra |
|--------|--------------|
| `git diff` | Cambios entre el **directorio de trabajo** y el **staging area** |
| `git diff --staged` o `git diff --cached` | Cambios entre el **staging area** y el último commit |
| `git diff rama1 rama2` | Diferencias entre dos ramas |
| `git diff commit1 commit2` | Diferencias entre dos commits específicos |
| `git diff archivo.txt` | Diferencias de un archivo concreto respecto al último commit |


### 💡 **Ejemplo práctico:**

```bash
git diff
```
Te mostrará qué líneas han cambiado, añadido o eliminado antes de hacer git add.
```bash
git diff --staged
```
Muestra los cambios que ya has añadido al área de staging, pero que aún no has commiteado.

```bash
git diff main feature-login
```
Muestra los cambios entre la rama main y feature-login.

> Por defecto, las diferencias están coloreadas para facilitar su lectura:
>   - 🔴 Rojo → líneas eliminadas
>   - 🟢 Verde → líneas añadidas

---
## Git Stash

El comando `git stash` te permite **guardar temporalmente cambios no confirmados** (modificados o no añadidos) y dejar tu directorio de trabajo limpio, sin perder esos cambios.

Es ideal cuando necesitas cambiar de rama rápidamente pero no quieres hacer commit aún.

### 📦 **Guardar cambios actuales:**

```bash
git stash
```
Esto guarda los cambios y revierte el directorio de trabajo al último commit.

> ✅ Incluye archivos modificados, pero no guarda archivos nuevos sin añadir (untracked) ni ignorados.
    
### 📌 **Opciones útiles:**

Guardar con mensaje:
```bash
git stash save "mensaje descriptivo"
```

Incluir archivos nuevos (`untracked`):
```bash
git stash -u
```

Ver todas las entradas guardadas:
```bash
git stash list
```

Ver detalles de un stash:
```bash
git stash show -p stash@{0}
```

### 🔄 **Recuperar cambios guardados**

Aplicar el stash más reciente:
```bash
git stash apply
```
  `Los cambios se aplican pero el stash no se elimina.`
 
Aplicar y eliminar el stash (recomendado si ya no lo necesitas):

```bash
git stash pop
```

Aplicar un stash específico:
```bash
git stash apply stash@{1}
```
### 🗑️ **Eliminar stashes**

Eliminar uno en específico:
```bash
git stash drop stash@{0}
```

Eliminar todos:
```bash
git stash clear
```
