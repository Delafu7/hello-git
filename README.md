# Comandos y consejos para conocer Git y GitHub

## Índice
- [Git](#git)
  - [Instalación](#instalación)
  - [Conceptos importantes](#conceptos-importantes)
  - [Archivo .gitignore](#archivo-gitignore)
  - [Comandos de ayuda](#comandos-de-ayuda)
  - [Comandos para configuración](#comandos-para-configuración)
  - [Comandos imprescindibles](#comandos-imprescindibles)
  - [Alias útiles](#alias-útiles)
  - [Git Tag](#git-tag)
  - [Ramas y fusión](#ramas-y-fusión)
  - [Resolución de conflictos](#resolucion-de-conflictos-durante-un-merge)
  - [Comando git diff](#comando-git-diff)
  - [Git Stash](#git-stash)
  - [Trabajo con repositorios remotos](#trabajo-con-repositorios-remotos)
  - [Comandos avanzados](#comandos-avanzados)
- [GitHub](#git-hub)
  - [¿Qué es GitHub?](#qué-es-github)
  - [Documentación](#documentación)
  - [Consejos de uso](#consejos-de-uso)

---

## Git

![imagen git](imagenes/git.png)

👉 [Sitio oficial de Git](https://git-scm.com/) 

### Instalación

**Windows**  
Descargar desde el siguiente enlace:  
🔗 [Descargar Git para Windows](https://git-scm.com/download/win)

**macOS** (requiere Homebrew)

```bash
brew install git
```

**Linux/Ubuntu**

```bash
sudo apt-get install git
```

---

### Conceptos importantes

- **Repositorio (Repository)**: Carpeta que contiene todos los archivos del proyecto y el historial de versiones.
- **Commit**: Un "snapshot" o imagen del proyecto en un momento dado.
- **Branch (rama)**: Línea de desarrollo paralela a la principal.
- **Merge (fusión)**: Combinar cambios de diferentes ramas.
- **.gitignore**: Archivo donde se especifican los archivos o carpetas que no deben rastrearse (ej. `node_modules`, `.env`).

---
### Archivo `.gitignore`

El archivo `.gitignore` sirve para indicarle a Git qué archivos o carpetas **no deben incluirse** en el control de versiones. Esto es especialmente útil para ignorar archivos temporales, configuraciones locales o compilaciones automáticas.

---

#### 📁 ¿Qué se puede ignorar?

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

---
#### Caracteres especiales que puedes usar
| Patrón | Significado                   | Ejemplo                                                              |
|--------|-------------------------------|----------------------------------------------------------------------|
| `*`    | Cero o más caracteres         | `*.tmp` ignora todos los archivos que terminan en `.tmp`            |
| `?`    | Un solo carácter              | `config?.json` ignora `config1.json`, `configA.json`, etc.          |
| `!`    | Negación, para no ignorar     | `!important.log` mantiene este archivo aunque `*.log` esté ignorado |
| `[]`   | Lista de caracteres permitidos| `file[1-3].txt` ignora `file1.txt`, `file2.txt`, `file3.txt`         |

> 💡 Puedes combinar reglas en el archivo `.gitignore`, separándolas por líneas.  
> Las líneas en blanco se ignoran y las que comienzan con `#` son comentarios.
---

### Comandos de ayuda

| Comando     | Descripción                                                               |
|-------------|---------------------------------------------------------------------------|
| `git -v`    | Muestra la versión actual instalada de Git.                              |
| `git help`  | Muestra ayuda general.                                                   |
| `git help <comando>` | Muestra ayuda detallada de un comando específico.             |

---

### Comandos para configuración

#### Configuración básica:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

#### Configuración avanzada:

```bash
git config --global core.editor "code --wait"
```

Ver configuración actual:

```bash
git config --list
```

🔗 [Más sobre configuración en Git](https://git-scm.com/docs/git-config)

---
### Comandos imprescindibles


Inicializar un repositorio:

```bash
git init
```

Ver el estado del repositorio:

```bash
git status
```

Añadir cambios al área de staging:

```bash
git add <archivo>     # Archivo específico
git add .             # Todos los cambios
```

Crear un commit:

```bash
git commit -m "Mensaje descriptivo del cambio"
```

✅ **Consejo**: Los mensajes de commit deben ser claros, concisos y en infinitivo (ej. `Añadir función de login`).

Ver historial de commits:

```bash
git log
```

Versión resumida:

```bash
git log --oneline --graph --all
```

🔗 [Guía visual de `git log`](https://www.atlassian.com/git/tutorials/git-log)

Deshacer cambios:

```bash
git checkout <archivo>      # Restaurar archivo modificado
git reset                   # Volver al último commit
git reset --hard            # Borra cambios no confirmados
```

⚠️ ¡Cuidado con `--hard`!

---
#### 🔁 Recuperar cambios perdidos: `git reflog`

Si cometes un error con `reset`, `checkout` o `rebase`, puedes recuperar tu trabajo con:



```bash
git reflog
``` 
Este comando muestra un historial interno de Git con todos los movimientos del repositorio (commits, cambios de rama, etc.), incluso si no aparecen en `git log`.

Ejemplo para restaurar un estado anterior:

```bash
git reset --hard HEAD@{1}
```
💡 git reflog es tu salvavidas cuando algo se borra por accidente.

---
---
#### Alias
  Git nos permite crear alias, para ejecutar comandos largos y complejos de forma sencilla y eficaz.
  ```bash
      git config --global --alias.<palabra> '<comando>'
  ```
  La <palabra> es la palabra que vamos a identificar para el comando que es representado como <comando>

---

### Alias útiles

Crear alias personalizados:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --all"
```

---
---
### Git Tag

El comando `git tag` se utiliza para crear **etiquetas** en puntos específicos del historial de commits, normalmente para **marcar versiones** importantes (por ejemplo: `v1.0`, `v2.1`, etc.).

Estas etiquetas son útiles para:

- Identificar versiones estables de tu proyecto.
- Marcar lanzamientos (releases).
- Volver fácilmente a un punto específico del desarrollo.

---

#### 📌 Tipos de etiquetas

| Tipo            | Descripción |
|------------------|-------------|
| `lightweight`    | Es como un marcador simple a un commit. No tiene metadatos ni mensaje. |
| `annotated`      | Incluye información como nombre del autor, fecha, mensaje y firma opcional. Ideal para versiones públicas. |

---

#### 🛠️ Comandos útiles

##### Crear una etiqueta ligera:

```bash
git tag v1.0
```
##### Crear una etiqueta anotada:

```bash
git tag -a v1.0 -m "Versión 1.0 estable"
```
##### Ver todas las etiquetas
```bash
git tag
```
##### Ver detalles de una etiqueta anotada:

```bash
git show v1.0
```
##### Etiquetar un commit específico (por hash):

```bash
git tag -a v1.1 abc1234 -m "Versión 1.1 sobre commit específico"
```
#### Compartir etiquetas en GitHub
Por defecto, las etiquetas no se suben con `git push`. Para enviarlas:
```bash
git push origin v1.0        # Una etiqueta
git push origin --tags      # Todas las etiquetas
```
#### Eliminar etiquetas
- Localmente:
```bash
git tag -d v1.0
```
- En el repositorio remoto:
```bash
git push origin --delete tag v1.0
```
📝 **Consejo**: Usa etiquetas anotadas (-a) para versiones importantes. Facilitan el mantenimiento y seguimiento del proyecto.

---
---
### Ramas y fusión

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

### Resolución de conflictos durante un merge
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
### Comando `git diff`

El comando `git diff` se utiliza para **ver las diferencias** entre:

- Archivos modificados y el último commit
- Dos commits específicos
- Dos ramas
- Staging area y el directorio de trabajo

---

#### 🧪 Usos comunes

| Comando | Qué muestra |
|--------|--------------|
| `git diff` | Cambios entre el **directorio de trabajo** y el **staging area** |
| `git diff --staged` o `git diff --cached` | Cambios entre el **staging area** y el último commit |
| `git diff rama1 rama2` | Diferencias entre dos ramas |
| `git diff commit1 commit2` | Diferencias entre dos commits específicos |
| `git diff archivo.txt` | Diferencias de un archivo concreto respecto al último commit |

---

#### 💡 Ejemplo práctico

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

#### 🎨 Colores

    Por defecto, las diferencias están coloreadas para facilitar su lectura:
     - 🔴 Rojo → líneas eliminadas
     - 🟢 Verde → líneas añadidas
---
---
### Git Stash

El comando `git stash` te permite **guardar temporalmente cambios no confirmados** (modificados o no añadidos) y dejar tu directorio de trabajo limpio, sin perder esos cambios.

Es ideal cuando necesitas cambiar de rama rápidamente pero no quieres hacer commit aún.

---

####📦 Guardar cambios actuales

```bash
git stash
```
Esto guarda los cambios y revierte el directorio de trabajo al último commit.

    ✅ Incluye archivos modificados, pero no guarda archivos nuevos sin añadir (untracked) ni ignorados.
---
#### 📌 Opciones útiles

##### Guardar con mensaje:
```bash
git stash save "mensaje descriptivo"
```
##### Incluir archivos nuevos (`untracked`):
```bash
git stash -u
```
##### Ver todas las entradas guardadas:
```bash
git stash list
```
##### Ver detalles de un stash:
```bash
git stash show -p stash@{0}
```
#### 🔄 Recuperar cambios guardados

##### Aplicar el stash más reciente:
```bash
git stash apply
```
  `Los cambios se aplican pero el stash no se elimina.`
##### Aplicar y eliminar el stash (recomendado si ya no lo necesitas):

```bash
git stash pop
```
##### Aplicar un stash específico:
```bash
git stash apply stash@{1}
```
#### 🗑️ Eliminar stashes

##### Eliminar uno en específico:
```bash
git stash drop stash@{0}
```
##### Eliminar todos:
```bash
git stash clear
```
---
---

### Trabajo con repositorios remotos

Clonar un repositorio:

```bash
git clone https://github.com/usuario/repositorio.git
```

Añadir un remoto:

```bash
git remote add origin https://github.com/usuario/repositorio.git
```

Enviar cambios:

```bash
git push origin main
```

Obtener cambios:

```bash
git pull origin main
```
---
---
### Comandos avanzados
Estos comandos te permiten manipular el historial, depurar errores y mejorar el flujo de trabajo en equipos grandes o proyectos complejos.

`git cherry-pick`

Aplica un commit específico de otra rama en tu rama actual.

```bash
git cherry-pick <hash-del-commit>
```
💡 Ideal para aplicar correcciones sin fusionar ramas completas.

--- 
\
`git bisect`

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

---
\
`git rebase`

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
`⚠️ Evita rebase en ramas compartidas públicamente.`
---

---
## GitHub 

![imagen github](imagenes/github.png)

👉 [Sitio oficial de GitHub](https://github.com/)

---

### ¿Qué es GitHub?

GitHub es una plataforma basada en la web que permite alojar proyectos Git de forma remota. Facilita el trabajo colaborativo, control de versiones, revisión de código y despliegues automáticos.

---

### Documentación

📚 [Documentación oficial en español](https://docs.github.com/es)

- [Crear repositorio](https://docs.github.com/es/get-started/quickstart/create-a-repo)
- [Crear pull request](https://docs.github.com/es/pull-requests)
- [Gestionar ramas](https://docs.github.com/es/branches)

---

### Consejos de uso

- Usa `README.md` para describir tu proyecto.
- Incluye una licencia si es de código abierto.
- Usa `.gitignore` para evitar archivos innecesarios.
- Utiliza *issues* para seguimiento de tareas y errores.
- Emplea *pull requests* para revisión de código.
- Activa *GitHub Actions* para automatizar pruebas o despliegues.

---
