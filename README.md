# Comandos y consejos para conocer Git y GitHub

## Índice
- [Git](#git)
  - [Instalación](#instalación)
  - [Conceptos importantes](#conceptos-importantes)
  - [Comandos de ayuda](#comandos-de-ayuda)
  - [Comandos para configuración](#comandos-para-configuración)
  - [Comandos imprescindibles](#comandos-imprescindibles)
  - [Alias útiles](#alias-útiles)
  - [Ramas y fusión](#ramas-y-fusión)
  - [Trabajo con repositorios remotos](#trabajo-con-repositorios-remotos)
- [GitHub](#github)
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


### Ramas y fusión

Crear y cambiar de rama:

```bash
git branch <nombre-rama>
git checkout <nombre-rama>
```

Crear y cambiar en un solo paso:

```bash
git checkout -b <nombre-rama>
```

Fusionar ramas:

```bash
git merge <nombre-rama>
```

Eliminar ramas:

```bash
git branch -d <nombre-rama>
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
