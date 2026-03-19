# Comandos y consejos para conocer Git y GitHub

## Índice
- [Git](#git)
  - [Instalación](#instalación)
  - [Conceptos importantes](#conceptos-importantes)
  - [Archivo .gitignore](#archivo-gitignore)
  - [Comandos de ayuda](#comandos-de-ayuda)
  - [Comandos para configuración](#comandos-para-configuración)
  - [Comandos imprescindibles](#comandos-imprescindibles)
  - [Alias](#alias)
  - [Git Tag](#git-tag)
  - [Ramas y fusión](#ramas-y-fusión)
  - [Resolución de conflictos](#resolución-de-conflictos-durante-un-merge)
  - [Comando git diff](#comando-git-diff)
  - [Git Stash](#git-stash)
  - [Trabajo con repositorios remotos](#trabajo-con-repositorios-remotos)
  - [Comandos avanzados](#comandos-avanzados)
  - [Submódulos](#submódulos)
  - [Git Hooks](#git-hooks)
  - [Tips adicionales](#tips-adicionales)
- [GitHub](#git-hub)
  - [¿Qué es GitHub?](#qué-es-github)
  - [Conceptos clave](#conceptos-clave)
  - [Documentación](#documentación)
  - [Consejos de uso](#consejos-de-uso)
  - [Markdown](#markdown)
  - [¿Cómo hacer un Pull Request?](#cómo-hacer-un-pull-request)
  - [Consejos para buenos Pull Requests](#consejos-para-buenos-pull-requests)
- [Herramientas para Git y GitHub](#herramientas-para-git-y-github)
- [Buenas prácticas](#buenas-prácticas)

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

 
 📁 **¿Qué se puede ignorar?**

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

**Caracteres especiales que puedes usar**
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

 **Configuración básica:**

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

**Configuración avanzada:**

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

> ✅ **Consejo**: Los mensajes de commit deben ser claros, concisos y en infinitivo (ej. `Añadir función de login`).

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
🔁 **Recuperar cambios perdidos: `git reflog`**

Si cometes un error con `reset`, `checkout` o `rebase`, puedes recuperar tu trabajo con:

```bash
git reflog
``` 
Este comando muestra un historial interno de Git con todos los movimientos del repositorio (commits, cambios de rama, etc.), incluso si no aparecen en `git log`.

Ejemplo para restaurar un estado anterior:

```bash
git reset --hard HEAD@{1}
```
> 💡 git reflog es tu salvavidas cuando algo se borra por accidente.

---

### Alias
  Git nos permite crear alias, para ejecutar comandos largos y complejos de forma sencilla y eficaz.
  ```bash
      git config --global --alias.<palabra> '<comando>'
  ```
  La <palabra> es la palabra que vamos a identificar para el comando que es representado como <comando>


**Alias útiles**

Crear alias personalizados:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --all"
```

---
### Git Tag

El comando `git tag` se utiliza para crear **etiquetas** en puntos específicos del historial de commits, normalmente para **marcar versiones** importantes (por ejemplo: `v1.0`, `v2.1`, etc.).

Estas etiquetas son útiles para:

- Identificar versiones estables de tu proyecto.
- Marcar lanzamientos (releases).
- Volver fácilmente a un punto específico del desarrollo.

---

📌 **Tipos de etiquetas**

| Tipo            | Descripción |
|------------------|-------------|
| `lightweight`    | Es como un marcador simple a un commit. No tiene metadatos ni mensaje. |
| `annotated`      | Incluye información como nombre del autor, fecha, mensaje y firma opcional. Ideal para versiones públicas. |


**Comandos útiles:**

Crear una etiqueta ligera:

```bash
git tag v1.0
```
Crear una etiqueta anotada:

```bash
git tag -a v1.0 -m "Versión 1.0 estable"
```
Ver todas las etiquetas:
```bash
git tag
```
Ver detalles de una etiqueta anotada:

```bash
git show v1.0
```
Etiquetar un commit específico (por hash):

```bash
git tag -a v1.1 abc1234 -m "Versión 1.1 sobre commit específico"
```

Compartir etiquetas:
Por defecto, las etiquetas no se suben con `git push`. Para enviarlas:
```bash
git push origin v1.0        # Una etiqueta
git push origin --tags      # Todas las etiquetas
```
Eliminar etiquetas:
- Localmente:
```bash
git tag -d v1.0
```
- En el repositorio remoto:
```bash
git push origin --delete tag v1.0
```
> 📝 **Consejo**: Usa etiquetas anotadas (-a) para versiones importantes. Facilitan el mantenimiento y seguimiento del proyecto.

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

🧪 **Usos comunes:**

| Comando | Qué muestra |
|--------|--------------|
| `git diff` | Cambios entre el **directorio de trabajo** y el **staging area** |
| `git diff --staged` o `git diff --cached` | Cambios entre el **staging area** y el último commit |
| `git diff rama1 rama2` | Diferencias entre dos ramas |
| `git diff commit1 commit2` | Diferencias entre dos commits específicos |
| `git diff archivo.txt` | Diferencias de un archivo concreto respecto al último commit |


💡 **Ejemplo práctico:**

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
### Git Stash

El comando `git stash` te permite **guardar temporalmente cambios no confirmados** (modificados o no añadidos) y dejar tu directorio de trabajo limpio, sin perder esos cambios.

Es ideal cuando necesitas cambiar de rama rápidamente pero no quieres hacer commit aún.

📦 **Guardar cambios actuales:**

```bash
git stash
```
Esto guarda los cambios y revierte el directorio de trabajo al último commit.

> ✅ Incluye archivos modificados, pero no guarda archivos nuevos sin añadir (untracked) ni ignorados.
    
📌 **Opciones útiles:**

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

🔄 **Recuperar cambios guardados**

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
🗑️ **Eliminar stashes**

Eliminar uno en específico:
```bash
git stash drop stash@{0}
```

Eliminar todos:
```bash
git stash clear
```

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

### Comandos avanzados
Estos comandos te permiten manipular el historial, depurar errores y mejorar el flujo de trabajo en equipos grandes o proyectos complejos.

`git cherry-pick`

Aplica un commit específico de otra rama en tu rama actual.

```bash
git cherry-pick <hash-del-commit>
```
> 💡 Ideal para aplicar correcciones sin fusionar ramas completas.

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
> ⚠️ Evita rebase en ramas compartidas públicamente.

\
`git commit --amend`

Corrige el último commit, ya sea para cambiar el mensaje o añadir archivos olvidados.
```bash
git add archivo-olvidado
git commit --amend
```
---
\
`git clean`

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

---
### Submódulos
Los submódulos te permiten incluir repositorios Git dentro de otro, útil si trabajas con dependencias internas o microservicios.

Añadir un submódulo:
```bash
git submodule add https://github.com/usuario/proyecto-libreria.git ruta/
```

Clonar un repositorio con submódulos:
```bash
git clone --recurse-submodules <url>
```

Inicializar y actualizar submódulos:
```bash
git submodule init
git submodule update
```

Actualizar submódulos a la última versión del remoto:
```bash
git submodule update --remote
```
---

### Git Hooks

Los hooks son scripts que se ejecutan automáticamente antes o después de acciones como commit, push o merge.

Se guardan en `.git/hooks/`, y puedes personalizarlos para:
- Ejecutar linters
- Validar mensajes de commit
- Correr tests antes del push
Ejemplo: `pre-commit`
```bash
#!/bin/sh
npm run lint
```
Actívalo copiando el script en `.git/hooks/pre-commit` y dándole permisos:

```bash
chmod +x .git/hooks/pre-commit
```

>💡 Herramientas como [Husky](https://typicode.github.io/husky/) te ayudan a gestionar hooks en proyectos modernos.

---

### Tips adicionales

- Usa git status y git log constantemente.

- Evita commits grandes y sin sentido como "Cambios", "update", etc.

- Crea ramas por cada feature o bugfix.

- Usa git stash para interrumpir tareas sin perder el trabajo.

- Aprovecha alias para ahorrar tiempo.

  
---

## GitHub

![imagen github](imagenes/github.png)

👉 [Sitio oficial de GitHub](https://github.com/)

---

### ¿Qué es GitHub?

GitHub es una plataforma web que permite alojar proyectos utilizando Git como sistema de control de versiones. Su enfoque principal es facilitar el desarrollo colaborativo y la gestión de código fuente.

Gracias a GitHub, puedes:

- Guardar el historial de versiones del código.

- Trabajar en equipo en ramas independientes.

- Revisar, aprobar y fusionar cambios de otros colaboradores.

- Automatizar tareas con flujos de trabajo (GitHub Actions).

- Documentar proyectos con README.md, wikis y Markdown.

---
### Conceptos clave

📁 **Repositorio**

Un **repositorio** es como una carpeta donde se guarda todo el proyecto: código, historial de cambios, documentación, imágenes, etc.
👉 [Crear un repositorio](https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories)

🌿 **Rama (Branch)**

Una **rama** permite desarrollar nuevas funcionalidades sin afectar el código principal. La rama por defecto suele llamarse main o master.
👉 [Gestionar ramas](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)

🆚 **Pull Request (PR)**

Un **pull request** es una solicitud para que tus cambios sean revisados y fusionados en otra rama (normalmente main). Es el centro del trabajo colaborativo.
👉 [Crear un pull request](https://docs.github.com/es/pull-requests)

🔍 **Code Review**

Es el proceso de revisar los cambios hechos en un PR. Puedes comentar línea por línea, sugerir mejoras o aprobar directamente los cambios.

🐞 **Issues**

Un **issue** es una tarea o reporte, como un bug, sugerencia o nota. Puedes asignarlos, etiquetarlos y agruparlos en milestones.

⚙️ **GitHub Actions**

**GitHub Actions** permite automatizar procesos como pruebas, despliegues o formatos del código, directamente desde GitHub.

👉 [GitHub Actions](https://docs.github.com/es/actions)

🧾 **README.md**

Es el archivo principal de presentación de un proyecto. Se escribe en Markdown y debe explicar:

  - Qué hace el proyecto.

  - Cómo instalarlo y usarlo.

  - Créditos, licencia y enlaces útiles.

--- 

### Documentación


| Tema | Enlace |
|--------|--------------|
|Introducción a GitHub| [Ver enlace](https://docs.github.com/es/get-started)|
|Crear repositorios| [Ver enlace](https://docs.github.com/es/repositories/creating-and-managing-repositories/quickstart-for-repositories)|
|Pull Requests| [Ver enlace](https://docs.github.com/es/pull-requests)|
|Ramas| [Ver enlace](https://docs.github.com/es/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)|
|GitHub Actions| [Ver enlace](https://docs.github.com/es/actions)|
|Seguridad y dependencias| [Ver enlace](https://docs.github.com/es/code-security)|

---

### Consejos de uso

- Crea un archivo `README.md` claro, usando Markdown, para describir el propósito y uso del proyecto.
- Usa `.gitignore` para excluir archivos innecesarios del repositorio.
- Añade una licencia (`LICENSE`) si es código abierto.
- Usa `issues` y `milestones` para organizar tareas.
- Usa `projects` (Kanban) para gestionar tareas visualmente.
- Protege ramas importantes con políticas de revisión.
- Configura *GitHub Actions* para CI/CD (pruebas, build, deploy).

---
### Markdown

GitHub usa [Markdown](https://guides.github.com/features/mastering-markdown/) para dar formato a textos. Se usa en archivos `README.md`, issues, wikis, comentarios y documentación.

👉[Documentación GitHub escritura Markdown](https://docs.github.com/es/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)


**Ejemplos útiles de sintaxis Markdown:**

| Elemento | Sintaxis | Ejemplo |
|---------|----------|--------|
| Título | `#`, `##`, ... | `## Título de nivel 2` |
| Negrita | `**texto**` | **negrita** |
| Cursiva | `*texto*` | *cursiva* |
| Lista con viñetas | `-`, `*` | `- Elemento` |
| Lista numerada | `1.` | `1. Paso uno` |
| Enlace | `[texto](url)` | [GitHub](https://github.com) |
| Imagen | `![alt](url)` | `![logo](logo.png)` |
| Código en línea | `` `código` `` | `git status` |
| Bloque de código | <pre>```bash<br>comando<br>```</pre> | ```bash git commit -m "mensaje" ``` |
| Cita | `> texto` | > Esto es una cita |
| Línea horizontal | `---` | --- |

🧪 **Consejos Markdown:**

- Usa títulos para estructurar bien tus archivos `README.md`.
- Añade capturas con `![nombre](ruta.png)` para guías visuales.
- Usa bloques de código con lenguaje para resaltar (ej. ` ```python `).
- Añade tablas para resumir información de forma clara.

---

### ¿Cómo hacer un Pull Request?

 1. **Haz un fork del repositorio (si no tienes acceso directo):**

  Ve al repositorio y haz clic en `Fork`.

 2. **Clona tu fork en tu máquina local:**

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

 3. **Crea una nueva rama para trabajar:**

  ```bash
  git checkout -b mi-nueva-feature
  ```
  4. **Haz tus cambios, guarda y haz commit:**

  ```bash
  git add .
  git commit -m "Añadir nueva funcionalidad"
  ```

   5. **Envía los cambios a tu repositorio en GitHub:**

  ```bash
  git push origin mi-nueva-feature
  ```

  6. **Abre el Pull Request desde GitHub:**

  - Ve a tu repositorio en GitHub.

  - Haz clic en el botón Compare & pull request.

  - Escribe un título y una descripción clara del cambio.

  - Haz clic en Create pull request.

---


### Consejos para buenos Pull Requests

- Sé descriptivo: explica qué problema soluciona y cómo.

- Mantén los cambios enfocados en una sola cosa.

- Usa mensajes de commit claros.

- Asegúrate de que el código compile y pase las pruebas.
---

### Licencias
❓ **¿Qué es una licencia de software?**

Una **licencia de software** indica lo que otros pueden (y no pueden) hacer con tu código. Establece las condiciones bajo las cuales compartes tu proyecto, incluyendo:

- Si pueden usarlo comercialmente  
- Si deben citar al autor  
- Si pueden modificarlo  
- Si deben compartir las mejoras  
- Si el software se ofrece "tal cual", sin garantías  

> ⚠️ Sin una licencia, **por defecto nadie puede reutilizar tu código legalmente**, ni siquiera copiarlo.

🔐 **Licencias comunes en GitHub:**

| Licencia         | Uso comercial | Modificaciones | Distribución | Requiere atribución | Requiere código abierto |
|------------------|----------------|----------------|--------------|----------------------|--------------------------|
| **MIT**          | ✅ Sí           | ✅ Sí           | ✅ Sí         | ✅ Sí                 | ❌ No                    |
| **GPLv3**        | ✅ Sí           | ✅ Sí           | ✅ Sí         | ✅ Sí                 | ✅ Sí (mismo tipo)       |
| **Apache 2.0**   | ✅ Sí           | ✅ Sí           | ✅ Sí         | ✅ Sí                 | ❌ No                    |
| **BSD 3-Clause** | ✅ Sí           | ✅ Sí           | ✅ Sí         | ✅ Sí                 | ❌ No                    |
| **CC0**          | ✅ Sí           | ✅ Sí           | ✅ Sí         | ❌ No                 | ❌ No                    |

> Puedes consultar una comparación más completa en [choosealicense.com](https://choosealicense.com/)


➕ **Cómo añadir una licencia a tu repositorio:**

1. Ve a la raíz del repositorio en GitHub.
2. Haz clic en **"Add file"** > **"Create new file"**.
3. Nombra el archivo como: `LICENSE` o `LICENSE.txt`.
4. Puedes:
   - Escribir la licencia tú mismo (copiándola desde [choosealicense.com](https://choosealicense.com)).
   - O usar el asistente de GitHub:
     - Ve a la página principal del repositorio.
     - Haz clic en **"Add a license"** (si está disponible).
     - Elige una licencia y GitHub la generará automáticamente.


 📘 **Recursos útiles:**

- 🔗 [Elegir una licencia – choosealicense.com](https://choosealicense.com/)
- 📜 [Licencias disponibles en GitHub](https://docs.github.com/es/github/creating-cloning-and-archiving-repositories/licensing-a-repository)
- 📄 [Texto completo de la MIT License](https://opensource.org/licenses/MIT)
- 🏛️ [Creative Commons (para contenido, no software)](https://creativecommons.org/)

---
  
##  Herramientas para Git y GitHub

Hay muchas herramientas que pueden ayudarte a trabajar de forma más eficiente con Git y GitHub. Aquí te dejo una selección recomendada:

### 🖥️ GitHub Desktop

- URL: [https://desktop.github.com](https://desktop.github.com)

- Aplicación oficial de GitHub para trabajar con Git desde una interfaz gráfica.

- Ideal para principiantes o quienes prefieren evitar la línea de comandos.

- Permite hacer commits, ramas, merges y pull requests visualmente.

### 🧠 GitKraken

- URL: [https://www.gitkraken.com](https://www.gitkraken.com) 

- Cliente Git con una interfaz visual moderna y potente.

- Ideal para equipos y trabajo en ramas complejas.

- Incluye funcionalidades para GitHub, GitLab, Bitbucket y más.

### ⚙️ Sourcetree

- URL: [https://www.sourcetreeapp.com](https://www.sourcetreeapp.com) 

- Cliente Git gratuito desarrollado por Atlassian.

- Permite visualizar commits, ramas y conflictos de forma clara.

### 💻 Oh My Zsh + Plugins de Git

- URL: [https://ohmyz.sh](https://ohmyz.sh)
- Framework para mejorar tu terminal con Zsh.

- Incluye temas y plugins para trabajar más cómodamente con Git (como mostrar rama actual, estado, etc.).

### 📦 GitHub CLI

```bash
gh pr create
gh repo clone user/repo
```
- URL: [https://cli.github.com](https://cli.github.com)

- Interfaz de línea de comandos oficial de GitHub.

- Permite gestionar issues, repos, pull requests y más desde el terminal.

### 🧪 Repositorios para practicar

  - Git-it: [https://github.com/jlord/git-it-electron](https://github.com/jlord/git-it-electron) 
  Una app interactiva para aprender Git y GitHub paso a paso.

  - Learn Git Branching: [https://learngitbranching.js.org/](https://learngitbranching.js.org/)  
  Simulador visual para entender ramas y merges de forma práctica.

----


## Buenas prácticas
  ### Git
  1. **Organizar repositorios**: Crear repositorios independientes para distintos proyectos.
  2. **Utiliza ramas**: Trabaja en ramas separadas para desarrollar nueva funcionalidad, corregir errores o experimentar con tu proyecto.
  3. **Haz commits atómicos**: Cada `commit` debe representar una única unidad de cambio lógico, para facilitar la revisión y la correcciones en los cambios.
  4. **Escribe mensajes de commit claros y significativos**.
  5. **Mantén un historial limpio**: Evita enviar cambios innecesarios o conflictos, y usa la fusión de cambiosade(merge)cuadamente.
  6. **Usa etiquetas**: Para marcar puntos importantes en el proyecto, como versiones.
  7. **Haz revisiónes de código**: Antes de integrar el código en la rama principal, realiza una revisión del mismo.
  8. **Resuelve conflictos**: Esto se aplica en cualquier caso, pero sobretodo a la hora fusionar ramas.
  9. **Mantén copias de seguridad y haz push con regularidad**.
  10. **Continua aprendiendo**.
  
  ### GitHub
  1. **Personaliza tú perfil**.
  2. **Crea un README**: Debe de proporcionar una descripción general del proyecto, instrucciones de instalación y configuración, información sobre cómo contribuir, y cualquier otra información relevante. 
  3. **Licencia de software**: Añade una licencia a un repositorio para informar a otros usuarios de como lo pueden utilizar y qué limitaciones posee.
  4. **Usa Pull Request**: Propon cambios de un repositorio a traves de Pull Request, en vez de modificar directamente la rama principal directamente.
  5. **Revisión de código**: Revisar el código antes de funsionarlo mediante un Pull Request.
  6. **Utiliza Issues**: Emplea el sistema de `Issues`  de GitHub para rastrear y gestionar errores, mejoras y otras tareas relacionadas con el proyecto.
  7.  **Etiquetas y Milestones**: Usa `etiquetas` y `milestones` en `Issues` y `Pull Request` para categorizar y priorizar el trabajo.
  8. **Documentación**: Mantén la documentación actualizada.
  9. **Comparte y colabora**: Crea tus propios proyectos de código abierto y colabora en otros.
  10. **Continua aprendiendo**.

---
---
